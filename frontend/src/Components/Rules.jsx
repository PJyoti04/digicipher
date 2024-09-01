import React, { useState } from "react";

const Rules = () => {
  const [clicked, setClicked] = useState("Classic");

  return (
    <div className="flex items-center flex-col mt-1">
      <h1 className="text-7xl text-center mt-4">How To Play</h1>
      <div className="flex justify-center mt-4 relative w-[240px]">
        {/* Animated Highlight Bar */}
        <div
          className={`h-10 w-[120px] bg-gray-600 absolute top-0 transition-all duration-300 ease-in-out ${
            clicked === "Classic" ? "left-0" : "left-[120px]"
          }`}
        ></div>

        <button
          onClick={() => setClicked("Classic")}
          className={`border-l-2 border-t-2 border-b-2 border-black h-10 w-[120px] flex justify-center items-center text-xl relative z-10 ${
            clicked === "Classic" ? "text-white" : "text-black"
          }`}
        >
          Classic
        </button>

        <button
          onClick={() => setClicked("Challenger")}
          className={`border-l-2 border-t-2 border-b-2 border-r-2 border-black h-10 w-[120px] flex justify-center items-center text-xl relative z-10 ${
            clicked === "Challenger" ? "text-white" : "text-black"
          }`}
        >
          Challenger
        </button>
      </div>

      {/* Display Rules */}
      <div className="h-[450px] w-[650px] border-4 border-blue-500 mt-8 text-center flex justify-center items-center">
        {clicked === "Classic" ? (
          <p>Classic Rules: [Insert Classic Rules Here]</p>
        ) : (
          <p>Challenger Rules: [Insert Challenger Rules Here]</p>
        )}
      </div>
    </div>
  );
};

export default Rules;
