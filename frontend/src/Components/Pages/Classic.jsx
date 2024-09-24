import React, { useState } from "react";

const Classic = () => {
  const [input, setInput] = useState([[], [], [], [], []]); // 5 rows of inputs
  const [currentRow, setCurrentRow] = useState(0); // To track the current row
  const [currentInput, setCurrentInput] = useState([]); // Current row input

  const handleKeyClick = (key) => {
    if (key === "Delete") {
      setCurrentInput((prev) => prev.slice(0, -1)); // Remove the last input
    } else if (key === "Enter") {
      if (currentInput.length === 4) {
        let newInput = [...input];
        newInput[currentRow] = currentInput; // Save the current row input
        setInput(newInput);
        setCurrentInput([]); // Clear the input for the next row
        if (currentRow < 4) {
          setCurrentRow(currentRow + 1); // Move to the next row
        }
      } else {
        alert("Please enter 4 digits before pressing Enter.");
      }
    } else if (currentInput.length < 4) {
      setCurrentInput((prev) => [...prev, key]); // Add the number to the input
    }
  };

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
            alt="User avatar"
            className="h-[49px] w-auto"
          />
        </nav>
      </div>

      {/* Input */}
      <div className="h-[44%] w-[85%]">
        <div className=" w-full h-full grid grid-cols-4 grid-rows-5 gap-2">
          {input.flat().map((digit, index) => (
            <div
              key={index}
              className="h-full w-full bg-red-300 font-audiowide rounded-xl flex items-center justify-center text-4xl"
            >
              {digit}
            </div>
          ))}
          {currentInput.map((digit, index) => (
            <div
              key={index}
              className="h-full w-full bg-red-300 font-audiowide rounded-2xl flex items-center justify-center text-4xl"
            >
              {digit}
            </div>
          ))}
          {Array.from({ length: 20 - input.flat().length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="h-full w-full bg-red-300 font-audiowide rounded-2xl flex items-center justify-center text-4xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className="h-[30%] w-[70%]">
        <div className="h-full w-full grid grid-cols-3 grid-rows-4 gap-4">
          {[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "Delete",
            "Enter",
          ].map((key) => (
            <button
              key={key}
              className="h-full w-full bg-black text-green-400 flex justify-center items-center text-2xl font-orbitron rounded-2xl"
              onClick={() => handleKeyClick(key)}
            >
              {key === "Delete" ? "Del." : key === "Enter" ? "Ent." : key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classic;
