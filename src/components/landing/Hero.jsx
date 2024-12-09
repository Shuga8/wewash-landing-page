import React, { useEffect } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const normalizedScroll = scrollY / maxScroll;
      window.dispatchEvent(
        new CustomEvent("scrollOrbit", { detail: { normalizedScroll } })
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero w-full h-[100dvh] relative">
        <div className="absolute w-[100vw] h-[100vh] z-[2] top-0 left-0 earth-3d">
          <Map />
        </div>
        <div className="content w-full h-full flex justify-center items-center flex-col gap-y-8 text-wrap px-12 base:px-32 xl:px-48 py-3 absolute z-[10]">
          <Fade direction="down">
            <h1 className="title text-[2.2rem] base:text-[3rem] xl:text-[3.5rem] text-center">
              Africa's pioneer in carwash service & systems
            </h1>
          </Fade>

          <Fade direction="left">
            <h2 className="sub-title text-center">
              We are revolutionizing car wash services in Africa by introducing
              innovative solutions to scale operations, ensure seamless and
              secure transactions, and provide convenient, customer-focused
              real-life experiences.
            </h2>
          </Fade>

          <Fade direction="up">
            <div className="action-links flex flex-row gap-x-5">
              <Link className="text-[13px] text-black bg-white px-[18px] py-[9px] font-[550] rounded-lg">
                <span>Contact Us</span>
              </Link>
              <Link
                to={"/products"}
                className="text-[13px] text-white px-[18px] py-[9px] font-[550] bg-white bg-opacity-20 ease-in-out duration-300 transition-colors rounded-lg hover:bg-transparent hover:transition-colors hover:ease-in-out hover:duration-300"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Hero;
