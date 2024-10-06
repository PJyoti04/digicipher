import React, { useRef } from "react";
import User from "./Avatar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const ref2 = useRef();

  useGSAP(() => {
    gsap.from(ref2.current, {
      y: -200,
      opacity: 0,
      duration: 0.8,
    });
  });
  return (
    <div className="h-[9vh] w-full flex justify-center items-center">
      <div
        ref={ref2}
        className="h-[100%] w-[100%] px-4 flex justify-between items-center rounded-br-3xl rounded-bl-3xl "
      >
        <div className="h-full w-full flex items-center justify-between">
          <Link to="https://github.com/KC1064/open_the_vault" target="_blank">
            <FaGithub size={"32px"} color="white" />
          </Link>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
