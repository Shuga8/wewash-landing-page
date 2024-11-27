import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header w-full flex justify-between  py-[24px] px-[32px] base:px-[44px] lg:px-[64px] xl:px-[100px]">
      <section className="logo" name="logo" title="logo">
        <Link to={"/"} className="flex gap-x-3 place-items-center">
          <img
            src={logo}
            alt="WeWash"
            className="w-[25px] h-[25px] object-contain"
          />
          <span className="text-white text-[14px]">WeWash</span>
        </Link>
      </section>

      <nav className="navbar flex gap-x-12" id="navbar">
        <Link to={"/"} className="text-[14px]">
          Home
        </Link>

        <Link to={"/product"} className="text-[14px]">
          Product
        </Link>

        <Link to={"/about"} className="text-[14px]">
          About
        </Link>

        <Link to={"/contact"} className="text-[14px]">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
