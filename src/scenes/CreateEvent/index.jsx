import React, { useEffect, useState } from "react";
import Header from "components/Header";
import { Box, Button, useTheme, useMediaQuery, Typography, CircularProgress } from "@mui/material";

import FlexBetween from "components/FlexBetween";
import StatBox from "components/StatBox";
import TelegramPost from "../../components/sentimentPost";
import Cookies from "js-cookie";
import { DownloadOutlined } from "@mui/icons-material";
import EngagementBarChart from "components/EngagementGraph";
import { url } from "globalbackendurl";
import Doublechart from "../../components/doublePi"
const convertMetric = (value) => {
  if (typeof value === "string") {
    value = value.replace(/,/g, ""); // Remove commas
    if (value.endsWith("K")) {
      return parseFloat(value) * 1000;
    } else if (value.endsWith("M")) {
      return parseFloat(value) * 1000000;
    }
  }
  return parseFloat(value);
};

const CreateEvent = () => {
 

  return (
    <Box m="1.5rem 2.5rem">
      
          
    </Box>
  );
};

export default CreateEvent;