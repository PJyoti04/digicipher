import React from 'react'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'

const Leaderboard = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar back = {true}></Navbar>
        <div className='h-[80vh]'></div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Leaderboard