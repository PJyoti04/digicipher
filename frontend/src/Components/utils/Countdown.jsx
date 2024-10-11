import React, { useRef } from "react";
import gsap from "gsap";

const Countdown = ({ setStart }) => {
  const btnRef = useRef([]); // Initialize ref for buttons

  const handleStart = () => {
    gsap.to(btnRef.current[0], {
      x: -300,
      duration: 1,
      opacity: 0,
      onComplete: () => {
        setStart(false);
      },
    });

    gsap.to(btnRef.current[1],{
        x:300,
        duration:1,
        opacity:0,
    })
  };

  return (
    <div
      style={{ fontFamily: "thunder" }}
      className="h-full z-50 mt-24 bg-opacity-15 uppercase backdrop-blur-3xl w-full flex gap-20 flex-col items-center"
    >
      <h1 className="text-white text-3xl text-center">
        Dare to Challenge: Decode the Mystery with Every Guess!
      </h1>
      <div className="flex flex-col w-full justify-center items-center gap-5">
        <button
          ref={(el) => (btnRef.current[0] = el)} 
          className="font-bold w-[70%] px-4 py-2 text-black bg-green-400 rounded-lg text-2xl"
          onClick={handleStart}
        >
          START
        </button>
        <button
          ref={(el) => (btnRef.current[1] = el)} 
          className="font-bold w-[70%] px-4 py-2 text-black bg-yellow-300 rounded-lg text-2xl" 
        >
          INSTRUCTIONS
        </button>
      </div>
    </div>
  );
};

export default Countdown;
