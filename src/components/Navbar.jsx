import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import logo_white from "../assets/logo-white.png";
import logo_blue from "../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const height = window.innerHeight;

    let header = document.querySelector(".header");
    let headerLogo = document.querySelector(".header-logo");
    const texts = document.querySelectorAll(".blue-text");

    const scrollAction = (e) => {
      let currentScroll = window.scrollY;

      if (currentScroll > height) {
        header.classList.add("scrolled");
        headerLogo.setAttribute("src", logo_blue);
        texts.forEach((text) => {
          text.classList.replace("text-white", "text-primary-600");
        });
      } else {
        header.classList.remove("scrolled");
        headerLogo.setAttribute("src", logo_white);
        texts.forEach((text) => {
          text.classList.replace("text-primary-600", "text-white");
        });
      }
    };
    window.addEventListener("scroll", scrollAction);

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);
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
            className="w-[35px] h-[35px] object-contain header-logo"
          />
          <span className="text-white text-[20px] font-[550] absolute bottom-[-5%] translate-y-[5%] right-[-85px] blue-text">
            WeWash
          </span>
        </Link>
      </section>

      <nav className="navbar base:flex gap-x-12 hidden" id="navbar">
        <Link
          to={"/"}
          className="text-[15px] font-[650] text-white hover:text-primary-500 blue-text"
        >
          Home
        </Link>

        <Link
          to={"/products"}
          className="text-[15px] font-[650] text-white hover:text-primary-500 blue-text"
        >
          Product
        </Link>

        <a
          href={"#about"}
          className="text-[15px] font-[650] text-white hover:text-primary-500 blue-text"
        >
          About
        </a>

        <Link
          to={"#contact"}
          className="text-[15px] font-[650] text-white hover:text-primary-500 blue-text"
        >
          Contact
        </Link>
      </nav>

      <div className="toggle-menu block base:hidden text-white blue-text font-[550] text-[24px] cursor-pointer py-[10px] px-[14px] hover:bg-stone-800 hover:bg-opacity-10 transition-colors ease-in-out duration-300 hover:transition-colors hover:duration-300 hover:ease-in-out ">
        <HiOutlineMenuAlt3 />
      </div>
    </header>
  );
};

export default Navbar;
