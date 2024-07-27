// * Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Slide1 from "../public/assets/slider-images/slider-1.jpg";
import Slide2 from "../public/assets/slider-images/slider-2.jpg";
import Slide3 from "../public/assets/slider-images/slider-3.jpg";
import RichContent from "../public/assets/illustrations/rich-content.png";

const Slider = () => {
  return (
    <div className="flex flex-col w-full">
      <Swiper navigation={true} modules={[Navigation]} className="w-full">
        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="w-[425px] bg-white h-[180px] ml-24 mt-16 rounded-md flex ">
              <div className="flex flex-col items-start ml-6 mt-6">
                <p className="font-bold text-3xl">
                  Rich Course Content:
                  <br />
                </p>
                <p className="logo_text">Thousands of courses and resources</p>
                <button type="button" className="blue_btn mt-6">
                  Sign in
                </button>
              </div>
            </div>
            <div className="mr-[76px] mt-6">
              <Image
                width={400}
                height={400}
                src={RichContent}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="w-[425px] bg-white h-[180px] ml-24 mt-16 rounded-md flex ">
              <div className="flex flex-col items-start ml-6 mt-6">
                <p className="font-bold text-3xl">
                  Rich Course Content:
                  <br />
                </p>
                <p className="logo_text">Thousands of courses and resources</p>
                <button type="button" className="blue_btn mt-6">
                  Sign in
                </button>
              </div>
            </div>
            <div className="mr-[76px] mt-6">
              <Image
                width={400}
                height={400}
                src={RichContent}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-gradient-to-r from-gray-700 to-slate-800 h-[350px] flex justify-between">
            <div className="w-[425px] bg-white h-[180px] ml-24 mt-16 rounded-md flex ">
              <div className="flex flex-col items-start ml-6 mt-6">
                <p className="font-bold text-3xl">
                  Rich Course Content:
                  <br />
                </p>
                <p className="logo_text">Thousands of courses and resources</p>
                <button type="button" className="blue_btn mt-6">
                  Sign in
                </button>
              </div>
            </div>
            <div className="mr-[76px] mt-6">
              <Image
                width={400}
                height={400}
                src={RichContent}
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
