import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import WordFromCoWorkers from "../assets/database/WordFromCoWorkers.json";
import CardWords from "./CardWords";

const WordsCoWorkers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        align="center"
        mt={isMobile ? "2rem" : "1rem"}
      >
        Words From My Co-Workers
      </Typography>
      <Grid container columns={20}>
        <Grid item xs={isMobile ? 1 : 4}></Grid>

        <Grid item xs={isMobile ? 18 : 12}>
          <CardWords data={WordFromCoWorkers} />
        </Grid>

        <Grid item xs={isMobile ? 1 : 4}></Grid>
      </Grid>
    </div>
  );
};

export default WordsCoWorkers;
