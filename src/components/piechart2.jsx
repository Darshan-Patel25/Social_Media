import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const CustomPieChart = () => {
  const theme = useTheme();

  const themeColors = [
    theme.palette.neutral.main, // Category A
    theme.palette.secondary.main, // Category B
    theme.palette.error.main, // Category C
    theme.palette.warning.main, // Category D
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-base font-medium text-[theme(colors.primary.main)] mb-1">
        Pie Chart
      </h2>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={themeColors[index % themeColors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend fontSize={10} />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
