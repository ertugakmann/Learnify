"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import useUserStore from "@store/userStore";
import getCurrentUser from "@utils/getCurrentUser";
import Link from "next/link";
import LikedCoursesSlider from "@components/Sliders/LikedCoursesSlider";

const CourseOverview = () => {
    const [course, setCourse] = useState(null);
    const [isWishListed, setIsWishListed] = useState(false);
    const params = useParams();
    const { id } = params;

    // TODO: Check better way of getting query from url
    // ? This is a temporary solution
    const { setUserSession } = useUserStore();

    useEffect(() => {
        const fetchUserData = async () => {
            // * Get the current user with uid from authentification.
            const user = await getCurrentUser();

            if (user) {
                // * Fetch user data from the API with the user's uid.
                const response = await fetch(`/api/user/${user.uid}`);
                if (response.ok) {
                    const userData = await response.json();
                    setUserSession(userData);
                }
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`/api/courses/${id}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch on client side.");
                } else {
                    const data = await response.json();
                    setCourse(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCourse();
    }, []);

    return (
        <div className="w-full">
            {course ? (
                <div>
                    <div className="w-full h-[430px] bg-slate-200 flex justify-between mt-8 mb-5">
                        <div className="container mx-auto p-4 mt-3 w-[90%] ">
                            <h1 className="text-2xl font-bold text-slate-900">
                                {course.title}
                            </h1>
                            <p className="text-lg text-slate-700 mt-2">
                                {course.description}
                            </p>
                            <div className="flex gap-1 items-center mt-2">
                                <p className="text-md font-semibold text-orange-500">
                                    {course.rating}
                                </p>
                                <div className="flex w-[6rem]">
                                    <Rating readOnly value={course.rating} />
                                </div>
                            </div>
                            <p className="text-md text-gray-600 mt-2">
                                <Link href={"/dynamic-profile"}>
                                    Course by {course.creator}
                                </Link>
                            </p>{" "}
                        </div>
                        <div>
                            <div className="relative inline-block">
                                <img
                                    src={course.photoURL}
                                    className="w-[31rem] pr-9 mt-7"
                                />
                                <div className="absolute w-[348px] inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                            </div>
                            <div className="flex flex-col mt-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">
                                        Price
                                    </h2>
                                    <p className="text-xl font-bold mr-9">
                                        <span className="text-gray-400 line-through mr-3">
                                            $199.99
                                        </span>
                                        $19.99
                                    </p>
                                </div>
                                <div className="flex flex-start mr-8 mt-3 gap-16 items-center">
                                    <button
                                        style={{
                                            boxShadow:
                                                "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)",
                                        }}
                                        className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2  w-[170px] font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                                    >
                                        Add to Cart{" "}
                                        <CiShoppingBasket
                                            style={{ marginLeft: "12px" }}
                                            size={28}
                                        />
                                    </button>
                                    <button
                                        className="p-1 ml-20"
                                        onClick={() =>
                                            setIsWishListed(
                                                (prevState) => !prevState
                                            )
                                        }
                                    >
                                        {!isWishListed ? (
                                            <FaRegHeart className="text-3xl" />
                                        ) : (
                                            <FaHeart className="text-3xl" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-5">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            You might also like
                        </h2>
                        <LikedCoursesSlider />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CourseOverview;
