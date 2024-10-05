import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
    <div>
      <Navbar />
      <div className="h-[84vh] w-full flex justify-center gap-6 items-center flex-col">
        {pages.map((page, index) => (
          <div key={index} className="h-[6vh] w-[25vh] bg-slate-500 text-white font-bold text-3xl flex items-center justify-center">
            {page.name}{" "}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
