import React from "react";
import logo from "../assets/logo.png";
import logo_white from "../assets/logo-white.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header w-full flex justify-between place-items-center py-[24px] px-[32px] base:px-[44px] lg:px-[64px] xl:px-[100px]">
      <section className="logo" name="logo" title="logo">
        <Link
          to={"/"}
          className="flex gap-x-2 place-items-center justify-center relative h-fit"
        >
          <img
            src={logo_white}
            alt="WeWash"
            className="w-[35px] h-[35px] object-contain"
          />
          <span className="text-white text-[20px] font-[550] absolute bottom-[-5%] translate-y-[5%] right-[-85px]">
            WeWash
          </span>
        </Link>
      </section>

      <nav className="navbar base:flex gap-x-12 hidden" id="navbar">
        <Link
          to={"/"}
          className="text-[14px] text-white hover:text-primary-500"
        >
          Home
        </Link>

        <Link
          to={"/products"}
          className="text-[14px] text-white hover:text-primary-500"
        >
          Product
        </Link>

        <Link
          to={"/#about"}
          className="text-[14px] text-white hover:text-primary-500"
        >
          About
        </Link>

        <Link
          to={"/#contact"}
          className="text-[14px] text-white hover:text-primary-500"
        >
          Contact
        </Link>
      </nav>

      <div className="toggle-menu block base:hidden text-white font-[550] text-[24px] cursor-pointer py-[10px] px-[14px] hover:bg-gray-100 transition-colors ease-in-out duration-300 hover:transition-colors hover:duration-300 hover:ease-in-out ">
        <HiOutlineMenuAlt3 />
      </div>
    </header>
  );
};

export default Navbar;
