"use Client ";
import Image from "next/image";
import Imge1 from "../assets/img/Hero/Rectangle.png";

import mag from "../assets/img/hero1/Group.png";
import arrow from "../assets/img/hero1/Sideways_Arrow_Icon.png";
import home from "../assets/img/hero1/Group (1).png";
import cal from "../assets/img/hero1/solar_calendar-search-bold-duotone.png";
const Hero1 = () => {
  const Home = () => {
    alert("HI");
  };
  return (
    <>
      <div>
        <div className="absolute -z-30">
          <Image
            src={Imge1}
            alt=""
            className="mt-[10%] sm:mt-0 -z-30 sm:h-96"
            srcset=""
          />
        </div>

        <div className=" hidden sm:grid -z-30  mt-[10%] ml-[20%] sm:ml-0  relative sm:grid-cols-3">
          <div className="p-[5%] sm:mt-[30%] ml-[5%] mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
            <div>
              <Image src={mag} className="" alt="mag" />
            </div>

            <div  className=" cursor-pointer ml-[5%]">
              <h1 className="text-sm font-semibold cursor-pointer">Find a course</h1>
              <span>
                Search by subject, course
                <br />
                or region to find
                <br />
                the right course for you.
                <br />
              </span>
              <br />
              <div className=" cursor-pointer flex">
                <button className="bg-yellow-300 cursor-pointer text-white p-1">
                  GET STARTED
                </button>
                <Image
                  src={arrow}
                  className="w-[20%] caret-yellow-300 cursor-pointer"
                  alt="arrow"
                />
              </div>
            </div>
          </div>

          <div className="p-[5%] sm:mt-[30%]  ml-3 mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
            <div>
              <Image src={cal} alt="home" />
            </div>

            <div className="ml-[5%]">
              <h1 className="text-sm font-semibold">Find a course</h1>
              <span>
                Search by subject, course
                <br />
                or region to find
                <br />
                the right course for you.
                <br />
              </span>
              <br />
              <div className="flex">
                <button className="bg-yellow-300 text-white p-1">
                  GET STARTED
                </button>
                <Image
                  src={arrow}
                  className="w-[20%] caret-yellow-300"
                  alt="arrow"
                />
              </div>
            </div>
          </div>

          <div className="p-[5%] mr-[5%] sm:mt-[30%] ml-3 mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
            <div>
              <Image src={home} className="sm:w-[100%]" alt="home" />
            </div>

            <div className="ml-[10%]">
              <h1 className="text-sm font-semibold">Find a course</h1>
              <span>
                Search by subject, course
                <br />
                or region to find
                <br />
                the right course for you.
                <br />
              </span>
              <br />
              <div className="flex">
                <button className="bg-yellow-300 cursor-pointer text-white p-1">
                  GET STARTED
                </button>
                <Image
                  src={arrow}
                  className="w-[20%] caret-yellow-300"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>















        
      </div>

      <div className=" block sm:hidden -z-30  mt-[50%] ml-[10%] sm:ml-0   sm:grid-cols-3">
        <div className="p-[5%] mr-[10%] sm:mt-0 mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
          <div>
            <Image src={mag} className="" alt="mag" />
          </div>

          <div className="mt-[5%] ml-[5%]">
            <h1 className="text-sm font-semibold">Find a course</h1>
            <span>
              Search by subject, course
              <br />
              or region to find
              <br />
              the right course for you.
              <br />
            </span>
            <br />
            <div className=" flex">
              <button className="bg-yellow-300 text-white p-1">
                GET STARTED
              </button>
              <Image
                src={arrow}
                className="w-[20%] caret-yellow-300"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div className="p-[5%] mr-[10%] sm:mt-0 mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
          <div>
            <Image src={cal} alt="home" />
          </div>

          <div className="mt-[5%]  ml-[5%]">
            <h1 className="text-sm font-semibold">Find a course</h1>
            <span>
              Search by subject, course
              <br />
              or region to find
              <br />
              the right course for you.
              <br />
            </span>
            <br />
            <div className="flex">
              <button className="bg-yellow-300 text-white p-1">
                GET STARTED
              </button>
              <Image
                src={arrow}
                className="w-[20%] caret-yellow-300"
                alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className="p-[5%] mr-[10%] sm:mt-0 mt-[10%] shadow-2xl grid sm:flex sm:justify-between bg-white">
          <div>
            <Image src={home} className="sm:w-[100%]" alt="home" />
          </div>

          <div className=" mt-[5%] ml-[10%]">
            <h1 className="text-sm font-semibold">Find a course</h1>
            <span>
              Search by subject, course
              <br />
              or region to find
              <br />
              the right course for you.
              <br />
            </span>
            <br />
            <div className="flex">
              <button className="bg-yellow-300 text-white p-1">
                GET STARTED
              </button>
              <Image
                src={arrow}
                className="w-[20%] caret-yellow-300"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero1;
