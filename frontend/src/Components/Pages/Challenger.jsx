// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../utils/Navbar";
// import Footer from "../utils/Footer";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from "@chakra-ui/react";
// import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
// import Countdown from "../utils/Countdown";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const Challenger = () => {
//   const [start, setStart] = useState(true);
//   const [randomNum, setRandomNum] = useState("");
//   const [guess, setGuess] = useState([]); // State to store guesses
//   const [guessCount, setGuessCount] = useState(0); // Keep track of the number of guesses
//   const [pinValue, setPinValue] = useState(""); // State for storing current pin input value
//   const guessRows = useRef([]); // Store refs for guess rows
//   const table = useRef([]);
//   const timer = useRef();
//   const rules = useRef();

//   useGSAP(() => {
//     gsap.from(guessRows.current, {
//       scaleX: 0,
//       opacity: 0,
//       duration: 0.4,
//     });
//   }, [!start]);

//   useGSAP(() => {
//     gsap.from(table.current, {
//       scaleX: 0,
//       opacity: 0,
//       duration: 0.4,
//     });
//   }, [!start]);

//   const handleGuessSubmit = () => {
//     if (pinValue.length === 4) {
//       const positionMatches = matchPosition(pinValue, randomNum);
//       const digitMatches = matchDigits(pinValue, randomNum);

//       setGuess((prevGuesses) => [
//         {
//           number: pinValue,
//           count: guessCount + 1,
//           positionMatches: positionMatches,
//           digitMatches: digitMatches,
//         },
//         ...prevGuesses,
//       ]);
//       setGuessCount(guessCount + 1); // Increment the guess counter
//       setPinValue(""); // Clear the PinInput value
//     }
//   };

//   useGSAP(() => {
//     gsap.from(timer.current, {
//       x: -300,
//       opacity: 0,
//       duration: 0.8,
//     });

//     gsap.from(rules.current, {
//       x: 300,
//       opacity: 0,
//       duration: 0.8,
//     });
//   }, [!start]);

//   useGSAP(() => {
//     if (guess.length > 0) {
//       gsap.from(guessRows.current[0], {
//         scale: 0,
//         opacity: 0,
//         duration: 0.4,
//         ease: "back.out(1.7)",
//       });
//     }
//   }, [guess]);

//   useEffect(() => {
//     setRandomNum(generateNumber());
//     console.log(randomNum);
//   }, [!start]);

//   // Function to check how many digits match the exact position
//   const matchPosition = (guess, randomNum) => {
//     let correctPositionCount = 0;
//     for (let i = 0; i < guess.length; i++) {
//       if (guess[i] === randomNum[i]) {
//         correctPositionCount++;
//       }
//     }
//     return correctPositionCount;
//   };

//   const generateNumber = () => {
//     let digits = [];
//     while (digits.length < 4) {
//       let randomDigit = Math.floor(Math.random() * 10);
//       if (!digits.includes(randomDigit)) {
//         digits.push(randomDigit);
//       }
//     }
//     return digits.join("");
//   };

//   return (
//     <div
//       className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
//       style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
//     >
//       <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
//         <Navbar />
//         <div className="h-[84vh] w-full px-4 flex flex-col gap-5">
//           {start ? (
//             <Countdown setStart={setStart} />
//           ) : (
//             <>
//               <div className="h-[6vh] w-[100%] flex justify-between items-center text-white px-3">
//                 <h1
//                   ref={timer}
//                   className="px-4 py-1 text-lg font-bold rounded-lg bg-slate-400"
//                 >
//                   Timer
//                 </h1>
//                 <h1
//                   ref={rules}
//                   className="flex justify-center items-center bg-white text-black w-10 h-10 rounded-full text-4xl"
//                 >
//                   ?
//                 </h1>
//               </div>
//               <div
//                 ref={(el) => (table.current[0] = el)}
//                 className="h-max w-full flex flex-col justify-between items-center"
//               >
//                 <HStack>
//                   <PinInput
//                     colorScheme={"whiteAlpha"}
//                     size={"lg"}
//                     manageFocus={true}
//                     value={pinValue}
//                     onChange={(value) => setPinValue(value)}
//                   >
//                     <PinInputField color={"white"} />
//                     <PinInputField color={"white"} />
//                     <PinInputField color={"white"} />
//                     <PinInputField color={"white"} />
//                   </PinInput>
//                 </HStack>
//               </div>

