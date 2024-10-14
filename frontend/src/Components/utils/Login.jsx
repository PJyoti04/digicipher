import React, { useEffect, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import User from "./Avatar";
import gsap from "gsap";

const Login = ({ setUser }) => {
  const loginRef = useRef(); // Reference for the login container

  useEffect(() => {
    gsap.fromTo(
      loginRef.current,
      { x: 1000, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } 
    );
  }, [setUser]);

  const handleClose = () => {
    gsap.to(loginRef.current, {
      x: 1000, 
      opacity: 0,
      duration: 0.8,
      ease: "power3.in", 
      onComplete: () => setUser(false), 
    });
  };

  return (
    <div
      ref={loginRef} // Attach the ref to this container
      className="bg-white h-[100vh] w-[70%] absolute top-0 right-0 z-30"
    >
      <div className="absolute top-4 right-4" onClick={handleClose}>
        <MdOutlineCancel size={"34px"} />
      </div>
      <div className="p-2 flex items-center gap-2 mt-6">
        <User size="lg" />
        <p className="text-2xl">UserName</p>
      </div>
      <div className="flex mt-4 px-4 flex-col gap-6">
        <p>Something</p>
        <p>Something</p>
        <p>Something</p>
      </div>
    </div>
  );
};

export default Login;
