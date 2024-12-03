import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import User from "./Avatar";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const loginRef = useRef(); // Reference for the login container
  const backdropRef = useRef(); // Reference for the backdrop
  const [logged, setLogged] = useState(false);

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
    <div>
      {/* Backdrop for blur effect */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-20"
        onClick={handleClose} // Clicking the backdrop will close the modal
      ></div>

      {/* Login Modal */}
      <div
        ref={loginRef} // Attach the ref to this container
        className="bg-white h-20 w-[70%] absolute top-10 right-6 flex items-center z-30"
      >
        <div className="absolute top-4 right-4" onClick={handleClose}>
          <MdOutlineCancel size={"34px"} />
        </div>
        <div className="p-2 flex items-center gap-2 mt-6">
          {logged ? (
            <User size="md" />
          ) : (
            <Link to="/signup">
              <button className="text-2xl">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
