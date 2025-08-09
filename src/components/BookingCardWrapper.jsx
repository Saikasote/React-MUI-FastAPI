import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const BookingCardWrapper = ({ children }) => {
    return (
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "column"
                },
                backgroundColor: "beige",
                borderRadius: "20px",
                justifyContent: "space-between",
                margin: "20px"
            }}>
                <Box bgcolor={"orange"} sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", height: "40px" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "15px", sm: "25px" },
                            fontFamily: "sans-serif",
                            marginLeft: { xs: "15px", sm: "15px" },
                            marginTop: { xs: "10px", sm: "5px" }
                        }}>
                        Book Ticket
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",

                }}>
                    <Box flex={3}><Card
                        elevation={0}
                        sx={{
                            height: "100%",
                            borderBottomRightRadius: {
                                xs: "20px",
                                sm: "0px"
                            },
                            borderBottomLeftRadius: "20px",
                            backgroundColor: "beige",
                        }}>
                        <CardContent>
                            {children}</CardContent></Card></Box>
                    <Box sx={{
                        display: {
                            sm: "flex",
                            xs: "none"
                        },
                        flexDirection: "column",
                        justifyContent: "right",
                        alignItems: "center",
                        borderLeft: 2
                    }}>
                        <Box display={"flex"} flexDirection={"column"} sx={{
                            height: "130px",
                            width: "150px"
                        }}>
                            <img src='/Icons/plane.png' alt='none' style={{ height: "80px", width: "80px", rotate: "-45deg", marginLeft: "40px", marginTop: "30px" }} />
                        </Box>
                        <Typography sx={{
                            fontSize: "25px",
                            color: "black",
                            textAlign: "center",
                            fontWeight: "700",
                            margin: "0px"
                        }}>Hindustan</Typography>
                        <Typography sx={{
                            fontSize: "25px",
                            color: "black",
                            textAlign: "center",
                            fontWeight: "700"
                        }}>Airlines</Typography>


                    </Box>
                </Box>

            </Box>

        </div>
    )
};

export default BookingCardWrapper;
