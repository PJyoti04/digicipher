import React from 'react';

const Buttons = ({ props }) => {
  return (
    <button className="relative border-0 cursor-pointer group w-[400px] ">
      <div className="relative overflow-hidden bg-red-600 py-4 px-20">
        <span className="absolute top-0 left-0 w-[120%] h-[110%] bg-gray-900 transform -translate-x-[105%] skew-x-[-10deg] transition-transform duration-[.8s] ease-in-out group-hover:translate-x-[-5%] group-hover:rounded-full"></span>
        <a href="#" className="relative text-2xl font-bold text-[#ece8e1] uppercase z-10">
          {props}
        </a>
      </div>
      <div className="absolute w-[105%] h-[50%] border-2 border-[#e72c2c] top-[-10%] left-[-2.5%] border-b-0"></div>
      <div className="absolute w-[105%] h-[50%] border-2 border-[#e72c2c] bottom-[-10%] left-[-2.5%] border-t-0"></div>
    </button>
  );
}

export default Buttons;
