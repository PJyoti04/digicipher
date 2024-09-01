import React,{useState,useEffect} from "react";
import "./home.css";
import Buttons from './Buttons';
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Set the delay time as per your requirement
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  if (isLoading) {
    return (
      <div className="gradient-background  h-screen flex justify-center items-center">
        <img src={'./safe-box-wo-bg.gif'} alt="Loading..." className="h-[150px] w-[150px] bg-transparent" />
      </div>
    );
  }
  return (
    <div className="gradient-background h-screen flex flex-col items-center py-[8%] gap-10">
      <div className="h-[50%] w-[90%] md:w-[60%] lg:w-[45%] rounded-xl py-6 flex flex-col gap-10">
        <div className="text-[32px] sm:text-[40px] md:text-[50px] flex font-bungee font-bold items-center justify-center">
          <span className="flex items-center h-10 w-50 text-orange-500 bg-clip-text">
            <img src={'./icon-no-bg.png'} alt="icon" className="h-[45px] w-[45px]" />
            PEN THE VAULT
          </span>
        </div>
        <div className="modes font-audiowide font-[400] flex justify-center items-center flex-col gap-6">
          <Buttons props={"Challenger"} />
          <Buttons props={"Classic"} />
          <Buttons props={"Leaderboard"} />
          <Link to={'/rules'}><Buttons props={"How To Play"} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
