import React from "react";
import { Footer, Navbar } from "./index";
import StarsLayout from "./landing/StarsLayout";
import { CiMobile3 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import dashboard_slant from "../assets/Dashboard-14-Iphone-Pro-MockupA-.png";
import signup_img from "../../public/Signing_in_2.png";
import confirm_img from "../../public/Signing_in_3.png";
import detail_img from "../../public/Signing_in_5.png";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="products hero w-full h-[130dvh] md:h-[145dvh] relative">
        <div className="absolute w-full h-[130dvh] md:h-[145dvh] z-[2] top-0 left-0 earth-3d">
          <StarsLayout />
        </div>
        <div className="content w-full h-[130dvh] md:h-[145dvh] flex justify-center flex-col gap-y-8 text-wrap px-8 base:px-11 lg:px-16 xl:px-24  py-3 absolute z-[10]">
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
                className="w-[700px] max-w-[95%] object-cover ml-0 md:ml-[-500px]"
                fetchpriority="high"
              />
            </div>
          </Fade>
        </div>
      </section>

      <section className="how-it-works px-8 base:px-11 lg:px-16 xl:px-24  py-6 lg:py-10 bg-white ">
        <div className="block">
          <Fade cascade triggerOnce={true}>
            <p className="text-center w-fit px-4 py-[9px] text-indigo-600 bg-black border-indigo-600 border border-opacity-40 bg-opacity-10 font-[650] rounded-[25px] text-[13px] backdrop:blur-[2px]">
              Get started
            </p>

            <h2 className="text-cyan-700 font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3 mb-5">
              Start using the wewash application by registering.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
              <div className="h-96 rounded-[15px] overflow-hidden bg-opacity-5 bg-white relative shadow-[1px_1px_3px_#aaa,_-1px_-1px_3px_#bbb] px-3 py-4">
                <img
                  src={signup_img}
                  alt=""
                  className="w-full object-scale-down"
                />
                <div className="absolute w-full h-[20%] bg-cyan-600 bottom-0 left-0 bg-opacity-80 backdrop-blur-sm flex flex-row gap-x-2 place-items-center px-4 py-3 place-content-center">
                  <GoDotFill className="text-white text-[15px]" />
                  <span className="text-white text-[14px]">
                    Register with your phone number.
                  </span>
                </div>
              </div>

              <div className="h-96 rounded-[15px] overflow-hidden bg-opacity-5 bg-white relative shadow-[1px_1px_3px_#aaa,_-1px_-1px_3px_#bbb] px-3 py-4">
                <img
                  src={confirm_img}
                  alt=""
                  className="w-full object-scale-down"
                />
                <div className="absolute w-full h-[20%] bg-cyan-600 bottom-0 left-0 bg-opacity-80 backdrop-blur-sm flex flex-row gap-x-2 place-items-center px-4 py-3 place-content-center">
                  <GoDotFill className="text-white text-[15px]" />
                  <span className="text-white text-[14px]">
                    Verify your phone number.
                  </span>
                </div>
              </div>

              <div className="h-96 rounded-[15px] overflow-hidden bg-opacity-5 bg-white relative shadow-[1px_1px_3px_#aaa,_-1px_-1px_3px_#bbb] px-3 py-4">
                <img
                  src={detail_img}
                  alt=""
                  className="w-full object-scale-down"
                />
                <div className="absolute w-full h-[20%] bg-cyan-600 bottom-0 left-0 bg-opacity-80 backdrop-blur-sm flex flex-row gap-x-2 place-items-center px-4 py-3 place-content-center">
                  <GoDotFill className="text-white text-[15px]" />
                  <span className="text-white text-[14px]">
                    Add your details.
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
