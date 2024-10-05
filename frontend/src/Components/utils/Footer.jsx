import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {

  const ref1 = useRef();
  useGSAP(()=>{
    gsap.from(ref1.current, {
      y:200,
      opacity:0,
      duration:0.8,
    })
  })
  return (
    <div className="h-[8vh] w-full flex justify-center items-center">
      <div
      ref={ref1} 
      className="flex justify-between w-[100%] h-[100%] bg-opacity-15 rounded-tr-3xl rounded-tl-3xl
       border-t-4 bg-white border-[#03dffc] backdrop-blur-3xl px-4">
        <div className="flex items-center text-[white] gap-1 text-xl">
          <FaRegCopyright size={"15px"} color="white" />
          <p style={{fontFamily:'origami',fontSize:'15px'}} className="mt-1 font-thin">All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-6">
          <BsInfoCircle size={"32px"} color="white" />
          <FaGithub size={"32px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;