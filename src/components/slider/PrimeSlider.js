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
    <div className="w-full max-h-[500px] mb-20 py-20 flex flex-col lgl:flex-row justify-center gap-2 items-center">
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
      <div className="w-full lgl:w-1/2 h-full flex flex-col pt-20 px-10 gap-6">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#004165] via-[#772432] to-[#772432]">
          Some of our Leaders
        </h1>
        <p className="text-[#434343] text-lg font-normal">
          Midas Toastmaster Club is Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla iusto vero possimus eius velit, explicabo
          cupiditate aliquam consequuntur at illum. Lorem ipsum dolor sit amet
          lorem consequer. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Fugit voluptatum reiciendis, quod iste voluptates voluptas quae
          suscipit quos molestias. Ut saepe at minima nihil doloribus maxime
          veniam aut iure totam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus corrupti, corporis magnam sequi ut ducimus
          obcaecati atque? Quis, quibusdam veritatis.
        </p>
      </div>
    </div>
  );
};

export default PrimeSlider;
