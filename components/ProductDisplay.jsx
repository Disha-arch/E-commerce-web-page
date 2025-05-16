import React from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { LiaRulerHorizontalSolid } from "react-icons/lia";
import { LuIndianRupee } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const [selectedSize, setSelectedSize] = React.useState(null);
  const location = useLocation();
  const item = location.state?.item;

  if (!item) return <p>No Product Selected.</p>;

  const clothingSizes = ["XS", "S", "M", "L", "XL", "2XL"];
  return (
    <div className="productDisplay-main-div">
      <div>
        <img src={item.image} className="pD-img"></img>
      </div>
      <div>
        <div className="product-type-rating-div">
          <span className="product-type">{item.type}</span>
          <div>
            {[...Array(5)].map((_, index) =>
              index < item.rating ? (
                <IoStar key={index} />
              ) : (
                <IoStarOutline key={index} />
              )
            )}
            <span className="rating-number">({item.rating}/5)</span>
          </div>
        </div>
        <div className="product-title-div">
          <h1>{item.title}</h1>
        </div>
        <div className="product-price-tax-div">
          <div className="product-price-div">
            <p>
              <LuIndianRupee />
              {item.price}
            </p>
          </div>
          <p className="tax-line">Inclusive of all taxes</p>
        </div>

        <div className="product-size-main-div">
          <div className="product-size-header-div">
            <h4>Sizes</h4>
            <LiaRulerHorizontalSolid style={{ marginLeft: "267px" }} />
            <a>Size-guide</a>
          </div>
          <div className="size-grid-div">
            {clothingSizes.map((size, index) => (
              <div
                key={index}
                className={`size-box ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="product-ADT-W-button-div">
          <button className="add-to-cart-button">ADD TO CART</button>
          <button className="wishlist-button">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
