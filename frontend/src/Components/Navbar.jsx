import React from 'react'
import { FaUserCircle  } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='h-[8vh] w-full flex justify-between px-4 items-center'>
      <FaUserCircle  size={'38px'}/>
      <p className='text-4xl text-blue-700 font-bold'
      style={{fontFamily:'smoking'}}
      >DigiCipher</p>
     <FaCircleInfo size={"38px"} />
    </div>
  )
}

export default Navbar