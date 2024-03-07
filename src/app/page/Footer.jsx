import Image from "next/image";
import icon from "../assets/img/Hero/Frame 81.png";
const Footer = () => {
  return (
    <>
      <div className="mt-[10%] bg-[#3F4359]  ">
        <div className="bg-[#3F4359] p-[5%] sm:p-[3%] text-center py-[5%]">
          <h1 className="text-white text-xl font-semibold">
            Subscribe to our newsletter
          </h1>
          <div className="mt-[3%]">
            <span className="text-white">
              Get expert advice for your journey to university delivered to your
              <br />
              inbox each month.
              {/* It's */}
              short, and worthwhile – we promise!
            </span>
          </div>
          <div className="mt-[3%]">
            <input
              type="email"
              placeholder="Please Fill Email"
              className="bg-white text-black p-[2%] w-[50%]"
            />
          </div>

          <div className="mt-[3%]">
            <input type="checkbox" name="" id="" className="p-[10%]  h-[50%]" />

            <span className="text-white text-lg font-semibold sm:ml-[3%]">
              I confirm I am over 16 and I agree to the Terms and Conditions and
              Privacy Notice.
            </span>
          </div>

          <div className="mt-[3%]">
            <button className="bg-[#999894] p-[2%] text-white">
              SUBSCRIBE NOW
            </button>
          </div>

          <hr className="bg-white mt-[5%]" />

          <div className="mt-[10%] sm:mt-[3%] sm:ml-[30%]">
            <Image src={icon} alt="fb" />
          </div>
        </div>
        <div className="mt-[3%]  grid sm:flex sm:ml-0 ml-[10%]">
          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            About{" "}
          </span>
          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            Contact us{" "}
          </span>
          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            {" "}
            FAQS{" "}
          </span>

          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            {" "}
            Ters and conditions
          </span>

          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            {" "}
            Cookie poliy
          </span>

          <span className="text-white cursor-pointer sm:mt-0 mt-[15%] hover:text-yellow-400 hover:underline underline-offset-1 sm:ml-[5%]">
            {" "}
            Privacy
          </span>
        </div>

        <div className="text-center mt-[3%]">
            <span className="text-white font-semibold text-lg">Copyright © 2023 - Mrs. College Guide</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
