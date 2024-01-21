"use client";
import React, { useState } from "react";
import LoginForm from "./components/login_register/LoginForm";
import RegisterForm from "./components/login_register/RegisterForm";

function Page() {
  const [login, setLogin] = useState(true);
  return (
    <div className="w-full h-screen flex justify-between md:flex-row flex-col">
      <div className="w-1/2 h-screen hidden md:block">
        <div className="w-1/2 h-screen fixed bg-gradient-to-t from-black to-transparent text-white items-start justify-end pb-14 pl-8 flex flex-col">
          <p className="font-bold text-2xl">Villa Amadaha</p>
          <p>The great place for peace life</p>
        </div>
        <img
          src="https://i.ibb.co/YcmXm7b/background.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-screen bg-white items-center flex flex-col justify-center px-8 md:px-32">
        <div className="w-full items-end">
          <p className="text-3xl font-bold mb-4">Sign Up</p>
        </div>
        <div className="flex gap-10 w-full bg-gray-100 p-1 justify-between rounded-md mb-4">
          <button
            onClick={() => setLogin(true)}
            className={
              login === false
                ? "w-full text-gray-400 text-center p-2 rounded-sm font-semibold"
                : "w-full b text-gr4en-400 bg-white text-center p-2 rounded-sm font-semibold"
            }
          >
            Sign In
          </button>
          <button
            onClick={() => setLogin(false)}
            className={
              login === true
                ? "w-full text-gray-400 text-center p-2 rounded-sm font-semibold"
                : "w-full b text-green-600 bg-white text-center p-2 rounded-sm font-semibold"
            }
          >
            Sign Up
          </button>
        </div>
        <div className="w-full">{login ? <LoginForm /> : <RegisterForm />}</div>
        <div className="flex items-center justify-center gap-2 w-full mt-4">
          <div className="border w-full" />
          <p className="text-gray-400">Or</p>
          <div className="border w-full" />
        </div>
        <button className="w-full border p-2 flex justify-center items-center gap-2 mt-4 rounded-md">
          <img
            src="https://i.ibb.co/XyfCq85/pngwing-com.png"
            className="w-4 h-4"
          />
          <p className=" font-semibold text-sm">Sign Up with Google</p>
        </button>
      </div>
    </div>
  );
}

export default Page;
