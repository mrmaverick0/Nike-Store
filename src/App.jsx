import React from "react";
import Hero from "./components/Hero";
import {
  heroapi,
  toprateslaes,
  popularsales,
  highlight,
  sneaker,
  story,
  footerAPI
} from "./data/data";
import Sales from "./components/Sales";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
      </main>
    </>
  );
};

export default App;
