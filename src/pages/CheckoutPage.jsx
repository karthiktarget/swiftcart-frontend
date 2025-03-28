// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields!");
      return;
    }

    alert(`🎉 Order placed successfully! Thank you, ${formData.name}!`);

    // Clear cart
    dispatch({ type: "CLEAR_CART" });

    // Redirect to homepage or order confirmation page
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return <h2>Your cart is empty. Go shop first!</h2>;
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {/* Cart Summary */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Shipping and Payment Form */}
      <form onSubmit={handlePlaceOrder} className="checkout-form">
        <h2>Shipping Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <h2>Payment Method</h2>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
        </select>

        <button type="submit">Place Order 🚀</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
