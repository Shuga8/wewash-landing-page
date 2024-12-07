import React from "react";
import shaded_img from "../assets/shaded.png";
import wash_one from "../assets/wash_one.webp";
import wash_two from "../assets/wash_two.webp";
import dashboard_slant from "../assets/Dashboard-14-Iphone-Pro-MockupA-.png";
import checkout_straight from "../assets/Checkout-14-Iphone-Pro-MockupB-.png";
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
            <img
              src={wash_one}
              alt=""
              className="w-full h-full object-fill"
              fetchPriority="high"
            />
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
            <img
              src={wash_two}
              alt=""
              className="w-full h-full object-fill"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <section className="products bg-[#0A0A0A] w-full py-10 base:py-14 md:py-20 px-3 base:px-12 md:px-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24 md:justify-between mb-10">
          <div className="block">
            <p className="text-center w-fit px-4 py-[4px] text-purple-600 bg-white bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
              For Washers And Individuals
            </p>

            <h2 className="text-white font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3">
              Mobile App
            </h2>

            <p className="text-stone-300 text-[16px]">
              Easily manage your car wash payments and earnings. Accept payments
              through multiple platforms and withdraw your earnings directly to
              your bank account—all in one app.
            </p>

            <ul className="py-8 px-3 grid grid-cols-2 max-w-[400px]">
              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Accept Payments
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Manage your services and schedule effortlessly.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Withdraw Earnings
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Stay informed with live notifications for bookings and
                  payments.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Easy Bank Transfers
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Your business and customer data are safe with us.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550] text-nowrap">
                  One-Time Funding
                </span>
                {/* <span className="text-slate-900 text-[15px] text-wrap">
                  Access our tools via a user-friendly dashboard or integrate
                  with your existing systems.
                </span> */}
              </li>
            </ul>

            <Link
              to={""}
              className="px-[17px] py-[10px] text-white bg-primary-700 text-[15px] font-[550] border border-transparent hover:border hover:border-primary-600 ease-in-out duration-300 transition-[border] rounded-lg"
            >
              Download App
            </Link>
          </div>

          <div className="flex h-full justify-center items-center drop-shadow-md">
            <img
              src={dashboard_slant}
              alt=""
              className="w-full h-full object-contain"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24 md:justify-between mb-10">
          <div className="block">
            <p className="text-center w-fit px-4 py-[4px] text-purple-600 bg-white bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
              For Individuals
            </p>

            <h2 className="text-white font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3">
              Accept Payments
            </h2>

            <p className="text-stone-300 text-[16px]">
              Streamline your car wash transactions by accepting payments
              through Paystack, Flutterwave, Visa, Mastercard, and bank
              transfers. Get funds directly into your bank account with ease and
              reliability.
            </p>

            <ul className="py-8 px-3 grid grid-cols-2 max-w-[600px]">
              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Accept Payments via Paystack & Flutterwave
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Manage your services and schedule effortlessly.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Secure Transactions with Visa & Mastercard
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Stay informed with live notifications for bookings and
                  payments.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550]">
                  Direct Bank Transfers
                </span>
                {/* <span className="text-slate-900 text-[15px]">
                  Your business and customer data are safe with us.
                </span> */}
              </li>

              <li className="flex flex-row gap-x-[10px] place-items-center my-[10px]">
                <IoCheckmark className="text-green-500 text-[26px]" />
                <span className="text-slate-300 text-[15px] font-[550] text-nowrap">
                  Simplify Your Earnings
                </span>
                {/* <span className="text-slate-900 text-[15px] text-wrap">
                  Access our tools via a user-friendly dashboard or integrate
                  with your existing systems.
                </span> */}
              </li>
            </ul>

            <Link
              to={""}
              className="px-[17px] py-[10px] text-primary-600 bg-transparent text-[15px] font-[550] border border-transparent hover:border hover:border-primary-600 ease-in-out duration-300 transition-[border] rounded-lg"
            >
              Learn More
            </Link>
          </div>

          <div className="flex h-full justify-center items-center drop-shadow-md">
            <img
              src={checkout_straight}
              alt=""
              className="w-full h-[500px] object-contain"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="about-section w-full h-[500px] relative overflow-hidden flex flex-row gap-x-12 md:gap-x-24">
        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-fill base:object-cover"
            />
          </li>
        </ul>

        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-fill base:object-cover "
            />
          </li>
        </ul>

        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-fill base:object-cover"
            />
          </li>
        </ul>

        <div className="content w-full h-full flex flex-col justify-center  items-center absolute z-[3] top-0 left-0 bg-white bg-opacity-80 base:py-14 md:py-20 px-6 base:px-12 md:px-24 gap-y-6">
          <p className="text-center px-4 py-[4px] text-primary-600 bg-black bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
            For washers and individuals
          </p>

          <h3 className="text-center text-black text-[1.4rem] font-[550]">
            Seamless Payments
          </h3>

          <p className="text-slate-700 text-center max-w-[800px] leading-[1.9]">
            We make it easy for you to receive payments by converting digital
            currencies into your preferred local currency. Enjoy a secure,
            hassle-free, and dependable payment process tailored to your needs.
          </p>

          <div className="action-links flex flex-row gap-x-5">
            <Link className="text-[13px] text-white bg-primary-600 px-[18px] py-[9px] font-[550] rounded-lg">
              <span>Contact Us</span>
            </Link>
            <Link
              to={""}
              className="text-[13px] text-white px-[18px] py-[9px] font-[550] bg-black bg-opacity-50 ease-in-out duration-300 transition-colors rounded-lg hover:bg-transparent hover:text-primary-600 hover:transition-colors hover:ease-in-out hover:duration-300"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
