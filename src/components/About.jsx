import React from "react";
import shaded_img from "../assets/shaded.png";

const About = () => {
  return (
    <>
      <section className="about-section w-full py-10 h-[500px] relative overflow-hidden flex flex-row">
        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-cover"
            />
          </li>
        </ul>

        <ul className="img min-w-full h-full">
          <li>
            <img
              src={shaded_img}
              alt="Shaded"
              className="w-full h-[500px] object-cover"
            />
          </li>
        </ul>

        <div className="content w-full h-full flex flex-col justify-center place-items-center absolute z-[3] top-0 left-0 bg-white bg-opacity-80 base:py-14 md:py-20 px-3 base:px-12 md:px-24 gap-y-16">
          <p className="text-center px-4 py-[4px] text-primary-600 bg-black bg-opacity-10 font-[550] rounded-lg text-[12px] backdrop:blur-[2px]">
            For everyone
          </p>

          <h2></h2>
        </div>
      </section>
    </>
  );
};

export default About;
