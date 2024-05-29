/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import {
  PlayIcon,
  PauseIcon,
  RefreshIcon,
  SaveIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Header } from "../components";

const Timer = () => {
  const {
    minutes,
    seconds,
    timerRunning,
    recordedTimes,
    startTimer,
    pauseTimer,
    resetTimer,
    logTime,
    deleteRecord,
    setMinutes,
    setSeconds,
  } = useStateContext();

  const totalSeconds = minutes * 60 + seconds;
  const elapsedSeconds = (totalSeconds - seconds) % (minutes * 60 + 1);

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && timerRunning) {
      pauseTimer();
      alert("Timer has ended!");
    }
  }, [minutes, seconds, timerRunning, pauseTimer]);

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    if (!isNaN(newMinutes) && newMinutes >= 0) {
      setMinutes(newMinutes);
      setSeconds(0);
    }
  };

  const handlePlayPauseClick = () => {
    if (timerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg shadow-lg">
      <Header category="App" title="Timer" />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Timer Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 max-h-80">
          <input
            type="number"
            onChange={handleMinutesChange}
            placeholder="Enter minutes"
            className="w-full text-4xl text-center border border-gray-300 rounded-lg py-2 mb-6 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={handlePlayPauseClick}
              className={`p-3 rounded-full ${
                timerRunning ? "bg-red-500" : "bg-green-500"
              } text-white flex items-center justify-center transition-colors duration-200`}
            >
              {timerRunning ? (
                <TooltipComponent content="Pause" position="top">
                  <PauseIcon className="w-6 h-6" />
                </TooltipComponent>
              ) : (
                <TooltipComponent content="Play" position="top">
                  <PlayIcon className="w-6 h-6" />
                </TooltipComponent>
              )}
            </button>

            <button
              onClick={resetTimer}
              className="p-3 rounded-full bg-blue-500 text-white transition-colors duration-200"
            >
              <RefreshIcon className="w-6 h-6" />
            </button>
            <button
              onClick={logTime}
              className="p-3 rounded-full bg-purple-500 text-white transition-colors duration-200"
            >
              <SaveIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Countdown Timer:</h2>
            <h2 className="text-4xl font-bold">{`${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
          </div>
          <div className="w-full bg-gray-200 rounded-lg h-6 overflow-hidden mb-6">
            <div
              className={`bg-${
                timerRunning ? "green" : "blue"
              }-500 h-full rounded-lg transition-all duration-500 ease-in-out`}
              style={{ width: `${(elapsedSeconds / totalSeconds) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Recorded Times Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 overflow-y-auto max-h-80">
          <h3 className="text-lg font-semibold mb-4">Recorded Times:</h3>
          <ul>
            {recordedTimes.map((record, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <span>{record}</span>
                <button
                  onClick={() => deleteRecord(index)}
                  className="p-2 rounded-md bg-red-500 text-white transition-colors duration-200 hover:bg-red-600"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          {recordedTimes.length === 0 && (
            <p className="text-gray-600 mt-4 text-center">
              No recorded times yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
