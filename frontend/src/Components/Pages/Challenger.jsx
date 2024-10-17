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
  background,
} from "@chakra-ui/react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import Countdown from "../utils/Countdown";
import Timer from "../utils/Timer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";

const Challenger = () => {
  const [start, setStart] = useState(true);
  const [win, setWin] = useState(4);
  const [result, setResult] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [randomNum, setRandomNum] = useState("");
  const [guess, setGuess] = useState([]); // State to store guesses
  const [guessCount, setGuessCount] = useState(0); // Keep track of the number of guesses
  const [pinValue, setPinValue] = useState("");
  const [showInstructions, setShowinstructions] = useState(false);
  const guessRows = useRef([]);

  const table = useRef([]);
  const timer = useRef();
  const rules = useRef();
  const nav = useNavigate();
  const ins = useRef();
  const cross = useRef();

  
  const animateCross = () => {
    gsap.to(ins.current, {
      scaleX: 0,
      scaleY: 0,
      duration: 0.6,
      ease: "back.in(1)",
      onComplete: () => setShowinstructions(false),
    });
  }

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

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
        setWin(0);
        setIsPaused(true);
        setIsDisabled(true);
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
    setWin(1);
    setResult(false);
    setGuessCount(0);
    setGuess([]);
    setPinValue("");
    setIsPaused(false);
    setIsDisabled(false);
    guessRows.current = []; // Clear guess rows refs
    table.current = [];
    console.log("Resetting game");
  };

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

  const handleGiveUp = () => {
    setResult(true);
    setWin(2);
    setIsDisabled(true);
    setIsPaused(true);
  };

  const handleExpire = () => {
    setResult(true);
    setWin(1);
    setIsDisabled(true); // Disable input if time expires
    setIsPaused(true); // Pause timer or game when expired
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
            <Countdown
              setStart={setStart}
              onPress={() => {
                setShowinstructions(true);
              }}
            />
          ) : (
            <>
              <div className="h-[6vh] w-[100%] flex justify-between items-center text-white px-3">
                <h1
                  ref={timer}
                  className="px-4 py-1 text-lg font-bold rounded-lg bg-slate-400"
                >
                  <Timer
                    expiryTimestamp={expiryTimestamp}
                    isPaused={isPaused}
                    onExpire={() => {
                      handleExpire();
                    }}
                  />
                </h1>
                <h1
                  onClick={() => setShowinstructions(true)}
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
                    isDisabled={isDisabled}
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
                  className={`text-white bg-green-600 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg 
                  ${pinValue.length !== 4 ? "bg-gray-400" : "bg-blue-500"}`}
                  onClick={handleGuessSubmit}
                  disabled={pinValue.length !== 4}
                >
                  Enter
                </button>
                <button
                  className="text-white bg-red-400 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg"
                  onClick={win === 2 || win === 1 || win === 0 || win === 3 ? resetGame : handleGiveUp}
                >
                  {win === 2 || win === 1 || win === 0 || win === 3 ? "Play Again" : "Give Up"}
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
        {showInstructions ? (
          <motion.div
            initial={{ scale: 0, opacity: 1, y: -1000 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            ref={ins}
            style={{ fontFamily: "Inter, sans-serif", overflow: "hidden" }}
            // className="absolute top-[20%] bg-opacity-90 right-0 z-50 h-max py-2 w-[90%] bg-white px-2"
            className="absolute z-50 top-[15%] bg-opacity-100 flex-col bg-white h-[max] py-2 w-[95%] px-3 backdrop-blur-xl rounded-lg shadow-2xl"
          >
            <MdOutlineCancel
              ref={cross}
              className="h-[28px] w-[28px] absolute right-3 top-2 text-black cursor-pointer"
              onClick={animateCross}
            />
            <h1 className="font-bold font-audiowide text-2xl py-2">
              Instructions
            </h1>

            <p className="text-sm  text-black font-orbitron font-bold py-1">
              1. The computer selects a unique <strong>4-digit number</strong>,
              with no repeating digits.
            </p>

            <p className="text-sm  text-black font-orbitron font-bold py-1">
              2. Your task is to guess the 4-digit code before the{" "}
              <strong>timer</strong> runs out.
            </p>

            <p className="text-sm  text-black font-orbitron font-bold py-1">
              3. After each guess, the feedback is shown in a table with two
              columns:
            </p>

            <ul className="list-decimal list-inside ml-6 space-y-1 text-sm  text-black font-orbitron font-bold py-1">
              <li>
                <strong className="text-green-600">Position:</strong> How many
                digits are in the correct position.
              </li>
              <li>
                <strong className="text-green-600">Digits:</strong> How many of
                your guessed digits are present in the code, regardless of
                position.
              </li>
            </ul>

            <p className="text-sm  text-black font-orbitron font-bold py-1">
              4. You can make multiple guesses until you decipher the code or
              the timer runs out.
            </p>

            <p className="text-sm  text-black font-orbitron font-bold py-1">
              5. If you feel stuck or run out of time, click the{" "}
              <strong className="text-red-600">'Give Up'</strong> button to
              restart the game.
            </p>
          </motion.div>
        ) : (
          ""
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Challenger;
