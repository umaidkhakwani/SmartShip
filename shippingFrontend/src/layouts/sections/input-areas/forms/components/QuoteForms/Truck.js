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

function Truck() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    international: false,
    origin_port: "",
    destination_port: "",
    origin_country: "",
    destination_country: "",
    commodity_value: "",
    gross_weight: "",
    length: "",
    width: "",
    height: "",
    number_of_packages: "",
    package_type: "",
    refrigerated_temperature: "",
    mco_class_un_number: "",
    comments: "",
    commodity: "",
    load_type: "",
    container_type: "",
    weight_unit: "",
    flatbed: false,
    refrigerated: false,
    residential_pickup: false,
    residential_delivery: false,
    customs_in_bond_freight: false,
    hazardous_shipment: false,
    inside_limited_access_pickup: false,
    inside_limited_access_delivery: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (name === "load_type") {
      // If load_type changes, reset fields based on the selected value
      if (value === "FCL") {
        setFormData({
          ...formData,
          load_type: value,
          // container_type: "",
          gross_weight: "", // Reset gross_weight if FCL is selected
          weight_unit: "", // Reset weight_unit if FCL is selected
          length: "", // Reset length if FCL is selected
          width: "", // Reset width if FCL is selected
          height: "", // Reset height if FCL is selected
          number_of_packages: "", // Reset number_of_packages if FCL is selected
          package_type: "", // Reset package_type if FCL is selected
        });
      } else if (value === "LCL") {
        setFormData({
          ...formData,
          load_type: value,
          container_type: "", // Reset container_type if LCL is selected
        });
      }
    } else {
      // For other form fields
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${configURL.baseURL}truck_quotes.php`, formData, {
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

  const countries = [
    t("Countries.afghanistan"),
    t("Countries.albania"),
    t("Countries.algeria"),
    t("Countries.andorra"),
    t("Countries.angola"),
    t("Countries.antigua_deps"),
    t("Countries.argentina"),
    t("Countries.armenia"),
    t("Countries.australia"),
    t("Countries.austria"),
    t("Countries.azerbaijan"),
    t("Countries.bahamas"),
    t("Countries.bahrain"),
    t("Countries.bangladesh"),
    t("Countries.barbados"),
    t("Countries.belarus"),
    t("Countries.belgium"),
    t("Countries.belize"),
    t("Countries.benin"),
    t("Countries.bhutan"),
    t("Countries.bolivia"),
    t("Countries.bosnia_herzegovina"),
    t("Countries.botswana"),
    t("Countries.brazil"),
    t("Countries.brunei"),
    t("Countries.bulgaria"),
    t("Countries.burkina"),
    t("Countries.burundi"),
    t("Countries.cambodia"),
    t("Countries.cameroon"),
    t("Countries.canada"),
    t("Countries.cape_verde"),
    t("Countries.central_african_rep"),
    t("Countries.chad"),
    t("Countries.chile"),
    t("Countries.china"),
    t("Countries.colombia"),
    t("Countries.comoros"),
    t("Countries.congo"),
    t("Countries.congo_democratic_rep"),
    t("Countries.costa_rica"),
    t("Countries.croatia"),
    t("Countries.cuba"),
    t("Countries.cyprus"),
    t("Countries.czech_republic"),
    t("Countries.denmark"),
    t("Countries.djibouti"),
    t("Countries.dominica"),
    t("Countries.dominican_republic"),
    t("Countries.east_timor"),
    t("Countries.ecuador"),
    t("Countries.egypt"),
    t("Countries.el_salvador"),
    t("Countries.equatorial_guinea"),
    t("Countries.eritrea"),
    t("Countries.estonia"),
    t("Countries.ethiopia"),
    t("Countries.fiji"),
    t("Countries.finland"),
    t("Countries.france"),
    t("Countries.gabon"),
    t("Countries.gambia"),
    t("Countries.georgia"),
    t("Countries.germany"),
    t("Countries.ghana"),
    t("Countries.greece"),
    t("Countries.grenada"),
    t("Countries.guatemala"),
    t("Countries.guinea"),
    t("Countries.guinea_bissau"),
    t("Countries.guyana"),
    t("Countries.haiti"),
    t("Countries.honduras"),
    t("Countries.hungary"),
    t("Countries.iceland"),
    t("Countries.india"),
    t("Countries.indonesia"),
    t("Countries.iran"),
    t("Countries.iraq"),
    t("Countries.ireland_republic"),
    t("Countries.israel"),
    t("Countries.italy"),
    t("Countries.ivory_coast"),
    t("Countries.jamaica"),
    t("Countries.japan"),
    t("Countries.jordan"),
    t("Countries.kazakhstan"),
    t("Countries.kenya"),
    t("Countries.kiribati"),
    t("Countries.korea_north"),
    t("Countries.korea_south"),
    t("Countries.kosovo"),
    t("Countries.kuwait"),
    t("Countries.kyrgyzstan"),
    t("Countries.laos"),
    t("Countries.latvia"),
    t("Countries.lebanon"),
    t("Countries.lesotho"),
    t("Countries.liberia"),
    t("Countries.libya"),
    t("Countries.liechtenstein"),
    t("Countries.lithuania"),
    t("Countries.luxembourg"),
    t("Countries.macedonia"),
    t("Countries.madagascar"),
    t("Countries.malawi"),
    t("Countries.malaysia"),
    t("Countries.maldives"),
    t("Countries.mali"),
    t("Countries.malta"),
    t("Countries.marshall_islands"),
    t("Countries.mauritania"),
    t("Countries.mauritius"),
    t("Countries.mexico"),
    t("Countries.micronesia"),
    t("Countries.moldova"),
    t("Countries.monaco"),
    t("Countries.mongolia"),
    t("Countries.montenegro"),
    t("Countries.morocco"),
    t("Countries.mozambique"),
    t("Countries.myanmar_burma"),
    t("Countries.namibia"),
    t("Countries.nauru"),
    t("Countries.nepal"),
    t("Countries.netherlands"),
    t("Countries.new_zealand"),
    t("Countries.nicaragua"),
    t("Countries.niger"),
    t("Countries.nigeria"),
    t("Countries.norway"),
    t("Countries.oman"),
    t("Countries.pakistan"),
    t("Countries.palau"),
    t("Countries.panama"),
    t("Countries.papua_new_guinea"),
    t("Countries.paraguay"),
    t("Countries.peru"),
    t("Countries.philippines"),
    t("Countries.poland"),
    t("Countries.portugal"),
    t("Countries.qatar"),
    t("Countries.romania"),
    t("Countries.russian_federation"),
    t("Countries.rwanda"),
    t("Countries.st_kitts_nevis"),
    t("Countries.st_lucia"),
    t("Countries.saint_vincent_grenadines"),
    t("Countries.samoa"),
    t("Countries.san_marino"),
    t("Countries.sao_tome_principe"),
    t("Countries.saudi_arabia"),
    t("Countries.senegal"),
    t("Countries.serbia"),
    t("Countries.seychelles"),
    t("Countries.sierra_leone"),
    t("Countries.singapore"),
    t("Countries.slovakia"),
    t("Countries.slovenia"),
    t("Countries.solomon_islands"),
    t("Countries.somalia"),
    t("Countries.south_africa"),
    t("Countries.south_sudan"),
    t("Countries.spain"),
    t("Countries.sri_lanka"),
    t("Countries.sudan"),
    t("Countries.suriname"),
    t("Countries.swaziland"),
    t("Countries.sweden"),
    t("Countries.switzerland"),
    t("Countries.syria"),
    t("Countries.taiwan"),
    t("Countries.tajikistan"),
    t("Countries.tanzania"),
    t("Countries.thailand"),
    t("Countries.togo"),
    t("Countries.tonga"),
    t("Countries.trinidad_tobago"),
    t("Countries.tunisia"),
    t("Countries.turkey"),
    t("Countries.turkmenistan"),
    t("Countries.tuvalu"),
    t("Countries.uganda"),
    t("Countries.ukraine"),
    t("Countries.united_arab_emirates"),
    t("Countries.united_kingdom"),
    t("Countries.united_states"),
    t("Countries.uruguay"),
    t("Countries.uzbekistan"),
    t("Countries.vanuatu"),
    t("Countries.vatican_city"),
    t("Countries.venezuela"),
    t("Countries.vietnam"),
    t("Countries.yemen"),
    t("Countries.zambia"),
    t("Countries.zimbabwe"),
  ];

  const commodityOptions = [
    t("commodityOptions.agriculture"),
    t("commodityOptions.apparel"),
    t("commodityOptions.automobiles_motorcycles"),
    t("commodityOptions.automobile_motorcycle_parts"),
    t("commodityOptions.arts_crafts"),
    t("commodityOptions.beauty_personal_care"),
    t("commodityOptions.chemicals"),
    t("commodityOptions.computer_hardware_software"),
    t("commodityOptions.construction_equipment"),
    t("commodityOptions.construction_materials"),
    t("commodityOptions.consumer_electronics"),
    t("commodityOptions.electrical_equipment_supplies"),
    t("commodityOptions.electronic_components_supplies"),
    t("commodityOptions.fashion_accessories"),
    t("commodityOptions.bottled_beverages"),
    t("commodityOptions.bottled_products_non_beverages"),
    t("commodityOptions.food_perishable"),
    t("commodityOptions.food_non_perishable"),
    t("commodityOptions.food_frozen"),
    t("commodityOptions.food_frozen_meat"),
    t("commodityOptions.furniture_new_branded"),
    t("commodityOptions.furniture_used"),
    t("commodityOptions.hardware"),
    t("commodityOptions.health_medical_supplies"),
    t("commodityOptions.home_appliances"),
    t("commodityOptions.home_garden"),
    t("commodityOptions.household_goods"),
    t("commodityOptions.lights_lighting"),
    t("commodityOptions.luggage_bags_cases"),
    t("commodityOptions.mechanical_fabrication_parts"),
    t("commodityOptions.machinery"),
    t("commodityOptions.measurement_analysis_instruments"),
    t("commodityOptions.minerals_metallurgy"),
    t("commodityOptions.office_school_supplies"),
    t("commodityOptions.packaging_printing"),
    t("commodityOptions.rubber_plastics"),
    t("commodityOptions.security_protection"),
    t("commodityOptions.shoes_accessories"),
    t("commodityOptions.sports_entertainment"),
    t("commodityOptions.telecommunications"),
    t("commodityOptions.textiles_leather_products"),
    t("commodityOptions.timepieces_jewelry_eyewear"),
    t("commodityOptions.tools"),
    t("commodityOptions.toys_hobbies"),
    t("commodityOptions.transportation"),
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

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="international"
                      checked={formData.international}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.international`)}
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

              {formData?.international && (
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="standard" required={formData?.international}>
                    <InputLabel>{t(`Forms.origin_country`)}</InputLabel>
                    <Select
                      name="origin_country"
                      value={formData.origin_country}
                      onChange={handleChange}
                    >
                      {countries.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}

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

              {formData?.international && (
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="standard" required={formData?.international}>
                    <InputLabel>{t(`Forms.destination_country`)}</InputLabel>
                    <Select
                      name="destination_country"
                      value={formData.destination_country}
                      onChange={handleChange}
                    >
                      {countries.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              {/* Commodity */}
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
                <MKInput
                  variant="standard"
                  required
                  label={t(`Forms.commodity_value`)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="commodity_value"
                  value={formData.commodity_value}
                  onChange={handleChange}
                />
              </Grid>

              {/* Load Type */}
              <Grid item xs={12}>
                <MKTypography variant="body1" mb={1}>
                  {t(`Forms.load_type`)}
                </MKTypography>
                <RadioGroup
                  row
                  name="load_type" // Make sure the name matches the key in the formData state
                  value={formData.load_type} // Bind the value to formData.load_type
                  onChange={handleChange} // Use the handleChange function to update formData
                >
                  <FormControlLabel value="FCL" control={<Radio />} label={t(`Forms.fcl`)} />
                  <FormControlLabel value="LCL" control={<Radio />} label={t(`Forms.lcl`)} />
                </RadioGroup>
              </Grid>

              {/* Conditional Fields */}
              {formData?.load_type === "FCL" && (
                <Grid item xs={12}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel> {t(`Forms.container_type`)}</InputLabel>
                    <Select
                      name="container_type"
                      value={formData.container_type}
                      onChange={handleChange}
                    >
                      <MenuItem value={t("Forms.container_20ft")}>
                        {t("Forms.container_20ft")}
                      </MenuItem>
                      <MenuItem value={t("Forms.container_40ft")}>
                        {t("Forms.container_40ft")}
                      </MenuItem>
                      <MenuItem value={t("Forms.container_45ft")}>
                        {t("Forms.container_45ft")}
                      </MenuItem>
                      <MenuItem value={t("Forms.container_53ft")}>
                        {t("Forms.container_53ft")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}

              {formData?.load_type === "LCL" && (
                <>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      required={formData.load_type === "LCL"}
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
                        required={formData.load_type === "LCL"}
                        name="weight_unit"
                        value={formData.weight_unit}
                        onChange={handleChange}
                      >
                        <MenuItem value={t("Forms.weight_lb_ln")}>
                          {t("Forms.weight_lb_ln")}
                        </MenuItem>
                        <MenuItem value={t("Forms.weight_kg_cm")}>
                          {t("Forms.weight_kg_cm")}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MKInput
                      required={formData.load_type === "LCL"}
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
                      required={formData.load_type === "LCL"}
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
                      required={formData.load_type === "LCL"}
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
                      required={formData.load_type === "LCL"}
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
                </>
              )}

              {/* Additional Fields */}
              <Grid item xs={12}>
                {" "}
                <FormControlLabel
                  control={
                    <Checkbox name="flatbed" checked={formData.flatbed} onChange={handleChange} />
                  }
                  label={t(`Forms.flatbed`)}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="refrigerated"
                      checked={formData.refrigerated}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.refrigerated`)}
                />
              </Grid>

              {formData?.refrigerated && (
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label={t(`Forms.refrigerated_temperature`)}
                    InputLabelProps={{ shrink: true }}
                    value={formData.refrigerated_temperature}
                    onChange={handleChange}
                    fullWidth
                    name="refrigerated_temperature"
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <MKTypography variant="body2" mb={1}>
                  {t(`Forms.accessorial_charges`)}
                </MKTypography>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="residential_pickup"
                      checked={formData.residential_pickup}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.residential_pickup`)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="residential_delivery"
                      checked={formData.residential_delivery}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.residential_delivery`)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="customs_in_bond_freight"
                      checked={formData.customs_in_bond_freight}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.customs_in_bond_freight`)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="hazardous_shipment"
                      checked={formData.hazardous_shipment}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.hazardous_shipment`)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="inside_limited_access_pickup"
                      checked={formData.inside_limited_access_pickup}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.inside_limited_access_pickup`)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="inside_limited_access_delivery"
                      checked={formData.inside_limited_access_delivery}
                      onChange={handleChange}
                    />
                  }
                  label={t(`Forms.inside_limited_access_delivery`)}
                />
              </Grid>

              {/* Hazardous Option */}
              {formData?.hazardous_shipment && (
                <Grid item xs={12} md={12}>
                  <MKInput
                    variant="standard"
                    label={t(`Forms.mco_class_un_number`)}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    name="mco_class_un_number"
                    value={formData.mco_class_un_number}
                    onChange={handleChange}
                  />
                </Grid>
              )}

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

export default Truck;
