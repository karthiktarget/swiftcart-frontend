import React from "react";
import { Link } from "react-router-dom";
import "../styles/CategoryPage.css";
import img1 from "../assets/mobile_and_computer.jpeg";
import img2 from "../assets/TV_Appliances_Electronics.jpeg";
import img3 from "../assets/men_fashion.jpeg";
import img4 from "../assets/women_fashion.jpeg";
import img5 from "../assets/kid_fashion.jpeg";
import img6 from "../assets/Home_Kitchen_Pets.jpeg";
import img7 from "../assets/beauty.jpg";
import img8 from "../assets/pharmacy.jpeg";
import img9 from "../assets/grocery.jpeg";
import img10 from "../assets/sports_fitness.jpeg";
import img11 from "../assets/bags_laggage.jpeg";
import img12 from "../assets/baby_products.webp";
import img13 from "../assets/cars_motorbike.jpeg";
import img14 from "../assets/books.jpeg";
import img15 from "../assets/movies_games.jpeg";
import img16 from "../assets/footwear.jpeg";
import img17 from "../assets/fitness.jpg";
import img18 from "../assets/jwellery.jpeg";
import img19 from "../assets/music.jpeg";
import img20 from "../assets/videogames.jpeg";
import img21 from "../assets/tools.jpeg";

const categories = [
  { name: "Mobiles, Computers", img: img1 },
  { name: "TV, Appliances, Electronics", img: img2 },
  { name: "Men's Fashion", img: img3 },
  { name: "Women's Fashion", img: img4 },
  { name: "Kid's Fashion", img: img5 },
  { name: "Home, Kitchen, Pets", img: img6 },
  { name: "Beauty", img: img7 },
  { name: "Pharmacy", img: img8 },
  { name: "Grocery", img: img9 },
  { name: "Sports", img: img10 },
  { name: "Bags, Luggage", img: img11 },
  { name: "Toys, Baby Products", img: img12 },
  { name: "Car, Motorbike, Industrial", img: img13 },
  { name: "Books", img: img14 },
  { name: "Movies", img: img15 },
  { name: "Footwear", img: img16 },
  { name: "Fitness", img: img17 },
  { name: "Jwellery", img: img18 },
  { name: "Music", img: img19 },
  { name: "Video Games", img: img20 },
  { name: "Tools", img: img21 }
];
const CategoryPage = () => {
  return (
    <div className="category-page-container">
      <h1>What are you shopping for today?</h1>
      <div className="category-grid-container">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name.toLowerCase()}`}
            className="category-page-card"
            style={{ textDecoration: "none" }}
          >
            <img src={category.img} alt={category.name} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
