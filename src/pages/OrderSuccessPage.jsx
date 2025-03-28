// src/pages/OrderSuccessPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/OrderSuccessPage.css";

const OrderSuccessPage = () => {
  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with SwiftCart!</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default OrderSuccessPage;
