/* eslint-disable no-unused-vars */
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Home = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200
          dark:bg-secondary-dark-bg h-44 rounded-xl w-full 
          lg:w-80 p-8 pt-9 m-3 bg-hero-img bg-no-repeat 
          bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Hours</p>
              <p className="text-2xl">00 h 00min</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="gray"
              borderRadius="10px"
              size="md"
              text="Add Time"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-md p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Statistics</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-blue-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Completed</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">0</span>
                  <span>0%</span>
                </p>
                <p>Completed</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">5</span>
                </p>
                <p>Pending</p>
              </div>
              <div className="mt-5">
                <SparkLine
                currentColor='blue' id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color='blue'
                />
              </div>
              <div></div>
            </div>
            <div>
            <Stacked currentMode='blue' width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
