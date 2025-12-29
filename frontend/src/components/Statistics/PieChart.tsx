import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SingleGamePieChartProps {
  gameName: string;
  minutesPlayed: number;
  iconUrl?: string;
  totalMinutes: number; // total time played across all games
}

const PieChart: React.FC<SingleGamePieChartProps> = ({
  gameName,
  minutesPlayed,
  iconUrl,
  totalMinutes,
}) => {
  const percent = totalMinutes > 0 ? (minutesPlayed / totalMinutes) * 100 : 0;
  const chartData = {
    labels: [gameName],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ["#FF6384", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="flex flex-col items-center ">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={gameName}
          className="w-12 h-12 mb-2"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <span className="text-white mb-2">{gameName}</span>
      <div className="w-20 h-20">
        <Pie
          data={chartData}
          options={{ plugins: { legend: { display: false } } }}
        />
      </div>
      <span className="sofia-sans-extra-condensed-regular font-extrabold text-white mt-2 text-sm">
        {percent.toFixed(0)}%
      </span>
    </div>
  );
};

export default PieChart;
