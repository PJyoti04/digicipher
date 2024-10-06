import React, { useRef } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
      name: "How To Play",
    },
    {
      link: "leaderboard",
      name: "Leaderboard",
    },
  ];

  const ref3 = useRef([]);

  const goto = (index, path) => {
    gsap.to(ref3.current[index], {
      duration: 0.5,
      x: -200,
      opacity: 0,
      onComplete: () => navigate(path),
    });
  };

  useGSAP(() => {
    gsap.from(ref3.current, {
      scale:0,
      opacity:0,
      duration:0.5,
      stagger:0.4,
      delay: 0.8
    });
  });

  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: "url('./bg.svg')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="h-[82vh] w-full flex justify-center gap-6 items-center flex-col">
        {pages.map((page, index) => (
          <button
            key={index}
            ref={(el) => (ref3.current[index] = el)}
            style={{ fontFamily: "origami" }}
            onClick={() => goto(index, page.link)} // Corrected this line
            className="h-[10%] w-[80%] py-2 bg-[black]
              bg-opacity-25 border-2 border-[#3ef4f4] backdrop-blur-3xl
              text-[#3ef4f4] text-[40px] flex items-center font-semibold
              justify-center uppercase"
          >
            <p className="mt-2">{page.name}</p>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
