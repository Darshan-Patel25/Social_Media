import React from "react";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { FaYoutube } from "react-icons/fa";
import StatBox from "components/StatBox";
import LineChart from "pages/instragram/instraline";
import BarChartAlt from "pages/instragram/instrabar";
import PieChartAlt from "pages/instragram/instrapie";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";

const YouTubeDashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1rem 2rem">
      <FlexBetween>
        <Header
          title={<Box display="flex" alignItems="center">YouTube Dashboard</Box>}
          subtitle="Track your YouTube analytics and performance."
        />

        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Download Report
        </Button>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="10px"
        sx={{ "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" } }}
      >
        <Box gridColumn="span 2" gridRow="span 1" display="flex" justifyContent="center" alignItems="center" bgcolor={theme.palette.background.alt} borderRadius="0.55rem" p="1rem">
          <FaYoutube size={80} color={theme.palette.secondary[300]} />
        </Box>

        <StatBox title="New Subscribers" value="1,520" increase="+12%" description="vs last month" />
        <Box gridColumn="span 8" gridRow="span 2" bgcolor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <LineChart />
        </Box>

        <Typography variant="h4" gridColumn="span 12" textAlign="center" mt={2}>Quick Stats</Typography>

        <StatBox title="Views" value="1.2M" increase="+18%" description="vs previous year" />
        <StatBox title="Watch Time" value="8.3K hrs" increase="+14%" description="vs previous year" />
        <StatBox title="Likes" value="58,210" increase="+20%" description="vs previous year" />
        <StatBox title="Shares" value="9,345" increase="+8%" description="vs previous year" />
        <StatBox title="Comments" value="12,789" increase="+6%" description="vs previous year" />

        <Box gridColumn="span 6" gridRow="span 3" bgcolor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <PieChartAlt />
        </Box>

        <Box gridColumn="span 6" gridRow="span 3" bgcolor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <BarChartAlt />
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubeDashboard;
