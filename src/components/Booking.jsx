import React, { useState, useEffect } from "react";
import {
    TextField, Button, Grid, Typography, Checkbox, FormControlLabel, Box, Card, CardContent,
    Container
} from "@mui/material";
import QRCodeCanvas from "react-qr-code";
import axios from "axios";
import BookingCardWrapper from './BookingCardWrapper';

const Booking = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        name: "",
        departure: "",
        destination: "",
        date: "",
        selectedFlight: null,
        age: "",
        uid: "",
        email: "",
        includeMeal: false,
    });

    const [flights, setFlights] = useState([]);
    const [loadingFlights, setLoadingFlights] = useState(false);

    const fetchFlights = async () => {
        setLoadingFlights(true);
        try {
            const res = await axios.get("http://127.0.0.1:8000/bookingflight", {
                params: {
                    from_: bookingData.departure,
                    to: bookingData.destination
                }
            });
            setFlights(res.data);
        } catch (err) {
            console.error("Error fetching flights", err);
        } finally {
            setLoadingFlights(false);
        }
    };


    useEffect(() => {
        if (step === 2) {
            fetchFlights();
        }
    }, [step]);

    useEffect(() => {
        if (step === 5) {
            const timer = setTimeout(() => {
                setStep(6);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleChange = (field, value) => {
        setBookingData({ ...bookingData, [field]: value });
    };

    const handleSelectFlight = (flight) => {
        handleChange("selectedFlight", flight);
        setStep(3);
    };
    const CustomTextField = ({ label, onChange, value, ...rest }) => {
        return (
            <TextField
                label={label}
                value={value}
                onChange={onChange}
                sx={{
                    height: "50px",
                    marginBottom: "5px",
                    "& .MuiInputBase-root": { height: "45px" },
                    "& .MuiInputLabel-root": { fontSize: "12px" },
                    width: "95%"
                }}
                fullWidth
                {...rest}
            />
        );
    };
    const steps = {
        1: (
            <>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Name"
                            value={bookingData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                        <CustomTextField
                            label="Departure City"
                            value={bookingData.departure}
                            onChange={(e) => handleChange("departure", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={5}>
                        <CustomTextField
                            label="Date"
                            type="date"
                            value={bookingData.date}
                            InputLabelProps={{ shrink: true }}
                            onChange={(e) => handleChange("date", e.target.value)}
                        />

                        <CustomTextField
                            label="Destination City"
                            value={bookingData.destination}
                            onChange={(e) => handleChange("destination", e.target.value)}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: "flex",
                            alignItems: "flex-end"
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => setStep(2)}
                            sx={{
                                height: '42px',
                                marginTop: '0px',
                                marginBottom: "10px"
                            }}
                        >
                            Check Flights
                        </Button>
                    </Grid>
                </Grid>
            </>
        ),

        2: (
            <>
                <Typography variant="h6">Select Flight</Typography>
                <Grid container spacing={2}>
                    {flights.map((flight, index) => (
                        <Grid item xs={6} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography>{flight.flight_id}</Typography>
                                    <Typography>{flight.from} → {flight.to}</Typography>
                                    <Typography>{flight.time} {flight.st}</Typography>
                                    <Button variant="contained" onClick={() => handleSelectFlight(flight)}>Select</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={2}>
                    <Button variant="outlined" onClick={() => setStep(1)}>Back</Button>
                </Box>
            </>
        ),


        3: (
            <>
                <Typography variant="h6">User Details</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomTextField label="Age" value={bookingData.age} fullWidth onChange={(e) => handleChange("age", e.target.value)} />
                        <CustomTextField label="Email" value={bookingData.email} fullWidth onChange={(e) => handleChange("email", e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField label="UID" value={bookingData.uid} fullWidth onChange={(e) => handleChange("uid", e.target.value)} />
                        <FormControlLabel
                            control={<Checkbox onChange={(e) => handleChange("includeMeal", e.target.checked)} />}
                            label="Include Meal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={() => setStep(4)}>Next</Button>
                        <Button variant="outlined" onClick={() => setStep(2)} sx={{ ml: 2 }}>Back</Button>
                    </Grid>
                </Grid>
            </>
        ),

        4: (
            <>
                <Typography variant="h6">Summary</Typography>
                <Box>
                    <Typography><b>Name:</b> {bookingData.name}</Typography>
                    <Typography><b>Departure:</b> {bookingData.departure}</Typography>
                    <Typography><b>Destination:</b> {bookingData.destination}</Typography>

                    {bookingData.selectedFlight ? (
                        <>
                            <Typography><b>Date & Time:</b> {bookingData.date} / {bookingData.selectedFlight.time} {bookingData.selectedFlight.st}</Typography>
                            <Typography><b>Flight:</b> {bookingData.selectedFlight.flight_id}</Typography>
                        </>
                    ) : (
                        <Typography color="error">Flight not selected!</Typography>
                    )}

                    <Typography><b>Meal:</b> {bookingData.includeMeal ? "Yes" : "No"}</Typography>
                </Box>
                <Box mt={2}>
                    <Button variant="contained" onClick={() => setStep(5)}>Confirm Booking</Button>
                    <Button variant="outlined" onClick={() => setStep(3)} sx={{ ml: 2 }}>Back</Button>
                </Box>
            </>
        ),

        5: (
            <>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                    <Typography variant="h6">Payments</Typography>
                    <Typography>Make Payment on Below mentioned QR Code</Typography>
                    <QRCodeCanvas value="upi://pay?pa=hdfc@upi&pn=HindustanAirlines" style={{ height: "100px", width: "100px" }} />
                    <Typography>Processing for Payment ...</Typography>
                    <Box mt={2}>
                        <Button variant="outlined" onClick={() => setStep(4)}>Back</Button>
                    </Box>
                </Box>
            </>
        ),

        6: (
            <>
                <Typography variant="h6">Booking Successful</Typography>
                <Typography>
                    Your Ticket and Boarding Pass is sent to your email in next 5 mins.
                </Typography>
                <Typography>Thank you</Typography>
                <Box mt={2}>
                    <Button variant="contained" onClick={() => {
                        // Reset the form and go back to step 1
                        setBookingData({
                            name: "", departure: "", destination: "", date: "",
                            selectedFlight: null, age: "", uid: "", email: "", includeMeal: false,
                        });
                        setStep(1);
                    }}>
                        Finish
                    </Button>
                </Box>
            </>
        )
    };

    return (
        <>



            <Card
                sx={{
                    backgroundColor: "#CFF1FF",
                    borderRadius: "5px",
                    margin: "15px",

                }}>
                <Box margin="15px">
                    <Typography variant="h6" sx={{
                        fontSize: "32px",
                        color: "blue"
                    }}>Welcome to Hindustan Airlines !!

                        <span style={{ display: "block", fontSize: "18px", color: "black" }}> Where Every Mile Feels Like Home .... </span></Typography>
                </Box>
                <Container>
                    <BookingCardWrapper p={4} sx={{ maxWidth: 900, margin: "auto", border: "1px solid #000000ff", borderRadius: 2 }}>
                        {steps[step]}
                    </BookingCardWrapper>
                </Container>
            </Card></>
    );
};


export default Booking;
