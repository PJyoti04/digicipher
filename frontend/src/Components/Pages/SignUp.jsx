import React from "react";

const SignUp = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] flex justify-center items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-[70%] w-[60%] bg-white rounded-lg bg-opacity-20 backdrop-blur-sm">
        <h1 className="text-white mt-5 ml-4 text-2xl tracking-tight">
          Create Account
        </h1>
        <form action="" method="post" className="flex flex-col gap-4 mt-5">
          <div className="w-full flex justify-between px-4">
            <label className="text-white">Username</label>
            <input type="text" placeholder="Enter Username"  className="w-[75%]"/>
          </div>
          <div className="w-full flex justify-between px-4">
          <label className="text-white">Password</label>
          <input type="password" placeholder='Enter Password' className="w-[75%]"/>
          </div>
          <div className="w-full flex justify-between px-4">
          <label className="text-white">Confirm</label>
          <input type="password" placeholder='Confirm Password' className="w-[75%]"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
