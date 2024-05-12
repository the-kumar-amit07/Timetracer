import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { PlayIcon, PauseIcon, RefreshIcon, SaveIcon, TrashIcon } from '@heroicons/react/outline';

const Orders = () => {
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
    setMinutes
  } = useStateContext();

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    if (!isNaN(newMinutes) && newMinutes >= 0) {
      setMinutes(newMinutes);
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
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          onChange={handleMinutesChange}
          placeholder="Enter minutes"
          className="w-24 border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          onClick={handlePlayPauseClick}
          className="p-2 rounded-md bg-blue-500 text-white flex items-center"
        >
          {timerRunning ? <PauseIcon className="w-5 h-5 mr-1" /> : <PlayIcon className="w-5 h-5 mr-1" />}
          {timerRunning ? 'Pause' : 'Play'}
        </button>
        <button onClick={resetTimer} className="p-2 rounded-md bg-red-500 text-white ml-2">
          <RefreshIcon className="w-5 h-5" /> Reset
        </button>
        <button onClick={logTime} className="p-2 rounded-md bg-green-500 text-white ml-2">
          <SaveIcon className="w-5 h-5" /> Log
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Countdown Timer: {minutes}m {seconds}s</h2>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Recorded Times:</h3>
        <ul>
          {recordedTimes.map((record, index) => (
            <li key={index} className="flex items-center justify-between mb-1">
              <span>{record}</span>
              <button onClick={() => deleteRecord(index)} className="p-1 rounded-md bg-red-500 text-white">
                <TrashIcon className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
