import React from "react";
import { NavLink } from "react-router-dom";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import StatBox from "components/StatBox";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import Barchart from "../../components/Barchart";
import Piechart from "../../components/piechart2";
import PostCard from "../../components/PostCard";


const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const iconStyle = {
    color: theme.palette.secondary[300],
    fontSize: "24px",
    cursor: "pointer"
  };

  return (
    <Box m="1rem 2rem">
      <FlexBetween>
        <Header
          title={<Box display="flex" alignItems="center">Hello, Zenith👋</Box>}
          subtitle="Stay on top of your social hive by creating and scheduling posts consistently."
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
          Download Reports
        </Button>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="10px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* Stat Boxes with NavLink */}
        <StatBox 
          title="Instagram" 
          value="10,000" 
          increase="+5%" 
          description="Since last month" 
          icon={
            <NavLink to="/dashboard/instagram">
              <FaInstagram style={iconStyle} />
            </NavLink>
          }
        />
        <StatBox 
          title="YouTube" 
          value="500" 
          increase="+2%" 
          description="Since last month" 
          icon={
            <NavLink to="/dashboard/youtube">
              <FaYoutube style={iconStyle} />
            </NavLink>
          }
        />
        <StatBox 
          title="Twitter" 
          value="1,200" 
          increase="+8%" 
          description="Since last month" 
          icon={
            <NavLink to="/dashboard/twitter">
              <FaTwitter style={iconStyle} />
            </NavLink>
          }
        />
        <StatBox 
          title="Facebook" 
          value="Jan 1, 2020" 
          increase="" 
          description="" 
          icon={
            <NavLink to="/dashboard/facebook">
              <FaFacebook style={iconStyle} />
            </NavLink>
          }
        />

        {/* Post Table */}
        <Box
          gridColumn="span 4"
          gridRow="span 5"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          sx={{ overflowY: "auto" }}
        >
          <Header title="All Posts" subtitle="Schedule posts" />
          <Typography>No posts available.</Typography>
          <PostCard />
        </Box>

        {/* Charts */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Barchart />
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
          <Piechart />
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem">
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
