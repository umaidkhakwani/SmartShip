import React from "react";
import { Box, Grid, Container } from "@mui/material";
import MKTypography from "../../../components/MKTypography";
import { LocalShipping, Business, Handshake } from "@mui/icons-material"; // Icons
import { keyframes } from "@emotion/react";

// Text animations using keyframes
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoSection = () => {
  return (
    <Container sx={{ py: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Box 1 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: 3,
              minHeight: "180px", // Increase height for better balance
              transition: "all 0.3s ease-in-out", // Smooth transition effect
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom effect on hover
                boxShadow: 6, // Stronger shadow on hover
              },
              animation: `${slideIn} 1s ease-out`,
            }}
          >
            <LocalShipping fontSize="large" sx={{ mr: 2, color: "#0277bd" }} />
            <Box>
              <MKTypography variant="h6" fontSize="17px">
                GLOBAL REACH. LOCAL EXPERTISE.
              </MKTypography>
              <MKTypography variant="body2" color="textSecondary" mt={1}>
                Our vast network of partners ensures that your shipments are handled with care, from
                anywhere in the world to your doorstep.
              </MKTypography>
            </Box>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: 3,
              minHeight: "180px", // Keep consistent height
              transition: "all 0.3s ease-in-out", // Smooth transition effect
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom effect on hover
                boxShadow: 6, // Stronger shadow on hover
              },
              animation: `${slideIn} 1s ease-out`,
            }}
          >
            <Business fontSize="large" sx={{ mr: 2, color: "#0277bd" }} />
            <Box>
              <MKTypography variant="h6" fontSize="17px">
                YOUR PARTNER IN LOGISTICS SUCCESS
              </MKTypography>
              <MKTypography variant="body2" color="textSecondary" mt={1}>
                We provide tailor-made logistics solutions, ensuring your cargo is delivered on time
                and in perfect condition.
              </MKTypography>
            </Box>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: 3,
              minHeight: "180px", // Keep consistent height
              transition: "all 0.3s ease-in-out", // Smooth transition effect
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom effect on hover
                boxShadow: 6, // Stronger shadow on hover
              },
              animation: `${slideIn} 1s ease-out`,
            }}
          >
            <Handshake fontSize="large" sx={{ mr: 2, color: "#0277bd" }} />
            <Box>
              <MKTypography variant="h6" fontSize="17px">
                TRUSTED SERVICE. PROVEN RESULTS.
              </MKTypography>
              <MKTypography variant="body2" color="textSecondary" mt={1}>
                Our clients trust us because we deliver on our promises, ensuring a seamless
                logistics experience from start to finish.
              </MKTypography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoSection;
