import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Container, Grid } from "@mui/material";
import MKTypography from "../../../components/MKTypography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../../src/assets/images/homeBannerImage4.jpg";
import image2 from "../../../../src/assets/images/homeBannerImage5.jpg";
import image3 from "../../../../src/assets/images/homeBannerImage3.jpg";
import image4 from "../../../../src/assets/images/homeBannerImage2.jpg";
import image5 from "../../../../src/assets/images/homeBannerImage6.jpg";
import image6 from "../../../../src/assets/images/homeBannerImage7.jpg";
import { useTranslation } from "react-i18next";

// Replace these with your actual image URLs
const images = [image1, image2, image3, image4, image5, image6];

const HeroSection = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const headings = [
    t(`HeroSection.headings.heading1`),
    t(`HeroSection.headings.heading2`),
    t(`HeroSection.headings.heading3`),
    t(`HeroSection.headings.heading4`),
    t(`HeroSection.headings.heading5`),
    t(`HeroSection.headings.heading6`),
  ];
  const paras1 = [
    t(`HeroSection.paras1.para1`),
    t(`HeroSection.paras1.para2`),
    t(`HeroSection.paras1.para3`),
    t(`HeroSection.paras1.para4`),
    t(`HeroSection.paras1.para5`),
    t(`HeroSection.paras1.para6`),
  ];
  const paras2 = [
    t(`HeroSection.paras2.para1`),
    t(`HeroSection.paras2.para2`),
    t(`HeroSection.paras2.para3`),
    t(`HeroSection.paras2.para4`),
    t(`HeroSection.paras2.para5`),
    t(`HeroSection.paras2.para6`),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
  };

  return (
    <Box position="relative">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
          // background: "rgba(0, 0, 0, 0.6)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          // "&:hover": {
          //   background: "rgba(0, 0, 0, 0.8)",
          // },
        }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ArrowBackIosIcon fontSize="large" color="white" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 2,
          cursor: "pointer",
          // background: "rgba(0, 0, 0, 0.6)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          // "&:hover": {
          //   background: "rgba(0, 0, 0, 0.8)",
          // },
        }}
        onClick={() => sliderRef.current.slickNext()}
      >
        <ArrowForwardIosIcon fontSize="large" color="white" />
      </Box>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Box key={index} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "grid",
                placeItems: "center",
                minHeight: "85vh",
                width: "100%",
              }}
            >
              <Container>
                <Grid container item xs={12} lg={12} justifyContent="center" mx="auto">
                  <Grid item xs={12}>
                    <MKTypography
                      variant="h1"
                      color="white"
                      textAlign="center"
                      mt={-6}
                      mb={1}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                      })}
                    >
                      {headings[index]}
                    </MKTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <MKTypography
                      variant="body1"
                      color="white"
                      textAlign="center"
                      px={{ xs: 6, lg: 12 }}
                      mt={1}
                    >
                      {paras1[index]}
                    </MKTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <MKTypography
                      variant="body1"
                      color="white"
                      textAlign="center"
                      px={{ xs: 6, lg: 12 }}
                      mt={1}
                    >
                      {paras2[index]}
                    </MKTypography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
