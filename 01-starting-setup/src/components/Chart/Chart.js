import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {

  // We need to calculate the total maxValue:
  // First extract the values (numbers) from the dataPoints (objects) in ExpensesChart.js/
  // We returner an Array of values (numbers) 
  // We can use the SPREAD OPERATOR  to pull out all the array elements and add them as stand alone arguments
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); // It receives the 12 arguments

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
