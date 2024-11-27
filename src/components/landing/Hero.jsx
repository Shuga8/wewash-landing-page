import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero w-full h-[100dvh]">
        <div className="content w-full h-full flex justify-center items-center flex-col gap-y-8 text-wrap px-12 base:px-32 xl:px-48 py-3">
          <h1 className="title text-[2.2rem] base:text-[3rem] xl:text-[3.5rem] text-center">
            Africa's pioneer in carwash service & systems
          </h1>

          <h2 className="sub-title text-center">
            We are revolutionizing car wash services in Africa by introducing
            innovative solutions to scale operations, ensure seamless and secure
            transactions, and provide convenient, customer-focused real-life
            experiences.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
