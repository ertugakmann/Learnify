"use client";

import React, { useState } from "react";
import Feed from "../components/Feed";
import "../styles/globals.css";
import Image from "next/image";

const Home = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <section className="w-full flex-col">
      <div className="mt-3 w-full">
        <Feed />
      </div>
    </section>
  );
};

export default Home;
