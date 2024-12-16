import React, { useEffect, useState, useRef } from "react";
import shaded_img from "../assets/shaded.png";
import wash_one from "../assets/wash_one.webp";
import wash_two from "../assets/wash_two.webp";
import dashboard_slant from "../assets/Dashboard-14-Iphone-Pro-MockupA-.png";
import checkout_straight from "../assets/checkout_large.png";
import paystack from "../assets/paystack.png";
import access from "../assets/access.png";
import visa from "../assets/visa.png/";
import remita from "../assets/remita.webp";
import wema from "../assets/wema.webp";
import stripe from "../assets/stripe.png";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const testamentsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleAutoSlide();
      setActiveDot();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleAutoSlide = () => {
    const container = testamentsRef.current;
    if (!container) return;

    const totalItems = container.children.length;
    const scrollWidth = container.scrollWidth / totalItems;

    container.scrollTo({
      left: currentIndex * scrollWidth,
      behavior: "smooth",
    });

    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const setActiveDot = () => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.classList.replace("bg-primary-500", "bg-transparent");
      dot.classList.replace("border-gray-300", "border-primary-500");
    });

    dots[currentIndex].classList.replace("bg-transparent", "bg-primary-500");
    dots[currentIndex].classList.replace(
      "border-primary-500",
      "border-gray-300"
    );
  };

  return (
    <>
      <div className="w-full py-10 base:py-14 md:py-20 px-6 base:px-12 md:px-24 block">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:justify-between mb-10">
          <div className="block">
            <Fade cascade triggerOnce={true}>
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
            </Fade>
          </div>

          <div className="block h-full">
            <Fade cascade triggerOnce={true}>
              <img
                src={wash_one}
                alt=""
                className="w-full h-full object-fill"
                fetchpriority="high"
              />
            </Fade>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:justify-between">
          <div className="block">
            <Fade cascade triggerOnce={true}>
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
            </Fade>
          </div>

          <div className="block h-full">
            <Fade cascade triggerOnce={true}>
              <img
                src={wash_two}
                alt=""
                className="w-full h-full object-fill"
                fetchpriority="high"
              />
            </Fade>
          </div>
        </div>
      </div>

      <section className="products bg-[#0A0A0A] w-full py-10 base:py-14 md:py-20 px-6 base:px-12 md:px-24">
        <Fade cascade triggerOnce={true}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-24 lg:justify-between mb-10">
            <div className="block">
              <p className="text-center w-fit px-4 py-[4px] text-purple-600 bg-white bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
                For Washers And Individuals
              </p>

              <h2 className="text-white font-[650] text-[1rem] md:text-[1.4rem] my-[20px] flex flex-row gap-x-3">
                Mobile App
              </h2>

              <p className="text-stone-300 text-[16px]">
                Easily manage your car wash payments and earnings. Accept
                payments through multiple platforms and withdraw your earnings
                directly to your bank account—all in one app.
              </p>

              <ul className="py-8 px-3 grid grid-cols-2 max-w-[400px] gap-3">
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
              <Fade cascade triggerOnce={true}>
                <img
                  src={dashboard_slant}
                  alt=""
                  className="w-full h-full object-contain"
                  fetchpriority="high"
                />
              </Fade>
            </div>
          </div>
        </Fade>

        <Fade cascade triggerOnce={true}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-24 lg:justify-between mb-10">
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
                transfers. Get funds directly into your bank account with ease
                and reliability.
              </p>

              <ul className="py-8 px-3 grid grid-cols-2 max-w-[600px] gap-3">
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
                className="px-[19px] py-[12px] text-primary-600 bg-transparent text-[15px] font-[550] border border-transparent hover:border hover:border-white hover:text-white ease-in-out duration-300 transition-[border]"
              >
                Learn More
              </Link>
            </div>

            <div className="flex h-full justify-center items-center drop-shadow-md">
              <img
                src={checkout_straight}
                alt=""
                className="w-full h-[500px] object-contain"
                fetchpriority="high"
              />
            </div>
          </div>
        </Fade>
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
            Seamless Wash Experience
          </h3>

          <p className="text-slate-700 text-center max-w-[800px] leading-[1.9]">
            As an individual we make it easy for you to order for a wash, choose
            prefered wash package, and monitor your wash. For washers we make it
            easy for your to accept wash requests with location convenience and
            dynamic payment recieving process.
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

      <div
        id="about"
        className="w-full py-10 base:py-14 md:py-20 px-6 base:px-12 md:px-24"
      >
        <h3 className="text-[1.7rem] font-[600] mb-6">Our Story</h3>

        <p className="text-base text-slate-800 leading-[1.6] max-w-[900px] mb-4">
          WeWash was born from a simple vision—to revolutionize the car wash
          industry by making payments and earnings seamless, transparent, and
          efficient. We understand the challenges washers and individuals face
          in managing transactions and earnings daily, and we set out to
          simplify these processes through innovative and user-friendly
          solutions.
        </p>
        <p className="text-base text-slate-800 leading-[1.6] max-w-[900px] mb-8">
          At WeWash, we believe in collaboration and empowerment. Our platform
          is designed to support car washers, individuals, and businesses alike,
          ensuring that everyone can focus on what truly matters—providing and
          enjoying quality car wash services. By leveraging cutting-edge
          technology, WeWash aims to create a connected ecosystem that fosters
          growth, trust, and reliability in the car wash industry.
        </p>

        <Link className="text-[13px] text-white bg-primary-600 px-[22px] py-[12px] font-[550] rounded-lg">
          <span>Contact Us</span>
        </Link>
      </div>

      <div className="bg-gray-50 w-full py-10 base:py-14 md:py-20 px-5 base:px-12 md:px-24 flex flex-col justify-center place-items-center gap-y-8">
        <h4 className="text-black text-[0.9rem] base:text-[1.4rem] md:text-[1.8rem] font-[650] text-center">
          Here's what a few people have said about us
        </h4>
        <div
          className="w-full testaments flex flex-row overflow-x-scroll"
          ref={testamentsRef}
        >
          <div className="testament w-full flex justify-center place-items-center flex-col gap-y-8 text-center flex-shrink-0">
            <p className="leading-md text-slate-600 text-[16px] max-w-[450px] text-center">
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur neque ipsum rerum quam in nulla soluta ratione beatae,
              sed fuga. "
            </p>

            <div className="text-center">
              <p className="text-gray-800 text-[16px] mb-2 font-[700]">Sage</p>
              <p className="text-slate-500 text-xs">Mobile App User</p>
            </div>
          </div>

          <div className="testament w-full flex justify-center place-items-center flex-col gap-y-8 text-center flex-shrink-0 py-2">
            <p className="leading-md text-slate-600 text-[16px] max-w-[450px] text-center">
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur neque ipsum rerum quam in nulla soluta ratione beatae,
              sed fuga. "
            </p>

            <div className="text-center">
              <p className="text-gray-800 text-[16px] mb-2 font-[700]">Son</p>
              <p className="text-slate-500 text-xs">Washer App User</p>
            </div>
          </div>

          <div className="testament w-full flex justify-center place-items-center flex-col gap-y-8 text-center flex-shrink-0 py-2">
            <p className="leading-md text-slate-600 text-[16px] max-w-[450px] text-center">
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur neque ipsum rerum quam in nulla soluta ratione beatae,
              sed fuga. "
            </p>

            <div className="text-center">
              <p className="text-gray-800 text-[16px] mb-2 font-[700]">Ren</p>
              <p className="text-slate-500 text-xs">Mobile App User</p>
            </div>
          </div>

          <div className="testament w-full flex justify-center place-items-center flex-col gap-y-8 text-center flex-shrink-0 py-2">
            <p className="leading-md text-slate-600 text-[16px] max-w-[450px] text-center">
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur neque ipsum rerum quam in nulla soluta ratione beatae,
              sed fuga. "
            </p>

            <div className="text-center">
              <p className="text-gray-800 text-[16px] mb-2 font-[700]">Jin</p>
              <p className="text-slate-500 text-xs">Washer App User</p>
            </div>
          </div>
        </div>

        <div className="dots flex flex-row gap-x-2 justify-center p-2 place-items-center w-fit">
          <div className="dot w-[15px] h-[15px] bg-primary-500 border-[3px] border-gray-300 rounded-full cursor-pointer transition-all duration-500 ease-in-out"></div>
          <div className="dot w-[15px] h-[15px] bg-transparent border-[3px] border-primary-500 rounded-full cursor-pointer transition-all duration-500 ease-in-out"></div>
          <div className="dot w-[15px] h-[15px] bg-transparent border-[3px] border-primary-500 rounded-full cursor-pointer transition-all duration-500 ease-in-out"></div>
          <div className="dot w-[15px] h-[15px] bg-transparent border-[3px] border-primary-500 rounded-full cursor-pointer transition-all duration-500 ease-in-out"></div>
        </div>
      </div>

      <div className="accolades bg-white w-full py-10 base:py-14 md:py-16 px-5 base:px-12 md:px-32 flex flex-col lg:flex-row gap-x-8 gap-y-4 place-items-center">
        <div className="h-fit basis-[90%] shrink lg:basis-[40%] grow">
          <p className="text-center w-fit px-4 py-[4px] text-indigo-600 bg-black bg-opacity-10 font-[650] rounded-lg text-[13px] backdrop:blur-[2px]">
            For Clients
          </p>

          <h2 className="text-black font-[650] text-[1.3rem] md:text-[2.25rem] my-[20px] flex flex-row gap-x-3">
            Transform how you manage car wash services.
          </h2>

          <p className="text-stone-600 text-[16px] leading-[1.8] mb-5">
            Join countless car owners and service providers who trust WeWash for
            seamless, efficient, and reliable car wash management.
          </p>

          <Link className="text-[13px] text-white bg-primary-600 px-[22px] py-[12px] font-[550] rounded-lg">
            <span>Contact Us</span>
          </Link>
        </div>
        <div className="h-fit basis-[100%] shrink lg:basis-[60%] grow py-3 flex flex-col gap-y-1">
          <div className="scroll-container flex flex-row mx-auto w-[100%] gap-x-4 px-[14px] py-[3px] bg-white">
            <ul className="scroll-ell flex flex-row gap-x-2 place-items-center flex-shrink-0">
              <li>
                <img
                  src={paystack}
                  alt="Paystack"
                  className="w-[200px] h-[30px] object-contain"
                />
              </li>
              <li>
                <img
                  src={remita}
                  alt="Remita"
                  className="w-[200px] h-[30px] object-contain"
                />
              </li>
              <li>
                <img
                  src={visa}
                  alt="Visa"
                  className="w-[200px] h-[20px] object-contain"
                />
              </li>
              <li>
                <img
                  src={wema}
                  alt="Wema"
                  className="w-[200px] h-[60px] object-contain"
                />
              </li>
              <li>
                <img
                  src={stripe}
                  alt="Stripe"
                  className="w-[200px] h-[30px] object-contain"
                />
              </li>
            </ul>
            <ul className="scroll-ell flex flex-row gap-x-2 place-items-center flex-shrink-0">
              <li>
                <img
                  src={paystack}
                  alt="Paystack"
                  className="w-[200px] h-[40px] object-contain"
                />
              </li>
              <li>
                <img
                  src={remita}
                  alt="Remita"
                  className="w-[200px] h-[40px] object-contain"
                />
              </li>
              <li>
                <img
                  src={visa}
                  alt="Visa"
                  className="w-[200px] h-[30px] object-contain"
                />
              </li>
              <li>
                <img
                  src={wema}
                  alt="Wema"
                  className="w-[200px] h-[80px] object-contain"
                />
              </li>
              <li>
                <img
                  src={stripe}
                  alt="Stripe"
                  className="w-[200px] h-[40px] object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
