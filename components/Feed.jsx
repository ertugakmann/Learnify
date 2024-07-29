"use client";

import "../styles/globals.css";
import HeroSlider from "./Sliders/HeroSlider";
import InfinitySlider from "./Sliders/InfinitySlider";
import PopularCourseSliders from "./Sliders/PopularCourseSliders";

const Feed = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <div className="w-full flex justify-center items-center">
        <InfinitySlider />
      </div>
      <div className="flex flex-col w-full items-center">
        <h2 className="font-bold text-5xl mt-7">Popular Courses</h2>
        <p className="text-gray-700 text-lg mt-2 font-inter">
          Check out our most popular and highly rated courses
        </p>
        <div className="flex w-full">
          <PopularCourseSliders />
        </div>
      </div>
    </div>
  );
};

export default Feed;
