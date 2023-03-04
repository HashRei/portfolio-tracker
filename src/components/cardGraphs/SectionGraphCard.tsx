import { Bar, Line } from "react-chartjs-2";
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

interface SectionGraphCardProps {
  sectionName: String;
  currentSectionValue: number;
  currentSectionDelta: number;
  backgroundColor: string;
  graphTension: number;
  fillGraph: boolean;
  graphType: string;
  graphLabel: string
}

export function SectionGraphCard({
  sectionName,
  currentSectionValue,
  currentSectionDelta,
  backgroundColor,
  graphTension,
  fillGraph,
  graphType,
  graphLabel,
}: SectionGraphCardProps) {
  return (
    <div
      className="sm:w-1/2 lg:w-1/4 rounded-xl p-2 m-2"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="pb-0 flex justify-between items-start mb-4">
        <div>
          <div className="text-lg font-semibold">
            {currentSectionValue}
            <span className="text-sm ml-2 font-normal">
              {currentSectionDelta}%
            </span>
          </div>
          <div>{sectionName}</div>
        </div>
      </div>
      <div className="mt-3 mx-3" style={{ height: "70px" }}>
        {graphType === "Line" && "line" ? (
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: graphTension,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
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
                  label: graphLabel,
                  backgroundColor: "rgba(255,255,255,.2)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [65, 59, 84, 84, 51, 55, 40],
                  fill: fillGraph,
                },
              ],
            }}
          />
        ) : (
          <Bar
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
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "January",
                "February",
                "March",
                "April",
              ],
              datasets: [
                {
                  label: graphLabel,
                  backgroundColor: "rgba(255,255,255,.5)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [
                    78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                    82,
                  ],
                  barPercentage: 0.6,
                },
              ],
            }}
          />
        )}
      </div>
    </div>
  );
}
