/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { PlayIcon, PauseIcon, RefreshIcon, SaveIcon, TrashIcon } from '@heroicons/react/outline';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

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
    <div className="container mx-auto p-4 bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="text"
          onChange={handleMinutesChange}
          placeholder="00"
          className="w-full text-4xl text-center border border-gray-300 rounded-md py-2 mb-4"
        />
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={handlePlayPauseClick}
            className="p-3 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2"
          >
            {timerRunning ? <TooltipComponent content='Pause' position='Top'>
              <PauseIcon className="w-6 h-6" />
            </TooltipComponent> : <TooltipComponent content='Play' position='Top'>
            <PlayIcon className="w-6 h-6" />
              </TooltipComponent>}
          </button>
          <button onClick={resetTimer} className="p-3 rounded-full bg-red-500 text-white mr-2">
            <RefreshIcon className="w-6 h-6" />
          </button>
          <button onClick={logTime} className="p-3 rounded-full bg-green-500 text-white">
            <SaveIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold mb-2">Countdown Timer:</h2>
          <h2 className="text-4xl font-bold">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h2>
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
    </div>
  );
}

export default Timer