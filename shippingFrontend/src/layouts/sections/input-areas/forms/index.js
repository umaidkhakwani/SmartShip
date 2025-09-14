/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import { Grid, Container } from "@mui/material";
import MKBox from "components/MKBox";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";

// Forms page components
// import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

// Forms page components code
// import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";
import routes from "routes";
import formSimpleCode from "./components/QuoteForms/code";
import DefaultFooter from "../../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../../footer.routes";
import View from "../../components/View";
import DefaultNavbar from "../../../../examples/Navbars/DefaultNavbar";

function Forms() {
  return (
    <>
      {/* <MKBox position="fixed" top="0.5rem" width="100%"> */}
      <MKBox position="fixed" top="0.5rem" width="100%" mb={5} sx={{ zIndex: 20 }}>
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
      {/* </MKBox> */}
      {/* <BaseLayout
       title="Forms"
       breadcrumb={[
         { label: "Page Sections", route: "/sections/input-areas/forms" },
         { label: "Forms" },
      ]}
     > */}
      <Container sx={{ py: 1, my: 2, mt: 12 }}>
        {" "}
        {/* <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}> */}
        <View title="Form Simple" code={formSimpleCode}>
          {/* <FormSimple /> */}
        </View>
        {/* </Grid> */}
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      {/* </BaseLayout> */}
    </>
  );
}

export default Forms;
