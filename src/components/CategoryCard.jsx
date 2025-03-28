import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name.toLowerCase()}`} className="category-card">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
