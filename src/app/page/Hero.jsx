import Image from "next/image";
import hero from "../assets/img/Hero/istockphoto-1209819604-612x612 1.png";
const Hero = () => {
  return (
    <>
      {" "}
      <br />
      <br /> <br />
      
     
      <div className="absolute -z-30">
        <Image src={hero} alt="" className="w-screen  h-[50%]" srcset="" />
      </div>
      <br />
      <br />
      <div className="hidden sm:block">
      <br />
      <br />  <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      <div className=" text-center align-middle  ">
        <div className="">
          <span className="text-white  font-extrabold text-2xl sm:mt-[5%]  sm:text-4xl ">
            Find Your <span className="bg-yellow-400 text-white">Future</span>
            Today!
          </span>
          <br />
          <br />

          <span className="text-white  font-extrabold text-lg mt-[5%] sm:mt-[5%]  sm:text-xl">The Ultimate Guide to Universities Worldwide</span>
        </div>
        {/* text */}
        <br />
        <br /> <br />
        <div className="sm:block hidden">
          <br /> <br />
          <br /> <br />
          <br />
          <br /> <br />
          <br /> <br />
         
          
          
         
        </div>
        <div className="mt-5 sm:mt-6 p-3  sm:p-0">
          <p>Explore your options and make informed decisions with our</p>
          <p>comprehensive guide to universities around the world. Discover</p>
          <p>top-ranked institutions, explore diverse programs, and connect</p>
          <p>
            with like-minded individuals to build your academic future. With
          </p>
          <p>
            easy-to-use search tools, in-depth profiles, and trusted ratings
          </p>
          <p>and reviews, we provide everything you need to make the right</p>
          <p>
            choice for your academic journey. Start your search today and find
          </p>
          <p> your perfect fit!</p>
        </div>
      </div>
      <div className="text-center mt-[5%]">
        <button className="bg-yellow-400 p-[1%] text-white">GET STARTED</button>
      </div>
    </>
  );
};

export default Hero;
