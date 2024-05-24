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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pie</h3>
            <Pie/>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bar</h3>
            <Bar/>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Line</h3>
            <Line/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
