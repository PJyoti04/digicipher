import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Loader from "./Loader";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const btns = useRef([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); //
  const home = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    if (!loading) {      
      tl.from(home.current, {
        x: 1000,
        opacity: 0,
        rotate: 10,
        duration: 1,
        ease: "power4.out", // Custom easing for a smooth and refined animation
      });

      tl.from(btns.current, {
        x: 1000,
        duration: 0.35,
        stagger: 0.16,
        opacity: 0,
      })
    }
  }, [loading]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const animateBtn = (index, path) => {
    gsap.to(btns.current, {
      scale: 0,
      duration: 0.3,
      stagger: 0.2,
      onComplete: () => {
        navigate(path);
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      ref={home}
      className="h-[100vh] flex flex-col gap-6"
      style={{
        backgroundImage: `url('Designer (2).jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="h-[70%] w-full flex flex-col items-center justify-center gap-5">
        <button
          ref={(el) => (btns.current[0] = el)}
          onClick={() => animateBtn(0, "/classic")}
          className="w-[80%] text-3xl border-2 border-white text-white h-max py-4 bg-[#e0e0e0] font-audiowide cursor-pointer bg-opacity-20 backdrop-blur-2xl overflow-hidden"
        >
          CLASSIC
        </button>
        <button
          ref={(el) => (btns.current[1] = el)}
          onClick={() => animateBtn(1, "/challenger")}
          className="w-[80%] text-3xl border-2 border-white text-white h-max py-4 bg-[#e0e0e0] font-audiowide cursor-pointer bg-opacity-20 backdrop-blur-2xl overflow-hidden"
        >
          CHALLENGER
        </button>
        <button
          ref={(el) => (btns.current[2] = el)}
          onClick={() => animateBtn(2, "/leaderboard")}
          className="w-[80%] text-3xl border-2 border-white text-white h-max py-4 bg-[#e0e0e0] font-audiowide cursor-pointer bg-opacity-20 backdrop-blur-2xl overflow-hidden"
        >
          LEADERBOARD
        </button>
        <button
          ref={(el) => (btns.current[3] = el)}
          onClick={() => animateBtn(3, "/rules")}
          className="w-[80%] text-3xl border-2 border-white text-white h-max py-4 bg-[#e0e0e0] font-audiowide cursor-pointer bg-opacity-20 backdrop-blur-2xl overflow-hidden"
        >
          INSTRUCTIONS
        </button>
      </div>
    </div>
  );
};

export default Home;
