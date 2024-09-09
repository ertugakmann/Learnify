"use client";

import React, { useEffect, useState } from "react";

// * Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { toast } from "react-toastify";
import LikedSliderCard from "./SliderCards/LikedSliderCard";

const LikedCoursesSlider = () => {
    const [likedCoursesData, setLikedCoursesData] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("/api/courses/liked");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                console.log(data);
                setLikedCoursesData(data);
            } catch (error) {
                toast.error("Failed to fetch popular courses data");
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="flex flex-col w-full h-[320px] mt-7">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-full"
            >
                {likedCoursesData.map((course) => (
                    <SwiperSlide key={course.id}>
                        <LikedSliderCard key={course.id} course={course} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LikedCoursesSlider;
