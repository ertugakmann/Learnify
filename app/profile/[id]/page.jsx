"use client";

import Image from "next/image";
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
                <div className="profile-content">
                    <div className="profile-image">
                        <Image
                            src={userData.photoURL}
                            alt=""
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="profile-details">
                        <h2 className="profile-username">
                            {userData.username}
                        </h2>
                        <p className="profile-email">{userData.email}</p>
                        <p className="profile-tag">{userData.tag}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
