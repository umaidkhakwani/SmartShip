/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
// import FormSimple from "../../input-areas/forms/components/QuoteForms/Containerized";
import Containerized from "../../input-areas/forms/components/QuoteForms/Containerized";
import BreakBulk from "../../input-areas/forms/components/QuoteForms/BreakBulk";
import ProjectCargoHeavyLift from "../../input-areas/forms/components/QuoteForms/ProjectCargoHeavyLift";
import Truck from "../../input-areas/forms/components/QuoteForms/Truck";
import Air from "../../input-areas/forms/components/QuoteForms/Air";
// import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import { useTranslation } from "react-i18next";

function View({ children, code, title, height, ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
  const { t } = useTranslation();
  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MKBox
        px={{ xs: 0.6, md: 3 }}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={1} justifyContent="space-between" py={{ xs: 0.5, md: 1 }}>
          <Grid item xs={12} lg={3}>
            <MKTypography
              variant="h3"
              pt={0.5}
              sx={({ breakpoints, typography: { size } }) => ({
                fontSize: size["3xl"],
                [breakpoints.down("md")]: {
                  fontSize: size["xl"],
                },
                [breakpoints.down("sm")]: {
                  fontSize: size["lg"],
                },
                [breakpoints.down("xs")]: {
                  fontSize: size["md"],
                },
                pl: { xs: 1, md: 0, lg: 0 },
              })}
            >
              {t("Quote.title")}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ mx: { xs: 0, sm: 0 } }}>
            <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <Tabs
                value={activeTab}
                onChange={handleTabType}
                sx={{
                  flexDirection: { xs: "column", sm: "row" }, // Stack tabs vertically on mobile
                  textAlign: "center",
                  alignItems: "center",
                  zIndex: 0,
                  gap: { xs: 1, sm: 0 }, // Add space between tabs on mobile
                }}
              >
                {["containerized", "breakBulk", "heavyLift", "truck", "air"].map((key, index) => (
                  <Tab
                    key={key}
                    label={t(`Quote.tabs.${key}`)}
                    sx={{ fontSize: { xs: "0.7rem", md: "1rem", lg: "1rem" }, px: 0 }}
                  />
                ))}
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox
        bgColor="grey-100"
        width="100%"
        height={{ xs: "60vh", md: height }}
        maxHeight={{ xs: "70vh", md: "83vh" }}
        borderRadius="xl"
        sx={{ overflowX: "hidden", overflowY: "scroll" }}
      >
        {activeTab === 0 && <Containerized />}
        {activeTab === 1 && <BreakBulk />}
        {activeTab === 2 && <ProjectCargoHeavyLift />}
        {activeTab === 3 && <Truck />}
        {activeTab === 4 && <Air />}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
