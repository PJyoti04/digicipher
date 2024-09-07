import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
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


  return (
    <div>
      <div className='text-2xl'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      <button onClick={start} className='h-10 w-20 bg-slate-400 px-2'>Start</button>
      <button onClick={pause} className='h-10 w-20 bg-slate-400 px-2'>Pause</button>
      <button onClick={reset} className='h-10 w-20 bg-slate-400 px-2'>Reset</button>
    </div>
  );
}

export default function Timer() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}