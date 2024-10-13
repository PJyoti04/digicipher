import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import ResultModal from "../utils/ResultModal";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import Countdown from "../utils/Countdown";
import Timer from "../utils/Timer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Challenger = () => {
  const [start, setStart] = useState(true);
  const [win, setWin] = useState(false);
  const [result, setResult] = useState(false);
  const [randomNum, setRandomNum] = useState("");
  const [guess, setGuess] = useState([]); // State to store guesses
  const [guessCount, setGuessCount] = useState(0); // Keep track of the number of guesses
  const [pinValue, setPinValue] = useState(""); // State for storing current pin input value
  const guessRows = useRef([]);

  const table = useRef([]);
  const timer = useRef();
  const rules = useRef();
  const nav = useNavigate();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

  // GSAP animations for guess rows
  useGSAP(() => {
    if (!start && guessRows.current.length > 0 && guessRows.current[0]) {
      gsap.from(guessRows.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [start]);

  // GSAP animations for the table
  useGSAP(() => {
    if (!start && table.current[0]) {
      gsap.from(table.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [start]);

  // GSAP animations for the timer and rules
  useGSAP(() => {
    if (!start && timer.current && rules.current) {
      gsap.from(timer.current, {
        x: -300,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(rules.current, {
        x: 300,
        opacity: 0,
        duration: 0.8,
      });
    }
  }, [start]);

  // GSAP animations for the guess row when guess is updated
  useGSAP(() => {
    if (guess.length > 0 && guessRows.current[0]) {
      gsap.from(guessRows.current[0], {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }
  }, [guess]);

  // Handle guess submission and update state
  const handleGuessSubmit = () => {
    if (pinValue.length === 4) {
      const positionMatches = matchPosition(pinValue, randomNum);
      const digitMatches = matchDigits(pinValue, randomNum);

      if (positionMatches === 4 && digitMatches === 4) {
        setResult(true);
        setWin(true);
      }

      setGuess((prevGuesses) => [
        {
          number: pinValue,
          count: guessCount + 1,
          positionMatches,
          digitMatches,
        },
        ...prevGuesses,
      ]);

      setGuessCount(guessCount + 1); // Increment the guess counter
      setPinValue(""); // Clear the PinInput value
    } else {
      alert("Please enter a 4-digit number");
    }
  };

  //Reseting mode
  const resetGame = () => {
    setStart(true);
    setWin(false);
    setResult(false);
    setGuessCount(0);
    setGuess([]);
    setPinValue("");
    guessRows.current = []; // Clear guess rows refs
    table.current = [];
    console.log("Resetting game");
  };

  // Effect to generate a random number when the game starts
  useEffect(() => {
    if (!start) {
      setRandomNum(generateNumber());
    }
  }, [start]);

  // Function to check how many digits match the exact position
  const matchPosition = (guess, randomNum) => {
    let correctPositionCount = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === randomNum[i]) {
        correctPositionCount++;
      }
    }
    return correctPositionCount;
  };

  // Function to check how many digits are present in both numbers, regardless of position
  const matchDigits = (guess, randomNum) => {
    let correctDigitCount = 0;
    let guessDigits = guess.split("");
    let randomDigits = randomNum.split("");

    const countedDigits = {}; // To track which digits have been counted already

    guessDigits.forEach((digit) => {
      if (randomDigits.includes(digit) && !countedDigits[digit]) {
        correctDigitCount++;
        countedDigits[digit] = true; // Mark this digit as counted
      }
    });

    return correctDigitCount;
  };

  // Generate a unique random 4-digit number
  const generateNumber = () => {
    let digits = [];
    while (digits.length < 4) {
      let randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    console.log(digits.join(""));

    return digits.join("");
  };

  // Handle Enter key for submission
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGuessSubmit();
    }
  };

  const handlePlayAgain = () => {
    setResult(false);
  };

  return (
    <div
      className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar />
        <div className="h-[84vh] w-full px-4 flex flex-col gap-5">
          {start ? (
            <Countdown setStart={setStart} />
          ) : (
            <>
              <div className="h-[6vh] w-[100%] flex justify-between items-center text-white px-3">
                <h1
                  ref={timer}
                  className="px-4 py-1 text-lg font-bold rounded-lg bg-slate-400"
                >
                  <Timer expiryTimestamp={expiryTimestamp} />
                </h1>
                <h1
                  ref={rules}
                  className="flex justify-center items-center bg-white text-black w-10 h-10 rounded-full text-4xl"
                >
                  ?
                </h1>
              </div>
              <div
                ref={(el) => (table.current[0] = el)}
                className="h-max w-full flex flex-col justify-between items-center"
              >
                <HStack>
                  <PinInput
                    colorScheme={"whiteAlpha"}
                    size={"lg"}
                    manageFocus={true}
                    value={pinValue}
                    onChange={(value) => setPinValue(value)}
                    onKeyDown={handleKeyDown}
                  >
                    <PinInputField color={"white"} />
                    <PinInputField color={"white"} />
                    <PinInputField color={"white"} />
                    <PinInputField color={"white"} />
                  </PinInput>
                </HStack>
              </div>

              <div className="h-[30vh] w-full rounded-2xl overflow-y-scroll">
                <TableContainer>
                  <Table variant="simple" color={"white"}>
                    <TableCaption placement="top" color={"cyan"}>
                      Hints
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th color={"white"}>#</Th>
                        <Th color={"white"}>Number</Th>
                        <Th color={"white"}>Position</Th>
                        <Th color={"white"} isNumeric>
                          Digits
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {guess.map((g, index) => (
                        <Tr
                          key={index}
                          ref={(el) => (guessRows.current[index] = el)}
                        >
                          <Td>{g.count}</Td>
                          <Td>{g.number}</Td>
                          <Td>{g.positionMatches}</Td>
                          <Td>{g.digitMatches}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </div>

              <div
                ref={(el) => (table.current[1] = el)}
                className="w-full flex flex-col items-center gap-4 justify-center"
              >
                <button
                  className="text-white bg-green-600 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg"
                  onClick={handleGuessSubmit}
                >
                  Enter
                </button>
                <button className="text-white bg-red-400 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg">
                  Give Up
                </button>
              </div>
            </>
          )}
        </div>

        {result && (
          <ResultModal
            isOpen={true}
            onClose={handlePlayAgain}
            onConfirm={() => nav("/")}
            onPlay={() => {
              resetGame();
            }}
            win={win}
            randnum={randomNum}
          />
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Challenger;


