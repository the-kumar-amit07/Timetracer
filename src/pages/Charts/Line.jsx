/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, Tooltip, Inject } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () =>{
  const { scheduleEvents } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Extracting relevant data for the chart
    const dataForChart = scheduleEvents.map(event => ({
      x: new Date(event.StartTime), // Convert StartTime to Date object
      y: event.Id // Assuming Id is used as y-axis for demonstration purposes
    }));
    setChartData(dataForChart);
  }, [scheduleEvents]);

  return (
    <ChartComponent id="chart" primaryXAxis={{ valueType: 'DateTime' }} title="Event Timeline" tooltip={{ enable: true }}>
      <Inject services={[Category, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective type="Line" dataSource={chartData} xName="x" yName="y" name="Events" />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Line