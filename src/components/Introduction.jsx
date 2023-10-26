import React from "react";
import NavBar from "./NavBar";
import {
    Box,
    Button,
    Container,
    styled,
    Typography,
    useMediaQuery,
} from "@mui/material";

const Introduction = () => {
    const openCv = () => {
        window.open(
            "https://drive.google.com/drive/folders/1U4g2Pw4w_dB8vp5OjWsL8pp7cXCkmKfH?usp=sharing",
            "_blank"
        );
    };

    const CVButton = styled(Button)(({ theme }) => ({
        color: "black",
        borderColor: "black",
        marginTop: "1rem",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
            borderColor: "white",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "80px",
        color: "black",
        fontWeight: "bold",

        [theme.breakpoints.down("lg")]: {
            fontSize: "80px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "70px",
        },
    }));

    const Summary = styled(Typography)(({ theme }) => ({
        fontSize: "25px",
        color: "#7E7676",
        [theme.breakpoints.down("lg")]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
    }));

    const ContainerIntroduction = styled(Container)(({ theme }) => ({
        textAlign: "center",
        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    }));

    return (
        <Box
            minHeight={"100vh"}
            sx={{
                backgroundColor: "#F9F9F9",
                alignContent: "center",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <ContainerIntroduction>
                <Title variant="h3">
                    Hello,
                    <br />
                    I'm Taruna!
                </Title>
                <Summary variant={"body2"}>
                    Electrical Engineer Graduate from
                    <br />
                    Bandung Institute of Technology
                </Summary>
                <CVButton
                    size="large"
                    variant="outlined"
                    style={{}}
                    onClick={openCv}
                    align="center"
                >
                    Kindly Check My Resume
                </CVButton>
            </ContainerIntroduction>
        </Box>
    );
};

export default Introduction;
