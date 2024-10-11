import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Navbar from "../utils/Navbar";
import ResultModal from "../utils/ResultModal";
import ReturnModal from "../utils/ReturnModal";
import Footer from "../utils/Footer";
import { MdOutlineCancel } from "react-icons/md";

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
  const [showModal, setShowModal] = useState(false);

  const nav = useNavigate();
  const container = useRef([]);
  const ins = useRef();
  const cross = useRef();

  useGSAP(() => {
    gsap.from(ins.current, {
      scaleX: 0,
      scaleY: 0,
      duration: 0.2,
    });
  }, [instructions]);

  // Animation for page load
  useGSAP(() => {
    gsap.from(container.current, {
      scaleX: 0,
      duration: 0.5,
      opacity: 0,
    });
  });

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
    setInstructions(!instructions);
  };

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setPlayAgain(false);
  };

  // Animate instructions closing and hide them
  const animateCross = () => {
    gsap.to(ins.current, {
      scaleX: 0,
      scaleY: 0,
      duration: 0.4,
      onComplete: () => setInstructions(false),
    });
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault();
      setShowModal(true);
      window.history.pushState(null, null, window.location.pathname);
    };

    window.history.pushState(null, null, window.location.pathname);

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div
      className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <div className="w-full h-[10%] p-2">
          <Navbar />
        </div>
        <div
          ref={(el) => (container.current[0] = el)}
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "flex-end",
          }}
        >
          <button
            style={{
              color: "white",
              border: "1px solid white",
              padding: "7px",
              fontWeight: "600",
              background: "",
            }}
            onClick={showInstructions}
          >
            How To Play
          </button>
        </div>

        {/* Game Board */}
        <div
          ref={(el) => (container.current[1] = el)}
          className="h-[35%] w-[75%]"
        >
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
            {input.flat().map((digit, index) => (
              <div
                key={index}
                style={{ fontFamily: "origami" }}
                className={`h-full w-full rounded-xl flex items-center justify-center text-5xl ${getBgColor(
                  digit,
                  index % 4
                )}`}
              >
                {digit}
              </div>
            ))}

            {currentInput.map((digit, index) => (
              <div
                key={index + input.flat().length}
                style={{ fontFamily: "origami" }}
                className="h-full w-full bg-white border-2 border-white rounded-2xl flex items-center justify-center text-5xl text-white backdrop-blur-3xl bg-opacity-15"
              >
                {digit}
              </div>
            ))}

            {Array.from({ length: 16 - input.flat().length }).map(
              (_, index) => (
                <div
                  key={`empty-${index}`}
                  style={{ fontFamily: "lunar" }}
                  className="h-full w-full bg-white border-2 border-white rounded-2xl flex items-center justify-center text-4xl backdrop-blur-3xl bg-opacity-15"
                ></div>
              )
            )}
          </div>
        </div>

        {/* Keyboard */}
        <div
          ref={(el) => (container.current[2] = el)}
          className="h-[30%] w-[70%]"
        >
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
            ].map((key, index) => (
              <button
                key={key}
                className="h-full w-full bg-black border-2 border-green-500 text-green-400 flex justify-center items-center text-3xl rounded-2xl"
                style={{ fontFamily: "lunar" }}
                onClick={() => handleKeyClick(key)}
              >
                {key === "Delete" ? "Del." : key === "Enter" ? "Ent." : key}
              </button>
            ))}
          </div>
        </div>

        {playAgain && (
          <ResultModal
            isOpen={true}
            onClose={handleCloseModal}
            onConfirm={() => nav("/")}
            onPlay={() => {
              resetGame();
            }}
            win={win}
            randnum={randomNum}
          />
        )}

        {showModal && (
          <ReturnModal
            isOpen={true}
            onClose={handleCloseModal}
            onConfirm={() => nav("/")}
          />
        )}

        {/* Instructions */}
        {instructions && (
          <div
            ref={ins}
            className="h-max w-[90%] absolute z-50 top-[22vh] right-6 flex flex-col gap-3 p-5 rounded-lg shadow-2xl border-2 border-black bg-white bg-opacity-100 backdrop-blur-xl"
          >
            <div className="absolute right-2">
              <MdOutlineCancel
                ref={cross}
                className="h-[28px] w-[28px] text-black cursor-pointer"
                onClick={animateCross}
              />
            </div>
            <h1 className="font-bold font-audiowide text-[23px]">
              Instructions
            </h1>
            <p className="font-bold font-orbitron text-sm text-black">
              1. Guess the 4-digit number with unique digits.
            </p>
            <p className="font-bold font-orbitron text-sm text-black">
              2. Use the numbers to make your guess.
            </p>
            <p className="font-bold font-orbitron text-sm text-black">
              3. After each guess, the background color will change based on
              your input:
            </p>
            <div className="font-bold font-orbitron text-sm text-black list-disc list-inside ml-5">
              <li className="flex items-center gap-2">
                <p className="h-[20px] w-[30px] bg-green-600"></p>
                The digit is correct and in the correct position.
              </li>
              <li className="flex items-center gap-2">
                <p className="h-[20px] w-[30px] bg-yellow-300"></p>
                The digit is correct but in the wrong position.
              </li>
              <li className="flex items-center gap-2">
                <p className="h-[20px] w-[23px] bg-red-600"></p>
                The digit is not part of the number.
              </li>
            </div>
            <p className="font-bold font-orbitron text-sm text-black">
              4. Press 'Del.' to delete and 'Ent.' to confirm your guess.
            </p>
            <p className="font-bold font-orbitron text-sm text-black">
              5. You have 4 chances to guess the correct number.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Classic;
