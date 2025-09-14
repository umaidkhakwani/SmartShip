import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { styled, textAlign } from "@mui/system";
import { keyframes } from "@emotion/react";
import bgImage1 from "../../../assets/images/AirFreight.png";
import bgImage2 from "../../../assets/images/SeaFreight2.png";
import bgImage3 from "../../../assets/images/ProjectLogistics4.jpg";
import bgImage4 from "../../../assets/images/OverlandTransportation4.jpg";
import bgImage5 from "../../../assets/images/WarehousingLogistics4.jpg";
import bgImage6 from "../../../assets/images/Custom4.jpeg";
import bgImage7 from "../../../assets/images/SeaFreight4.png";
import bgImage8 from "../../../assets/images/LashingPacking3.jpg";
import bgImage9 from "../../../assets/images/ioreorServices1.jpg";
import bgImage10 from "../../../assets/images/ValueAddedLogistics.jpg";
import bgImage11 from "../../../assets/images/IntegratedITSystemSolutions.jpg";
import bgImage12 from "../../../assets/images/DangerousGoodsStorageAndTransportation3.png";
import MKTypography from "../../../components/MKTypography";

// Define keyframe for text animation (same as previous)
const textUpAnimation = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Box for each grid item (Card)
const ServiceCard = styled(Box)(({ theme, animation, isVisible }) => ({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "300px",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer", // Make it look interactive
  animation: isVisible ? `${animation} 1s ease-out` : "none", // Apply the animation only when visible
  animationDelay: "0s",
  transform: "translateY(30px)",
  transition: "transform 0.3s ease, opacity 0.3s ease",

  "&:hover": {
    transform: "translateY(0)",
    opacity: 0.9,
  },

  // Centering the text horizontally and vertically inside the card
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // Text inside the card (Service text)
  "& .service-text": {
    position: "absolute",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black background for better visibility
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold", // Make text bold for emphasis
    opacity: 0, // Start with hidden text
    animation: isVisible ? `${textUpAnimation} 0.5s ease-out forwards` : "none", // Apply text animation only when visible
  },
}));

// Fly from the Bottom Left with Rotation and Tilt
const fromBottomLeft = keyframes`
  0% {
    transform: translate(100vw, 100vh) rotate(45deg) scale(0.8);  // Start from bottom left, tilted and far away
    opacity: 0;
  }
  50% {
    transform: translate(-20vw, -20vh) rotate(15deg) scale(1.05);  // Move towards the center, with a bounce effect
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(0) scale(1);  // Settle at the final position with no rotation
    opacity: 1;
  }
`;

// Fly from the Top Right with Rotation and Tilt
const fromTopRight = keyframes`
  0% {
    transform: translate(-100vw, -100vh) rotate(-45deg) scale(0.8);  // Start from top right, tilted and far away
    opacity: 0;
  }
  50% {
    transform: translate(20vw, 20vh) rotate(-15deg) scale(1.05);  // Move towards the center, with a bounce effect
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(0) scale(1);  // Settle at the final position with no rotation
    opacity: 1;
  }
`;

// Fly from the Top Left with Rotation and Tilt
const fromTopLeft = keyframes`
  0% {
    transform: translate(-100vw, -100vh) rotate(45deg) scale(0.8);  // Start from top left, tilted and far away
    opacity: 0;
  }
  50% {
    transform: translate(20vw, -20vh) rotate(15deg) scale(1.05);  // Move towards the center, with a bounce effect
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(0) scale(1);  // Settle at the final position with no rotation
    opacity: 1;
  }
`;

// Fly from the Bottom Right with Rotation and Tilt
const fromBottomRight = keyframes`
  0% {
    transform: translate(100vw, 100vh) rotate(-45deg) scale(0.8);  // Start from bottom right, tilted and far away
    opacity: 0;
  }
  50% {
    transform: translate(-20vw, 20vh) rotate(-15deg) scale(1.05);  // Move towards the center, with a bounce effect
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(0) scale(1);  // Settle at the final position with no rotation
    opacity: 1;
  }
`;

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllServices = () => {
  const { t } = useTranslation();
  const [inView, setInView] = useState(false);
  const navigate = useNavigate(); // React Router's navigation hook
  const services = [
    {
      title: "Air Freight Service",
      imgUrl: bgImage1,
      route: "/service/AirFreightService",
      // component: <AirFreight />,
      animation: fromBottomLeft,
    },
    {
      title: "Sea Freight Service",
      imgUrl: bgImage2,
      route: "/service/SeaFreightService",
      // component: <SeaFreight />,
      animation: fromTopRight,
    },
    {
      title: "Project Logistics",
      imgUrl: bgImage3,
      route: "/service/ProjectLogistics",
      // component: <ProjectLogistics />,
      animation: fromTopLeft,
    },
    {
      title: "Overland Transportation Service",
      imgUrl: bgImage4,
      route: "/service/OverlandTransportationService",
      // component: <OverlandTransportation />,
      animation: fromBottomRight,
    },
    {
      title: "Warehousing Logistics Service",
      imgUrl: bgImage5,
      route: "/service/WarehousingLogisticsService",
      // component: <WarehousingLogistics />,
      animation: fromBottomLeft,
    },
    {
      title: "Customs Brokerage Service",
      imgUrl: bgImage6,
      route: "/service/CustomsBrokerageService",
      // component: <CustomsBrokerage />,
      animation: fromTopRight,
    },
    {
      title: "Ship Agency Service",
      imgUrl: bgImage7,
      route: "/service/ShipAgencyService",
      // component: <ShipAgency />,
      animation: fromTopLeft,
    },
    {
      title: "Lashing & Packing Services",
      imgUrl: bgImage8,
      route: "/service/LashingPackingService",
      // component: <LashingPacking />,
      animation: fromBottomRight,
    },
    {
      title: "IOR EOR Logistics Service",
      imgUrl: bgImage9,
      route: "/service/IOR-EOR-Logistics-Service",
      // component: <IOREORLogistics />,
      animation: fromBottomLeft,
    },
    {
      title: "Value Added Logistics Service",
      imgUrl: bgImage10,
      route: "/service/Value-Added-Logistics-Services",
      // component: <ValueAddedLogistics />,
      animation: fromTopRight,
    },
    {
      title: "Integrated IT System Solutions",
      imgUrl: bgImage11,
      route: "/service/Integrated-IT-System-Solutions",
      // component: <IntegratedITSystemSolutions />,
      animation: fromTopLeft,
    },
    {
      title: "Dangerous Goods Storage And Transportation",
      imgUrl: bgImage12,
      route: "/service/Dangerous-Goods-Storage-And-Transportation",
      // component: <DangerousGoodsStorageAndTransportation />,
      animation: fromBottomRight,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const servicesSection = document.getElementById("services-section");
    if (servicesSection) observer.observe(servicesSection);

    return () => {
      if (servicesSection) observer.unobserve(servicesSection);
    };
  }, []);

  return (
    <>
      <MKTypography
        id="services-section"
        variant="h2"
        fontWeight="bold"
        my={2}
        sx={{ textAlign: "center" }}
      >
        {t("AllServices.sectionTitle")}
      </MKTypography>
      <Grid container spacing={2} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard
              animation={service.animation}
              isVisible={inView}
              sx={{
                backgroundImage: `url(${service.imgUrl})`,
              }}
              onClick={() => navigate(service.route)} // Navigate to the respective route on click
            >
              <Box className="service-text">
                <MKTypography variant="h6" color="white">
                  {t(`AllServices.services.${service.route.split("/").pop()}`)}
                </MKTypography>
              </Box>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllServices;
