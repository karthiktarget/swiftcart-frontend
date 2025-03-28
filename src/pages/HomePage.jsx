import React from "react";
import "../styles/HomePage.css";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
import promotion1 from "../assets/promotion1.webp";
import promotion2 from "../assets/promotion2.png";
import promotion3 from "../assets/promotion3.webp";
import iphone from "../assets/iphone.jpeg";
import tshirt from "../assets/tshirt.avif";
import headphones from "../assets/headphones.jpeg";
import laptop from "../assets/laptop.avif";
import charger from "../assets/charger.jpeg";
import watch from "../assets/watch.jpeg";
const HomePage = () => {
  // const categories = [
  //   "Electronics",
  //   "Clothing",
  //   "Books",
  //   "Accessories",
  //   "Shoes",
  //   "Beauty",
  //   "Toys",
  // ];

  const products = [
    {
      id: 1,
      name: "Apple iphone 14",
      price: "$999",
      image: iphone,
    },
    {
      id: 2,
      name: "T-shirt",
      price: "$19",
      image: tshirt,
    },
    {
      id: 3,
      name: "Headphones",
      price: "$99",
      image: headphones,
    },
    {
      id: 4,
      name: "Laptop",
      price: "$1299",
      image: laptop,
    },
    {
      id: 5,
      name: "Charger",
      price: "$129",
      image: charger,
    },
    {
      id: 6,
      name: "Watch",
      price: "$99",
      image: watch,
    },
  ];

  return (
    <div className="homepage">
      {/* Categories Section */}
      <section className="categories_home">
        <div className="categories-grid_home">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-row-1">
          <img src={promotion1} alt="Hero Banner 1" />
        </div>
        <div className="hero-row-2">
          <img src={promotion2} alt="Hero Banner 2" />
          <img src={promotion3} alt="Hero Banner 3" />
        </div>
      </div>

      {/* Featured Products */}
      <section className="products">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
