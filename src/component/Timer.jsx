import React, { useEffect, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [Text, setText] = useState("start timer");
  let navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (Text == "start timer") {
              BreakTimer();
              setText("take a break");
              document.getElementById("text").style.display = "block";
            } else if (Text == "take a break") {
              setText("back to work");
              document.getElementById("text").style.display = "block";
              resetTimer();
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);

  // reset function
  const resetTimer = () => {
    document.getElementById("text").style.display = "block";
    setText("start timer");
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);

  };

  // break timer function
  const BreakTimer = () => {
    setIsActive(false);
    setMinutes(5);
    setSeconds(0);
  };

  // logout
  const logout = () => {
    localStorage.clear("email");
    navigate("/login");
  };
  return (
    <div className="h-screen">
      <div className="my-5 flex justify-end">
        <button
          onClick={logout}
          className=" rounded-md hover:bg-slate-300 bg-slate-200 py-1 px-2"
        >
          Logout
        </button>
      </div>
      <div className=" flex justify-center gap-16 flex-col items-center  ">
        <h2 className="text-3xl font-bold  text-white">Pomodoro timer app</h2>

        <div className=" flex items-center cursor-pointer justify-center rounded-full bg-[#05928a] w-80 h-80 border-4 border-solid border-gray-600">
          <div className="text-center  ">
            <p id="text" className="text-gray-200 text-2xl my-4">
              {Text}!
            </p>
            <p className="text-white text-7xl">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <button
              className="bg-blue-500 rounded-md mt-10 hover:bg-blue-400  text-white px-6  py-2 my-5"
              onClick={() => {
                setIsActive(!isActive);
                document.getElementById("text").style.display = "none";
              }}
            >
              {isActive ? "Pause" : "Start"}
            </button>
          </div>
        </div>

        <div className="space-x-5">
          <button
            onClick={resetTimer}
            className="bg-green-500 rounded-md hover:bg-green-400 text-white px-6  py-2 "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
