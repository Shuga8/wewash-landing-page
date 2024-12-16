import React from "react";
import { Footer, Navbar } from "./index";
import StarsLayout from "./landing/StarsLayout";
import { CiMobile3 } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import dashboard_slant from "../assets/Dashboard-14-Iphone-Pro-MockupA-.png";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="products hero w-full h-[100dvh] md:h-[145dvh] relative">
        <div className="absolute w-[100vw] h-[100dvh] md:h-[145dvh] z-[2] top-0 left-0 earth-3d">
          <StarsLayout />
        </div>
        <div className="content w-full h-[100dvh] md:h-[145dvh] flex justify-center flex-col gap-y-8 text-wrap px-12 base:px-32 xl:px-48 py-3 absolute z-[10]">
          <Fade cascade triggerOnce={true}>
            <h3 className="w-fit px-3 py-2 flex flex-row gap-x-1 place-items-center bg-white bg-opacity-5 text-center text-white rounded-[25px] text-[13px] font-[550] border-white border border-opacity-15">
              <CiMobile3 className="text-[18px]" />
              <span>User mobile app</span>
            </h3>

            <h1 className="title text-[1.5rem] base:text-[2rem] xl:text-[2.4rem]">
              Manage your car wash needs effortlessly
            </h1>

            <h2 className="sub-title max-w-[850px]">
              With the WeWash app, you can easily book, pay, and track car wash
              services from trusted washers near you—all from your phone.
              Schedule a wash, choose your preferred washer, and enjoy a
              spotless car without the hassle.
            </h2>

            <div className="action-links flex flex-row gap-x-5">
              <Link className="text-[10px] md:text-[13px] text-black bg-white px-[10px] md:px-[18px] py-[9px] font-[550] rounded-lg border border-white hover:bg-transparent transition-all ease-in-out duration-300 hover:text-white">
                <span>Download for Android</span>
              </Link>
              <Link
                to={"/products"}
                className="text-[10px] md:text-[13px] text-white bg-primary-600 px-[10px] md:px-[18px] py-[9px] font-[550] rounded-lg border border-primary-600 hover:bg-transparent transition-all ease-in-out duration-300 hover:text-white"
              >
                <span>Download for iOS</span>
              </Link>
            </div>

            <div className="flex h-full justify-center items-center dropper">
              <img
                src={dashboard_slant}
                alt=""
                className="w-[700px] max-w-[95%] object-cover ml-0 md:ml-[-400px]"
                fetchpriority="high"
              />
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
