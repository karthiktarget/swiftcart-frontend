import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../context/ProductContext";
import "../styles/CategoryProduct.css";

const CategoryProduct = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCategory(categoryName, currentPage);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    loadProducts();
  }, [categoryName, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="category-page">
      <h2 className="category-page__title">
        {categoryName
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())}
      </h2>
      {products.length === 0 ? (
        <p className="category-page__message">
          No products found in this category.
        </p>
      ) : (
        <>
          <div className="category-page__grid">
            {products.map((product) => (
              <div className="category-page__card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="category-page__image"
                />
                <h4 className="category-page__product-title">
                  {product.title}
                </h4>
                <p className="category-page__price">${product.price}</p>
              </div>
            ))}
          </div>
          <div className="category-page__pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <span>Page {currentPage + 1}</span>
            <button onClick={handleNextPage} disabled={products.length < 20}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryProduct;
