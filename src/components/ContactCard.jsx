import {Box, styled, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/material/styles";

const ContactCard = ({ Contact }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "50px",
    color: "black",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    "&:hover": {
      color: "red",
    },
  }));

  const Body = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#7E7676",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  }));

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      display={"flex"}
      marginLeft={"5%"}
      marginRight={"5%"}
      marginTop={"2%"}
      alignItems={"center"}
    >
      <Box marginRight={"25px"}>
        <img
          width={isMobile ? "75px" : "100px"}
          src={require(`../assets/images/${Contact.icon}`)}
          style={{
            borderRadius: "3%",
          }}
          onClick={() => handleImageClick(Contact.link)}
        />
      </Box>
      <Box>
        <Title variant="h1" onClick={() => handleImageClick(Contact.link)}>
          {Contact.type}
        </Title>
        <Body variant="body2">{Contact.contact}</Body>
      </Box>
    </Box>
  );
};

export default ContactCard;
