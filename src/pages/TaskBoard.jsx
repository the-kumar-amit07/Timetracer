/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStateContext } from '../contexts/ContextProvider';

function TaskBoard(){
  const { scheduleEvents, updateEvent } = useStateContext();

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("eventId", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    const eventId = e.dataTransfer.getData("eventId");
    const updatedEvent = scheduleEvents.find((event) => event.Id === parseInt(eventId));
    if (updatedEvent) {
      updatedEvent.Status = status;
      updateEvent(updatedEvent);
    }
  };

  return (
    <div className="flex justify-center mt-10 p-10">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <div
            className="bg-gray-200 rounded p-4"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "Todo")}
          >
            <h2 className="text-lg font-semibold mb-4">Todo</h2>
            {scheduleEvents
              .filter((event) => event.Status === "Todo")
              .map((event) => (
                <div
                  key={event.Id}
                  className="bg-white p-2 rounded mb-2 cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, event.Id)}
                >
                  <p>{event.Subject}</p>
                  <p className="text-sm text-gray-500">{formatDateTime(event.StartTime)}</p>

                </div>
              ))}
          </div>
          <div
            className="bg-gray-200 rounded p-4"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "In Progress")}
          >
            <h2 className="text-lg font-semibold mb-4">In Progress</h2>
            {scheduleEvents
              .filter((event) => event.Status === "In Progress")
              .map((event) => (
                <div
                  key={event.Id}
                  className="bg-white p-2 rounded mb-2 cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, event.Id)}
                >
                  <p>{event.Subject}</p>
                  <p className="text-sm text-gray-500">{event.StartTime}</p>
                </div>
              ))}
          </div>
          <div
            className="bg-gray-200 rounded p-4"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "Done")}
          >
            <h2 className="text-lg font-semibold mb-4">Done</h2>
            {scheduleEvents
              .filter((event) => event.Status === "Done")
              .map((event) => (
                <div
                  key={event.Id}
                  className="bg-white p-2 rounded mb-2 cursor-pointer"
                  draggable
                  onDragStart={(e) => handleDragStart(e, event.Id)}
                >
                  <p>{event.Subject}</p>
                  <p className="text-sm text-gray-500">{event.StartTime}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskBoard