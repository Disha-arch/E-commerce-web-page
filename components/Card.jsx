import React from "react";
import { IoStar } from "react-icons/io5";
export default function Card(props) {
  const handleAddToCart = () => {
    alert(`${props.items.title} added to cart!`);
  };
  const handleAddToWishlist = () => {
    alert(`${props.items.title} added to wishlist!`);
  };
  return (
    <div className="container">
      <div className="product-card">
        <div>
          <img src={props.items.image} className="product-image" />
        </div>
        <h2 className="product-title">{props.items.title}</h2>
        <p className="product-price">${props.items.price}</p>
        <div className="product-rating">
          <IoStar className="rating-star" />
          <span className="rating-number">({props.items.rating}/5)</span>
        </div>
        <div className="product-buttons">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            add to cart
          </button>
          <button className="add-wishlist-btn" onClick={handleAddToWishlist}>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
