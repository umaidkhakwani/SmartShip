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
import Icon from "@mui/material/Icon";
// import bgImage from "../../../../assets/images/homeBannerImage1.jpg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "../../../../assets/images/homeBannerImage1.jpg";
import { useTranslation } from "react-i18next";
function BuiltByDevelopers() {
  const { t } = useTranslation();
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Container> */}
      <Grid item xs={12} lg={6} sx={{ px: 2, m: 0, py: 0 }}>
        {/* <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by developers
          </MKTypography> */}
        <MKTypography
          variant="h4"
          color="white"
          mb={1}
          mt={0}
          sx={{
            fontSize: {
              xs: "1.6rem",
              sm: "2.0rem",
              md: "2.2rem",
            },
          }}
        >
          {t(`BuiltByDevelopers.title`)}
        </MKTypography>
        <MKTypography
          variant="body1"
          color="white"
          opacity={0.8}
          mb={2}
          mt={0}
          sx={{
            fontSize: {
              xs: "1.05rem",
              sm: "1rem",
              md: "1.2rem",
            },
          }}
        >
          {t(`BuiltByDevelopers.description`)}
        </MKTypography>
        <MKTypography
          component="a"
          href="/about"
          target="_blank"
          rel="noreferrer"
          variant="body2"
          color="white"
          fontWeight="regular"
          sx={{
            display: "flex",
            alignItems: "center",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translateX(3px)`,
              transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
            },

            "&:hover .material-icons-round, &:focus .material-icons-round": {
              transform: `translateX(6px)`,
            },
          }}
        >
          {t(`BuiltByDevelopers.learnMore`)} <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
        </MKTypography>
      </Grid>
      {/* </Container> */}
    </MKBox>
  );
}

export default BuiltByDevelopers;
