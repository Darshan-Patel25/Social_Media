import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { ageGroup: "13-18", followers: 36 },
  { ageGroup: "18-25", followers: 90 },
  { ageGroup: "26-35", followers: 84 },
  { ageGroup: "36-55", followers: 51 },
  { ageGroup: "55+", followers: 12 },
];

const BarChartAlt = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="ageGroup" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="followers" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartAlt;
