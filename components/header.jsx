import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <main className="main">
      <div className="header">
        <div className="img--div">
          <img src="logo.png" className="header--img"></img>
        </div>
        <div className="list-div">
          <ul className="header--ul">
            <button className="list1">Men</button>
            <button className="list2">Women</button>
            <button className="list3">Kids</button>
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
