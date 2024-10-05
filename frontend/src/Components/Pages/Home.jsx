import React, { useRef } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  const ref3 = useRef([]);

  useGSAP(()=>{
    gsap.from(ref3.current,{
      x: -1000,
      duration: 0.5,
      opacity:0,
      stagger: 0.3,
      delay:0.8
    })
  })
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
            ref={(el)=>(ref3.current[index]=el)}
            style={{ fontFamily: "caleb" }}
            className="h-[10%] w-[80%] py-2 bg-[black]
      bg-opacity-25 border-2 border-[#3ef4f4] backdrop-blur-3xl
      text-[#3ef4f4] text-[44px] flex items-center font-semibold
      justify-center uppercase"
          ><p className="mt-2">{page.name}</p>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
