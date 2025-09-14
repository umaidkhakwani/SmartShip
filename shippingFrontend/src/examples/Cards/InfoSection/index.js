import React from "react";
import { Box, Grid, Container, Icon } from "@mui/material";
import MKTypography from "../../../components/MKTypography";
import { LocalShipping, Business, Handshake } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import FilledInfoCard from "../InfoCards/FilledInfoCard";

// Text animations using keyframes
const fromLeft = keyframes`
0% {
  transform: translateX(-100vw) scale(0.8);  // Start from the left off-screen, smaller size
  opacity: 0;
}
50% {
  transform: translateX(10vw) scale(1.05);  // Move toward the middle with a bounce (scale up slightly)
  opacity: 0.8;
}
100% {
  transform: translateX(0) scale(1);  // Settle into place with full size
  opacity: 1;
}
`;

const fromRight = keyframes`
 0% {
    transform: translateX(100vw) scale(0.8);  // Start from the right off-screen, smaller size
    opacity: 0;
  }
  50% {
    transform: translateX(-10vw) scale(1.05);  // Move toward the middle with a bounce (scale up slightly)
    opacity: 0.8;
  }
  100% {
    transform: translateX(0) scale(1);  // Settle into place with full size
    opacity: 1;
  }
`;
import { useTranslation } from "react-i18next";
const InfoSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container sx={{ py: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Gradient Filled Info Card (Box 1) */}
          <Grid item xs={12} md={4}>
            <FilledInfoCard
              variant="gradient"
              color="info"
              icon={<LocalShipping fontSize="large" sx={{ color: "white" }} />}
              title={t(`InfoSection.card1.title`)}
              description={t(`InfoSection.card1.description`)}
              animation={fromLeft}
            />
          </Grid>

          {/* Regular Filled Info Card (Box 2) */}
          <Grid item xs={12} md={4}>
            <FilledInfoCard
              variant="contained"
              color="info"
              icon={<Business fontSize="large" sx={{ color: "#0277bd" }} />}
              title={t(`InfoSection.card2.title`)}
              description={t(`InfoSection.card2.description`)}
              animation={fromRight}
            />
          </Grid>

          {/* Regular Filled Info Card (Box 3) */}
          <Grid item xs={12} md={4}>
            <FilledInfoCard
              variant="contained"
              color="info"
              icon={<Handshake fontSize="large" sx={{ color: "#0277bd" }} />}
              title={t(`InfoSection.card3.title`)}
              description={t(`InfoSection.card3.description`)}
              animation={fromLeft}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoSection;
