import React from "react";
import { Carousel } from "react-responsive-carousel";
import { primeBannerImg, primeFactsImg } from "../../assets";

const PrimeSlider = () => {
  return (
    <div className="w-full py-10">
      <Carousel
        className="w-full"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="w-full">
          <img
            className="w-full h-[600px] object-cover"
            src={primeBannerImg}
            alt="primeBannerImg"
          />
        </div>
        <div className="w-full h-[600px] object-cover">
          <img
            className="w-full h-auto"
            src={primeFactsImg}
            alt="primeFactsImg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PrimeSlider;
