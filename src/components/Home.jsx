import React from "react";
import { Hero, Navbar } from "./index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full h-[1500px]"></div>
    </>
  );
};

export default Home;
