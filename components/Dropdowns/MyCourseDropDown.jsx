import React from "react";
import Image from "next/image";

const DropdownCourse = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center gap-5">
        <Image
          src="/assets/course-images/courseimage1.jpg"
          width={70}
          height={60}
          className="object-cover"
        />
        <p className="text-sm font-semibold w-[300px] z-10">
          C# Veri Yapıları : Linked List | Doubly Linked List | Queue | Stack |
          Binary Search Trees | Graph
        </p>
      </div>
      <hr className="w-full bg-gray-400 mt-2" />
    </div>
  );
};

export default DropdownCourse;
