import React from "react";
import mockOrders from "../data/mockOrders";
import "../styles/OrdersPage.css";

const OrdersPage = () => {
  return (
    <div className="orders-container">
      <h1>Your Orders</h1>

      {mockOrders.length === 0 ? (
        <h2>You haven't placed any orders yet!</h2>
      ) : (
        <div className="orders-list">
          {mockOrders.map((order) => (
            <div key={order.id} className="order-card">
              <h3>Order ID: {order.id}</h3>
              <p>Date: {order.date}</p>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    {product.quantity}x {product.name} - ${product.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <h4>Total: ${order.total.toFixed(2)}</h4>
              <button>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
