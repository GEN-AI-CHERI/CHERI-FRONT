import React from "react";
import Header from "../components/Main/Header";
import Carousel from "../components/Main/Carousel";
import Infos from "../components/Main/Infos";
import Footer from "../components/Main/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Infos />
      <Footer />
    </div>
  );
};

export default MainPage;
