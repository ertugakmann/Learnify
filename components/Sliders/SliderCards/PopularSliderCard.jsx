import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PopularSliderCard = ({ course }) => {
    console.log(course.id);
    return (
        <div className="w-full  flex flex-col gap-y-1">
            <Link href={`/course/${course.id}`}>
                <Image
                    src={course.photoURL}
                    alt="slider image"
                    width={300}
                    height={200}
                    className="w-full"
                />
                <p className="font-semibold text-md">{course.title}</p>
                <Link href="/dynamic-profile">
                    <p className="text-sm text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-64">
                        {course.creator}
                    </p>
                </Link>
                <div className="flex w-[6rem]">
                    <Rating readOnly value={course.rating} />
                </div>

                <p className="text-md font-bold">
                    <span className="text-gray-400 line-through">$199.99</span>{" "}
                    $19.99
                </p>
            </Link>
        </div>
    );
};

export default PopularSliderCard;
