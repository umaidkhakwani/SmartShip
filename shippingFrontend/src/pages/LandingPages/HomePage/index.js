/* eslint-disable no-unused-vars */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import bgImage from "../../../../src/assets/images/bg-presentation.jpg";
import MKTypography from "../../../components/MKTypography";
import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import Counters from "../../Presentation/sections/Counters";
import Testimonials from "../AboutUs/sections/Information";
import DesignBlocks from "../../Presentation/sections/DesignBlocks";
import { Download, Pages } from "@mui/icons-material";
import BuiltByDevelopers from "../../Presentation/components/BuiltByDevelopers";
import FilledInfoCard from "../../../examples/Cards/InfoCards/FilledInfoCard";
import MKSocialButton from "../../../components/MKSocialButton";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";
import { Box } from "@mui/material";
import HeroSection from "./heroSection";
import InfoSection from "../../../examples/Cards/InfoSection";
import Information from "../../Presentation/sections/Information";
import AllServices from "../../Presentation/sections/AllServices";
import MKButton from "components/MKButton";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
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
        sticky
      />
      <HeroSection />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <InfoSection />
        <Counters />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Grid
          container
          item
          xs={12}
          lg={7}
          my={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h2"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2.5rem", md: "2.6rem" },
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {t(`Home.heroSection.title`)}
          </MKTypography>

          <MKTypography
            variant="h2"
            color="info"
            textGradient
            mb={2}
            sx={{
              fontSize: { xs: "1.4rem", sm: "2.3rem", md: "2.2rem" },
              textAlign: "center",
            }}
          >
            {t(`Home.heroSection.subtitle`)}
          </MKTypography>

          <MKTypography
            variant="body1"
            color="text"
            mb={2}
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.4rem" },
              textAlign: "justify",
              lineHeight: 1.6,
            }}
          >
            {t(`Home.heroSection.description`)}
          </MKTypography>
        </Grid>
        <AllServices />
        {/* <Information /> */}
        <Testimonials />
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        {/* <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container> */}
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials /> */}
        {/* <Download /> */}
        <MKBox pt={1} pb={6}>
          <Container>
            <Grid container spacing={3}>
              {/* Left Section */}
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  {t(`Home.thankYou.title`)}
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  {t(`Home.thankYou.description`)}
                </MKTypography>
              </Grid>

              {/* Right Section with Social Links */}
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                {/* Facebook Button */}
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.amanullahlogistics.com"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1, mb: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp; {t(`Home.socialButtons.facebook`)}
                </MKSocialButton>

                {/* Instagram Button */}
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/amanullah_logistics"
                  target="_blank"
                  color="instagram"
                  sx={{ mr: 1, mb: 1 }}
                >
                  <i className="fab fa-instagram" />
                  &nbsp; {t(`Home.socialButtons.instagram`)}
                </MKSocialButton>

                {/* TikTok Button */}
                <MKSocialButton
                  component="a"
                  href="https://www.tiktok.com/@amanullah_logistics"
                  target="_blank"
                  color="tiktok"
                  sx={{ mr: 1, mb: 1 }}
                >
                  <i className="fab fa-tiktok" />
                  &nbsp; {t(`Home.socialButtons.tiktok`)}
                </MKSocialButton>

                {/* WhatsApp Button */}
                <MKButton
                  component="a"
                  href="https://wa.me/971522324064"
                  target="_blank"
                  color="success"
                  variant="contained"
                  sx={{ mr: 1, mb: 1 }}
                >
                  <i className="fab fa-whatsapp" />
                  &nbsp; {t(`Home.socialButtons.whatsapp`)}
                </MKButton>

                {/* Phone Call Button */}
                <MKButton
                  component="a"
                  href="tel:+97142255735"
                  color="info"
                  variant="contained"
                  sx={{ mb: 1 }}
                >
                  <i className="fas fa-phone-alt" />
                  &nbsp; {t(`Home.socialButtons.call`)}
                </MKButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
