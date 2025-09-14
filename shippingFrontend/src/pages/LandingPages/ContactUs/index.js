// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import Contact from "pages/LandingPages/Author/sections/Contact";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

import React, { useState } from "react";
import axios from "axios";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { Container, Grid } from "@mui/material";
import bgImage from "assets/images/contactUs.jpg";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";

import Swal from "sweetalert2";
import configURL from "configUrl";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${configURL.baseURL}contact_form.php`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Handle the server response
      if (response.data.success) {
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message,
          confirmButtonText: "OK",
        });
      } else {
        // Show error alert if something went wrong
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: response.data.message,
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      // Show a network error alert
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Something went wrong, please check your internet connection!",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <MKBox bgColor="white" sx={{ mt: 12 }}> */}
      <MKBox component="section" py={{ xs: 1, lg: 1 }}>
        <MKBox width="100%" mb={5}>
          <DefaultNavbar
            routes={routes}
            action={{
              type: "external",
              route: "https://www.creative-tim.com/product/material-kit-react",
              label: "free download",
              color: "info",
            }}
          />
        </MKBox>

        <Container>
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              my={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.dark.main, 0.8),
                        rgba(gradients.dark.state, 0.8)
                      )}, url(${bgImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        {t(`ContactUs.contactInfoTitle`)}
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        {t(`ContactUs.contactInfoDescription`)}
                      </MKTypography>
                      <MKBox display="flex" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-phone" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          (+971) 42 25 5735
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-envelope" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          info@amanullahgroup.ae
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fas fa-map-marker-alt" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          {t(`ContactUs.contactDetails.addressValue`)}
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" justifyContent="center" alignItems="center">
                        <MKButton
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                          href="https://www.facebook.com/amanullahlogistics"
                          target="_blank"
                        >
                          <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                          href="https://www.instagram.com/amanullah_logistics"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                          href="https://www.tiktok.com/@amanullah_logistics?_t=8rAd15GTIhe&_r=1"
                          target="_blank"
                        >
                          <i className="fab fa-tiktok" style={{ fontSize: "1.1rem" }} />
                        </MKButton>
                        <MKButton
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                          href="https://wa.me/+971522324064"
                          target="_blank"
                        >
                          <i className="fab fa-whatsapp" style={{ fontSize: "1.25rem" }} />
                        </MKButton>
                        <MKButton
                          variant="text"
                          color="white"
                          size="large"
                          iconOnly
                          href="tel:+97142255735"
                          target="_blank"
                        >
                          <i className="fas fa-phone-alt" style={{ fontSize: "1rem" }} />
                        </MKButton>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>

                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} method="post" onSubmit={handleSubmit}>
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1}>
                        {t(`ContactUs.title`)}
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={1}>
                        {t(`ContactUs.description`)}
                      </MKTypography>
                    </MKBox>

                    <MKBox pt={0.5} pb={1} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label={t(`ContactUs.formLabels.name`)}
                            placeholder={t(`ContactUs.formLabels.namePlaceholder`)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label={t(`ContactUs.formLabels.phone`)}
                            placeholder={t(`ContactUs.formLabels.phonePlaceholder`)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label={t(`ContactUs.formLabels.email`)}
                            placeholder={t(`ContactUs.formLabels.emailPlaceholder`)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Grid>

                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            variant="standard"
                            label={t(`ContactUs.formLabels.message`)}
                            placeholder={t(`ContactUs.formLabels.messagePlaceholder`)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton disabled={loading} variant="gradient" color="info" type="submit">
                          {loading
                            ? t(`ContactUs.formButton.loading`)
                            : t(`ContactUs.formButton.submit`)}
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={2} px={1} mt={2}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      {/* </MKBox> */}
    </>
  );
}

export default ContactUs;
