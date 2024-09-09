import React, { useEffect, useState } from "react";
import Navbar from "../Utilities/Navbar";
import { useStopwatch } from "react-timer-hook";
import './pages.css'

const Challenger = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [fourDigitNumber, setFourDigitNumber] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [showNumber, setShowNumber] = useState(false);
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [gameGivenUp, setGameGivenUp] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const generateUnique4DigitNumber = () => {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let uniqueDigits = [];

    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    uniqueDigits = nums.slice(0, 4);
    const fourDigitNumber = uniqueDigits.join("");
    setFourDigitNumber(fourDigitNumber);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0 && timerStarted) {
      setShowNumber(true);
      setIsCountdownVisible(false);
      start();
      setButtonsDisabled(true);
      setImageVisible(true); 
    }
    return () => clearInterval(timer);
  }, [countdown, timerStarted, start]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setImageVisible(true);
        setTimeout(() => setImageVisible(false), 2000); 
      }, 8000); 
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const play = () => {
    generateUnique4DigitNumber();
    setCountdown(3);
    setShowNumber(false);
    setIsCountdownVisible(true);
    setTimerStarted(true);
    setButtonsDisabled(true);
    setGameGivenUp(false);
    setImageVisible(true); 
  };

  const handlePause = () => {
    if (buttonsDisabled) return; 
    pause();
    setImageVisible(false); 
  };

  const giveUp = () => {
    if (buttonsDisabled) return; 
    reset();
    setIsCountdownVisible(false);
    setShowNumber(false);
    setCountdown(0);
    setTimerStarted(false);
    setButtonsDisabled(false);
    generateUnique4DigitNumber();
    setGameGivenUp(true);
    setImageVisible(false); 
  };

  return (
    <div>
      <Navbar />
      {isCountdownVisible && (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <div className="text-7xl font-tech">Generating Passcode....</div>
          <div className="text-5xl font-tech">{countdown}</div>
        </div>
      )}
      <div
        className={`w-[110%] flex px-[5%] gap-[2%] ${
          isCountdownVisible || gameGivenUp ? "hidden" : ""
        }`}
      >
        <div className="w-[30%] h-[400px] bg-slate-300">
          <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
            <div className="text-5xl font-tech">
              <span>0{minutes}</span>:
              {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[400px] bg-slate-400">
          <div className="text-5xl font-tech flex justify-center items-center h-full">
            {showNumber ? fourDigitNumber : ""}
          </div>
        </div>
        <div className="w-[30%] bg-slate-500">Table</div>
      </div>
      <div className="w-[100%] flex justify-center items-center h-max py-2">
        <button
          onClick={play}
          className={`h-10 w-auto bg-slate-400 px-2 ${buttonsDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={buttonsDisabled}
        >
          Tap To Play
        </button>
        <button
          onClick={handlePause}
          className={`h-10 w-auto bg-slate-400 px-2 ${buttonsDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={buttonsDisabled}
        >
          Pause
        </button>
        <button
          onClick={giveUp}
          className={`h-10 w-auto bg-red-400 px-2 ${buttonsDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={buttonsDisabled}
        >
          Give Up
        </button>
      </div>
      <div className={`fixed bottom-0 left-0 p-4 ${imageVisible ? 'pop-up-animation' : 'opacity-0'}`}>
        <img src="/a.jpeg" alt="Icon" className="h-28 w-28" />
      </div>
    </div>
  );
};

export default Challenger;
