import React from "react";
import Image from "next/image";

const FavoritesDropdown = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center gap-5">
        <Image
          src="/assets/course-images/courseimage2.jpg"
          width={70}
          height={60}
          className="object-cover"
        />
        <p className="text-sm font-semibold w-[300px] z-10">
          React 18 - React Component - React State - React Hooks - React Router
          6 - React Typescript - Redux Toolkit - Context Api
        </p>
      </div>
      <hr className="w-full bg-gray-400 mt-2" />
    </div>
  );
};

export default FavoritesDropdown;
