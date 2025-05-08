import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ProductData from "./ProductData";
import Category from "./components/Category";
import Ad from "./Ad";

function App() {
  const [count, setCount] = useState(0);

  const Data = ProductData.map((items) => {
    return <Card key={items.id} items={items} />;
  });

  return (
    <>
      <Header />
      <Hero />
      <div className="title">
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
  );
}

export default App;
