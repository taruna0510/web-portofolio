import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Contactdata from "../assets/database/ContactData.json";
import { useTheme } from "@mui/material/styles";
import CardContact from "./CardContact";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        align="center"
        mt={isMobile ? "1rem" : "1rem"}
      >
        Contact Me
      </Typography>
      <Container>
        <CardContact data={Contactdata} />
      </Container>
    </React.Fragment>
  );
};

export default Contact;
