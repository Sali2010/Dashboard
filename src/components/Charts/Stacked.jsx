import React, { useContext } from "react";
import {
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { contextStore } from "../../contexts/index.";

const Stacked = ({ width, height }) => {
  const { currentMode } = useContext(contextStore);
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryYAxis={stackedPrimaryYAxis}
      background={currentMode === "Dark" ? "rgb(51 55 62)" : "white"}
      primaryXAxis={stackedPrimaryXAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: currentMode === "Dark" ? "rgb(51 55 62)" : "white",
        textStyle: {
          color: currentMode === "Dark" ? "white" : "rgb(51 55 62)",
        },
      }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
