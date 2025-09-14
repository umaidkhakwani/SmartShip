import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../../../examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../../../../examples/Cards/BlogCards/CenteredBlogCard";
import MKTypography from "../../../../components/MKTypography";
import RotatingCard from "../../../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../../examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/flipCardImage.avif";
import bgBack from "assets/images/flipCardImage.avif";

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { useTranslation } from "react-i18next";
function Information() {
  const { t } = useTranslation();
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ mx: "auto" }}
        >
          {/* Content Cards */}
          <Grid
            container
            item
            xs={12}
            md={8}
            // spacing={4}
            // justifyContent="center"
            // alignItems="center"
            sx={
              {
                // backgroundColor: "red",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            {/* Company History Card */}
            <Grid item xs={12} sm={6}>
              <MKBox
                mb={5}
                sx={{
                  // backgroundColor: "blue",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultInfoCard
                  icon="history"
                  title={t(`Information.companyHistory.title`)}
                  description={t(`Information.companyHistory.description`)}
                />
              </MKBox>
            </Grid>

            {/* Our Team Card */}
            <Grid item xs={12} sm={6}>
              <MKBox
                mb={5}
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultInfoCard
                  icon="people"
                  title={t(`Information.ourTeam.title`)}
                  description={t(`Information.ourTeam.description`)}
                />
              </MKBox>
            </Grid>

            {/* Mission Statement Card */}
            <Grid item xs={12} sm={6}>
              <MKBox
                mb={5}
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultInfoCard
                  icon="flag"
                  title={t(`Information.missionStatement.title`)}
                  description={t(`Information.missionStatement.description`)}
                />
              </MKBox>
            </Grid>

            {/* Vision Statement Card */}
            <Grid item xs={12} sm={6}>
              <MKBox
                mb={5}
                sx={{
                  // backgroundColor: "red",
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DefaultInfoCard
                  icon="visibility"
                  title={t(`Information.visionStatement.title`)}
                  description={t(`Information.visionStatement.description`)}
                />
              </MKBox>
            </Grid>
          </Grid>

          {/* Flip Card */}
          <Grid item xs={12} md={4}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="directions_boat"
                title={<>{t(`Information.flipCard.front.title`)}</>}
                description={t(`Information.flipCard.front.description`)}
              />
              <RotatingCardBack
                image={bgBack}
                title={t(`Information.flipCard.back.title`)}
                description={t(`Information.flipCard.back.description`)}
                action={{
                  type: "internal",
                  route: "/about-us",
                  label: t(`Information.flipCard.back.actionLabel`),
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
