import React from "react";

const Ad = () => {
  return (
    <div className="ad-main-div">
      <h1 className="ad-title">What's Hot ?</h1>
      <div className="ad-div">
        <div className="ad-div-div">
          <img src="orange2.jfif" className="ad-img"></img>
        </div>
        <div className="ad-div-div">
          <img src="orange1.jfif" className="ad-img"></img>
        </div>
        <div className="ad-div-div">
          <img src="orange3.jfif" className="ad-img"></img>
        </div>
      </div>
      <div className="ad-badge">
        <h3>SPOT ON HEELS FROM DRIPSTEP</h3>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Ad;
