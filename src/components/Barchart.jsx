import React from "react";
import { BarChart } from "@mui/x-charts";
import { useTheme } from "@mui/material/styles";

const BarLabel = () => {
  const theme = useTheme(); // Access the theme

  const platforms = ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"];
  const followersData = [120, 150, 180, 200, 230];
  const followingsData = [80, 100, 120, 130, 140];
  const tweetsData = [50, 70, 90, 110, 130];

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-[600px]">
        <BarChart
          xAxis={[{ scaleType: "band", data: platforms, label: "Social Media Platforms" }]}
          yAxis={[{ label: "Engagement Count" }]}
          series={[
            {
              id: 1,
              label: "Followers",
              data: followersData,
              color: theme.palette.neutral[700] || "#3d3d3d", // Dark gray for Followers
            },
            {
              id: 2,
              label: "Followings",
              data: followingsData,
              color: theme.palette.secondary.main, // Secondary color
            },
            {
              id: 3,
              label: "Posts",
              data: tweetsData,
              color: theme.palette.neutral.main, // Primary color
            },
          ]}
          width={750}
          height={300}
        />
      </div>
    </div>
  );
};

export default BarLabel;
