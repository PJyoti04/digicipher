import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";

const Home = () => {
  const pages = [
    {
      link: "classic",
      name: "Classic",
    },
    {
      link: "challenger",
      name: "Challenger",
    },
    {
      link: "/rules",
      name: "How To play",
    },
    {
      link: "leaderboard",
      name: "Leaderboard",
    },
    
  ];
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: "url('./bg.svg')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="h-[84vh] w-full flex justify-center gap-6 items-center flex-col">
        {pages.map((page, index) => (
          <button
            key={index}
            style={{ fontFamily: "lunar" }}
            className="h-[10%] w-[80%] py-2 bg-white
      bg-opacity-25 border-2 border-white backdrop-blur-3xl
      text-white font-bold text-3xl flex items-center 
      justify-center uppercase"
          >
            {page.name}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
