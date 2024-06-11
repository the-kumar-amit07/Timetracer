/* eslint-disable no-unused-vars */
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from "../components";

function TaskBoard(){
  const { scheduleEvents, updateEvent } = useStateContext();

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      const updatedEvent = scheduleEvents.find((event) => event.Id === parseInt(draggableId));
      if (updatedEvent) {
        updatedEvent.Status = destination.droppableId;
        updateEvent(updatedEvent);
      }
    }
  };

  const getFilteredEvents = (status) => {
    return scheduleEvents ? scheduleEvents.filter(event => event.Status === status) : [];
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg shadow-lg">
      <Header category="App" title="Task Board" />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-6">
          {['Todo', 'In Progress', 'Done'].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  className="bg-gray-100 rounded p-4 shadow-md"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2 className="text-lg font-semibold mb-4">{status}</h2>
                  {getFilteredEvents(status).map((event, index) => {
                    // Log the event to see its structure
                    console.log(event);
                    // Add a check to ensure event.Id is not null or undefined
                    if (event && event.Id !== null && event.Id !== undefined) {
                      return (
                        <Draggable key={event.Id} draggableId={event.Id.toString()} index={index}>
                          {(provided) => (
                            <div
                              className="bg-white p-4 rounded mb-4 cursor-pointer shadow-sm hover:shadow-lg transition duration-300"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <p className="text-lg font-semibold">{event.Subject}</p>
                              <p className="text-sm text-gray-500 mt-2">{formatDateTime(event.StartTime)}</p>
                            </div>
                          )}
                        </Draggable>
                      );
                    } else {
                      console.error(`Invalid event Id for event: ${JSON.stringify(event)}`);
                      return null;
                    }
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default TaskBoard;
