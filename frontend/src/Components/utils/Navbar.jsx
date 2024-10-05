import React from "react";
import { FaUser } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import User from "./Avatar";

const Navbar = () => {
  return (
    <div className="h-[11vh] w-full flex justify-center items-center">
      <div className="h-[100%] w-[100%] bg-white bg-opacity-5 px-4 border-white backdrop-blur-3xl flex justify-between items-center">
        <div className="h-full flex items-center">
          {/* <FaUser size={"32px"} color="white" /> */}
          <User />
        </div>

        <p
          className="text-4xl text-indigo-400  flex items-center h-full mt-2"
          style={{ fontFamily: "pixel" }}
        >
          DIGICIPHER
        </p>
        <div className="h-full flex items-center">
          <BsInfoCircle size={"22px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
