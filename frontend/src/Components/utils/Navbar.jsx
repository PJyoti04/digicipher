import React, { useRef } from "react";
import User from "./Avatar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoHomeOutline } from "react-icons/io5";


const Navbar = () => {
  const ref2 = useRef();

  useGSAP(()=>{
    gsap.from(ref2.current,{
      y:-200,
      opacity:0,
      duration:0.8,

    })
  })
  return (
    <div className="h-[9vh] w-full flex justify-center items-center">
      <div 
      ref={ref2}
      className="h-[100%] w-[100%] bg-white bg-opacity-15 px-4 backdrop-blur-3xl flex justify-between items-center rounded-br-3xl rounded-bl-3xl ">
        <p
          className="text-5xl text-[#03dffc] flex items-center h-full mt-2"
          style={{ fontFamily: "pixel" }}
        >
          DIGICIPHER
        </p>
        
        <div className="h-full flex items-center gap-4">
        <IoHomeOutline color="white" size={"24px"}/>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
