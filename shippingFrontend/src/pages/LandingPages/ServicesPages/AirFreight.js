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
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/AirFreight.png";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import ServicesRightSide from "./sections/servicerightside";

import image1 from "../../../../src/assets/images/AirFreight1.png";
import image2 from "../../../../src/assets/images/AirFreight2.jpg";
import image3 from "../../../../src/assets/images/AirFreight3.jpg";
import image4 from "../../../../src/assets/images/AirFreight4.jpg";
import { useTranslation } from "react-i18next";
// Replace these with your actual image URLs
const images = [image1, image2, image3, image4];

function AirFreight() {
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
        minHeight="60vh"
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
              {t("AirFreight.heroTitle")}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1}>
              {t("AirFreight.heroDescription")}
            </MKTypography>
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
        <Grid container item xs={11} sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={8} sx={{ mx: { xs: 2, sm: 0, md: 0, lg: 0 } }}>
            <MKBox mb={5}>
              {" "}
              <MKTypography display="block" variant="5" fontWeight="bold" mt={1} mb={2}>
                {t("AirFreight.section1.title")}
              </MKTypography>
              <MKTypography display="block" variant={"body2"} color="text">
                {t("AirFreight.section1.description1")}
              </MKTypography>
              <MKTypography display="block" variant={"body2"} color="text" mt={3}>
                {t("AirFreight.section1.description2")}
              </MKTypography>
            </MKBox>
            <MKBox mb={5}>
              {" "}
              <MKTypography display="block" variant="5" fontWeight="bold" mt={1} mb={2}>
                {t("AirFreight.section2.title")}
              </MKTypography>
              <MKTypography display="block" variant={"body2"} color="text" mt={3}>
                {t("AirFreight.section2.description")}
              </MKTypography>
            </MKBox>
            <MKBox mb={5}>
              {" "}
              <MKTypography display="block" variant="5" fontWeight="bold" mt={1} mb={2}>
                {t("AirFreight.section3.title")}
              </MKTypography>
              <MKTypography display="block" variant={"body2"} color="text" mt={3}>
                {t("AirFreight.section3.description")}
              </MKTypography>
            </MKBox>
            <MKBox mb={5}>
              <MKTypography display="block" variant="h5" fontWeight="bold" mt={1} mb={2}>
                {t("AirFreight.section4.title")}
              </MKTypography>
              <ul>
                {t("AirFreight.section4.highlights", { returnObjects: true }).map(
                  (highlight, index) => (
                    <li key={index}>{highlight}</li>
                  )
                )}
              </ul>
            </MKBox>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // mr: { xs: 2, sm: 0, md: 0 },
            }}
          >
            <ServicesRightSide />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <MKBox
                component="img"
                src={image}
                alt={`Air Freight ${index + 1}`}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AirFreight;
