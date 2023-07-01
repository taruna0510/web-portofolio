import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import specialist from "../assets/database/specialist.json";
import SwipeableViews from "react-swipeable-views";
import CardRole from "./CardRole";

const Role = () => {
  return (
    <Grid container columns={20} sx={{ height: "30vh" }}>
      <Grid item xs={1}></Grid> {/* Grid Left */}
      {/* Content Here */}
      <Grid item xs={18}>
        <Typography variant="h2" align="center">
          What I'm Do
        </Typography>

        <CardRole data={specialist} />
      </Grid>
      {/* Content End */}
      <Grid item xs={1}></Grid> {/* Grid Right */}
    </Grid>
  );
};

export default Role;
