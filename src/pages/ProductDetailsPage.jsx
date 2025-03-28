import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found!</h2>;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    navigate("/cart");
  };

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
