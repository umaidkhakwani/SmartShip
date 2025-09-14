import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import data from "./servicerightsidedata";
import { Link } from "react-router-dom";
import ExampleCard from "../../../Presentation/components/ExampleCard";
import MKBadge from "../../../../components/MKBadge";
import { useTranslation } from "react-i18next";

function ServicesRightSide() {
  const { t } = useTranslation();
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={1} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={6} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard
                  image={image}
                  name={t(`Navbar.routes.${name}`)}
                  count={count}
                  pro={pro}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section">
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default ServicesRightSide;
