// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

// * Images for slider
import InfinitySliderCard from "./SliderCards/InfinitySliderCard";
import Adobe from "@public/assets/brand-icons/adobe.svg";
import Apple from "@public/assets/brand-icons/apple.svg";
import Facebook from "@public/assets/brand-icons/facebook.svg";
import Figma from "@public/assets/brand-icons/figma.svg";
import Github from "@public/assets/brand-icons/github.svg";
import Google from "@public/assets/brand-icons/google.svg";
import Microsoft from "@public/assets/brand-icons/microsoft.svg";
import Spotify from "@public/assets/brand-icons/spotify.svg";
import Udemy from "@public/assets/brand-icons/udemy.svg";
import Volkswagen from "@public/assets/brand-icons/volkswagen.svg";
import Youtube from "@public/assets/brand-icons/youtube.svg";
import Discord from "@public/assets/brand-icons/discord.svg";

const InfinitySlider = () => {
  return (
    <div className="flex flex-col w-full h-[160px]">
      <div className="w-full">
        <Swiper
          grabCursor={true}
          a11y={false}
          freeMode={true}
          speed={12000}
          loop={true}
          slidesPerView={"auto"}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              spaceBetween: 80,
            },
            480: {
              spaceBetween: 80,
            },
            767: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 40,
            },
          }}
          className="trusted-by-list w-full"
          style={{ marginTop: "10px" }}
        >
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Google"} brandLogo={Google} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Youtube"} brandLogo={Youtube} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Udemy"} brandLogo={Udemy} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Adobe"} brandLogo={Adobe} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Microsoft"} brandLogo={Microsoft} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Figma"} brandLogo={Figma} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Apple"} brandLogo={Apple} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard
              brandName={"Volkswagen"}
              brandLogo={Volkswagen}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Github"} brandLogo={Github} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Facebook"} brandLogo={Facebook} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Spotify"} brandLogo={Spotify} />
          </SwiperSlide>
        </Swiper>

        {/* * Second Slider */}

        <Swiper
          grabCursor={true}
          a11y={false}
          freeMode={true}
          speed={12000}
          loop={true}
          slidesPerView={"auto"}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              spaceBetween: 80,
            },
            480: {
              spaceBetween: 80,
            },
            767: {
              spaceBetween: 40,
            },
            992: {
              spaceBetween: 40,
            },
          }}
          className="trusted-by-list"
          style={{ marginLeft: "50px", marginTop: "15px" }}
        >
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Apple"} brandLogo={Apple} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard
              brandName={"Volkswagen"}
              brandLogo={Volkswagen}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Github"} brandLogo={Github} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Facebook"} brandLogo={Facebook} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Spotify"} brandLogo={Spotify} />
          </SwiperSlide>
          <SwiperSlide style={{ width: "20%" }}>
            <InfinitySliderCard brandName={"Discord"} brandLogo={Discord} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default InfinitySlider;
