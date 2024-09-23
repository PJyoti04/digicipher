import React from "react";
import Navbar from "./Navbar";

const Classic = () => {
  return (
    <div
      className="h-[100vh] w-full flex gap-6 flex-col items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #b3e0e8, #a4c8d6, #95b1c4, #88a1b1, #7a8b9e, #748a8d, #708c8b, #6c8e88, #66909c, #7aa2ab, #8fb3ba, #a6c4c9)",
      }}
    >
      <div className="w-full h-[10%] p-2">
        <nav className="flex justify-between items-center px-2 py-1 bg-white border-2 border-black bg-opacity-20 rounded-[80px] backdrop-blur-3xl">
          <div className="flex items-center gap-1">
            <img
              src="logo.jpeg"
              alt="DigiCipher logo"
              className="h-12 w-12 rounded-full"
            />{" "}
            {/* Added alt text and used rounded-full */}
            <p className="text-[22px] font-bold  font-audiowide">DigiCipher</p>
          </div>
          <img
            src="https://avatar.iran.liara.run/public/3"
            alt=""
            className="h-[49px] w-auto"
          />
        </nav>
      </div>
      {/* Input */}

      <div className="h-[40%] w-[80%] bg-white flex">
        <div className="w-full p-2 grid grid-cols-4 grid-rows-5 gap-4">
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
          <div className="h-[100%] w-full bg-red-300 rounded-2xl flex items-center justify-center text-2xl">
            1
          </div>
        </div>
      </div>

      {/* Keyboard */}
      <div>
        <div className="grid grid-cols-3 grid-rows-4 gap-2">
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

export default Classic;
