import Image from "next/image";
import React from "react";

const InfinitySliderCard = ({ brandName, brandLogo }) => {
  return (
    <div className="bg-white bg-opacity-80 lg:w-full w-[120px] rounded-full flex items-center justify-center mt-5 md:px-3 px-5 py-2 gap-3 ">
      <Image
        alt="Brand Logo"
        width={30}
        height={30}
        className="md:flex hidden"
        src={brandLogo}
      />
      <h1 className="font-bold md:text-xl text-md text-[#2B3546]">
        {brandName}
      </h1>
    </div>
  );
};

export default InfinitySliderCard;
