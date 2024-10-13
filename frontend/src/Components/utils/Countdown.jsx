import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const Countdown = ({ setStart }) => {
  const btnRef = useRef([]);
  const [countdown, setCountdown] = useState(3); // Initialize countdown to 3
  const [showCountdown, setShowCountdown] = useState(false); // State to control visibility of countdown

  const handleStart = () => {
    // Animate button out
    gsap.to(btnRef.current[0], {
      x: -300,
      duration: 1,
      opacity: 0,
      onComplete: () => {
        setShowCountdown(true); // Show countdown after animation
      },
    });

    gsap.to(btnRef.current[1], {
      x: 300,
      duration: 1,
      opacity: 0,
    });
  };

  // Countdown effect
  useEffect(() => {
    if (showCountdown) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setStart(false); // Set start to false after countdown ends
            return 0; // Reset countdown to 0
          }
          return prev - 1; // Decrement countdown
        });
      }, 1000); // Update countdown every second

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [showCountdown, setStart]);

  return (
    <div
      style={{ fontFamily: "thunder" }}
      className="h-full z-50 mt-24 bg-opacity-15 uppercase backdrop-blur-3xl w-full flex gap-20 flex-col items-center"
    >
      <h1 className="text-white text-3xl text-center">
        Dare to Challenge: Decode the Mystery with Every Guess!
      </h1>
      {showCountdown ? (
        <h2 className="text-white text-6xl">
          {countdown > 0 ? countdown : ""}
        </h2> // Show countdown
      ) : null}
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
