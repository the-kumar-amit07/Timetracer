/* eslint-disable no-unused-vars */
import React from 'react'
import Pie from './Pie'
import Bar from './Bar'
import Line from './Line'
import { Header } from '../../components'


const Analytics = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="" title="Analytics" />
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-1">Event Status Distribution</h2>
          <Pie/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-1">Total Logged Time per Month</h2>
          <Bar/>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-1">Logged Time Over Days</h2>
          <Line/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Analytics;
