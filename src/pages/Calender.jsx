/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Calender = () => {
  const { scheduleEvents, addEvent, updateEvent, deleteEvent } =
    useStateContext();
  const handleEventClick = (args) => {
    console.log("Event click args:", args);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        height="650px"
        className="rounded-md"
        currentView="Month"
        eventSettings={{
          dataSource: scheduleEvents,
        }}
        actionComplete={(args) => {
          // Handle event creation and editing
          if (args.requestType === "eventCreated") {
            addEvent(args.data);
            console.log("request type :", args.requestType);
            console.log("Event Id : " , args.data.Id);
          } else if (args.requestType === "eventChanged") {
            updateEvent(args.data);
          } else if (args.requestType === "eventRemoved") {
            deleteEvent(args.data.Id);
          }
        }}
        eventClick={handleEventClick} // Event Click Handler
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
