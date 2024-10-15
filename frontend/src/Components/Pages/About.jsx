import React, { useRef } from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {

  const abtref = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate elements 0 and 2 simultaneously
    tl.add(
      gsap.from(abtref.current[0], {
        x: -100,
        opacity: 0,
        duration: 0.8,ease: "sine.inOut",
      })
    ).add(
      gsap.from(abtref.current[2], {
        x: -100,
        opacity: 0,
        duration: 0.8,ease: "sine.inOut",
      }),
      "<"
    ); // "<" ensures both animations happen at the same time

    // Animate elements 1, 3, and 4 simultaneously after 0 and 2
    tl.add(
      gsap.from(abtref.current[1], {
        x: 100,
        opacity: 0,
        duration: 0.8,ease: "sine.inOut",
      })
    )
      .add(
        gsap.from(abtref.current[3], {
          x: 100,
          opacity: 0,
          duration: 0.8,ease: "sine.inOut",
        }),
        "<"
      ) // "<" ensures this animation happens at the same time as 1
      .add(
        gsap.from(abtref.current[4], {
          x: 100,
          opacity: 0,
          duration: 0.8,ease: "sine.inOut",
        }),
        "<"
      ); // "<" ensures this animation happens at the same time as 1 and 3
  });

  return (
    <div
      className="overflow-hidden h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar back={true}></Navbar>
        <div className="h-[80vh] w-full flex flex-col items-center">
          <div className="h-[45%] w-[95%] flex items-center flex-col">
            <h1
              ref={(el) => {
                abtref.current[0] = el;
              }}
              className="text-white border-b-2 h-max text-2xl w-[100%]"
            >
              About
            </h1>
            <p
              ref={(el) => {
                abtref.current[1] = el;
              }}
              className="text-white"
            >
              Welcome to <strong>DigiCipher</strong>! 🔍✨ Get ready for an
              exciting puzzle adventure, where every guess brings you closer to
              cracking the secret 4-digit code. Use logic🧩,sharp thinking💡,
              and real-time hints to guide your way! ⏳ But stay sharp the
              timer⏳ is ticking fast! ⏲️ Can you beat the clock and solve the
              code, or will you hit 'Give Up' and try again? 😎 Dive in,
              challenge yourself, and see how fast you can win! 🎯🎮 Good luck!
              🍀🚀
            </p>
          </div>
          <div className="h-[50%] w-[100%] flex gap-4 flex-col items-center">
            <div
              ref={(el) => {
                abtref.current[2] = el;
              }}
              className="text-white w-[95%] border-white border-b-2 text-2xl"
            >
              About Developers
            </div>
            <div
              ref={(el) => {
                abtref.current[3] = el;
              }}
              className="h-[50%] w-[95%] flex justify-between border-2 border-white rounded-2xl p-2 bg-white bg-opacity-15"
            >
              <div className="h-full w-[30%] flex flex-col items-center justify-around">
                <img
                  src="DP.jpg"
                  alt=""
                  srcset=""
                  className="h-[68px] w-[68px] rounded-full object-cover"
                />
                <p className="uppercase font-bold text-center text-white">
                  Kiron
                </p>
              </div>
              <div className="h-full w-[70%] px-2 flex flex-col gap-4 mt-">
                <div className="h-[80%] overflow-auto">
                  <p className="text-sm text-white">
                    3rd-Year undergrad student @Silicon University skilled in
                    MERN stack and DevOps, specializes in building scalable,
                    user-friendly web applications.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link to={"https://github.com/KC1064"} target="_blank">
                    <FaGithub size={"22px"} color="white" />
                  </Link>
                  <Link
                    to={
                      "https://www.linkedin.com/in/kironmay-mishra-a32b791b4/"
                    }
                    target="_blank"
                  >
                    <FaLinkedinIn size={"22px"} color="white" />
                  </Link>
                  <Link target="_blank" to={"mailto:kiron08072003@gmail.com"}>
                    <SiGmail size={"22px"} color="white" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                abtref.current[4] = el;
              }}
              className="h-[50%] w-[95%] flex justify-between border-2 rounded-2xl border-white p-2 bg-white bg-opacity-15"
            >
              <div className="h-full w-[30%] flex flex-col items-center justify-around">
                <img
                  src="Dpj.jpeg"
                  alt=""
                  srcset=""
                  className="h-[68px] w-[68px] rounded-full object-cover"
                />
                <p className="uppercase font-bold text-center text-white">
                  Jyoti
                </p>
              </div>
              <div className="h-full w-[70%]  px-2 flex flex-col gap-4 mt-">
                <p className="text-sm text-white h-[80%] overflow-auto">
                  3rd Year Undergrad student @Silicon University, skilled in
                  Python, Java, and C, passionate about software development,
                  machine learning, and cloud computing.
                </p>
                <div className="flex gap-4">
                  <Link to={"https://github.com/PJyoti04"} target="_blank">
                    <FaGithub size={"22px"} color="white" />
                  </Link>
                  <Link
                    to={
                      "https://www.linkedin.com/in/jyoti-ranjan-pahi-0242a9331/"
                    }
                    target="_blank"
                  >
                    <FaLinkedinIn size={"22px"} color="white" />
                  </Link>
                  <Link target="_blank" to={"mailto:bapunjyoti2004@gmail.com"}>
                    <SiGmail size={"22px"} color="white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
