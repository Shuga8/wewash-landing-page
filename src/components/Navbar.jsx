import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="header w-full  py-[20px] px-[10px] base:px-[24px] xl:px-[32px]">
      <section
        className="logo flex px-3 place-items-center"
        name="logo"
        title="logo"
      >
        <img
          src={logo}
          alt="WeWash"
          className="w-[50px] h-[50px] object-contain"
        />
      </section>
    </header>
  );
};

export default Navbar;
