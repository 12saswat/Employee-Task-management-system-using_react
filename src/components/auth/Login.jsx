import React, { useState } from "react";

const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center  h-screen w-screen">
      <div className="border-2  p-20 border-emerald-300 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="  outline-none bg-transparent border-2 placeholder:text-gray-500 border-emerald-500 px-5 py-3 text-xl  rounded-full"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="  outline-none bg-transparent border-2 placeholder:text-gray-500 border-emerald-500 px-5 py-3 text-xl mt-8 rounded-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            required
          />
          <button className=" mt-5  outline-none border-none border-2 placeholder:text-white bg-emerald-600 px-5 py-2 w-44 text-xl hover:bg-emerald-800  rounded-full ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
