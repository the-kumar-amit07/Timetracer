/* eslint-disable no-unused-vars */
import React from "react";

import { BarChart, Header, LineChart, PieChart } from "../../components";
import Stacked from "./Stacked";

const Analytics = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="" title="Analytics" />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Event Status Distribution
            </h2>
            <PieChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Total Logged Time per Month
            </h2>
            <BarChart />
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Logged Time Over Days
            </h2>
            <Stacked/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
