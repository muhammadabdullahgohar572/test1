"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/img/logoadbullah (convert.io).jpg";
import ham from "../assets/img/ham.webp";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className=" ">
        <div className="p-7  sm:flex grid grid-cols-2 sm:justify-normal justify-between align-middle mx-auto shadow-xl bg-white">
          <div>
            <Image className="cursor-pointer " src={Logo} alt="logo img" />
          </div>

          <div className="md:flex hidden align-middle ml-[8%] mt-[3%] font-semibold">
            <span className="ml-[5%] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
              Universities
            </span>
            <span className="ml-[5%] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
              Courses
            </span>
            <span className="ml-[5%] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
              Community
            </span>
            <span className="ml-[5%] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
              News
            </span>
            <span className="ml-[5%] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
              About
            </span>
          </div>

          {/* Mobile buttons */}
          <div className="sm:hidden md:flex hidden my-[2%] align-middle sm:ml-[12%]">
            <button className="bg-yellow-400 md:block sm:hidden ml-[8%]  hover:bg-red-700 p-2 text-white">
              LOGIN
            </button>
            <button className="bg-yellow-400 md:block sm:hidden hover:bg-red-700 text-white ml-[10%] p-2">
              SIGNUP
            </button>
          </div>



          {/* Hamburger menu */}
          <div className="md:hidden justify-end block">
            <Image
              src={ham}
              onClick={() => setNav(!nav)}
              alt=""
              className="w-[70%] sm:w-[30%] xxss:w-[40%] xx:w-[50%] sm:ml-[100%] ml-[40%]"
            />
          </div>
        </div>
      </div>











      {nav ? (
        <>
          <div className="fixed top-0 left-0  p-[5%] bottom-0 bg-white shadow-xl transition-shadow  w-[100%] h-screen md:hidden duration-300">
            <div className="flex justify-between mt-[3%]">
              <div>
                <Image className="cursor-pointer " src={Logo} alt="logo img" />
              </div>

              <div>
                <h1
                  onClick={() => setNav(false)}
                  className="font-black text-[70px]"
                >
                  x
                </h1>
              </div>
            </div>

            <div className="mt-[10%] relative">
              <div className="md:hidden block align-middle ml-[8%] mt-[3%] font-semibold">
                <span className="ml-[5%] mt-[30px] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
                  Universities
                </span>{" "}
                <br />
                <br />
                <span className="ml-[5%] mt-[30px] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
                  Courses
                </span>{" "}
                <br />
                <br />
                <span className="ml-[5%] mt-[30px] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
                  Community
                </span>{" "}
                <br />
                <br />
                <span className="ml-[5%] mt-[30px] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
                  News
                </span>{" "}
                <br />
                <br />
                <span className="ml-[5%] mt-[30px] hover:text-purple-700 hover:underline-offset-1 hover:underline cursor-pointer">
                  About
                </span>{" "}
                <br />
                <br />
              </div>
            </div>

            <div className=" md:hidden flex my-[2%] align-middle sm:ml-[17%]">
              <button className="bg-yellow-400 md:hidden block ml-[10%] p-3 hover:bg-red-700 text-white">
                LOGIN
              </button>
              <button className="bg-yellow-400 md:hidden block hover:bg-red-700 text-white ml-[10%] p-3">
                SIGNUP
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
