import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Auth = ({setlogin}) => {
  let navigate = useNavigate();
  let clientID =
    "561629850492-so2g5e7svm0cobcioeqfobcpr74puia8.apps.googleusercontent.com";

const[user,setuser]=useState()
console.log(user)
  const responseMessage = (codeResponse) => {
    console.log(codeResponse);
    // setuser(codeResponse)
    navigate("/timer");
    setlogin(true)
  };




  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div>
      <div className=" flex justify-center h-screen items-center  ">
        <GoogleLogin
          clientID={clientID}
          onSuccess={responseMessage}
          onError={errorMessage}
       width={400}


        />
      </div>
    </div>
  );
};

export default Auth;
