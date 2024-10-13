import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  // Define expiryTimestamp when the component mounts
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // Set to 5 minutes from now
  const expiryTimestamp = time;

  // useTimer hook initialization
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer has expired!"),
  });

  return (
    <div className="text-white"
     style={{ textAlign: "center" }}>
      <div className="text-2xl text-white">
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restart to 5 minutes timer when clicked
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300); // Set to 5 minutes
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Timer;