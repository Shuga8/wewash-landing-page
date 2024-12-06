import React from "react";
import shaded_img from "../assets/shaded.png";
import wash_one from "../assets/wash_one.webp";
import wash_two from "../assets/wash_two.webp";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full py-10 base:py-14 md:py-20 px-6 base:px-12 md:px-24 block">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:justify-between mb-10">
          <div className="block">
            <p className="text-center w-fit px-4 py-[4px] text-orange-600 bg-black bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
              For Washers
            </p>

            <h2 className="text-black font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3">
              Tools and Integrations
            </h2>

            <p className="text-stone-600 text-[16px]">
              Our platform provides essential tools and integrations to help
              your car wash business streamline operations. From managing
              bookings to tracking payments, we make it easy to deliver a
              seamless experience.
            </p>

            <ul className="py-8 px-3">
              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Full Control
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Manage your services and schedule effortlessly.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Real-Time Updates
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Stay informed with live notifications for bookings and
                  payments.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Enhanced Security
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Your business and customer data are safe with us.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550] text-nowrap">
                  Integrate Easily
                </span>
                {/* <span className="text-slate-900 text-[15px] text-wrap">
                  Access our tools via a user-friendly dashboard or integrate
                  with your existing systems.
                </span> */}
              </li>
            </ul>

            <Link
              to={""}
              className="px-[17px] py-[10px] text-primary-600 bg-transparent text-[14px] font-[550] border border-transparent hover:border hover:border-primary-600 ease-in-out duration-300 transition-[border]"
            >
              Learn More
            </Link>
          </div>

          <div className="block h-full">
            <img src={wash_one} alt="" className="w-full h-full object-fill" />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:justify-between">
          <div className="block">
            <p className="text-center w-fit px-4 py-[4px] text-orange-600 bg-black bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
              For Individuals
            </p>

            <h2 className="text-black font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3">
              Easy Car Wash Bookings
            </h2>

            <p className="text-stone-600 text-[16px]">
              Say goodbye to hassle! Our platform connects you to trusted car
              washers, giving you quick access to top-quality services at your
              convenience.
            </p>

            <ul className="py-8 px-3">
              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Quick Bookings
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Manage your services and schedule effortlessly.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Real-Time Updates
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Stay informed with live notifications for bookings and
                  payments.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550]">
                  Secure Payments
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Your business and customer data are safe with us.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-800 text-[15px] font-[550] text-nowrap">
                  Wide Selection
                </span>
                {/* <span className="text-slate-900 text-[15px] text-wrap">
                  Access our tools via a user-friendly dashboard or integrate
                  with your existing systems.
                </span> */}
              </li>
            </ul>

            <Link
              to={""}
              className="px-[17px] py-[10px] text-primary-600 bg-transparent text-[14px] font-[550] border border-transparent hover:border hover:border-primary-600 ease-in-out duration-300 transition-[border]"
            >
              Learn More
            </Link>
          </div>

          <div className="block h-full">
            <img src={wash_two} alt="" className="w-full h-full object-fill" />
          </div>
        </div>
      </div>

      <section className="about-section w-full py-10 h-[500px] relative overflow-hidden flex flex-row gap-x-14 md:gap-x-24">
        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-fill"
            />
          </li>
        </ul>

        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-fill"
            />
          </li>
        </ul>

        <div className="content w-full h-full flex flex-col justify-center  items-center absolute z-[3] top-0 left-0 bg-white bg-opacity-80 base:py-14 md:py-20 px-3 base:px-12 md:px-24 gap-y-16">
          <p className="text-center px-4 py-[4px] text-primary-600 bg-black bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
            For washers and individuals
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
