import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";

const Home = () => {
  const pages = [
    {
      link: "/",
      name: "Home",
    },
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
      name: "Instructions",
    },
  ];
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: "url('public/bg.svg')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="h-[80vh] w-full flex justify-center gap-6 items-center flex-col">
        {pages.map((page, index) => (
          <button
            key={index}
            className="h-[6vh] w-[25vh] bg-white bg-opacity-5 border-2 border-white backdrop-blur-3xl text-white font-bold text-3xl flex items-center justify-center"
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