import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, Box, Grid } from "@mui/material";
import Introduction from "../assets/images/Introduction.png";
import "../style/Home.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box sx={{ height: "95vh" }}>
        <Grid
          container
          columns={20}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={1}></Grid>
          {/* Left Section */}

          <Grid item xs={isMobile ? 18 : 10}>
            <Typography variant={isMobile ? "h2" : "h1"}>
              Hello,
              <br />
              I'm Taruna!
            </Typography>
            <Typography variant={isMobile ? "h7" : "h4"}>
              Electrical Engineer Fresh Graduate from
              <br />
              Bandung Institute of Technology
            </Typography>
          </Grid>
          {/* End of Right Section */}

          {/* End of Left Section */}
          <Grid item xs={isMobile ? 1 : 8} align="center"></Grid>
          {/* Right Section */}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
