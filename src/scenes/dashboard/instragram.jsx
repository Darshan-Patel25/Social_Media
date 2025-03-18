import React from "react";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import StatBox from "components/StatBox";
import LineChart from "pages/instragram/instraline";
import BarChartAlt from "pages/instragram/instrabar";
import PieChartAlt from "pages/instragram/instrapie";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";

const InstagramDashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1rem 2rem">
      <FlexBetween>
        <Header
          title={<Box display="flex" alignItems="center">Instagram Dashboard</Box>}
          subtitle="Track your Instagram analytics and performance."
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
          <FaInstagram size={80} color={theme.palette.secondary[300]} />
        </Box>

        <StatBox title="May New Followers" value="194" increase="+28%" description="vs last month" />
        <Box gridColumn="span 8" gridRow="span 2" bgcolor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <LineChart />
        </Box>

        <Typography variant="h4" gridColumn="span 12" textAlign="center" mt={2} pb={-10} mb={-10}>Quick Stats</Typography>

        <StatBox title="Likes" value="82,188" increase="+16%" description="vs previous year" />
        <StatBox title="Reach" value="466K" increase="+14%" description="vs previous year" />
        <StatBox title="Comments" value="6,755" increase="+648" description="vs previous year" />
        <StatBox title="Media Saves" value="7,992" increase="+1,156" description="vs previous year" />
        <StatBox title="Impressions" value="455K" increase="+4%" description="vs previous year" />

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

export default InstagramDashboard;
