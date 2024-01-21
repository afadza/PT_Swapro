import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import ModalRegister from "./ModalRegister";
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <form>
        <label>
          <p>Nama</p>
          <input
            type="text"
            className="border w-full p-1 mt-1 mb-2 rounded-md"
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="text"
            className="border w-full p-1 mt-1 mb-2 rounded-md"
          />
        </label>
        <label>
          <p>Phone Number</p>
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
        <div className="w-full bg-emerald-700 text-white rounded-md p-2 mt-4">
          <ModalRegister />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
