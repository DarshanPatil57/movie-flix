import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bg"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-32 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-2xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>

       { !IsSignInForm &&<input
          type="text"
          placeholder="Name"
          className=" p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
}
        <input
          type="text"
          placeholder="Email"
          className=" p-3 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className=" p-3 my-4 w-full bg-gray-700 rounded-lg"
        />

        <button className="p-2 my-4 bg-red-500 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className=" cursor-pointer py-8" onClick={toggleSignUpForm}>
          {IsSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;