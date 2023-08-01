import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, Box, Grid, Button } from "@mui/material";
import "../style/Home.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const openCv = () => {
    window.open(
      "https://drive.google.com/file/d/1WRBqNAk5ztuVECej_qx_mr23B3NGHc8U/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <Box sx={{ height: "100vh" }}>
        <Grid
          container
          columns={20}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={1}></Grid>
          {/* Left Section */}

          <Grid item xs={isMobile ? 18 : 18}>
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
            <Button
              size={isMobile ? "medium" : "large"}
              variant="outlined"
              style={{
                color: "black",
                borderColor: "black",
                marginTop: "1rem",
              }}
              onClick={openCv}
            >
              Check out my CV
            </Button>
          </Grid>

          {/* End of Left Section */}
          <Grid item xs={isMobile ? 1 : 1} align="center"></Grid>
          {/* Right Section */}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