//               <div className="h-[30vh] w-full rounded-2xl overflow-y-scroll">
//                 <TableContainer>
//                   <Table variant="simple" color={"white"}>
//                     <TableCaption placement="top" color={"cyan"}>
//                       Hints
//                     </TableCaption>
//                     <Thead>
//                       <Tr>
//                         <Th color={"white"}>#</Th>
//                         <Th color={"white"}>Number</Th>
//                         <Th color={"white"}>Position</Th>
//                         <Th color={"white"} isNumeric>
//                           Digits
//                         </Th>
//                       </Tr>
//                     </Thead>
//                     <Tbody>
//                       {guess.map((g, index) => (
//                         <Tr
//                           key={index}
//                           ref={(el) => (guessRows.current[index] = el)}
//                         >
//                           <Td>{g.count}</Td>
//                           <Td>{g.number}</Td>
//                           <Td>{g.positionMatches}</Td>
//                           <Td>{g.digitMatches}</Td> {/* Corrected this */}
//                         </Tr>
//                       ))}
//                     </Tbody>
//                   </Table>
//                 </TableContainer>
//               </div>

//               <div
//                 ref={(el) => (table.current[1] = el)}
//                 className="w-full flex flex-col items-center gap-4 justify-center"
//               >
//                 <button
//                   className="text-white bg-green-600 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg"
//                   onClick={handleGuessSubmit}
//                   //OnkeyDown
//                 >
//                   Enter
//                 </button>
//                 <button className="text-white bg-red-400 h-max w-[70%] px-2 py-1 uppercase text-xl font-bold rounded-lg">
//                   Give Up
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Challenger;

import React, { useEffect, useRef, useState } from "react";
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
  const [randomNum, setRandomNum] = useState("");
  const [guess, setGuess] = useState([]); // State to store guesses
  const [guessCount, setGuessCount] = useState(0); // Keep track of the number of guesses
  const [pinValue, setPinValue] = useState(""); // State for storing current pin input value
  const guessRows = useRef([]); // Store refs for guess rows
  const table = useRef([]);
  const timer = useRef();
  const rules = useRef();

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
      const positionMatches = matchPosition(pinValue, randomNum);
      const digitMatches = matchDigits(pinValue, randomNum);

      setGuess((prevGuesses) => [
        {
          number: pinValue,
          count: guessCount + 1,
          positionMatches: positionMatches,
          digitMatches: digitMatches,
        },
        ...prevGuesses,
      ]);
      setGuessCount(guessCount + 1); // Increment the guess counter
      setPinValue(""); // Clear the PinInput value
    }
  };

  useGSAP(() => {
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
  }, [!start]);

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

  useEffect(() => {
    setRandomNum(generateNumber());
    console.log(randomNum);
  }, [!start]);

  
  //Function not working correctly---------------------------------
  const matchPosition = (guess, randomNum) => {
    let correctPositionCount = 0;
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === randomNum[i]) {
        correctPositionCount++;
      }
    }
    return correctPositionCount;
  };

  // Function to check how many digits are present-----------------------
  const matchDigits = (guess, randomNum) => {
    let correctDigitCount = 0;
    let guessDigits = guess.split("");
    let randomDigits = randomNum.split("");

    guessDigits.forEach((digit, i) => {
      if (randomDigits.includes(digit) && digit !== randomDigits[i]) {
        correctDigitCount++;
      }
    });
    return correctDigitCount;
  };

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
                  Timer
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
                          <Td>{g.digitMatches}</Td>{" "}
                          {/* Displays correct data */}
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
                  // OnkeyDown
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
