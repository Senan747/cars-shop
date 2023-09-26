"use client";
import { CustomButton } from ".";

import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="w-full flex flex-row items-center justify-between pt-5 px-24 bg-primary-blue text-white max-md:px-6">
      <div className="flex flex-row w-30 items-center justify-between">
        <p>Cars</p>
        <Image src={"/logo.png"} width={80} height={80} alt="logo" />
      </div>
      <div className="flex items-center flex-row justify-around w-full pl-20 max-md:pl-10">
        <div className="cursor-pointer">
          <p>About</p>
        </div>
        <div className="cursor-pointer group relative">
          <p onClick={() => setShow(!show)}>Socials</p>

          <div
            className={`absolute flex-row ${
              show ? "flex" : "max-md:hidden"
            } hidden group-hover:flex bg-primary-blue -bottom-[70px] -left-4 px-5 py-3 gap-1 rounded-xl animate-fadeIn`}
          >
            <div>
              <AiOutlineInstagram />{" "}
            </div>
            <div>
              <BiLogoFacebookSquare />{" "}
            </div>
            <div>
              <AiFillTwitterCircle />{" "}
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <p>Company</p>
        </div>
        <div>
          <CustomButton
            title="Sign in"
            containerStyles="bg-primary-blue border-2 border-white text-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
