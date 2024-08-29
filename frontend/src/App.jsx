import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const randomNum = Math.floor(Math.random() * 10000);
  const [num, setNum] = useState();

  // const [count, setCount] = useState(0); JUST IGNORE

  const [input, setInput] = useState();
  const [pos_match, setMatch] = useState(0);
  const [num_match, setNum_Match] = useState(0);
  const [guess, setGuess] = useState(10);

  // Used to find a random number but will 
  // not rerender if another components changes states
  useEffect(() => {
    setNum(randomNum);
  }, [setNum]);

  // Not working but no idea why :)
  useEffect(()=>{
    return (<div>Loading....</div>)
  },[])

  // Function to check matching Position
  const checkposition = (val) => {
    if (val == num) {
      console.log("Matched");
    }
    const str = num.toString();
    let i = 0;
    let cnt = 0;
    for (i = 0; i < 4; i++) {
      if (val[i] == str[i]) {
        cnt++;
      }
      setMatch(cnt);
    }
  };

  // Function to check matching Number
  const checknumber = (val) => {
    const numStr = num.toString();
    const valStr = val.toString();

    const numFreq = Array(10).fill(0);
    for (let char of numStr) {
      numFreq[parseInt(char)]++;
    }

    let matchCount = 0;
    for (let char of valStr) {
      const digit = parseInt(char);
      if (numFreq[digit] > 0) {
        matchCount++;
        numFreq[digit]--;
      }
    }

    setNum_Match(matchCount);
  };

  const element = useRef(null);

  // I used it to automate the focus on input on reload
  useEffect(() => {
    element.current.focus();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>{num}</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={element}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            checkposition(input);
            // console.log(input);
            checknumber(input);
            setGuess(guess - 1);
            // setInput();
          }
        }}
      />
      {/* <button onClick={() => setCount(count + 1)}>Count: {count}</button> JUST IGNORE */}
      <p>Position Matched: {pos_match}</p>
      <p>Numbers Matched: {num_match}</p>
      <p>Guesses: {guess}</p>
    </div>
  );
};

export default App;



