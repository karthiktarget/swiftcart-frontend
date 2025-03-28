import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginSignupPage from "./pages/LoginSignupPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import CustomerSupport from "./pages/CustomerSupport";
import CategoryPage from "./pages/CategoryPage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
