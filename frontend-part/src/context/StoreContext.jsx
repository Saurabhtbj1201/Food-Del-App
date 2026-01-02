import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context create
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  // 🛒 Cart items (object form me)
  const [cartItems, setCartItems] = useState({});

  // 🌐 Backend URL
  const url = "http://localhost:4000";

  // 🔐 Token state
  const [token, setToken] = useState("");

  // 🍔 Food list
  const [food_list, setFoodList] = useState([]);

  // ➕ ADD TO CART (safe logic)
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // 👈 undefined protection
    }));

    // Backend call only if logged in
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // ➖ REMOVE FROM CART (CRASH FIX)
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      // Agar item hi nahi hai to kuch mat karo
      if (!prev[itemId]) return prev;

      const updated = { ...prev };
      updated[itemId] -= 1;

      // Quantity 0 ho jaye to item delete
      if (updated[itemId] <= 0) {
        delete updated[itemId];
      }

      return updated;
    });

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // 💰 TOTAL CART AMOUNT (safe from undefined)
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      const itemInfo = food_list.find(
        (product) => product._id === item
      );

      // 👇 itemInfo undefined na ho
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // 🍽 Fetch food list
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data || []); // 👈 safety
  };

  // 🛒 Load cart from backend
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData || {}); // 👈 safety
  };

  // 🔄 Initial load
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        const savedToken = localStorage.getItem("token");
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  // 📦 Context values
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;