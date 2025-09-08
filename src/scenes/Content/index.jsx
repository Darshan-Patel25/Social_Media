import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";

const aiModes = {
  "Product Promotion": {
    title: "Introducing Our New Product",
    description: "Check out our latest release that solves XYZ...",
    hashtags: "#NewLaunch #Innovation #Tech",
  },
  "Event Announcement": {
    title: "Join Us for Our Upcoming Event",
    description:
      "We're excited to invite you to our online event happening on...",
    hashtags: "#LiveEvent #JoinUs #Webinar",
  },
  "Motivational Quote": {
    title: "Daily Motivation 💡",
    description:
      "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    hashtags: "#Motivation #DailyInspo #SuccessMindset",
  },
  "Tips & Tricks": {
    title: "Social Media Growth Hacks 🚀",
    description:
      "Here are 5 powerful ways to boost your reach on Instagram and TikTok...",
    hashtags: "#GrowthHacks #SocialTips #ContentStrategy",
  },
};

const Content = () => {
  const theme = useTheme();
  const [mode, setMode] = useState("Product Promotion");
  const [post, setPost] = useState(aiModes[mode]);

  const handleModeChange = (e) => {
    const selected = e.target.value;
    setMode(selected);
    setPost(aiModes[selected]);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Post submitted:", post);
    // Optionally call your AI generation or API submission here
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="AI Content Generator" subtitle="Create post using AI modes" />

      <Box
        mt="20px"
        backgroundColor={theme.palette.background.alt}
        p="1.5rem"
        borderRadius="0.75rem"
        display="flex"
        flexDirection="column"
        gap="1.5rem"
      >
        <TextField
          select
          label="Select AI Mode"
          value={mode}
          onChange={handleModeChange}
          fullWidth
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          {Object.keys(aiModes).map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Post Title"
          name="title"
          value={post.title}
          onChange={handleChange}
          fullWidth
          sx={{ backgroundColor: theme.palette.background.default }}
        />

        <TextField
          label="Description"
          name="description"
          value={post.description}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{ backgroundColor: theme.palette.background.default }}
        />

        <TextField
          label="Hashtags"
          name="hashtags"
          value={post.hashtags}
          onChange={handleChange}
          fullWidth
          sx={{ backgroundColor: theme.palette.background.default }}
        />

        <FlexBetween>
          <Button
            variant="outlined"
            onClick={() => {
              // Future AI integration here
              alert("AI suggestion coming soon...");
            }}
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
            }}
          >
            ✨ Suggest with AI
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.background.alt,
              fontWeight: "bold",
              padding: "0.75rem 1.5rem",
              textTransform: "none",
            }}
          >
            Publish Post
          </Button>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default Content;
