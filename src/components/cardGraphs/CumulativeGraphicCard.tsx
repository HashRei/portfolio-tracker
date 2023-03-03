import { Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

export function CumulativeGraphicCard() {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="flex flex-col items-center w-fit mx-auto mt-4 bg-gray-300 bg-opacity-20 rounded-xl p-16">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Portfolio performance
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here is the performance of the overall portfolio over the last few months.
      </p>
      <div className="mt-3 mx-3 w-5/6 h-64">
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(13, 202, 240, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              },
              {
                label: "My Second dataset",
                borderColor: "rgba(25, 135, 84, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
              },
              {
                label: "My Third dataset",
                borderColor: "rgba(220, 53, 69, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  drawOnChartArea: false,
                },
              },
              y: {
                beginAtZero: true,
                max: 250,
                ticks: {
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
