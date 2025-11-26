// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// 🧭 Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SpecialMenu from "./components/SpecialMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Room from "./components/Room";
import OrderNow from "./components/OrderNow";

// 🧑‍💼 Admin Components
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🌐 Main Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/order" element={<OrderNow />} />

        {/* 👨‍💼 Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* 🚫 Fallback Route */}
        <Route
          path="*"
          element={
            <div className="text-center mt-5">
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
