import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // ✅ FIXED SIGN OUT
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());   // clear redux instantly
      navigate("/");            // redirect instantly
    } catch (error) {
      console.log("Signout Error:", error);
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
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 z-50 flex justify-between items-center bg-gradient-to-b from-black">
      
      {/* Logo */}
      <img className="w-36" src={LOGO} alt="Netflix Logo" />

      {/* Show only in browse page */}
      {location.pathname === "/browse" && (
        <div className="flex items-center gap-4">
          
          {/* User Avatar */}
          <img
            className="w-10 h-10 rounded-md"
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
