"use client";
import Image from "next/image";
import Line from "../assets/img/hero1/Rectangle 11.png";
import No1 from "../assets/img/Campus/istockphoto-1254127323-170667a.png";
import No2 from "../assets/img/Campus/istockphoto-1399490449-170667a.png";
import No3 from "../assets/img/Campus/istockphoto-862661268-170667a 1.png";
import arrow from "../assets/img/hero1/Sideways_Arrow_Icon.png";
import No4 from "../assets/img/courese/istockphoto-1192947841-170667a.png";
import No5 from "../assets/img/courese/istockphoto-1226452601-170667a.png";
import No6 from "../assets/img/courese/istockphoto-1396019181-170667a.png";
import no4 from "../assets/img/Campus/istockphoto-1398009285-612x612 1.png";
import no5 from "../assets/img/Campus/ic_twotone-mail.png";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Ranking = () => {
  const Home = () => {
    toast.success("Hi !", {
      position: "top-center",
    });
  };

  const Homee = () => {
    toast.success("Fine", {
      position: "top-center",
    });
  };
  return (
    <>
      <div className="mt-[10%] text-center">
        <div className="">
          <h1 className="font-semibold text-2xl">Top ranking universities</h1>
        </div>
        <div className=" mt-[5%] ml-[30%] sm:ml-[40%]">
          <Image src={Line} alt="line" />
        </div>
      </div>

      <div className="mt-[10%] grid cursor-pointer  sm:flex mx-[10%] sm:mx-[5%]">
        <div className="">
          <Image src={No1} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl cursor-pointer  font-semibold">
            {" "}
            Stanford University
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300 cursor-pointer  text-lg font-semibold "
            >
              Get Started
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>

        <div className="sm:ml-[5%] mt-[10%] sm:mt-0">
          <Image src={No2} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl cursor-pointer  font-semibold">
            Stallion University
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300  cursor-pointer text-lg font-semibold "
            >
              Get Started
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>
        <div className="sm:ml-[5%] mt-[10%] sm:mt-0">
          <Image src={No3} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl font-semibold cursor-pointer ">
            {" "}
            Covenant University
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300 cursor-pointer  text-lg font-semibold "
            >
              Get Started
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>
      </div>

      <div className="mt-[10%] text-center ">
        <button
          onClick={Home}
          className="border-4 border-yellow-200 bg-red-500 text-yellow-300 p-2 font-bold text-xl"
        >
          See Alll
        </button>
        <div className="mt-[5%] text-center">
          <div className="">
            <h1 className="font-semibold text-2xl">Most popular courses</h1>
          </div>
          <div className=" mt-[5%] ml-[30%] sm:ml-[40%]">
            <Image src={Line} alt="line" />
          </div>
        </div>
      </div>

      <div className="mt-[10%] grid cursor-pointer  sm:flex mx-[10%] sm:mx-[5%]">
        <div className="">
          <Image src={No4} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl cursor-pointer  font-semibold">
            User experience design
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300 cursor-pointer  text-lg font-semibold "
            >
              SEE COURSE GUIDE
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>

        <div className="sm:ml-[5%] mt-[10%] sm:mt-0">
          <Image src={No5} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl cursor-pointer  font-semibold">
            Computer science
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300  cursor-pointer text-lg font-semibold "
            >
              SEE COURSE GUIDE
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>

        <div className="sm:ml-[5%]  mt-[10%] sm:mt-0">
          <Image src={No6} alt="No1" className="cursor-pointer " />
          <h1 className="text-xl font-semibold cursor-pointer ">
            {" "}
            Business management
          </h1>
          <div className="flex">
            <span
              onClick={Homee}
              className="text-yellow-300 cursor-pointer  text-lg font-semibold "
            >
              SEE COURSE GUIDE
            </span>
            <Image
              src={arrow}
              alt="No1"
              className="w-[10%] cursor-pointer  ml-[10%]"
            />
          </div>
        </div>
      </div>

      <div className="mt-[10%] text-center ">
        <button
          onClick={Home}
          className="border-4 border-yellow-200 bg-red-500 text-yellow-300 p-2 font-bold text-xl"
        >
          See All
        </button>
      </div>

      <hr className="border  border-yellow-500 mt-[3%]" />

      <div className=" ml-[10%]   sm:flex mt-[5%]  sm:mx-[5%]">
        <div>
          <Image src={no4} alt="no4" className="sm:w-[70%] w-[80%] h-[]" />
        </div>
        <div className="mt-[5%] ">
          <h1 className="text-2xl font-bold">We re here to help</h1>
          <span>
            Read through our FAQs and, if you can t <br />
            find what you re looking for, our experts will be
            <br /> happy to answer your questions.
          </span>

          <div className="flex mt-[5%]">
            <div>
              <button
                onClick={Home}
                className="border-4 border-yellow-200 bg-red-500 text-yellow-300 p-2 font-bold text-xl"
              >
                See All
              </button>
            </div>

            <div className="mt-[5%] flex ml-[5%]">
              <Image src={no5} alt="bok " className="w-[10%] h-[50%]" />

              <span className="text-yellow-300 ml-[5%]">ASK A QUESTION</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Ranking;
