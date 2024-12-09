import React from "react";
import { Link } from "react-router-dom";
import dashboard_lg from "../assets/dahboard_large.png";
import cards_img from "../assets/cards.png";
import logo from "../assets/logo-white.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-full bg-[#0a0a0a] py-10 base:py-14 md:py-16 px-5 base:px-12 md:px-32 flex flex-col gap-y-6 justify-center place-items-center">
        <div className="w-full flex justify-center flex-col place-items-center">
          <h4 className="text-center text-lg md:text-3xl text-white font-[550] mb-6">
            Ready to get started?
          </h4>

          <p className="text-slate-300 text-center max-w-2xl text-[13px] md:text-[16px]">
            Join us by using any of our car wash services and experience the
            future of seamless and efficient car care.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4">
          <div className=" bg-white bg-opacity-10 h-[400px] rounded-2xl overflow-hidden relative px-3 md:px-6 py-4 flex flex-col gap-y-5 place-items-center">
            <h5 className="w-fit px-3 py-1 bg-white bg-opacity-5 text-center text-primary-600 rounded-2xl text-[13px] font-[550] border-white border border-opacity-15">
              User mobile app
            </h5>

            <p className="text-[13px] md:text-[16px] text-slate-100 text-wrap text-center">
              Request for washes from one application
            </p>

            <div className="grid grid-cols-2 gap-x-2">
              <Link className="w-full bg-primary-600 border border-primary-600 text-white hover:text-primary-600 hover:bg-transparent text-[11px] md:text-[14px] transition-colors ease-out duration-300 px-10 py-2 rounded-xl text-center">
                For IOS
              </Link>

              <Link className="w-full bg-white border border-white text-primary-600 hover:text-white hover:bg-transparent text-[11px] md:text-[14px] transition-colors ease-out duration-300 px-10 py-2 rounded-xl text-center">
                For Android
              </Link>
            </div>

            <div className="absolute w-full px-4 h-[370px] -bottom-[33%] py-2 z-[1] drop-shadow-[-2px_2px_8px_#777] select-none">
              <img src={dashboard_lg} alt="" className="aspect-auto" />
            </div>
          </div>

          <div className=" bg-white bg-opacity-10 h-[400px] rounded-2xl overflow-hidden relative px-3 md:px-6 py-4 flex flex-col gap-y-5 place-items-center">
            <h5 className="w-fit px-3 py-1 bg-white bg-opacity-5 text-center text-orange-600 rounded-2xl text-[13px] font-[550] border-white border border-opacity-15">
              Payment system
            </h5>

            <p className="text-[13px] md:text-[16px] text-slate-100 text-wrap text-center">
              Visa, MasterCard & Bank Transfers
            </p>

            <div className="flex justify-center w-fit">
              <Link className="w-full bg-primary-600 border border-primary-600 text-white hover:text-primary-600 hover:bg-transparent text-[11px] md:text-[14px] transition-colors ease-out duration-300 px-14 py-2 rounded-xl text-center">
                Contact Us
              </Link>
            </div>

            <div className=" w-full px-4 py-2 drop-shadow-[1px_1px_3px_#ea580f] select-none">
              <img src={cards_img} alt="" className="object-contain" />
            </div>
          </div>

          <div className=" bg-white bg-opacity-10 h-[400px] rounded-2xl overflow-hidden relative px-3 md:px-6 py-4 flex flex-col gap-y-5 place-items-center ">
            <h5 className="w-fit px-3 py-1 bg-white bg-opacity-5 text-center text-purple-600 rounded-2xl text-[13px] font-[550] border-white border border-opacity-15">
              Washer mobile app
            </h5>

            <p className="text-[13px] md:text-[16px] text-slate-100 text-wrap text-center">
              Become a WeWash washer
            </p>

            <div className="grid grid-cols-2 gap-x-2">
              <Link className="w-full bg-primary-600 border border-primary-600 text-white hover:text-primary-600 hover:bg-transparent text-[11px] md:text-[14px] transition-colors ease-out duration-300 px-10 py-2 rounded-xl text-center">
                For IOS
              </Link>

              <Link className="w-full bg-white border border-white text-primary-600 hover:text-white hover:bg-transparent text-[11px] md:text-[14px] transition-colors ease-out duration-300 px-10 py-2 rounded-xl text-center">
                For Android
              </Link>
            </div>

            <div className="absolute w-full px-4 h-[370px] -bottom-[33%] py-2 z-[1] drop-shadow-[-2px_2px_8px_#777] select-none">
              <img src={dashboard_lg} alt="" className="aspect-auto" />
            </div>
          </div>
        </div>

        <nav className="w-full px-0 lg:px-24 ">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-2 lg:gap-x-8 gap-y-8 py-9 border-b border-slate-700">
            <div className="basis-[98%] lg:basis-[30%]">
              <div className="logo flex flex-row place-items-center gap-x-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[50px] h-[20px] object-contain"
                />
                <span className="text-white text-[15px] font-[550] mt-2">
                  WeWash
                </span>
              </div>

              <div className="text-[13px] text-slate-400 pl-4 leading-[1.7] mt-3">
                WeWash is transforming car wash services across Africa by making
                them more convenient and accessible. Our innovative platform
                streamlines payments and ensures secure, hassle-free
                transactions, giving car owners and service providers a seamless
                experience.
              </div>
            </div>
            <div className="basis-[48%] lg:basis-[15%]">
              <h5 className="font-bold text-sm text-slate-50">Products</h5>

              <div className="mt-4">
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  User App
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Washer App
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Payment Methods
                </Link>
              </div>
            </div>
            <div className="basis-[48%] lg:basis-[15%]">
              <h5 className="font-bold text-sm text-slate-50">Features</h5>

              <div className="mt-4">
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Leaderboard
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Reviews
                </Link>
              </div>
            </div>
            <div className="basis-[48%] lg:basis-[15%]">
              <h5 className="font-bold text-sm text-slate-50">Contact Us</h5>

              <div className="mt-4">
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  info@wewash.com
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Instagram
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  X (Twitter)
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Facebook
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Telegram
                </Link>
              </div>
            </div>
            <div className="basis-[48%] lg:basis-[15%]">
              <h5 className="font-bold text-sm text-slate-50">Legal</h5>

              <div className="mt-4">
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Terms of use
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Privacy Policy
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  Data Protection Policy
                </Link>
                <Link className="block text-[13px] text-slate-400 mb-3 hover:text-slate-200 transition-colors duration-300 ease-in-out">
                  User Agreement Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-10 pb-0 text-center text-slate-300 text-[13px]">
            <p className="text-center mb-1">
              All Rights Reserved, &copy;{year}
            </p>
            <p className="text-center">
              Developed By{" "}
              <a
                href="http://onethought.ng"
                className="text-cyan-500 hover:text-cyan-300 duration-300 ease-in-out transition-colors"
              >
                OneThought Technologies
              </a>
              &trade;
            </p>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
