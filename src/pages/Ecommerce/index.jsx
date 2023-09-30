import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../../components/";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "./../../data/dummy";
import { contextStore } from "./../../contexts/index.";
const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 ">Earning</p>
              <p className="text-2xl"> $435,322.33</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              title={"Download"}
              backgroundColor={"aqua"}
              borderRadius={4}
              color={"white"}
              textSize={"md"}
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9  rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780 ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold ">Revenue Update</p>
            <div className="flex items-center gap-2 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Budge</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-between">
            <div className="border-r-1 border-color m-4 pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold ">$25,857</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1 ">Budge</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold ">$12,735</span>
                </p>
                <p className="text-gray-500 mt-1 ">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="aqua"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  color="aqua"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  backgroundColor={"aqua"}
                  borderRadius={4}
                  color={"white"}
                  title={"Download Report"}
                />
              </div>
            </div>

            <div className="mt-10">
              <Stacked width={"320px"} height={"360px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
