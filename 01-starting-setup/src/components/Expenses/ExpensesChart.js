import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ];
    for (const expense of props.expenses) {
        const expenseMonth = expense.data.getMonth(); // Starting at 0 == Jan
        // expenseMonth will be used as index (0, 11)
        chartDataPoints[expenseMonth].value += expense.amount;
        // the values that start at 0 will be updated and passed to <Chart />
    }
  return (
      // dataPoints is the props we recieve from Chart.js and we set it equal to our update (above)
      <Chart dataPoints/>
  );
}

export default ExpensesChart;