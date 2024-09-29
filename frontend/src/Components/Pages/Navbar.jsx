import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Navbar = () => {
  const nav = useRef();
  const navText = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(nav.current,{
      y:-100,
      opacity:0,
      duration:1,
    })
    tl.from(navText.current,{
      scale:0,
      opacity:0,
      duration:0.5
    })
  })
  return (
    <div
    ref={nav}
     className="w-full h-[10%] p-2">
      <nav className="flex justify-between items-center px-6 py-2 text-white bg-white border-2 border-white bg-opacity-20 rounded-[80px] backdrop-blur-3xl shadow-lg">
        <p
        ref={navText}
        style={{fontFamily:'cal'}}
        className="text-[28px] font-semibold flex items-center">
          DigiCipher.
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
