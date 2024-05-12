/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { KanbanComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-kanban';
const Editor = () => {
  const { scheduleEvents, updateEvent } = useStateContext();

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("eventId", id);
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
    <KanbanComponent style={{ width: "100%", height: "500px" }} allowDragAndDrop={true} cardDragStop={(e) => handleDrop(e)}>
      <ColumnsDirective>
        <ColumnDirective headerText="Todo" key="todo">
          {scheduleEvents
            .filter((event) => event.Status === "Todo")
            .map((event) => (
              <div
                key={event.Id}
                className="e-card"
                data-key={event.Id}
                draggable
                onDragStart={(e) => handleDragStart(e, event.Id)}
              >
                <div className="e-card-header">{event.Subject}</div>
                <div className="e-card-content">{event.StartTime}</div>
              </div>
            ))}
        </ColumnDirective>
        <ColumnDirective headerText="In Progress">
          {scheduleEvents
            .filter((event) => event.Status === "In Progress")
            .map((event) => (
              <div
                key={event.Id}
                className="e-card"
                data-key={event.Id}
                draggable
                onDragStart={(e) => handleDragStart(e, event.Id)}
              >
                <div className="e-card-header">{event.Subject}</div>
                <div className="e-card-content">{event.StartTime}</div>
              </div>
            ))}
        </ColumnDirective>
        <ColumnDirective headerText="Done">
          {scheduleEvents
            .filter((event) => event.Status === "Done")
            .map((event) => (
              <div
                key={event.Id}
                className="e-card"
                data-key={event.Id}
                draggable
                onDragStart={(e) => handleDragStart(e, event.Id)}
              >
                <div className="e-card-header">{event.Subject}</div>
                <div className="e-card-content">{event.StartTime}</div>
              </div>
            ))}
        </ColumnDirective>
      </ColumnsDirective>
    </KanbanComponent>
  );
};

export default Editor