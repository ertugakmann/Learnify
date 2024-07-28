import React, { useState } from "react";
import Image from "next/image";

const BasketDropdown = () => {
  const [basketItems, setBasketItems] = useState([]);

  return (
    <div className="flex flex-col">
      {basketItems.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h4>Your basket is empty.</h4>
          <hr className="bg-gray-400 w-24  mt-2" />
        </div>
      ) : (
        <div className="w-full flex items-center gap-5">
          <Image
            src="/assets/course-images/courseimage2.jpg"
            width={70}
            height={60}
            className="object-cover"
            alt="Course Image"
          />
          <p className="text-sm font-semibold w-[300px] z-10">
            React 18 - React Component - React State - React Hooks - React
            Router 6 - React Typescript - Redux Toolkit - Context Api
          </p>
        </div>
      )}
    </div>
  );
};

export default BasketDropdown;
