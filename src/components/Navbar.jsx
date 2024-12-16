import React, { useEffect, useState, useRef } from "react";
import logo_white from "../assets/logo-white.png";
import logo_blue from "../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = window.innerHeight;
    setIsScrolled(scrollTop > threshold);
  };

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.href = "/#about";
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // Observe when scrolling is done
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSideBarState(false);
            observer.disconnect();
          }
        },
        { threshold: 0.5 } // Adjust threshold for visibility detection
      );

      observer.observe(target);
    }
  };

  useEffect(() => {
    const hash = window.location.hash; // Get the current hash from the URL
    if (hash === "#about") {
      const target = document.getElementById("about");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`header w-full flex justify-between items-center py-6 px-8 base:px-11 lg:px-16 xl:px-24 ${
          isScrolled ? "scrolled bg-white shadow-md" : ""
        }`}
      >
        <section className="logo" name="logo" title="logo">
          <Link to="/" className="flex gap-x-2 items-center relative h-fit">
            <img
              ref={logoRef}
              src={isScrolled ? logo_blue : logo_white}
              alt="WeWash"
              className="w-[35px] h-[35px] object-contain header-logo"
            />
            <span
              className={`text-[20px] font-[550] absolute bottom-[-5%] translate-y-[5%] right-[-85px] ${
                isScrolled ? "text-primary-600" : "text-white"
              }`}
            >
              WeWash
            </span>
          </Link>
        </section>

        <nav className="navbar base:flex gap-x-12 hidden" id="navbar">
          <Link
            to="/"
            className={`text-[15px] font-[650] hover:text-primary-500 ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/products"
            className={`text-[15px] font-[650] hover:text-primary-500 ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
          >
            Product
          </Link>

          <a
            href="/#about"
            className={`text-[15px] font-[650] hover:text-primary-500 ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
            onClick={(e) => handleAnchorClick(e, "about")}
          >
            About
          </a>

          <Link
            to="#contact"
            className={`text-[15px] font-[650] hover:text-primary-500 ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div
          className={`toggle-menu block base:hidden ${
            isScrolled ? "text-primary-600" : "text-white"
          } font-[550] text-[24px] cursor-pointer py-[10px] px-[14px] hover:bg-stone-800 hover:bg-opacity-10 transition-colors duration-300`}
          onClick={() => setSideBarState(!sideBarState)}
        >
          <HiOutlineMenuAlt3 />
        </div>
      </header>
      <aside
        className={`aside w-full fixed bg-white z-[31] transition-[height,_width] duration-300 ease-in-out overflow-hidden block`}
        style={{
          top: 0,
          height: sideBarState ? `100dvh` : `0px`,
        }}
      >
        {sideBarState && (
          <div className="content w-full h-full px-6 py-10 flex justify-center flex-col items-center gap-y-8">
            <div
              className="absolute top-0 right-0 text-stone-800 text-[25px] px-4 py-3 "
              onClick={() => setSideBarState(false)}
              role="button"
            >
              <IoMdClose />
            </div>
            <Link
              to={"/"}
              className="text-[18px] font-[650] text-primary-700 block"
            >
              Home
            </Link>

            <Link
              to={"/products"}
              className="text-[18px] font-[650] text-primary-700 block"
            >
              Products
            </Link>

            <a
              href={"/#about"}
              className="text-[18px] font-[650] text-primary-700 block"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              About
            </a>

            <a
              href={"#contact"}
              className="text-[18px] font-[650] text-primary-700 block"
            >
              Contact Us
            </a>
          </div>
        )}
      </aside>
    </>
  );
};

export default Navbar;
