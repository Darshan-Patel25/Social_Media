import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import PieChart from "../../components/Piechart";

const data = [
  { date: "Jan 15", views: 800 },
  { date: "Jan 19", views: 1200 },
  { date: "Jan 23", views: 900 },
  { date: "Jan 27", views: 2300 },
  { date: "Jan 31", views: 1520 },
  { date: "Feb 4", views: 1800 },
  { date: "Feb 8", views: 1300 },
  { date: "Feb 12", views: 1100 }
];

const AnalyticsDashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box className="p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <Box className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="font-bold">
          <Header title="Analytics" subtitle="Your overall growth" />
        </Typography>
      </Box>

      {/* Shot Views */}
      <Typography variant="subtitle1" className="font-semibold mb-2">Shot Views</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }} />
          <Line type="monotone" dataKey="views" stroke="#ff6473" strokeWidth={3} dot={{ r: 5, fill: "#ff6473" }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Stats */}
      <Box className="grid grid-cols-4 gap-4 text-center mt-6">
        <StatBox label="Profile Views" value="4,268" />
        <StatBox label="Website Clickthroughs" value="362" />
        <StatBox label="Attachment Views" value="7,698" />
        <StatBox label="Project Views" value="364" />
      </Box>

      {/* Filters */}
      <Box className="flex justify-center mt-4 space-x-4">
        <Button variant="contained" color="secondary" sx={{ border: "2px solid black" }}>
          Last 30 Days
        </Button>
        <Button variant="outlined" sx={{ border: "1px solid black", color: "black" }}>
          Last 90 Days
        </Button>
        <Button variant="outlined" sx={{ border: "1px solid black", color: "black" }}>
          All Time
        </Button>
      </Box>

      {/* Pie Chart Section */}
      <Box
        mt="35px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="10px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box gridColumn="span 6" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <PieChart />
        </Box>
        <Box gridColumn="span 6" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          {/* Additional content can go here */}
        </Box>
      </Box>
    </Box>
  );
};

const StatBox = ({ label, value }) => (
  <Box>
    <Typography variant="h6" className="font-bold">{value}</Typography>
    <Typography variant="body2" className="text-gray-600">{label}</Typography>
  </Box>
);

export default AnalyticsDashboard;
