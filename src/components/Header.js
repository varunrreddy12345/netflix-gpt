import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // ✅ FIXED SIGN OUT
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser()); // clear redux instantly
      navigate("/"); // redirect instantly
    } catch (error) {
     // console.log("Signout Error:", error);
    }
  };

  // ✅ AUTH LISTENER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handelLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center bg-gradient-to-b from-black">
      {/* Logo */}
      <img className="w-36" src={LOGO} alt="Netflix Logo" />

      {/* Show only in browse page */}
      {location.pathname === "/browse" && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="bg-black text-white border border-gray-600 px-4 py-2 rounded-lg 
             shadow-md outline-none cursor-pointer 
             hover:border-red-600 focus:ring-2 focus:ring-red-600 
             transition duration-300"
              onChange={handelLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            className="bg-gradient-to-r from-red-600 to-red-800 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-red-700/50 transition duration-300"
            onClick={handleGptSearchClick}
          >
            {showGptSearch? "Homepage":"🔎Search" } 
          </button>

          {/* User Avatar */}
          <img
            className="w-10 h-10 rounded-full border-2 border-red-500 hover:scale-110 transition duration-300 cursor-pointer"
            src={USER_AVATAR}
            alt="User Avatar"
          />

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
