import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ProductData from "./data/ProductData";
import Category from "./components/Category";
import Ad from "./Ad.jsx";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductDisplay from './components/ProductDisplay';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  const [count, setCount] = useState(0);

  const Data = ProductData.map((items) => {
    return <Card key={items.id} items={items} />;
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="title" data-aos="fade-up">
                <h1 className="heading">Shop by Latest</h1>
              </div>
              <section>{Data}</section>

              <div>
                <Category />
              </div>

              <section className="ad-section">
                <Ad />
              </section>
            </>
          }
        />
        <Route
          path="/product-display"
          element={
            <div>
              <ProductDisplay />
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
