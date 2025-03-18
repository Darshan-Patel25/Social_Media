import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Positive", value: 50 },
  { name: "Negative", value: 30 },
  { name: "Neutral", value: 20 },
];

const ResponsePieChart = () => {
  const theme = useTheme();

  const themeColors = [
    theme.palette.secondary.main, // Positive (Yellow)
    theme.palette.error.main, // Negative (Blue)
    theme.palette.neutral.main, // Neutral (Grey)
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Response Breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={themeColors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ResponsePieChart;
