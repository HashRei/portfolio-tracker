import { SectionGraphCard } from "./SectionGraphCard";

export function SectionGraphCardGallery() {
  return (
    <div>
      <div className="flex justify-center">
        <SectionGraphCard
          sectionName="Gold & Silver"
          currentSectionValue={46}
          currentSectionDelta={8}
          backgroundColor="rgb(0, 123, 255)"
        />
        <SectionGraphCard
          sectionName="Stocks"
          currentSectionValue={46}
          currentSectionDelta={14}
          backgroundColor="#17a2b8"
        />
      </div>
      <div className="flex justify-center">
        <SectionGraphCard
          sectionName="Crypto"
          currentSectionValue={46}
          currentSectionDelta={26}
          backgroundColor="#28a745"
        />
        <SectionGraphCard
          sectionName="Real Estate"
          currentSectionValue={46}
          currentSectionDelta={3}
          backgroundColor="#ffc107"
        />
      </div>
      {/* <div className="flex justify-center">
        <div className="sm:w-1/2 lg:w-1/4 rounded-xl p-2 m-2 bg-blue-600 ">
          <div className="pb-0 flex justify-between items-start mb-4">
            <div>
              <div className="text-lg font-semibold">
                26K
                <span className="text-sm ml-2 font-normal">(-12.4%)</span>
              </div>
              <div>Gold & Silver</div>
            </div>
          </div>
          <div className="mt-3 mx-3" style={{ height: "70px" }}>
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
                    tension: 0.4,
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
                    label: "My First dataset",
                    backgroundColor: "transparent",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 rounded-xl p-2 m-2 bg-[#17a2b8]">
          <div className="pb-0 flex justify-between items-start mb-4">
            <div>
              <div className="text-lg font-semibold">
                26K
                <span className="text-sm ml-2 font-normal">(-12.4%)</span>
              </div>
              <div>Stocks</div>
            </div>
          </div>
          <div className="mt-3 mx-3" style={{ height: "70px" }}>
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
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
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
                    label: "My First dataset",
                    backgroundColor: "rgba(255,255,255,.2)",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="sm:w-1/2 lg:w-1/4 rounded-xl p-2 m-2 bg-[#28a745] ">
          <div className="pb-0 flex justify-between items-start mb-4">
            <div>
              <div className="text-lg font-semibold">
                26K
                <span className="text-sm ml-2 font-normal">
                  (-12.4%)
                </span>
              </div>
              <div>Crypto</div>
            </div>
          </div>
          <div className="mt-3 mx-3" style={{ height: "70px" }}>
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
                    min: -9,
                    max: 39,
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
                    label: "My First dataset",
                    backgroundColor: "transparent",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 rounded-xl p-2 m-2 bg-[#ffc107] ">
          <div className="pb-0 flex justify-between items-start mb-4">
            <div>
              <div className="text-lg font-semibold">
                26K
                <span className="text-sm ml-2 font-normal">(-12.4%)</span>
              </div>
              <div>Real Estate</div>
            </div>
          </div>
          <div className="mt-3 mx-3" style={{ height: "70px" }}>
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
                    label: "My First dataset",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [
                      78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84,
                      67, 82,
                    ],
                    barPercentage: 0.6,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
