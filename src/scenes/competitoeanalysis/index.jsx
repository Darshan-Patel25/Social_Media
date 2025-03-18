import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import BarLabel from '../../components/BarGraph';
import {
  Box,
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import Header from 'components/Header';
import { url } from 'globalbackendurl';

const ConnectPage = () => {
  const theme = useTheme(); // Get theme colors

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

  const [newPage, setNewPage] = useState('');
  const [competitors, setCompetitors] = useState([]);
  const [selectedCompetitor, setSelectedCompetitor] = useState('');
  const [graphData, setGraphData] = useState([]);

  const [followers, setFollowers] = useState(0);
  const [followings, setFollowings] = useState(0);
  const [tweets, setTweets] = useState(0);

  useEffect(() => {
    if (graphData.length > 0) {
      const latestData = graphData[graphData.length - 1];
      setFollowers(latestData.followers);
      setFollowings(latestData.followings);
      setTweets(latestData.tweets);
    }
  }, [graphData]);

  // Handle adding a new competitor
  const handleAddPage = async () => {
    if (!newPage.trim()) {
      alert('Please enter a valid page.');
      return;
    }

    try {
      const response = await fetch(`${url}/api/comments/competitor-analysis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitorAnalysis: newPage }),
      });

      if (response.ok) {
        alert(`New competitor "${newPage}" added successfully!`);
        setNewPage('');
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error adding new page:', error);
      alert('Failed to add new page.');
    }
  };

  // Handle fetching competitor statistics
  const handleSubmitCompetitors = async () => {
    if (!selectedCompetitor) {
      alert('Please select a competitor.');
      return;
    }

    try {
      const response = await fetch(`${url}/api/comments/stas?username=${selectedCompetitor}`);
      const result = await response.json();

      if (response.ok) {
        const data = result.Graph.map((item) => ({
          date: item.date,
          followers: parseInt(convertMetric(item.followers)) || 0,
          followings: parseInt(convertMetric(item.followings)) || 0,
          tweets: parseInt(convertMetric(item.tweets)) || 0,
        }));
        setGraphData(data);
      } else {
        alert(`Error: ${result.error || 'Failed to fetch stats.'}`);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      alert('Failed to fetch stats.');
    }
  };

  return (
    <Box p={4} sx={{ backgroundColor: theme.palette.background.default }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color={theme.palette.text.primary}>
        <Header title={'Competitor Analytics'} />
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Add New Page"
          value={newPage}
          style={{ width: "70rem" }}
          onChange={(e) => setNewPage(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ 
            height: '53px', 
            fontSize: '15px',
            backgroundColor: theme.palette.primary.main,
            '&:hover': { backgroundColor: theme.palette.primary.dark }
          }}
          onClick={handleAddPage}
        >
          Add
        </Button>
      </Box>

      <Divider sx={{ my: 3, backgroundColor: theme.palette.divider }} />

      {/* Select Competitor Dropdown */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Competitor</InputLabel>
        <Select
          value={selectedCompetitor}
          onChange={(e) => setSelectedCompetitor(e.target.value)}
          label="Select Competitor"
        >
          {competitors.map((comp, index) => (
            <MenuItem key={index} value={comp}>
              {comp}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Submit Competitor Button */}
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: theme.palette.primary.main,
          '&:hover': { backgroundColor: theme.palette.primary.dark }
        }} 
        onClick={handleSubmitCompetitors}
      >
        Submit Selected Competitor
      </Button>

      {/* Graph Section */}
      <Typography variant="h5" mt={4} mb={2} color={theme.palette.text.primary}>
        Engagement Trends
      </Typography>

      {graphData.length > 0 ? (
        <>
          <Grid container spacing={3} mt={4}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                <CardContent>
                  <Typography variant="h6">Followers</Typography>
                  <Typography variant="h4" color="primary">
                    {followers}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                <CardContent>
                  <Typography variant="h6">Followings</Typography>
                  <Typography variant="h4" color="secondary">
                    {followings}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: theme.palette.background.paper }}>
                <CardContent>
                  <Typography variant="h6">Tweets</Typography>
                  <Typography variant="h4" sx={{ color: theme.palette.error.main }}>
                    {tweets}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <BarLabel graphData={graphData} />
        </>
      ) : (
        <Typography color={theme.palette.text.secondary}>
          No data available for engagement trends.
        </Typography>
      )}
    </Box>
  );
};

export default ConnectPage;
