import React from "react";
import { useInView } from "react-intersection-observer";

const Ad = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="ad-main-div">
      <h1 className="ad-title">What's Hot ?</h1>
      <div className="ad-div" ref={ref}>
        {["orange2.jfif", "orange1.jfif", "orange3.jfif"].map((img, index) => (
          <div
            className={`ad-div-div slide-in ${inView ? "show" : ""}`}
            key={index}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <img src={img} className="ad-img"></img>
          </div>
        ))}
      </div>
      <div className="ad-badge">
        <h3>SPOT ON HEELS FROM DRIPSTEP</h3>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Ad;
