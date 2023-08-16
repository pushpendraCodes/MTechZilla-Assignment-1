import google from "../../assets/google.png";
import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Timer from "../Timer";
const Login = () => {
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      console.log(data.user.name)

      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  },[]);
  return (
    <div className=" flex justify-center h-screen items-center  ">
      {value ? (
        navigate("/")
      ) : (
        <button className="flex justify-center items-center gap-4 px-4 py-2 hover:bg-gray-200 rounded-md bg-white" onClick={handleClick}>
          <img className="w-10 h-10" src={google} alt="" />
          <p className="text-xl text-gray-500">SignIn With Google</p>
        </button>
      )}
    </div>
  );
};

export default Login;
