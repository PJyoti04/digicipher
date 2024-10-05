import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[10vh] w-full flex justify-center items-center">
      <div className="flex justify-between w-[98%] h-[80%] bg-opacity-15 bg-white border-2 border-white backdrop-blur-3xl rounded-full px-4">
        <div className="flex items-center text-white gap-1 text-xl">
          <FaRegCopyright size={"32px"} color="white" />
          <p style={{fontFamily:'pixel'}} className="mt-1">All Rights Reserved</p>
        </div>
        <div className="flex items-center">
          <FaGithub size={"48px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;