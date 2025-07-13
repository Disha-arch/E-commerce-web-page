import React, { useEffect, useState } from "react";
import { ShoesData, ClothingData, AccessoriesData } from "data/Data";
import { IoColorFill } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setSelectedCategory("Shoes");
  }, []); // [] : dependencies

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <div className="main--div">
      <div className="category-title" data-aos="fade-up">
        <h1 className="category-heading">Shop By category</h1>
      </div>

      <div className="category-button">
        <button
          className="buttons"
          onClick={() => setSelectedCategory("Shoes")}
        >
          <span>Shoes</span>
        </button>
        <button
          className="buttons"
          onClick={() => setSelectedCategory("Clothing")}
        >
          <span>Clothing</span>
        </button>
        <button
          className="buttons"
          onClick={() => setSelectedCategory("Accessories")}
        >
          <span>Accessories</span>
        </button>
      </div>
      <div className="list-item-1" data-aos="zoom-in">
        {selectedCategory === "Shoes" &&
          ShoesData.map((items) => (
            <div className="div" key={items.id}>
              <img className="item-img" src={items.coverImg}></img>
              <h3>{items.heading}</h3>
              <p className="second-para">{items.underHeading}</p>
            </div>
          ))}
        {selectedCategory === "Clothing" &&
          ClothingData.map((items) => (
            <div className="div" key={items.id}>
              <img className="item-img" src={items.coverImg}></img>
              <h3>{items.heading}</h3>
              <p className="second-para">{items.underHeading}</p>
            </div>
          ))}

        {selectedCategory === "Accessories" &&
          AccessoriesData.map((items) => (
            <div className="div" key={items.id}>
              <img className="item-img" src={items.coverImg}></img>
              <h3>{items.heading}</h3>
              <p className="second-para">{items.underHeading}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
