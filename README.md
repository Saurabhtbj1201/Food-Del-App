<div align="center">

# 🍕 Food-Del-App

### *Your Favorite Food, Delivered Hot & Fresh!*

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### 🚀 Quick Links

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ff0059?style=for-the-badge&logo=google-chrome&logoColor=white)](https://new-food-delivery-app.netlify.app/)
[![Admin Panel](https://img.shields.io/badge/Admin%20Panel-04b071?style=for-the-badge&logo=google-chrome&logoColor=white)](https://new-food-delivery-admin.netlify.app/)

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-contributing">Contributing</a>
</p>

</div>

---

## 🎯 About

**Food-Del-App** is a full-stack food delivery application built with the MERN stack. It provides a seamless experience for customers to browse restaurants, order food, and track deliveries in real-time. The application includes a customer-facing frontend, an admin panel for restaurant management, and a robust backend API.

---

## ✨ Features

### 🛒 Customer Features
- 🔐 **User Authentication** - Secure login/signup with JWT
- 🍽️ **Browse Menu** - Explore diverse food categories
- 🛍️ **Cart Management** - Add, remove, and modify items
- 💳 **Secure Checkout** - Multiple payment options
- 📦 **Order Tracking** - Real-time order status updates
- 📜 **Order History** - View past orders and reorder

### 👨‍💼 Admin Features
- ➕ **Add New Items** - Upload food items with images
- 📋 **Manage Menu** - Update or remove existing items
- 📊 **Order Management** - View and update order statuses
- 📈 **Dashboard** - Monitor sales and analytics

### 🔧 Technical Features
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **Secure** - JWT authentication and protected routes
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🌐 **RESTful API** - Well-structured backend architecture

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat) | UI Library |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) | Build Tool |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) | Styling |
| ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white&style=flat) | Navigation |

### Backend
| Technology | Purpose |
|-----------|---------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat) | Runtime Environment |
| ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat) | Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white&style=flat) | ODM |
| ![JWT](https://img.shields.io/badge/-JWT-000000?logo=json-web-tokens&logoColor=white&style=flat) | Authentication |

---

## 📁 Project Structure

```
Food-Del-App/
│
├── 📂 frontend-part/          # Customer-facing application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── context/          # React Context (State Management)
│   │   ├── assets/           # Images and static files
│   │   └── App.jsx           # Main app component
│   └── package.json
│
├── 📂 admin/                  # Admin panel
│   ├── src/
│   │   ├── components/       # Navbar, Sidebar
│   │   ├── pages/           # Add, List, Orders
│   │   └── App.jsx
│   └── package.json
│
└── 📂 backend-part/           # Backend API
    ├── controllers/          # Business logic
    ├── models/              # Database schemas
    ├── routes/              # API routes
    ├── middleware/          # Auth middleware
    ├── config/              # Database config
    ├── uploads/             # Uploaded images
    └── server.js            # Entry point
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- ![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?logo=node.js) 
- ![MongoDB](https://img.shields.io/badge/MongoDB-v4+-47A248?logo=mongodb)
- ![npm](https://img.shields.io/badge/npm-v6+-CB3837?logo=npm) or ![yarn](https://img.shields.io/badge/yarn-v1+-2C8EBB?logo=yarn)

### 📥 Clone the Repository

```bash
git clone https://github.com/Saurabhtbj1201/Food-Del-App.git
cd Food-Del-App
```

### 🔧 Backend Setup

```bash
# Navigate to backend directory
cd backend-part

# Install dependencies
npm install

# Create .env file and add your configuration
# PORT=4000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

# Start the server
npm start
```

### 🎨 Frontend Setup

```bash
# Navigate to frontend directory
cd frontend-part

# Install dependencies
npm install

# Start development server
npm run dev
```

### 👨‍💼 Admin Panel Setup

```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
*Beautiful landing page with featured dishes*

![Home Page](home.png)

### 🍽️ Menu
*Browse through categorized food items*

![Menu Page](menu.png)

### 🛒 Cart
*Easy cart management with checkout*

![Cart Page](cart.png)

### 👨‍💼 Admin Dashboard
*Manage orders and menu items efficiently*

![Admin Panel](admin.png)

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**! 🙏

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button at the top right of this page
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/yachana-chauhan/Food-Del-App.git
   cd Food-Del-App
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/Feature
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add some Feature"
   ```

6. **Push to Your Branch**
   ```bash
   git push origin feature/Feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click on "Pull Requests" and then "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail

### 📝 Contribution Guidelines

- 🐛 **Bug Reports**: Use the issue tracker to report bugs
- ✨ **Feature Requests**: Feel free to suggest new features
- 📖 **Documentation**: Help improve our docs
- 🧪 **Testing**: Add tests for new features
- 💻 **Code Quality**: Ensure your code is clean and well-commented

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Developer

<div align="center">

### Created by

<a href="https://github.com/yachana-chauhan">
  <img src="https://github.com/yachana-chauhan.png" width="100px" alt="Yachana Chauhan" style="border-radius: 50%"/>
</a>

### **Yachana Chauhan**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yachana-chauhan)

<a href="https://github.com/yachana-chauhan">
  <img src="https://img.shields.io/github/followers/yachana-chauhan?label=Follow&style=social" alt="GitHub Follow"/>
</a>

---

<div align="center">

### Made with ❤️ by Contributors

<a href="https://github.com/Saurabhtbj1201">
  <img src="https://github.com/Saurabhtbj1201.png" width="100px" alt="Saurabh Kumar" style="border-radius: 50%"/>
</a>

### **Saurabh Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saurabhtbj1201)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saurabhtbj1201)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/saurabhtbj1201)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/saurabhtbj1201)
[![Website](https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://gu-saurabh.site)

<a href="https://github.com/Saurabhtbj1201">
  <img src="https://img.shields.io/github/followers/Saurabhtbj1201?label=Follow&style=social" alt="GitHub Follow"/>
</a>

</div>


</div>

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

<div align="center">

### 🙏 Thank you for visiting!

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Saurabhtbj1201.Food-Del-App)

</div>

---

<div align="center">

**[⬆ Back to Top](#-food-del-app)**

</div>
