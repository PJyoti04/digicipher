import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[10%] p-2"> 
      <nav className="flex justify-between items-center px-2 py-1 bg-white border-2 border-black bg-opacity-20 rounded-[80px] backdrop-blur-3xl">
        <div className="flex items-center gap-1">
          <img src="logo.jpeg" alt="DigiCipher logo" className="h-12 w-12 rounded-full" /> {/* Added alt text and used rounded-full */}
          <p className="text-[22px] font-bold  font-audiowide">DigiCipher</p> 
        </div>
        <button className="p-2 bg-blue-900 rounded-3xl text-white w-20 hover:bg-blue-700 transition duration-200"> {/* Added hover effect for better UX */}
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
