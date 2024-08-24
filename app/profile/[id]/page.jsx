"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        <div className="profile-container">
            {userData ? (
                <div className="md:flex md:flex-row flex-col">
                    <div className="flex flex-col mt-4 items-center p-5 h-full shadow-md rounded-md">
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
                    {/* <div className="w-full h-full pl-8 mt-3">
                        <h2 className="text-4xl font-semibold">
                            Liked Courses
                        </h2>
                        <p className="text-md text-gray-500">
                            Check out the courses that {userData.username} liked
                        </p>
                        <div className="flex gap-4 w-full mt-4">
                            <div className="w-full flex flex-col gap-y-1">
                                <Link href={"/"}>
                                    <img
                                        src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flearnify-2843d.appspot.com%2Fo%2Fcourse_images%252FTGhYvioRpWwEmPzj0Kis%3Falt%3Dmedia%26token%3D756cab30-7272-4257-91ae-0b996bf03fb5&w=640&q=75"
                                        alt="slider image"
                                        className="w-[200px] h-[120px]"
                                    />
                                    <p className="font-semibold text-md">
                                        Learn React Native
                                    </p>
                                    <p className="text-sm text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-64">
                                        John Doe
                                    </p>

                                    <div className="flex w-[6rem]">
                                        <Rating readOnly value={4} />
                                    </div>

                                    <p className="text-md font-bold">
                                        <span className="text-gray-400 line-through">
                                            $199.99
                                        </span>{" "}
                                        $19.99
                                    </p>
                                </Link>
                            </div>
                            <div className="w-full flex flex-col gap-y-1">
                                <Link href={"/"}>
                                    <img
                                        src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flearnify-2843d.appspot.com%2Fo%2Fcourse_images%252FTGhYvioRpWwEmPzj0Kis%3Falt%3Dmedia%26token%3D756cab30-7272-4257-91ae-0b996bf03fb5&w=640&q=75"
                                        alt="slider image"
                                        className="w-[200px] h-[120px]"
                                    />
                                    <p className="font-semibold text-md">
                                        Learn React Native
                                    </p>
                                    <p className="text-sm text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-64">
                                        John Doe
                                    </p>

                                    <div className="flex w-[6rem]">
                                        <Rating readOnly value={4} />
                                    </div>

                                    <p className="text-md font-bold">
                                        <span className="text-gray-400 line-through">
                                            $199.99
                                        </span>{" "}
                                        $19.99
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
