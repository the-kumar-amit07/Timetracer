/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  const [scheduleEvents, setScheduleEvents] = useState([]);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }

    // Load recorded times from localStorage when component mounts
    const storedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];
    setRecordedTimes(storedTimes);
  }, []);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setTimerRunning(false);
            // Log time when countdown finishes
            logTime();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning, minutes, seconds]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const logTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRecord = `${currentTime} - ${minutes}m ${seconds}s`;
    // Get previous recorded times from localStorage
    const storedTimes = JSON.parse(localStorage.getItem('recordedTimes')) || [];
    // Add the new record to the list
    const updatedRecords = [...storedTimes, newRecord];
    // Update state and localStorage with the combined list
    setRecordedTimes(updatedRecords);
    localStorage.setItem("recordedTimes", JSON.stringify(updatedRecords));
  };

  const deleteRecord = (index) => {
    const updatedRecords = recordedTimes.filter((_, i) => i !== index);
    setRecordedTimes(updatedRecords);
    localStorage.setItem("recordedTimes", JSON.stringify(updatedRecords));
  };

  //for Schedule Data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scheduleData"));
    // if (data) {
    //   console.log("scheduleEvents:", data)
    //   setScheduleEvents(data);
    // }

    if (data) {
      // Ensure each event object has a Status property
      const updatedEvents = data.map((event) => ({
        ...event,
        Status: event.Status || "Todo", // Assign "Todo" if Status is undefined
      }));
      setScheduleEvents(updatedEvents);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    try {
      console.log("Saving events to localStorage", data);
      localStorage.setItem("scheduleData", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving events to localStorage:", error);
    }
  };

  const addEvent = (event) => {
    const updatedEvents = [...scheduleEvents, event];
    setScheduleEvents(updatedEvents);
    console.log("event i m trying to see", event);
    saveToLocalStorage(updatedEvents);
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = scheduleEvents.map((event) =>
      event.Id === updatedEvent.Id ? updatedEvent : event
    );
    setScheduleEvents(updatedEvents);
    saveToLocalStorage(updatedEvents);
  };

  const deleteEvent = (eventId) => {
    console.log("Deleting event with Id:", eventId);
    const updatedEvents = scheduleEvents.filter(
      (event) => event.Id !== eventId
    );
    console.log("Updated events after deletion:", updatedEvents);
    setScheduleEvents(updatedEvents);
    saveToLocalStorage(updatedEvents);
  };

  const handleClick = (clicked) => {
    // setIsClicked({...initialState,[clicked]: true});
    setIsClicked((prevState) => ({
      ...prevState,
      [clicked]: !prevState[clicked],
    }));
  };

  const logIn = (userData) => {
    console.log("User data", userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
  }

  const logOut = () =>{
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        scheduleEvents,
        addEvent,
        updateEvent,
        deleteEvent,
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
        isAuthenticated,
        logIn,
        logOut
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
