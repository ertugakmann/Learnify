"use client";

import React, { useState } from "react";
import Feed from "../components/Feed";
import "../styles/globals.css";
import Image from "next/image";
import useUserStore from "@store/userStore";
import { useEffect } from "react";
import getCurrentUser from "@utils/getCurrentUser";

const Home = () => {
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

  return (
    <section className="w-full flex-col">
      <div className="mt-3 w-full">
        <Feed />
      </div>
    </section>
  );
};

export default Home;
