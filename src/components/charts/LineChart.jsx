/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";


const LineChart = () => {
  const { recordedTimes } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timePerDay = recordedTimes.reduce((acc, record) => {
      const [time, duration] = record.split(" - ");
      const date = new Date();

      if (!date) {
        console.error("Invalid date:", time);
        return acc;
      }

      const [loggedMinutes, loggedSeconds] = duration.split("m ");
      const totalMinutes = parseInt(loggedMinutes) + (parseInt(loggedSeconds) || 0) / 60;

      const dateString = date.toISOString().split("T")[0]; // Format date to YYYY-MM-DD

      if (!acc[dateString]) {
        acc[dateString] = 0;
      }
      acc[dateString] += totalMinutes;

      return acc;
    }, {});

    const data = Object.keys(timePerDay).map(date => ({
      date: new Date(date), // Convert back to Date object for chart
      minutes: timePerDay[date],
    }));

    setChartData(data);
  }, [recordedTimes]);

  return (
    <ChartComponent
      primaryXAxis={{ valueType: "DateTime", labelFormat: "dd/MM/yyyy", title: "Days" }}
      primaryYAxis={{ labelFormat: "{value} min", title: "Logged Time (in minutes)" }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
    >
      <Inject services={[LineSeries, DateTime, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="date"
          yName="minutes"
          type="Line"
          name="Logged Time"
          marker={{ visible: true, width: 10, height: 10 }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart