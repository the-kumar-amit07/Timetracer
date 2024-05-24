/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = () => {
  const { scheduleEvents } = useStateContext();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const statusCounts = scheduleEvents.reduce((acc, event) => {
      const status = event.Status || "Todo";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    const data = Object.keys(statusCounts).map(status => ({
      status,
      count: statusCounts[status],
    }));

    setChartData(data);
  }, [scheduleEvents]);

  return (
    <AccumulationChartComponent
      title="Event Status Distribution"
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={chartData}
          xName="status"
          yName="count"
          type="Pie"
          dataLabel={{
            visible: true,
            position: 'Outside',
            name: 'status',
          }}
          radius="70%"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart