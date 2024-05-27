/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Category,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";


const LineChart = () =>{
  const { loggedTimeByCategory } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (loggedTimeByCategory) {
      // Format the data for each category
      const formattedData = Object.keys(loggedTimeByCategory).map((category) => {
        return {
          category,
          data: loggedTimeByCategory[category].map((entry) => ({
            time: entry.time, // Time (e.g., days, weeks, months)
            loggedTime: entry.loggedTime, // Logged time in minutes
          })),
        };
      });
      setChartData(formattedData);
    }
  }, [loggedTimeByCategory]);
  

  return (
    <ChartComponent
      title="Time Trends by Category"
      primaryXAxis={{ valueType: "Category", title: "Time" }}
      primaryYAxis={{ title: "Logged Time (in minutes)" }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
    >
      <Inject services={[LineSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        {chartData.map((categoryData, index) => (
          <SeriesDirective
            key={index}
            dataSource={categoryData.data}
            xName="time"
            yName="loggedTime"
            name={categoryData.category}
            type="Line"
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default LineChart