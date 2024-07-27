import React from "react";
import Feed from "../components/Feed";
import "../styles/globals.css";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Welcome to Learnify</h1>
      <div className="mt-6 w-full">
        <Feed />
      </div>
    </section>
  );
};

export default Home;
