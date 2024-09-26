import React, { useEffect, useState } from "react";

const Classic = () => {
  const [input, setInput] = useState([[], [], [], []]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentInput, setCurrentInput] = useState([]);
  const [randomNum, setRandomNum] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [win, setWin] = useState(false);
  const [isGuessed, setIsGuessed] = useState(false);
  const [instructions, setInstructions] = useState(false);

  const handleKeyClick = (key) => {
    if (key === "Delete") {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (key === "Enter") {
      if (currentInput.length === 4) {
        let newInput = [...input];
        newInput[currentRow] = currentInput;
        setInput(newInput);
        setCurrentInput([]);

        if (currentInput.join("") === randomNum) {
          setIsMatch(true);
          setIsGuessed(true);
          setWin(true);
          setPlayAgain(true);
        } else {
          setIsMatch(false);
          if (currentRow < 3) {
            setCurrentRow(currentRow + 1);
          } else {
            setPlayAgain(true);
            setIsGuessed(true);
            setWin(false);
          }
        }
      } else {
        alert("Please enter 4 digits before pressing Enter.");
      }
    } else if (currentInput.length < 4) {
      setCurrentInput((prev) => [...prev, key]);
    }
  };

  const resetGame = () => {
    setInput([[], [], [], []]);
    setCurrentRow(0);
    setCurrentInput([]);
    setIsMatch(false);
    setPlayAgain(false);
    setWin(false);
    setIsGuessed(false);
    setRandomNum(generateNumber());
  };

  useEffect(() => {
    setRandomNum(generateNumber());
  }, []);

  const generateNumber = () => {
    let digits = [];
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    return digits.join("");
  };

  const getBgColor = (digit, index) => {
    if (randomNum[index] === digit) {
      return "bg-green-300";
    } else if (randomNum.includes(digit)) {
      return "bg-yellow-300";
    } else {
      return "bg-red-300";
    }
  };

  const showInstructions = () => {
    // Implementation for showing instructions
    setInstructions(!instructions);
  };

  return (
    <div
      className="h-[100vh] w-full flex gap-5 flex-col items-center"
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
            />
            <p className="text-[22px] font-bold font-audiowide">DigiCipher</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <h1
              className="bg-white h-10 w-10 text-3xl flex justify-center items-center rounded-full"
              onClick={showInstructions}
            >
              i
            </h1>
            <img
              src="https://avatar.iran.liara.run/public/3"
              alt="User avatar"
              className="h-[49px] w-auto"
            />
          </div>
        </nav>
      </div>

      {/* Input */}
      <div className="h-[33%] w-[75%]">
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
          {" "}
          {/* 4 rows */}
          {input.flat().map((digit, index) => (
            <div
              key={index}
              className={`h-full w-full font-audiowide rounded-xl flex items-center justify-center text-4xl ${getBgColor(
                digit,
                index % 3
              )}`}
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
          {Array.from({ length: 16 - input.flat().length }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="h-full w-full bg-red-300 font-audiowide rounded-2xl flex items-center justify-center text-4xl"
            ></div>
          ))}
        </div>
      </div>

      {/* Random Number */}
      <div className="h-[10%] w-[80%] flex gap-2">
        {randomNum && (
          <>
            {isGuessed ? (
              randomNum
                .toString()
                .split("")
                .map((ele, idx) => (
                  <div
                    className="bg-pink-200 h-[100%] w-[23%] rounded-2xl flex justify-center items-center text-5xl font-orbitron"
                    key={idx}
                  >
                    {ele}
                  </div>
                ))
            ) : (
              <>
                <div className="bg-pink-200 h-[100%] w-[23%] rounded-2xl flex justify-center items-center text-5xl font-orbitron">
                  *
                </div>
                <div className="bg-pink-200 h-[100%] w-[23%] rounded-2xl flex justify-center items-center text-5xl font-orbitron">
                  *
                </div>
                <div className="bg-pink-200 h-[100%] w-[23%] rounded-2xl flex justify-center items-center text-5xl font-orbitron">
                  *
                </div>
                <div className="bg-pink-200 h-[100%] w-[23%] rounded-2xl flex justify-center items-center text-5xl font-orbitron">
                  *
                </div>
              </>
            )}
          </>
        )}
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

      {/* Play Again */}
      {playAgain && (
        <div className="h-[100vh] w-[100%] absolute gap-4 flex-col font-pressStart bg-white bg-opacity-20 backdrop-blur-lg flex justify-center items-center">
          <h1 className="text-7xl">
            {win ? (
              "You Won"
            ) : (
              <div className="text-4xl font-pressStart text-center">
                Correct Number is {randomNum}
              </div>
            )}
          </h1>

          <button
            className="bg-blue-500 text-white font-pressStart h-[10%] w-[60%] text-3xl rounded-lg"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}

      {/* Instructions */}
      {instructions && (
        <div className="absolute h-[30vh] w-[80%] bg-white rounded-3xl px-4 py-4 bg-opacity-20 backdrop-blur-2xl top-20">
          <div className="text-2xl">
            <span className="h-10 w-10 bg-yellow-300 inline-block border-2 border-black"></span>{" "}
            Digit is in the number
          </div>
          <div className="text-2xl mt-2">
            <span className="h-10 w-10 bg-green-300 inline-block border-2 border-black"></span>{" "}
            Digit is in the correct position
          </div>
          <div className="text-2xl mt-2">
            <span className="h-10 w-10 bg-red-300 inline-block border-2 border-black"></span>{" "}
            Digit is not in the number
          </div>
        </div>
      )}
    </div>
  );
};

export default Classic;
