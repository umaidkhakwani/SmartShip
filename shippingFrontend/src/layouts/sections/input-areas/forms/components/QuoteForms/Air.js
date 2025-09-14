/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

function Air() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    origin_airport: "",
    destination_airport: "",
    commodity_value: "",
    gross_weight: "",
    length: "",
    width: "",
    height: "",
    number_of_packages: "",
    package_type: "",
    comments: "",
    commodity: "",
    weight_unit: "",
    add_insurance: false,
    incoterms: "",
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
      const response = await axios.post(`${configURL.baseURL}air_quotes.php`, formData, {
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
    t("commodityOptions.general_merchandise"),
    t("commodityOptions.new_used_machinery"),
    t("commodityOptions.household_goods"),
    t("commodityOptions.fragile_goods"),
    t("commodityOptions.computers_electronics"),
    t("commodityOptions.fine_arts"),
    t("commodityOptions.motorcycles_autos"),
    t("commodityOptions.precision_instruments"),
    t("commodityOptions.chemicals_hazardous_materials"),
    t("commodityOptions.steel_sheets_coils_bars"),
    t("commodityOptions.branded_goods"),
    t("commodityOptions.non_perishable_food"),
    t("commodityOptions.bottled_beverages"),
    t("commodityOptions.bottled_products_non_beverages"),
    t("commodityOptions.frozen_foods_excluding_meat"),
    t("commodityOptions.frozen_meats"),
    t("commodityOptions.yachts"),
    t("commodityOptions.jewelry"),
  ];

  const incotermsOptions = [
    t("incotermsOptions.exw_ex_works"),
    t("incotermsOptions.fca_free_carrier"),
    t("incotermsOptions.cpt_carriage_paid_to"),
    t("incotermsOptions.cip_carriage_and_insurance_paid_to"),
    t("incotermsOptions.dap_delivered_at_place"),
    t("incotermsOptions.dpu_delivered_at_place_unloaded"),
    t("incotermsOptions.ddp_delivered_duty_paid"),
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
                  label={t(`Forms.origin_airport`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="origin_airport"
                  value={formData.origin_airport}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MKInput
                  required
                  variant="standard"
                  label={t(`Forms.destination_airport`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="destination_airport"
                  value={formData.destination_airport}
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
                  required
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
                    required
                    name="weight_unit"
                    value={formData.weight_unit}
                    onChange={handleChange}
                  >
                    <MenuItem value={t("Forms.weight_kg_cm")}>{t("Forms.weight_kg_cm")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKInput
                  required
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
                  required
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
                  required
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
                  required
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
              {/* <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Unit Type*</InputLabel>
                  <Select
                    required
                    name="unitType"
                    value={formData.unitType}
                    onChange={handleChange}
                  >
                    <MenuItem value="Meters">Meters</MenuItem>
                    <MenuItem value="Yards">Yards</MenuItem>
                    <MenuItem value="Feet">Feet</MenuItem>
                    <MenuItem value="Inches">Inches</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}

              {/* <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Mode*</InputLabel>
                  <Select required name="mode" value={formData.mode} onChange={handleChange}>
                    <MenuItem value="Loose Bulk">Loose Bulk</MenuItem>
                    <MenuItem value="Package Bulk">Package Bulk</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
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
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel>{t(`Forms.incoterms`)}</InputLabel>
                  <Select name="incoterms" value={formData.incoterms} onChange={handleChange}>
                    {incotermsOptions.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

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

export default Air;
