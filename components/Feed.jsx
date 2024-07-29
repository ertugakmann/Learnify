"use client";

import { useState } from "react";
import "../styles/globals.css";
import HeroSlider from "./Sliders/HeroSlider";
import InfinitySlider from "./Sliders/InfinitySlider";
import PopularCourseSliders from "./Sliders/PopularCourseSliders";
import Image from "next/image";
import Avatar from "@public/assets/avatar.png";

const Feed = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {isLogged ? (
        <div className="mt-1 mb-5 flex gap-5">
          <Image
            height={30}
            width={70}
            className="rounded-full"
            src={Avatar}
          ></Image>
          <div className="flex flex-col ">
            <p className="font-semibold text-4xl text-gray-800">
              Welcome Back, User
            </p>
            <p className="font-satoshi text-md text-gray-400">Web Developer</p>
          </div>
        </div>
      ) : (
        <div className="mb-5">
          <h1 className="head_text text-left">Welcome to Learnify</h1>
        </div>
      )}
      <HeroSlider />
      <div className="w-full flex justify-center items-center">
        <InfinitySlider />
      </div>
      <div className="flex flex-col w-full items-center">
        <h2 className="font-bold text-5xl mt-7">Popular Courses</h2>
        <p className="text-gray-700 text-lg mt-2 font-inter">
          Check out our most popular and highly rated courses
        </p>
        <div className="flex flex-col w-full">
          <PopularCourseSliders />
        </div>
      </div>
    </div>
  );
};

export default Feed;
