import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "United States", value: 245 },
  { name: "Brazil", value: 401 },
  { name: "Canada", value: 129 },
  { name: "Germany", value: 74 },
  { name: "United Kingdom", value: 221 },
  { name: "Argentina", value: 176 },
  { name: "Singapore", value: 98 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1", "#FF6F91"];

const PieChartAlt = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartAlt;
