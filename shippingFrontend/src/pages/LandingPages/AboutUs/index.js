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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/aboutUs-banner.jpg";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import Featuring from "./sections/Featuring";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {t(`AboutUs.heroTitle`)}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1}>
              {t(`AboutUs.heroDescription`)}
            </MKTypography>

            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              {t(`AboutUs.findUsOn`)}
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.instagram.com/amanullah_logistics"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              {/* <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography> */}
              {/* <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography> */}
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.tiktok.com/@amanullah_logistics?_t=8rAd15GTIhe&_r=1"
                mr={3}
              >
                <i className="fab fa-tiktok" />
              </MKTypography>
              {/* WhatsApp link */}
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://wa.me/+971522324064"
                mr={3}
              >
                <i className="fab fa-whatsapp" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="tel:+97142255735"
                sx={{ fontSize: "14px" }}
              >
                <i className="fas fa-phone-alt" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          py: 2,
          px: 1,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Featuring />
        {/* <Team /> */}

        {/* <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
