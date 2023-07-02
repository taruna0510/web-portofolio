import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Specialist from "../assets/database/Specialist.json";
import CardRole from "./CardRole";
import { useTheme } from "@mui/material/styles";

const Role = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container columns={20}>
      <Grid item xs={1}></Grid> {/* Grid Left */}
      {/* Content Here */}
      <Grid item xs={18}>
        <Typography variant={isMobile ? "h3" : "h2"} align="center">
          What I'm Do
        </Typography>

        <CardRole data={Specialist} />
      </Grid>
      {/* Content End */}
      <Grid item xs={1}></Grid> {/* Grid Right */}
    </Grid>
  );
};

export default Role;
