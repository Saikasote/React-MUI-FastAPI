import React from "react";
import Slider from "react-slick";
import { Box, Card, Typography, } from "@mui/material";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Deals from "./Deals";

const StyledSlider = styled(Slider)(({ theme }) => ({
    ".slick-dots": {
        bottom: "40px",
    },
    ".slick-dots li": {
        margin: "0 10px",
    },
    ".slick-dots li button:before": {
        fontSize: "10px",
        color: "transparent",
    },
    ".slick-dots li button": {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#ccc",
        padding: 0,
        border: "none",

    },
    ".slick-dots li.slick-active button": {
        backgroundColor: "#00AEEF",
    },
}));

export default function Corousel() {
    const images = [
        "/Corousel/Section 1.png",
        "/Corousel/Section 2.png",
        "/Corousel/Section 3.png",
        "/Corousel/Section 4.png",
        "/Corousel/Section 5.png",
        "/Corousel/Section 11.png",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Card
            sx={{
                backgroundColor: "#CFF1FF",
                borderRadius: "5px",
                margin: "15px"
            }}>
            <Box margin="15px">
                <Typography variant="h6" sx={{
                    fontSize: "32px",
                    color: "blue"
                }}>Fly More, Spend Less

                    <span style={{ display: "block", fontSize: "18px", color: "black" }}>Grab Your Exclusive Deals Today!</span></Typography>
            </Box>
            <Box sx={{ width: "95%", maxWidth: 5000, mx: "auto", mt: 5 }}>
                <StyledSlider {...settings}>
                    {images.map((img, index) => (
                        <Box key={index} sx={{ textAlign: "center" }}>
                            <img
                                src={img}
                                alt={`Slide ${index}`}
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </Box>
                    ))}
                </StyledSlider>
            </Box>
            <Deals />
        </Card>
    );
}
