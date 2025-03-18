import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useTheme, useMediaQuery, TextField } from "@mui/material";
import StatBox from "components/StatBox";
import { Facebook, Twitter, Image } from "@mui/icons-material";
import Header from "components/Header";
import axios from "axios";
import Cookies from "js-cookie";
import { url } from "globalbackendurl";

export default function Schedule() {
  const [post, setPost] = useState("");
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [scheduledTime, setScheduledTime] = useState("");
  const [imageFile, setImageFile] = useState(null); // ✅ Fixed state for image upload

  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  // Fetch trending hashtags
  useEffect(() => {
    const fetchTrendingHashtags = async () => {
      try {
        const response = await axios.get(`${url}/api/comments/trending-hashtags`);
        setTrendingHashtags(response.data.hashtags || []);
      } catch (error) {
        console.error("Error fetching trending hashtags:", error);
      }
    };
    fetchTrendingHashtags();
  }, []);

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Schedule Post
  const handleSchedulePost = async () => {
    if (!post.trim() || !scheduledTime) {
      alert("Please enter both a post and a valid date/time.");
      return;
    }

    const token = Cookies.get("accessToken");
    if (!token) {
      console.error("Access token is missing.");
      return;
    }

    try {
      const response = await axios.post(
        `${url}/api/schedule/schedule-post`,
        { content: post, scheduledTime },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Post scheduled successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error scheduling the post:", error);
      alert("Failed to schedule the post.");
    }
  };

  // Optimize Post
  const handleOptimizePost = async () => {
    if (!post.trim()) {
      alert("Please enter a post to optimize.");
      return;
    }

    try {
      const token = Cookies.get("accessToken");
      if (!token) {
        console.error("Access token is missing.");
        return;
      }

      const response = await axios.post(
        `${url}/api/comments/correct`,
        { content: post },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPost(`${response.data.correctedTweet || post} ${response.data.hashtags || ""}`);
      alert("Post optimized and hashtags added!");
    } catch (error) {
      console.error("Error optimizing the post:", error);
      alert("Failed to optimize the post.");
    }
  };

  // Direct Post with Image Upload
  const handleDirectPost = async () => {
    if (!post.trim()) {
      alert("Please enter a post.");
      return;
    }

    const token = Cookies.get("accessToken");
    if (!token) {
      console.error("Access token is missing.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("content", post);
      if (imageFile) formData.append("image", imageFile);

      const response = await axios.post(`${url}/api/schedule/direct-post`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Post uploaded successfully!");
      console.log("Response:", response.data);
      setPost("");
      setImageFile(null);
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post.");
    }
  };

  return (
    <Box m="1rem 2rem">
      <Header title="Create Post" />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{ "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" } }}
      >
        
        <Box
          gridColumn="span 8"
          gridRow="span 5"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <StatBox title="Create Post" />

          {/* Tabs */}
          <Box display="flex" borderBottom={1} borderColor="divider">
            <Button variant="text">Original</Button>
            <Button variant="text" startIcon={<Facebook sx={{ color: "#1877F2" }} />}>
              Facebook
            </Button>
            <Button variant="text" startIcon={<Twitter sx={{ color: "#1DA1F2" }} />}>
              Twitter
            </Button>
          </Box>

          {/* Textarea */}
          <Box mt={2} position="relative">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="What do you want to share?"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              style={{
                width: "100%",
                height: "250px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "white",
                color: "black",
                resize: "none",
              }}
            />
          </Box>

          {/* File Upload */}
          <Box mt={2}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
              <Image sx={{ fontSize: 24, color: "gray", marginRight: "8px" }} />
              {imageFile ? imageFile.name : "Upload an image"}
            </label>
          </Box>

          {/* Schedule Time Input */}
          <Box mt={2}>
            <Typography variant="subtitle1">Schedule Time:</Typography>
            <TextField
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              fullWidth
              sx={{ mt: 1 }}
              inputProps={{ step: 60 }}
            />
          </Box>

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main, color: "white" }} onClick={handleOptimizePost}>
              AI-Powered Optimization
            </Button>
            <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main, color: "white" }} onClick={handleDirectPost}>
              Direct Post
            </Button>
            <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main, color: "white" }} onClick={handleSchedulePost}>
              Schedule Post
            </Button>
          </Box>
        </Box>

        {/* Trending Hashtags */}
        <Box gridColumn="span 4"gridRow="span 5"  backgroundColor={theme.palette.background.alt} p="1rem" borderRadius="0.55rem" sx={{ overflowY: "auto" }}>
          <StatBox title="Top Trending Hashtags" />
          <ul style={{ listStyle: "none", textAlign: "center" }}>
            {trendingHashtags.length > 0 ? trendingHashtags.map((tag, i) => <li key={i} style={{ fontSize: "1rem", fontWeight: "bold", margin: "10px 0" }}>{tag}</li>) : <Typography>No hashtags available.</Typography>}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
