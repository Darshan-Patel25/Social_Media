import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Instagram", value: 10500 },
  { name: "YouTube", value: 8400 },
  { name: "Twitter", value: 5600 },
  { name: "Facebook", value: 7200 },
];

const CustomPieChart = () => {
  const theme = useTheme();

  const themeColors = [
    theme.palette.secondary.main,   // Instagram
    theme.palette.primary.main,     // YouTube
    theme.palette.warning.main,     // Twitter
    theme.palette.success.main,     // Facebook
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Social Media Engagement Breakdown
      </h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={themeColors[index % themeColors.length]}
            />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value.toLocaleString()} engagements`} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
