import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import User from "./Avatar";

const Navbar = () => {
  return (
    <div className="h-[8vh] w-full flex justify-center items-center">
      <div className="h-[100%] w-[98%] bg-white bg-opacity-15 px-4 border-white backdrop-blur-3xl flex justify-between items-center border-b-2 border-b-white rounded-br-3xl rounded-bl-3xl border-r-2 border-l-2 ">
        <div className="h-full flex items-center">
          <User />
        </div>

        <p
          className="text-5xl text-indigo-400 flex items-center h-full mt-2"
          style={{ fontFamily: "pixel" }}
        >
          DIGICIPHER
        </p>
        <div className="h-full flex items-center">
          <BsInfoCircle size={"24px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
