import React from "react";
import {  Chip } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const LiveBadge = ({ label }) => (
  <Chip
    icon={<LiveTvIcon style={{ color: "#ff1744" }} />}
    label={label || "Live"}
    sx={{
      backgroundColor: "#ffebee",
      color: "#d50000",
      fontWeight: "bold",
      marginLeft: "10px",
    }}
  />
);

export default LiveBadge;
