import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))  

      } else {
        // User is signed out
        dispatch(removeUser())
        // ...
      }
    });
    // unbscribe when component unmounts
    return () => unsubscribe();
  },
  [])

  return (
    <div className="absolute z-10 flex justify-between w-full p-4 mx-2">
      <h1 className="text-white text-2xl font-bold font-mono">
        Movie-Flix
      </h1>

     { user && <div className="flex items-center">
        <img
          className="w-12 p-1 "
          src= "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold mx-2 text-white">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
