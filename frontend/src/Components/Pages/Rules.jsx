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
        <div className="h-[80vh] w-[100vw] overflow-y-scroll">
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
                <h1
                  style={{ fontFamily: "pixel" }}
                  className="text-2xl text-emerald-300 py-1"
                >
                  Objectives :
                </h1>
                <p className="font-Agdasima text-lg py-1">
                  The main goal is to guess the correct 4-digit number within
                  the given attempts. Players rely on the color-coded feedback
                  to refine their guesses and crack the code. Classic Mode is a
                  blend of logical reasoning and trial-and-error, with a finite
                  number of attempts pushing players to think critically about
                  each guess.
                </p>
                <h1
                  style={{ fontFamily: "pixel" }}
                  className="text-2xl text-emerald-300 py-1"
                >
                  Rules :
                </h1>
                <p className="font-Agdasima text-[18px] py-1">
                  1. Guess the{" "}
                  <span className="font-bold text-red-400">4-digit</span>{" "}
                  number with{" "}
                  <span className="font-bold text-red-400">
                    unique digits
                  </span>
                  .
                </p>
                <p className="font-Agdasima text-[18px] py-1">
                  2. Use the{" "}
                  <span className="font-bold text-red-400">numpad</span> to
                  make your guess.
                </p>
                <p className="font-Agdasima text-[18px] py-1">
                  3. After each guess, the background color will change based on
                  your input:
                </p>
                <div className="font-Agdasima text-[14px] list-disc list-inside ml-5 py-1">
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[30px] w-[30px] bg-green-600 flex-shrink-0"></p>
                    <span className="flex-grow">
                      The{" "}
                      <span className="font-bold text-red-400">
                        digit is correct
                      </span>{" "}
                      and in the{" "}
                      <span className="font-bold text-red-400">
                        correct position
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[30px] w-[30px] bg-yellow-300 flex-shrink-0"></p>
                    <span className="flex-grow">
                      The{" "}
                      <span className="font-bold text-red-400">
                        digit is correct
                      </span>{" "}
                      but in the{" "}
                      <span className="font-bold text-red-400">
                        wrong position
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-center gap-2 py-1">
                    <p className="h-[30px] w-[30px] bg-red-600 flex-shrink-0"></p>
                    <span className="flex-grow">
                      The{" "}
                      <span className="font-bold text-red-400">
                        digit is not present
                      </span>{" "}
                      in the number.
                    </span>
                  </li>
                </div>

                <p className="text-[18px] py-1">
                  4. Press{" "}
                  <span className="font-bold text-red-400">Del.</span> to
                  delete and{" "}
                  <span className="font-bold text-red-400">Ent.</span> to
                  confirm your guess.
                </p>
                <p className="text-[18px] py-1">
                  5. You have{" "}
                  <span className="text-red-400 font-bold">4 chances</span> to
                  guess the correct number.
                </p>
              </TabPanel>

              {/* Challenger rules */}
              <TabPanel>
                <h1
                  style={{ fontFamily: "pixel" }}
                  className="text-2xl text-emerald-300 py-1"
                >
                  Objective :
                </h1>
                <p className="font-Agdasima text-lg py-1">
                  In Challenger Mode, players must guess a unique 4-digit code
                  before the timer runs out. Feedback is provided after each
                  guess, showing how many digits are correct in position and how
                  many are part of the code. Multiple guesses are allowed until
                  time expires or the code is cracked. The mode adds a
                  time-pressured challenge, enhancing both speed and strategy.
                </p>
                <h1
                  style={{ fontFamily: "pixel" }}
                  className="text-2xl text-emerald-300 py-1"
                >
                  Rules :
                </h1>
                <p className="text-[18px] py-1">
                  1. The computer selects a unique{" "}
                  <strong className="text-red-400">4-digit number</strong>,
                  with <strong className="text-red-400">no repeating digits</strong>.
                </p>

                <p className="text-[18px] py-1">
                  2. Your task is to guess the 4-digit code before the{" "}
                  <strong className="text-red-400">timer</strong> runs out.
                </p>

                <p className="text-[18px] py-1">
                  3. After each guess, the feedback is shown in a table with two
                  columns:
                </p>

                <ul className="list-decimal list-inside ml-6 space-y-1 text-[16px] py-1">
                  <li>
                    <strong className="text-red-400">Position:</strong> How
                    many digits are in the correct position.
                  </li>
                  <li>
                    <strong className="text-red-400">Digits:</strong> How
                    many of your guessed digits are present in the code,
                    regardless of position.
                  </li>
                </ul>

                <p className="text-[18px] py-1">
                  4. You can make <strong className="text-red-400">multiple guesses</strong> until you <strong className="text-red-400">decipher the code </strong> 
                  or the <strong className="text-red-400">timer runs out</strong>.
                </p>

                <p className="text-[18px] py-1">
                  5. If you feel stuck or unable to crack the code, click the{" "}
                  <strong className="text-red-400">'Give Up'</strong> button
                  to know the code and restart the game.
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
