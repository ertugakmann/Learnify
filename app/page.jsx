"use client";

import React from "react";
import Feed from "../components/Feed";
import "../styles/globals.css";
import useUserStore from "@store/userStore";
import { useEffect } from "react";
import getCurrentUser from "@utils/getCurrentUser";

const Home = () => {
    const { setUserSession, setCurrentUser } = useUserStore();

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
                } else {
                    console.log("Failed to fetch user data on the client side");
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <section className="w-full flex-col">
            <div className="mt-3 w-full">
                <Feed />
            </div>
        </section>
    );
};

export default Home;
