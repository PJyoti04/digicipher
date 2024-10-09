import React, { useRef } from "react";
import gsap from "gsap";

const Countdown = ({ setStart }) => {
  const btnRef = useRef();

  const handleStart = () => {
    gsap.to(btnRef.current, {
      x: -100,
      y: -330,
      duration: 1,
      opacity:0,
      onComplete: () => {
        setStart(false);
      },
    });
  };

  return (
    <div className="h-full z-50 bg-opacity-15 backdrop-blur-3xl w-full flex justify-center items-center">
      <button
        ref={btnRef}
        className="text-white px-4 py-2 bg-green-400 rounded-lg"
        onClick={handleStart} 
      >
        START
      </button>
    </div>
  );
};

export default Countdown;
