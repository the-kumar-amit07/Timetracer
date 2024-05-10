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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scheduleData"));
    // if (data) {
    //   console.log("scheduleEvents:", data)
    //   setScheduleEvents(data);
    // }

    if (data) {
      // Ensure each event object has a Status property
      const updatedEvents = data.map(event => ({
        ...event,
        Status: event.Status || "Todo" // Assign "Todo" if Status is undefined
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
    console.log("evnet i m trying to see",event);
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
        setCurrentColor,scheduleEvents, addEvent, updateEvent, deleteEvent
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
