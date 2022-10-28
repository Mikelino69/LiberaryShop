import React from "react";
// import Banners from "../components/Banners";
import CategoryMain from "../components/CategoryMain";
import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import ProductsHome from "../components/ProductsHome";
import Slider from "../components/Slider";
import Homem from "../components/Homem";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homem />
      <Slider />
      {/* <Banners /> */}

      <ProductsHome />
      <CategoryMain />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Home;
