import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="h-auto w-[100%] flex justify-between items-center px-6 py-2">
      <div className="w-[230px] flex items-center gap-2">
        <img
          src="./Logo (2).jpeg"
          alt="Logo"
          className="h-14 w-14 rounded-full"
        />
        <p className=" text-md">Challenge Your Mind, Unlock the Vault!</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-2">Home</button>
        <button className="px-2">Instructions</button>
      </div>
    </div>
  );
};

export default Navbar;
