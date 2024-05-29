/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import  {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  StackingColumnSeries,
  Category,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = () => {
  const { scheduleEvents } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Initialize data structure to hold counts for each status per month
    const data = months.map(month => ({
      month,
      Todo: 0,
      InProgress: 0,
      Done: 0,
    }));

    // Log initial data structure
    console.log('Initial Data Structure:', data);

    // Populate the data structure
    scheduleEvents.forEach(event => {
      const eventDate = new Date(event.date);
      const monthName = months[eventDate.getMonth()];
      const status = event.Status.replace(' ', '') || "Todo";
      const monthData = data.find(d => d.month === monthName);
      if (monthData) {
        monthData[status] += 1;
      }
    });

    // Log final data structure after processing events
    console.log('Final Data Structure:', data);

    setChartData(data);
  }, [scheduleEvents]);

  return (
    <ChartComponent
      title="Event Status Distribution Over Months"
      primaryXAxis={{ valueType: "Category", title: "Months" }}
      primaryYAxis={{ title: "Number of Events" }}
      legendSettings={{ visible: true }}
      tooltip={{ enable: true }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="month"
          yName="Todo"
          name="Todo"
          type="StackingColumn"
        />
        <SeriesDirective
          dataSource={chartData}
          xName="month"
          yName="InProgress"
          name="In Progress"
          type="StackingColumn"
        />
        <SeriesDirective
          dataSource={chartData}
          xName="month"
          yName="Done"
          name="Done"
          type="StackingColumn"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default Stacked