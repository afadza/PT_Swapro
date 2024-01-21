import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <form>
        <label>
          <p>Email</p>
          <input
            type="text"
            className="border w-full p-1 mt-1 mb-2 rounded-md"
          />
        </label>
        <label>
          <p>Password</p>
          <div className="flex items-center border pr-2  p-1 rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </button>
          </div>
        </label>
        <button className="w-full bg-emerald-700 text-white rounded-md p-2 mt-4">
          Sign In
        </button>
      </form>
      <div className="w-full items-center justify-center text-sm gap-2 flex mt-4">
        <p className="text-gray-400">Forgot Password? </p>
        <button className="text-emerald-700 font-bold border-b-2 border-emerald-700">
          {" "}
          CLick Here
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
