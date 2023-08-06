import { Typography, Box, styled, Container } from "@mui/material";
import React from "react";
import CardProjects from "./CardProjects";
import DataProjects from "../assets/database/Projects.json";

const Projects = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    color: "black",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#F9F9F9" }}>
      <br />
      <Container>
        <Title variant="h4" align="center">
          Projects
        </Title>
        {DataProjects.map((project) => (
          <CardProjects project={project} />
        ))}
      </Container>
      <br />
    </Box>
  );
};

export default Projects;
