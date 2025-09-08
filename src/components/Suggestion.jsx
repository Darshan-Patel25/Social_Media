import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const tips = [
  {
    title: "Increase Followers",
    tip: "Run a giveaway and ask users to follow and tag friends to enter. It creates viral traction quickly.",
  },
  {
    title: "Boost Views",
    tip: "Post Reels between 6-8 PM when your audience is most active. Use trending audio and relevant hashtags.",
  },
  {
    title: "Get More Comments",
    tip: "Ask open-ended questions in your captions like 'What do you think?' or 'Which one is your favorite?'",
  },
  {
    title: "Build Consistency",
    tip: "Post at least 3 times a week to stay in your followers' feed and build long-term trust.",
  },
  {
    title: "Use Story Polls",
    tip: "Interactive stories like polls and sliders increase visibility and encourage comment engagement.",
  },
];

const Suggestion = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  const { title, tip } = tips[currentIndex];

  return (
    <Box
      backgroundColor={theme.palette.background.alt}
      p="1rem"
      borderRadius="0.75rem"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box mb={2}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title} Tip
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {tip}
        </Typography>
      </Box>

      <Button
        variant="outlined"
        onClick={handleNextTip}
        sx={{
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Get Another Tip
      </Button>
    </Box>
  );
};

export default Suggestion;
