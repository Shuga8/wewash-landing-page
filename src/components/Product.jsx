import React from "react";
import Navbar from "./Navbar";
import StarsLayout from "./landing/StarsLayout";

const Product = () => {
  return (
    <>
      <Navbar />
      <section className="products hero w-full h-[100dvh] relative">
        <div className="absolute w-[100vw] h-[100vh] z-[2] top-0 left-0 earth-3d">
          <StarsLayout />
        </div>
        <div className="content w-full h-full flex justify-center items-center flex-col gap-y-8 text-wrap px-12 base:px-32 xl:px-48 py-3 absolute z-[10]"></div>
      </section>
    </>
  );
};

export default Product;
