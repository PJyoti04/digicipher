import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Rules = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar back={true}></Navbar>
        <div className="h-[80vh] w-[100vw]">
          <Tabs isFitted variant="enclosed" colorScheme="" color={"white"}>
            <TabList fontWeight={"800"} bg={"transparent"}>
              <Tab
                _selected={{
                  bg: "rgba(255, 255, 255, 0.2)",
                  borderColor: "white",
                  color: "rgb(110, 231, 183)",
                }}
                _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              >
                CLASSIC
              </Tab>
              <Tab
                _selected={{
                  bg: "rgba(255, 255, 255, 0.2)",
                  borderColor: "white",
                  color: "rgb(110, 231, 183)",
                }}
                _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              >
                CHALLENGER
              </Tab>
            </TabList>
            <TabPanels
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {/* classic rules */}
              <TabPanel>
                <h1 className="font-bold font-audiowide text-md text-emerald-300 py-1">
                  Objectives :
                </h1>
                <p className="font-bold font-orbitron text-md text- py-1">
                  The main goal is to guess the correct 4-digit number within
                  the given attempts. Players rely on the color-coded feedback
                  to refine their guesses and crack the code. Classic Mode is a
                  blend of logical reasoning and trial-and-error, with a finite
                  number of attempts pushing players to think critically about
                  each guess.
                </p>
                <h1 className="font-bold font-audiowide text-md text-emerald-300 py-1">Rules :</h1>
                <p className="font-bold font-orbitron text-md text- py-1">
                  1. Guess the 4-digit number with unique digits.
                </p>
                <p className="font-bold font-orbitron text-md text- py-1">
                  2. Use the numbers to make your guess.
                </p>
                <p className="font-bold font-orbitron text-md py-1 text-">
                  3. After each guess, the background color will change based on
                  your input:
                </p>
                <div className="font-bold font-orbitron text-md text- list-disc list-inside ml-5 py-1">
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[20px] w-[30px] bg-green-600"></p>
                    The digit is correct and in the correct position.
                  </li>
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[20px] w-[30px] bg-yellow-300"></p>
                    The digit is correct but in the wrong position.
                  </li>
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[20px] w-[23px] bg-red-600"></p>
                    The digit is not part of the number.
                  </li>
                </div>
                <p className="font-bold font-orbitron text-md text- py-1">
                  4. Press 'Del.' to delete and 'Ent.' to confirm your guess.
                </p>
                <p className="font-bold font-orbitron text-md text- py-1">
                  5. You have 4 chances to guess the correct number.
                </p>
              </TabPanel>

              {/* Challenger rules */}
              <TabPanel>
                <h1 className="font-bold font-audiowide text-md text-emerald-300 py-1">Objective :</h1>
                <p className="font-bold font-orbitron text-md text- py-1">In Challenger Mode, players must guess a unique 4-digit code before the timer runs out. Feedback is provided after each guess, showing how many digits are correct in position and how many are part of the code. Multiple guesses are allowed until time expires or the code is cracked. The mode adds a time-pressured challenge, enhancing both speed and strategy.</p>
                <h1 className="font-bold font-audiowide text-md text-emerald-300 py-1">Rules :</h1>
                <p className="text-md  text- font-orbitron font-bold py-1">
                  1. The computer selects a unique{" "}
                  <strong>4-digit number</strong>, with no repeating digits.
                </p>

                <p className="text-md  text- font-orbitron font-bold py-1">
                  2. Your task is to guess the 4-digit code before the{" "}
                  <strong>timer</strong> runs out.
                </p>

                <p className="text-md  text- font-orbitron font-bold py-1">
                  3. After each guess, the feedback is shown in a table with two
                  columns:
                </p>

                <ul className="list-decimal list-inside ml-6 space-y-1 text-md  text- font-orbitron font-bold py-1">
                  <li>
                    <strong className="text-green-600">Position:</strong> How
                    many digits are in the correct position.
                  </li>
                  <li>
                    <strong className="text-green-600">Digits:</strong> How many
                    of your guessed digits are present in the code, regardless
                    of position.
                  </li>
                </ul>

                <p className="text-md  text- font-orbitron font-bold py-1">
                  4. You can make multiple guesses until you decipher the code
                  or the timer runs out.
                </p>

                <p className="text-md  text- font-orbitron font-bold py-1">
                  5. If you feel stuck or unable to crack the code, click the{" "}
                  <strong className="text-red-600">'Give Up'</strong> button to know the code and restart the game.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Rules;
