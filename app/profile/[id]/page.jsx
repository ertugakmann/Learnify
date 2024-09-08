"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseImage from "@public/assets/course-images/courseimage1.jpg";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`/api/user/${id}`);

            if (response.ok) {
                const userData = await response.json();

                setUserData(userData);
            } else {
                console.log("Failed to fetch user data on the client side");
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="profile-container mb-4">
            {userData ? (
                <div className="flex lg:flex-row flex-col mt-12">
                    <div className="flex flex-col items-center p-5 h-max-[600px] shadow-md rounded-md">
                        <img
                            src={userData.photoURL}
                            className="rounded-full w-28 h-28 mt-2 object-cover"
                        />

                        <p className="text-2xl font-bold mt-3">
                            {userData.username}
                        </p>
                        <p className="text-md text-gray-500">{userData.tag}</p>

                        <p className="mt-1 text-md text-gray-500">
                            {userData.email}
                        </p>

                        <div className="mt-3 flex flex-col w-full gap-y-5 h-full">
                            <h2 className="text-lg text-md font-semibold">
                                Ratings to Courses:
                            </h2>
                            <div className="w-full bg-white h-[150px] p-4 rounded-lg">
                                <h2 className="text-lg font-semibold">
                                    That was pretty good.
                                </h2>
                                <p className="text-md text-gray-500 mt-1 line-clamp-2">
                                    I really enjoyed the course. I learned a lot
                                    from it. I would recommend it to anyone who
                                    wants to learn about this topic.
                                </p>
                                <div className="flex w-[6rem] mt-3 items-center ">
                                    <Rating readOnly value={4.3} />
                                </div>
                            </div>
                            <div className="w-full bg-white h-[150px] p-4 rounded-lg">
                                <h2 className="text-lg font-semibold">
                                    I liked the content of the course.
                                </h2>
                                <p className="text-md text-gray-500 mt-1 line-clamp-2">
                                    The course was very informative and I
                                    learned a lot from it. I would recommend it
                                    to anyone who wants to learn about this
                                    topic.
                                </p>
                                <div className="flex w-[6rem] mt-3 items-center ">
                                    <Rating readOnly value={4.3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full lg:mt-0 mt-6 lg:pl-8">
                        <h2 className="text-4xl font-semibold">Liked Courss</h2>
                        <p className="text-md text-gray-500">
                            Check out the courses that {userData.username} liked
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="w-full flex border-solid border-[2px] gap-3 rounded-lg p-2">
                                <Image height={200} src={CourseImage} />
                                <div>
                                    <p className="text-[17px] font-semibold">
                                        Advanced C# Crash Course in 24 Hours
                                    </p>
                                    <div className="flex flex- w-[6rem] mt-1">
                                        <Rating readOnly value={4.3} />
                                    </div>
                                    <p className="text-md font-bold mt-2">
                                        <span className="text-gray-400 line-through">
                                            $199.99
                                        </span>{" "}
                                        $19.99
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex border-solid border-[2px] gap-3 rounded-lg p-2">
                                <Image height={200} src={CourseImage} />
                                <div>
                                    <p className="text-[17px] font-semibold">
                                        Advanced C# Crash Course in 24 Hours
                                    </p>
                                    <div className="flex flex- w-[6rem] mt-1">
                                        <Rating readOnly value={4.3} />
                                    </div>
                                    <p className="text-md font-bold mt-2">
                                        <span className="text-gray-400 line-through">
                                            $199.99
                                        </span>{" "}
                                        $19.99
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex border-solid border-[2px] gap-3 rounded-lg p-2">
                                <Image height={200} src={CourseImage} />
                                <div>
                                    <p className="text-[17px] font-semibold">
                                        Advanced C# Crash Course in 24 Hours
                                    </p>
                                    <div className="flex flex- w-[6rem] mt-1">
                                        <Rating readOnly value={4.3} />
                                    </div>
                                    <p className="text-md font-bold mt-2">
                                        <span className="text-gray-400 line-through">
                                            $199.99
                                        </span>{" "}
                                        $19.99
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
