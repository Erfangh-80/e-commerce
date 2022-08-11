import React from "react";

// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "../../../assets/styles/Product.module.css";

const Product = ({ data }) => {
  return (
    <div>
      <h1 className={Styles.header}>Products</h1>
      <Swiper
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          540: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className="mySwiper"
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id} className={Styles.swiper}>
            <div className={Styles.product}>
              <img src={product.image} alt="product icon" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
