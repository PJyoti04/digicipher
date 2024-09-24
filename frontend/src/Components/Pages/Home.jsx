import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #b3e0e8, #a4c8d6, #95b1c4, #88a1b1, #7a8b9e, #748a8d, #708c8b, #6c8e88, #66909c, #7aa2ab, #8fb3ba, #a6c4c9)",
      }}
    >
      <Navbar />
      <div className="h-[70%] w-full flex flex-col items-center justify-center gap-5">
        <button className="w-[50%] h-max p-2 bg-blue-300 font-audiowide cursor-pointer">
          <Link to={"/classic"}>CLASSIC</Link>
        </button>
        <button className="w-[50%] h-max p-2 bg-blue-300 font-audiowide cursor-pointer">
          <Link to={"/challenger"}>CHALLANGER</Link>
        </button>
        <button className="w-[50%] h-max p-2 bg-blue-300 font-audiowide cursor-pointer">
          <Link to={"/leaderboard"}>LEADERBOARD</Link>
        </button>
        <button className="w-[50%] h-max p-2 bg-blue-300 font-audiowide cursor-pointer">
          <Link to={"rules"}>INSTRUCTIONS</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
