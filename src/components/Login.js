import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">

      <Header />

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        alt="banner"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Form */}
      <form className="absolute w-3/12 bg-black bg-opacity-80 p-12 rounded-md my-36 mx-auto right-0 left-0 text-white flex flex-col">

        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 bg-gray-700 rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 bg-gray-700 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-gray-700 rounded-md"
        />

        <button className="p-3 my-6 bg-red-600 rounded-md font-semibold hover:bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-sm cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In"}
        </p>

      </form>
    </div>
  );
};

export default Login;