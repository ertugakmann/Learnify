import Image from "next/image";
import React from "react";

const InfinitySliderCard = ({ brandName, brandLogo }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-full flex items-center justify-center mt-5 px-3 py-2 gap-3">
      <Image alt="Brand Logo" width={30} height={30} src={brandLogo} />
      <h1 className="text-xl font-bold text-[#2B3546]">{brandName}</h1>
    </div>
  );
};

export default InfinitySliderCard;
