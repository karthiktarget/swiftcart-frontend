// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: +e.target.value },
                  })
                }
              />
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
