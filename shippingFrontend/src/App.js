import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./assets/theme";
import routes from "./routes";
import Presentation from "./pages/Presentation";
import Home from "./pages/LandingPages/HomePage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import "./App.css";
import { Box } from "@mui/material";

// Importing i18n for language management
import "./i18n"; // Make sure to import your i18n.js here

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className="floating-buttons">
        <a
          href="https://wa.me/+971522324064"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-icon whatsapp aa"
        >
          <WhatsAppIcon fontSize="medium" />
        </a>
        <a href="tel:+97142255735" className="floating-icon call aa">
          <CallIcon fontSize="medium" />
        </a>
      </Box>

      <Routes>
        {getRoutes(routes)}
        <Route path="/Home" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </ThemeProvider>
  );
}
