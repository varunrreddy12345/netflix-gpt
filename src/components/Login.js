import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullNameRef = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // SIGN UP
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: fullNameRef.current.value,
            photoURL:
              "https://occ-0-5690-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABa3dRG2rbN8zB-VMREX8jHBNAp-LORv4rD1qdhSqoNmAbuAKWkaydWTPeYz97fxbFhc8gs3w9eDeMQtt8qnOpmKT4tWPK0M.png",
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    // SIGN IN
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
        alt="banner"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

      {/* Form */}
      <div className="flex justify-center items-center min-h-screen px-4 relative z-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black bg-opacity-80 p-6 sm:p-8 rounded-lg text-white flex flex-col"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="p-3 bg-red-600 rounded-md font-semibold hover:bg-red-700 transition"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-gray-400 text-sm mt-6 cursor-pointer text-center sm:text-left"
            onClick={toggleForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;