import React from "react";
import Timer from "../Utilities/Timer";
import Navbar from "../Utilities/Navbar";
const Challenger = () => {
  const nums = [0,1,2,3,4,5,6,7,8,9];
  const randomnumber = "";
  
  return (
    <div>
      <Navbar />
      <div className="w-[110%] flex px-[5%] gap-[2%]">
        <div className="w-[30%] bg-slate-300">
          <Timer />
        </div>
        <div className="w-[30%] bg-slate-400">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-[30%] bg-slate-500">
          Table
        </div>
        
      </div>
    </div>
  );
};

export default Challenger;
