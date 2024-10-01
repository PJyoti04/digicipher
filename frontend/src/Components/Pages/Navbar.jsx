import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {React,useState,useRef} from "react";
import {useNavigate} from 'react-router-dom'
import { ArrowBackIcon } from "@chakra-ui/icons";
import ReturnModal from "../utils/ReturnModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const nav = useRef();
  const navText = useRef();
  const navigate = useNavigate()

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(nav.current,{
      y:-100,
      opacity:0,
      duration:1,
    })
    tl.from(navText.current,{
      scale:0,
      opacity:0,
      duration:0.5
    })
  })

  const handleBackClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div
    ref={nav}
     className="w-full h-[10%] p-2">
      <nav className="flex justify-between items-center px-6 py-2 text-white bg-white border-2 border-white bg-opacity-20 rounded-[80px] backdrop-blur-3xl shadow-lg">
      <ArrowBackIcon color={'black'} boxSize={7} onClick={() => {handleBackClick()}} />
        <p
        ref={navText}
        style={{fontFamily:'cal'}}
        className="text-[25px] font-semibold flex items-center text-black">
          DigiCipher.
        </p>
      </nav>
      {showModal && (
        <ReturnModal
          isOpen={showModal}
          onClose={handleCloseModal} // Pass function to close modal
          onConfirm={() => navigate("/")} // Navigate to another route on confirmation
        />
      )}
    </div>
  );
};

export default Navbar;
