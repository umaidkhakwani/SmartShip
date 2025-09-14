import React, { useEffect } from "react";
import { Box, Container, Grid, Tooltip } from "@mui/material";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
import bgImage from "assets/images/map2.jpg";
import routes from "routes";
import footerRoutes from "footer.routes";
import "./style.css";

import Turkmenistan from "assets/images/flags/turkmenistan.svg";
import Turkey from "assets/images/flags/turkey.svg";
import Russia from "assets/images/flags/russia.svg";
import Kazakhstan from "assets/images/flags/kazakhstan.svg";
import Afghanistan from "assets/images/flags/afghanistan.png";
import China from "assets/images/flags/china.svg";
import UAE from "assets/images/flags/uae.svg";
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import MKTypography from "../../components/MKTypography";
import MKBox from "../../components/MKBox";
import { useTranslation } from "react-i18next";
import DefaultFooter from "../../examples/Footers/DefaultFooter";

const dotsConfig = [
  {
    id: 1,
    left: "64%",
    top: "26.5%",
    country: "Turkmenistan",
    flagUrl: Turkmenistan,
  },
  {
    id: 2,
    left: "55%",
    top: "27%",
    country: "Turkey",
    flagUrl: Turkey,
  },
  { id: 3, left: "70%", top: "16%", country: "Russia", flagUrl: Russia },
  {
    id: 4,
    left: "63%",
    top: "23%",
    country: "Kazakhstan",
    flagUrl: Kazakhstan,
  },
  {
    id: 5,
    left: "67%",
    top: "30%",
    country: "Afghanistan",
    flagUrl: Afghanistan,
  },
  { id: 6, left: "79%", top: "28%", country: "China", flagUrl: China },
  { id: 7, left: "63%", top: "35%", country: "UAE", flagUrl: UAE },
];

const Project = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const dots = document.querySelectorAll(".dot");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dots.forEach((dot) => dot.classList.add("active"));
          }
        });
      },
      { threshold: 0.1 }
    );

    const mapContainer = document.querySelector(".map-container");
    if (mapContainer) {
      observer.observe(mapContainer);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
      />
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      /> */}
      <MKBox
        minHeight="25vh"
        width="100%"
        sx={{
          // backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          //   `${linearGradient(
          //     rgba(gradients.dark.main, 0.6),
          //     rgba(gradients.dark.state, 0.6)
          //   )}, url(${bgImage})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          display: "grid",
          placeItems: "end",
          backgroundColor: "rgb(15, 31, 82)",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={12}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.6rem", lg: "2.1rem" },
              }}
            >
              {t("Project.Project_Title")}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem", lg: "1.25rem" },
              }}
            >
              {t("Project.Project_Description")}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Box className="map-container">
        <img src={bgImage} alt="Track Record Map" className="map-image" />
        {dotsConfig.map(({ id, left, top, country, flagUrl }) => (
          <Tooltip key={id} title={t(`Project.${country}`)} arrow>
            <Box
              className="dot-wrapper"
              style={{
                left,
                top,
                "--i": id,
              }}
            >
              <Box
                className="dot"
                style={{
                  backgroundImage: `url(${flagUrl})`,
                }}
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
      <Container>
        <Grid container spacing={4} mt={4}>
          {dotsConfig.map(({ id, country, flagUrl, description }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 3,
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={flagUrl}
                  alt={`${country} flag`}
                  style={{
                    width: "50px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <MKTypography variant="h5" color="dark" sx={{ mb: 1 }}>
                  {t(`Project.${country}`)}
                </MKTypography>
                <MKTypography variant="body2" color="text" sx={{ opacity: 0.8 }}>
                  {description}
                </MKTypography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box pt={4} px={1} mt={4}>
        <DefaultFooter content={footerRoutes} />
      </Box>
    </>
  );
};

export default Project;
