import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <main className="main">
      <div className="header">
        <div className="img--div">
          <img src="logo.png" className="header--img"></img>
        </div>
        <div className="list-div">
          <ul className="header--ul">
            <div className="menu-category">
              <button
                className="list1"
                onClick={() => handleDropdownToggle("men")}
              >
                Men
              </button>
              {activeDropdown === "men" && (
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Shirts</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shorts & Jeans</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shirts</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">T-Shirts & Polo</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Originals</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">TrackSuits</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Football Jersey</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Swimwear</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Hoodies & Jackets</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="menu-category">
              <button
                className="list2"
                onClick={() => handleDropdownToggle("women")}
              >
                Women
              </button>
              {activeDropdown === "women" && (
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">T-shirts & Tops</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shorts</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Tights & Leggings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Sports Bras</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Skirts & Dresses</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Originals</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Joggeres & Track Pants</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Swimwear</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Hoodies & Jackets</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">DripStep Heels</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="menu-category">
              <button
                className="list3"
                onClick={() => handleDropdownToggle("kids")}
              >
                Kids
              </button>
              {activeDropdown === "kids" && (
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Toys</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Shoes</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
        <div className="search--div">
          <div className="search--input">
            <input type="text" placeholder="search" className="input"></input>
          </div>
          <div className="search--icon">
            <FaSearch />
          </div>
          <div className="search--heart">
            <CiHeart />
          </div>
          <div className="search--cart">
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </main>
  );
}