import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

function BarChart(){
  const { recordedTimes } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timePerMonth = recordedTimes.reduce((acc, record) => {
      const [_, duration] = record.split(" - ");
      const [loggedMinutes] = duration.split("m ");
      const totalMinutes = parseInt(loggedMinutes);

      const monthYear = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });

      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += totalMinutes;

      return acc;
    }, {});

    const data = Object.keys(timePerMonth).map(monthYear => ({
      monthYear,
      minutes: timePerMonth[monthYear],
    }));

    setChartData(data);
  }, [recordedTimes]);

  return (
   <div className="font-open-sans">
     <ChartComponent
      primaryXAxis={{ valueType: "Category", title: "Months" }}
      primaryYAxis={{ labelFormat: "{value} min", title: "Total Logged Time (in minutes)" }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
      className="font-sans"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={chartData}
          xName="monthYear"
          yName="minutes"
          type="Column"
          name="Logged Time"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
   </div>
  );
};

export default BarChart
