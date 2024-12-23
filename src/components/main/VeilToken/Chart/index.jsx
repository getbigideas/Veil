import React from "react";
import { TEChart } from "tw-elements-react";

const ChartComponent = React.memo(() => {
  return (
    <TEChart
      type="doughnut"
      data={{
        labels: [
          "Marketing",
          "Revenue Share",
          "Team",
          "Development",
          "Treasury",
        ],
        datasets: [
          {
            label: "",
            data: [30, 20, 20, 15, 15],
            backgroundColor: [
              "#442630",
              "#1c3b2e",
              "#2d2a48",
              "#1a3149",
              "#443a23",
            ],
          },
        ],
      }}
    />
  );
});

ChartComponent.displayName = "ChartComponent";

export default ChartComponent;
