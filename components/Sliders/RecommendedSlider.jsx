import React from "react";

// * Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import PopularCourseSlider from "./SliderCards/PopularSliderCard";

const PopularCourseSliders = () => {
  return (
    <div className="flex flex-col w-full h-[320px] mt-7">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
        <SwiperSlide>
          <PopularCourseSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularCourseSliders;
