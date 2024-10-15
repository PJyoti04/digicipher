import React, { useRef, useState } from "react";
import User from "./Avatar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ReturnModal from "./ReturnModal";
import Login from "./Login";

const Navbar = ({ showNav, back }) => {
  const ref2 = useRef();
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(false);
  const nav = useNavigate();

  const handleUserClick = () => {
    setUser(true);
  };

  useGSAP(() => {
    gsap.from(ref2.current, {
      y: -200,
      opacity: 0,
      duration: 0.4,
    });
  });

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="h-[9vh] w-full flex justify-center items-center">
        {showNav && (
          <div
            ref={ref2}
            className="h-[100%] w-[100%] px-4 flex justify-between items-center rounded-br-3xl rounded-bl-3xl"
          >
            <div className="h-full w-full flex items-center justify-between">
              <Link
                to="https://github.com/KC1064/open_the_vault"
                target="_blank"
              >
                <FaGithub size={"29px"} color="white" />
              </Link>
              <div onClick={handleUserClick}>
                <User />
              </div>
            </div>
          </div>
        )}
        {!showNav && (
          <div className="h-[100%] w-[100%] px-4 flex justify-between items-center">
            {back ? (
              <FaArrowLeft
                color="white"
                cursor="pointer"
                onClick={() => nav("/")}
              />
            ) : (
              <FaHouseChimney
                color="white"
                size={"25px"}
                onClick={handleBackClick}
              />
            )}

            <div
              className="text-emerald-300 text-5xl mt-2"
              style={{ fontFamily: "pixel" }}
            >
              DIGICIPHER
            </div>
            <div onClick={handleUserClick}>
              <User size={"sm"} />
            </div>
          </div>
        )}
      </div>

      <div>{user && <Login setUser={setUser} />}</div>

      {showModal && (
        <ReturnModal
          isOpen={showModal}
          onClose={handleCloseModal}
          onConfirm={() => nav("/")}
        />
      )}
    </>
  );
};

export default Navbar;
