import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  primeBannerImg,
  binuImg,
  fuzluImg,
  santhoshImg,
  visruthanImg,
} from "../../assets";

const PrimeSlider = () => {
  return (
    <div className="w-full h-[500px] mb-20 flex flex-col lgl:flex-row justify-center gap-2 items-center">
      <div className="w-full lgl:w-1/2 px-4 lgl:px-0">
        <Carousel
          className="w-full h-full"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
          swipeable={true}
        >
          <div className="w-full">
            <img
              className="w-full h-full object-fill"
              src={primeBannerImg}
              alt="primeBannerImg"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-fill"
              src={visruthanImg}
              alt="visruthanImg"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-fill"
              src={fuzluImg}
              alt="fuzluImg"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-fill"
              src={binuImg}
              alt="binuImg"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-fill"
              src={santhoshImg}
              alt="santhoshImg"
            />
          </div>
        </Carousel>
      </div>
      <div className="w-full lgl:w-1/2 h-[450px] px-10 flex flex-col">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#004165] via-[#772432] to-[#772432]">
          Some of our Leaders
        </h1>
        <p className="text-[#434343] text-base leading-7">
          Midas Toastmaster Club is Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla iusto vero possimus eius velit, explicabo
          cupiditate aliquam consequuntur at illum. Lorem ipsum dolor sit amet
          lorem consequer.
        </p>
      </div>
    </div>
  );
};

export default PrimeSlider;
