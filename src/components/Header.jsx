import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className="absolute z-10 flex justify-between w-full p-3">
      <h1 className="text-black text-2xl font-bold font-mono">
        Movie-Flix
      </h1>

     { user && <div className="flex items-center">
        <img
          className="w-12 p-1 "
          src="https://imgs.search.brave.com/2mVUjx7oV3Iwyjt96m0w5SJ9Q8wXWogNRApUy7cyLzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzg0LzY5LzYy/LzM2MF9GXzc4NDY5/NjIxMl9NYWk2Z2g4/Mzl0bGxnZERvb0R3/SmZwcEhCcUt1bzhi/NC5qcGc"
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold ">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
