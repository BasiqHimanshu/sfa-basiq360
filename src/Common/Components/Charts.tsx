import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "Common/useChartColors";

const BasicBarChart = ({ chartId }: any) => {
  const chartColors = useChartColors(chartId);

  const primaryData = {
    series: [
      {
        name: "Primary Sales",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    categories: [
      "Kapil",
      "Rohit",
      "Sunil",
      "Surender",
      "Himanshu",
      "Lokesh",
      "Jatin",
      "Uma",
      "Chirag",
      "Gautum",
    ],
  };

  const secondaryData = {
    series: [
      {
        name: "Secondary Sales",
        data: [300, 350, 420, 390, 500, 600, 720, 950, 1050, 1250],
      },
    ],
    categories: [
      "Bhupender",
      "Isha",
      "Mayank",
      "Asha",
      "Suraj",
      "Rekha",
      "Shweta",
      "Naman",
      "Piyush",
      "Tarun",
    ],
  };

  const [isPrimary, setIsPrimary] = useState(true);

  const dataset = isPrimary ? primaryData : secondaryData;

  const options: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    colors: chartColors,
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: dataset.categories,
    },
  };

  return (
    <React.Fragment>
      <div className="card p-4 border border-custom-100 dark:border-custom-800 rounded-lg shadow-md">
        <div className="flex gap-3 mb-4 justify-between">
            <h4>Top Performers</h4>
            <div className="space-x-4">
                <button
                onClick={() => setIsPrimary(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isPrimary
                    ? "bg-custom-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
                >
                Primary
                </button>
                <button
                onClick={() => setIsPrimary(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    !isPrimary
                    ? "bg-custom-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
                >
                Secondary
                </button>
            </div>
        </div>

        <ReactApexChart
            dir="ltr"
            options={options}
            series={dataset.series}
            data-chart-colors='["bg-custom-500"]'
            id={chartId}
            className="apex-charts"
            type="bar"
            height={350}
        />
      </div>
    </React.Fragment>
  );
};

export { BasicBarChart };
