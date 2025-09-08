import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Account from "scenes/Account";
import Calender from "scenes/Calender";
import Schedule from "scenes/Schedule";
import Analytics from "scenes/Analytics";
import CompetitorAnalysis from "scenes/competitoeanalysis"; // Fixed import
import Dashboard from "scenes/dashboard";
import Engage from "scenes/engage";
import Content from "scenes/Content";
import Instagram from "scenes/dashboard/instragram";
import YouTube from "scenes/dashboard/Youtube";
import Twitter from "scenes/dashboard/Twitter";
import Facebook from "scenes/dashboard/Facebook";
import Home from "homepage/components/Home";
import SignIn from "homepage/components/SignIn";
import SignUp from "homepage/components/SignUp";
import About from "homepage/components/AboutUs/About";
import HowItWorks from "homepage/components/HowItWorks";
import Pricing from "homepage/components/Pricing";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<About />} />
             <Route path='/pricing' element={<Pricing />} />
            <Route path="/howitworks" element={<HowItWorks />} />

            {/* Protected routes inside Layout */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/account" element={<Account />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/competitor" element={<CompetitorAnalysis />} />
              <Route path="/engage" element={<Engage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/dashboard/instagram" element={<Instagram />} />
              <Route path="/dashboard/youtube" element={<YouTube />} />
              <Route path="/dashboard/twitter" element={<Twitter />} />
              <Route path="/dashboard/facebook" element={<Facebook />} />
            </Route>

            {/* Redirect from root to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
