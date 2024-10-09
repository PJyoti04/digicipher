import React, { useRef, useState } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Challenger = () => {
  const [start, setStart] = useState(true);
  const [guess, setGuess] = useState([]); // State to store guesses
  const [guessCount, setGuessCount] = useState(0); // Keep track of the number of guesses
  const [pinValue, setPinValue] = useState(""); // State for storing current pin input value
  const guessRows = useRef([]); // Store refs for guess rows
  const table = useRef([]);

  useGSAP(() => {
    gsap.from(guessRows.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
    });
  }, [!start]);

  useGSAP(() => {
    gsap.from(table.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
    });
  }, [!start]);

  const handleGuessSubmit = () => {
    if (pinValue.length === 4) {
      // Add the new guess at the beginning of the array
      setGuess((prevGuesses) => [
        { number: pinValue, count: guessCount + 1, digits: pinValue.length },
        ...prevGuesses,
      ]);
      setGuessCount(guessCount + 1); // Increment the guess counter
      setPinValue(""); // Clear the PinInput value
    }
  };

  useGSAP(() => {
    if (guess.length > 0) {
      gsap.from(guessRows.current[0], {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }
  }, [guess]); 

  return (
    <div
      className="h-[100vh] w-full flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar />
        <div className="h-[84vh] w-full px-4 flex flex-col gap-5">
          <div className="h-[5vh] w-[100%] flex justify-between items-center text-white px-3">
            <h1 className="px-4 py-1 text-lg font-bold rounded-lg bg-slate-400">
              Timer
            </h1>
            <h1 className="flex justify-center items-center bg-white text-black w-10 h-10 rounded-full text-4xl">
              ?
            </h1>
          </div>

          {start ? (
            <Countdown setStart={setStart} />
          ) : (
            <>
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
                          ref={(el) => (guessRows.current[index] = el)} // Attach ref to each row
                        >
                          <Td>{g.count}</Td>
                          <Td>{g.number}</Td>
                          <Td>{0}</Td>
                          <Td>{0}</Td>
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
                  //OnkeyDown 
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
        <Footer />
      </div>
    </div>
  );
};

export default Challenger;


