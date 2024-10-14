import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar back={true}></Navbar>
        <div className="h-[80vh] w-full flex flex-col items-center">
          <div className="h-[45%] w-[95%] flex items-center flex-col">
            <h1 className="text-white border-b-2 h-max text-2xl w-[100%]">
              About
            </h1>
            <p className="text-white">
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
            <div className="h-[50%] w-[95%] flex justify-between border-2 border-white rounded-2xl p-2 bg-white bg-opacity-15">
              <div className="h-full w-[30%] flex flex-col items-center justify-around">
                <img
                  src="DP.jpg"
                  alt=""
                  srcset=""
                  className="h-[68px] w-[68px] rounded-full object-cover"
                />
                <p className="uppercase font-bold text-white">
                  Kironmay Mishra
                </p>
              </div>
              <div className="h-full w-[70%] px-2 flex flex-col gap-4 mt-">
                <div className="h-[80%] overflow-auto">
                  <p className="text-sm text-white">
                    I'm Kironmay Mishra, a 3rd-year undergraduate student at
                    Silicon University with hands-on experience in web
                    development, specializing in the MERN stack, React, Redux,
                    and Tailwind CSS. I have developed multiple projects that
                    showcase my ability to build scalable, user-friendly
                    applications. In addition, I am expanding my expertise by
                    diving into DevOps, aiming to enhance my skills in
                    automation and cloud infrastructure.
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaGithub size={"22px"} color="white" />
                  <FaLinkedinIn size={"22px"} color="white" />
                  <SiGmail size={"22px"} color="white" />
                </div>
              </div>
            </div>
            <div className="h-[50%] w-[95%] flex justify-between border-2 rounded-2xl border-white p-2 bg-white bg-opacity-15">
              <div className="h-full w-[30%] flex flex-col items-center justify-around">
                <img
                  src="Dpj.jpeg"
                  alt=""
                  srcset=""
                  className="h-[68px] w-[68px] rounded-full object-cover"
                />
                <p className="uppercase font-bold text-white">
                  Jyoti Ranjan Pahi
                </p>
              </div>
              <div className="h-full w-[70%]  px-2 flex flex-col gap-4 mt-">
                <p className="text-sm text-white h-[80%] overflow-auto">
                  I am a third-year Computer Science student passionate about
                  software development, problem-solving, and emerging
                  technologies. With a strong foundation in programming
                  languages such as Python, Java, and C. I enjoy building
                  applications and working on real-world projects that blend
                  creativity and technology. I have hands-on experience in web
                  development, algorithms, and data structures, and I’m actively
                  enhancing my skills in areas like machine learning and cloud
                  computing.
                </p>
                <div className="flex gap-4">
                  <FaGithub size={"22px"} color="white" />
                  <FaLinkedinIn size={"22px"} color="white" />
                  <SiGmail size={"22px"} color="white" />
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
