import React from "react";
import "./home.css";
import Buttons from './Buttons';

const Home = () => {
  return (
    <div className="gradient-background h-screen flex flex-col items-center py-[8%] gap-10">
      <div className="h-[50%] w-[45%] rounded-xl py-6 flex flex-col gap-10">
        <div className="text-[50px] flex font-bungee font-bold items-center justify-center">
          <span className="flex items-center h-10 text-orange-500 bg-clip-text">
            <img src={'./icon.png'} alt="icon" className="h-[50px] w-[50px]" />
            PEN THE VAULT
          </span>
        </div>
        <div className="modes font-audiowide font-[400] flex justify-center items-center flex-col gap-6">
          <Buttons props={"Challenger"} />
          <Buttons props={"Classic"} />
          <Buttons props={"Leaderboard"} />
          <Buttons props={"How To Play"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
