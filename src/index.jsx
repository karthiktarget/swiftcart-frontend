import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./styles/index.css";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>
);
