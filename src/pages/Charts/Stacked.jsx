/* eslint-disable no-unused-vars */
import React from 'react'
import { StackedChart,Header } from '../../components'

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Chart" title="StackedChart" />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked