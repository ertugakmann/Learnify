"use client";

import { useEffect, useState } from "react";
import "../styles/globals.css";
import HeroSlider from "./Sliders/HeroSlider";
import InfinitySlider from "./Sliders/InfinitySlider";
import PopularCourseSliders from "./Sliders/PopularCourseSliders";
import useUserStore from "@store/userStore";
import LikedCoursesSlider from "./Sliders/LikedCoursesSlider";
import RecommendedSliders from "./Sliders/RecommendedSliders";

const Feed = () => {
    const { userSession, isLogged } = useUserStore();

    return (
        <div className="flex flex-col w-full">
            {isLogged ? (
                <div className="mt-1 mb-5 flex gap-5">
                    <div className="flex flex-col">
                        <p className="font-semibold text-4xl text-gray-800">
                            Welcome Back, {userSession?.username || "User"}
                        </p>
                        <p className="font-satoshi text-md text-gray-400">
                            {userSession?.tag}
                        </p>
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
            <Section
                title="Popular Courses"
                description="Check out our most popular and highly rated courses"
            >
                <PopularCourseSliders />
            </Section>
            <Section
                title="Recommended For You"
                description="Check courses that are recommended for you"
            >
                <RecommendedSliders />
            </Section>
            <Section
                title="Liked Courses on Top"
                description="Check out our most popular and highly rated courses for web developers"
            >
                <LikedCoursesSlider />
            </Section>
        </div>
    );
};

const Section = ({ title, description, children }) => (
    <div className="flex flex-col w-full items-start">
        <h2 className="font-bold text-4xl mt-7">{title}</h2>
        <p className="text-gray-700 text-lg mt-2 font-inter">{description}</p>
        <div className="flex flex-col w-full">{children}</div>
    </div>
);

export default Feed;
