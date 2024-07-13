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
      <h1 className="text-black text-2xl font-bold font-mono">
        Movie-Flix
      </h1>

     { user && <div className="flex items-center">
        <img
          className="w-12 p-1 "
          src="https://imgs.search.brave.com/2mVUjx7oV3Iwyjt96m0w5SJ9Q8wXWogNRApUy7cyLzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzg0LzY5LzYy/LzM2MF9GXzc4NDY5/NjIxMl9NYWk2Z2g4/Mzl0bGxnZERvb0R3/SmZwcEhCcUt1bzhi/NC5qcGc"
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold mx-2">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
