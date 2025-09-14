import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Swal from "sweetalert2";
import configURL from "configUrl";
import { useTranslation } from "react-i18next";

function BreakBulk() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    origin_port: "",
    destination_port: "",
    commodity_value: "",
    gross_weight: "",
    length: "",
    width: "",
    height: "",
    number_of_packages: "",
    package_type: "",
    // refrigeratedTemperature: "",
    // mcoClassUnNumber: "",
    comments: "",
    commodity: "",
    // loadType: "",
    // containerType: "",
    weight_unit: "",
    // refrigerated: false,
    // hazardous: false,
    add_insurance: false,
    // incoterms: "",
    unit_type: "",
    mode: "",
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
      const response = await axios.post(`${configURL.baseURL}BreakBulk_quotes.php`, formData, {
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

  const commodityOptions = [
    t("commodityOptions.automobile_motorcycle_parts"),
    t("commodityOptions.automobiles_motorcycles"),
    t("commodityOptions.boats_yacht"),
    t("commodityOptions.bottled_beverages"),
    t("commodityOptions.bottled_products_non_beverages"),
    t("commodityOptions.chemicals"),
    t("commodityOptions.coils_pipes"),
    t("commodityOptions.grains"),
    t("commodityOptions.home_appliances"),
    t("commodityOptions.heavy_equipment"),
    t("commodityOptions.locomotives"),
    t("commodityOptions.machinery"),
    t("commodityOptions.minerals_metallurgy"),
    t("commodityOptions.packaging_printing"),
    t("commodityOptions.power_generation"),
    t("commodityOptions.rubber_plastics"),
    t("commodityOptions.steel_structures"),
    t("commodityOptions.sensitive_equipment"),
    t("commodityOptions.timber"),
  ];

  return (
    <>
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <MKBox p={3}>
          {/* <MKBox justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={3}>
              Get a Quote
            </MKTypography>
          </MKBox> */}
          <MKBox
            width="100%"
            component="form"
            method="post"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={3}>
              {/* Basic Information */}
              <Grid item xs={12} md={6}>
                <MKInput
                  required
                  variant="standard"
                  label={t(`Forms.full_name`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  required
                  type="email"
                  variant="standard"
                  label={t(`Forms.email`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  type="tel"
                  variant="standard"
                  label={t(`Forms.phone_number`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  label={t(`Forms.company_name`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                />
              </Grid>

              {/* Locations */}
              <Grid item xs={12} md={6}>
                <MKInput
                  required
                  variant="standard"
                  label={t(`Forms.origin_port`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="origin_port"
                  value={formData.origin_port}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  required
                  variant="standard"
                  label={t(`Forms.destination_port`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="destination_port"
                  value={formData.destination_port}
                  onChange={handleChange}
                />
              </Grid>

              {/* Commodity */}
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>{t(`Forms.commodity`)}</InputLabel>
                  <Select name="commodity" value={formData.commodity} onChange={handleChange}>
                    {commodityOptions.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Commodity Value (USD) */}
              <Grid item xs={12}>
                <MKInput
                  variant="standard"
                  label={t(`Forms.commodity_value`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="commodity_value"
                  value={formData.commodity_value}
                  onChange={handleChange}
                />
              </Grid>

              {/* Load Type */}
              {/* <Grid item xs={12}>
                <MKTypography variant="body1" mb={1}>
                  Select Load Type*
                </MKTypography>
                <RadioGroup row name="loadType" value={formData.loadType} onChange={handleChange}>
                  <FormControlLabel
                    value="FCL"
                    control={<Radio />}
                    label="FCL (Full Container Load)"
                  />
                  <FormControlLabel
                    value="LCL"
                    control={<Radio />}
                    label="LCL (Less than Container Load)"
                  />
                </RadioGroup>
              </Grid> */}

              {/* Conditional Fields */}
              {/* {formData?.loadType === "FCL" && (
                <Grid item xs={12}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel>Container Type*</InputLabel>
                    <Select
                      name="containerType"
                      value={formData.containerType}
                      onChange={handleChange}
                    >
                      <MenuItem value="20ft">20ft</MenuItem>
                      <MenuItem value="40ft">40ft</MenuItem>
                      <MenuItem value="45ft">45ft</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )} */}

              {/* {loadType === "LCL" && ( */}
              {/* <> */}
              <Grid item xs={12} md={6}>
                <MKInput
                  required={formData.loadType === "LCL"}
                  variant="standard"
                  label={t(`Forms.gross_weight`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="gross_weight"
                  value={formData.gross_weight}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>{t(`Forms.weight_unit`)}</InputLabel>
                  <Select
                    required={formData.loadType === "LCL"}
                    name="weight_unit"
                    value={formData.weight_unit}
                    onChange={handleChange}
                  >
                    <MenuItem value={t("Forms.metric_tons")}>{t("Forms.metric_tons")}</MenuItem>
                    <MenuItem value={t("Forms.tons")}>{t("Forms.tons")}</MenuItem>
                    <MenuItem value={t("Forms.kgs")}>{t("Forms.kgs")}</MenuItem>
                    <MenuItem value={t("Forms.lbs")}>{t("Forms.lbs")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKInput
                  required={formData.loadType === "LCL"}
                  variant="standard"
                  label={t(`Forms.length`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MKInput
                  required={formData.loadType === "LCL"}
                  variant="standard"
                  label={t(`Forms.width`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MKInput
                  required={formData.loadType === "LCL"}
                  variant="standard"
                  label={t(`Forms.height`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <MKInput
                  required={formData.loadType === "LCL"}
                  variant="standard"
                  label={t(`Forms.number_of_packages`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="number_of_packages"
                  value={formData.number_of_packages}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  label={t(`Forms.package_type`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="package_type"
                  value={formData.package_type}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>{t(`Forms.unit_type`)}</InputLabel>
                  <Select
                    required
                    name="unit_type"
                    value={formData.unit_type}
                    onChange={handleChange}
                  >
                    <MenuItem value={t("Forms.meters")}>{t("Forms.meters")}</MenuItem>
                    <MenuItem value={t("Forms.yards")}>{t("Forms.yards")}</MenuItem>
                    <MenuItem value={t("Forms.feet")}>{t("Forms.feet")}</MenuItem>
                    <MenuItem value={t("Forms.inches")}>{t("Forms.inches")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>{t(`Forms.mode`)}</InputLabel>
                  <Select required name="mode" value={formData.mode} onChange={handleChange}>
                    <MenuItem value={t("Forms.loose_bulk")}>{t("Forms.loose_bulk")}</MenuItem>
                    <MenuItem value={t("Forms.package_bulk")}>{t("Forms.package_bulk")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* </> */}
              {/* )} */}

              {/* Additional Fields */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="refrigerated"
                      checked={formData.refrigerated}
                      onChange={handleChange}
                    />
                  }
                  label="Refrigerated"
                />
              </Grid> */}

              {/* {formData?.refrigerated && (
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Refrigerated Temperature (°C)*"
                    InputLabelProps={{ shrink: true }}
                    value={formData.refrigeratedTemperature}
                    onChange={handleChange}
                    fullWidth
                    name="refrigeratedTemperature"
                  />
                </Grid>
              )} */}

              <Grid item xs={12}>
                <MKTypography variant="body2" mb={1}>
                  {t(`Forms.accessorial_charges`)}
                </MKTypography>
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      name="hazardous"
                      checked={formData.hazardous}
                      onChange={handleChange}
                    />
                  }
                  label="Hazardous"
                /> */}

                <FormControlLabel
                  control={
                    <Checkbox
                      name="add_insurance"
                      checked={formData.add_insurance}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.add_insurance`)}
                />
              </Grid>

              {/* Hazardous Option */}
              {/* {formData?.hazardous && (
                <Grid item xs={12} md={12}>
                  <MKInput
                    variant="standard"
                    label="Imco Class & Un No*"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    name="mcoClassUnNumber"
                    value={formData.mcoClassUnNumber}
                    onChange={handleChange}
                  />
                </Grid>
              )} */}

              {/* Incoterms */}
              {/* <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Select Incoterms*</InputLabel>
                  <Select name="incoterms" value={formData.incoterms} onChange={handleChange}>
                    {incotermsOptions.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> */}

              {/* Comments */}
              <Grid item xs={12}>
                <MKInput
                  multiline
                  rows={4}
                  variant="standard"
                  label={t(`Forms.comments`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <MKBox mt={2} textAlign="center">
              <MKButton disabled={loading} variant="gradient" color="info" type="submit">
                {loading ? t(`Forms.submitting`) : t(`Forms.submit`)}
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
}

export default BreakBulk;
