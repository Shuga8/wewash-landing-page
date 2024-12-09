import React from "react";
import { Hero, Navbar, About, Footer } from "./index";
import flutterwave from "../assets/flutterwave.png";
import visa from "../assets/visa.png";
import mastarcard from "../assets/mastarcard.png";
import verve from "../assets/verve.png";
import paystack from "../assets/paystack.png";
import remita from "../assets/remita.webp";
import stripe from "../assets/stripe.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="scroll-container flex flex-row mx-auto w-[100%] gap-x-14 md:gap-x-24 px-[14px] py-[30px] bg-white">
        <ul className="scroll-ell flex flex-row gap-x-24 place-items-center flex-shrink-0">
          <li>
            <img
              src={flutterwave}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>

          <li>
            <img
              src={visa}
              className="w-[150px] h-[30px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={mastarcard}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={verve}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={paystack}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={stripe}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={remita}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
        </ul>
        <ul
          className="scroll-el flex flex-row gap-x-24 place-items-center flex-shrink-0"
          aria-hidden="true"
        >
          <li>
            <img
              src={flutterwave}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>

          <li>
            <img
              src={visa}
              className="w-[150px] h-[30px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={mastarcard}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={verve}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={paystack}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={stripe}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
          <li>
            <img
              src={remita}
              className="w-[150px] h-[50px] object-contain"
              alt="marquee_image"
            />
          </li>
        </ul>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
