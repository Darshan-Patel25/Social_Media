import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", followers: 141 },
  { month: "Feb", followers: 166 },
  { month: "Mar", followers: 175 },
  { month: "Apr", followers: 215 },
  { month: "May", followers: 197 },
  { month: "Jun", followers: 164 },
  { month: "Jul", followers: 227 },
  { month: "Aug", followers: 147 },
  { month: "Sep", followers: 194 },
];

const LineChartAlt = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAlt;
