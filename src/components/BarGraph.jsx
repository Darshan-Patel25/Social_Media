import React from "react";
import { BarChart } from "@mui/x-charts";

const BarLabel = () => {
  // Static data with social media icons
  const platforms = ["Facebook", "YouTube", "Instagram", "Twitter", "LinkedIn"];
  const followersData = [120, 150, 180, 200, 230];
  const followingsData = [80, 100, 120, 130, 140];
  const tweetsData = [50, 70, 90, 110, 130];

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-[600px]">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: platforms,
              label: "Social Media Platforms",
            },
          ]}
          yAxis={[{ label: "Engagement Count" }]}
          series={[
            { id: 1, label: "Followers", data: followersData },
            { id: 2, label: "Followings", data: followingsData },
            { id: 3, label: "Posts", data: tweetsData },
          ]}
          width={750}
          height={300}
        />
      </div>
    </div>
  );
};

export default BarLabel;
