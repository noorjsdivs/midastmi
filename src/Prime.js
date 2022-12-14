import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
// import ClientMsg from "./components/clientmsg/ClientMsg";
import Header from "./components/header/Header";
import PrimeSlider from "./components/slider/PrimeSlider";
import Whatwedo from "./components/whatwedo/Whatwedo";
import Whoweare from "./components/whoweare/Whoweare";

const Prime = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className="px-4">
        <Banner />
        <Whoweare />
      </div>
      <PrimeSlider />
      <Whatwedo />
      <AboutUs />
      {/* <ClientMsg /> */}
      <Footer />
    </div>
  );
};

export default Prime;
