import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='h-[8vh] w-full flex justify-between px-4 items-center'>
        <div className='flex items-center gap-1 text-lg'><FaRegCopyright size={"28px"}/>All Rights Reserved</div>
        <FaGithub size={"36px"}/>
    </div>
  )
}

export default Footer