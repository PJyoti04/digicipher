import React from "react";
import { FaUser } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full flex justify-center items-center">
      <div className="h-[85%] w-[98%] bg-white bg-opacity-15 px-4 border-2 border-white rounded-full backdrop-blur-3xl flex justify-between items-center">
        <div className="h-full flex items-center">
          <FaUser size={"32px"} color="white" />
        </div>

        <p
          className="text-5xl text-white flex items-center h-full mt-2"
          style={{ fontFamily: "pixel" }}
        >
          DIGICIPHER
        </p>
        <div className="h-full flex items-center">
          <BsInfoCircle size={"34px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
