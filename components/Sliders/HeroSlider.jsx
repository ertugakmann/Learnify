"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// * Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// * Illustrations for slider
import RichContent from "@public/assets/illustrations/slider1.svg";
import Experts from "@public/assets/illustrations/slider2.svg";
import WorkFromAnyWhere from "@public/assets/illustrations/slider3.svg";
import Career from "@public/assets/illustrations/slider4.svg";

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Swiper
        navigation={!isMobile}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="flex flex-col ml-12 mt-4 lg:ml-24 lg:mt-16">
              <p className="slider_text  text-white">Start Your </p>
              <p className="slider_text  text-white mt-2">Learning Journey</p>
              <p className="slider_desc">
                Join thousands of learners and start your path to success.
              </p>
              <button type="button" className="blue_btn w-[110px] mt-4">
                Start Now
              </button>
            </div>
            <div className="mr-[76px] mt-8">
              <Image
                width={400}
                height={400}
                src={RichContent}
                className="object-contain hidden lg:flex"
                alt="Slider Image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="flex flex-col ml-12 mt-4 lg:ml-24 lg:mt-16">
              <p className="slider_text text-white">Learn from </p>
              <p className="slider_text  text-white mt-2">Industry Experts</p>
              <p className="slider_desc">
                Our courses are taught by leading professionals in their fields.
              </p>
              <button type="button" className="blue_btn w-[110px] mt-4">
                Start Now
              </button>
            </div>
            <div className="mr-[76px] mt-8">
              <Image
                width={400}
                height={400}
                src={Experts}
                className="object-contain hidden mt-12 md:mt-0 lg:flex"
                alt="Slider Image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="flex flex-col ml-12 mt-4 lg:ml-24 lg:mt-16">
              <p className="slider_text text-white">Learn Anytime, </p>
              <p className="slider_text  text-white mt-2">Anywhere</p>
              <p className="slider_desc">
                Flexible learning options to fit your schedule.
              </p>
              <button type="button" className="blue_btn w-[110px] mt-4">
                Start Now
              </button>
            </div>
            <div className="mr-[76px] mt-6">
              <Image
                width={400}
                height={400}
                src={WorkFromAnyWhere}
                className="object-contain hidden mt-12 md:mt-0 lg:flex"
                alt="Slider Image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="flex flex-col ml-12 mt-4 lg:ml-24 lg:mt-16">
              <p className="slider_text text-white">Transform</p>
              <p className="slider_text  text-white mt-2">Your Career</p>
              <p className="slider_desc">
                Take your professional life to the next level with our targeted
                courses and career advancement tools.
              </p>
              <button type="button" className="blue_btn w-[110px] mt-4">
                Start Now
              </button>
            </div>
            <div className="mr-[76px] mt-6">
              <Image
                width={400}
                height={400}
                src={Career}
                className="object-contain hidden mt-12 md:mt-0 lg:flex"
                alt="Slider Image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
