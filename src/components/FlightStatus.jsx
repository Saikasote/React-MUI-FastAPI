import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";

function FlightStatus() {
    const [flightId, setFlightId] = useState("");
    const [flightDetails, setFlightDetails] = useState(null);
    const [recentFlights, setRecentFlights] = useState([]);

    const handleCheckStatus = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/flightstatus`, {
                params: { Id: flightId },
            });
            setFlightDetails(response.data);
        } catch (error) {
            setFlightDetails({ message: "Flight not found." });
        }
    };

    const fetchRecentStatuses = async () => {
        try {
            const response = await axios.get("http://localhost:8000/status");
            setRecentFlights(response.data);
        } catch (error) {
            console.error("Failed to fetch recent flight statuses.");
        }
    };

    useEffect(() => {
        fetchRecentStatuses();
    }, []);

    const StatusCard = ({ flight }) => (
        <Card sx={{ backgroundColor: "#90CAF9", m: 1, width: 250 }}>
            <CardContent>
                <Typography>
                    <strong>Flight ID →</strong> {flight.flight_id || "N/A"}
                </Typography>
                <Typography>From → {flight.from || "N/A"}</Typography>
                <Typography>To → {flight.to || "N/A"}</Typography>
                <Typography>
                    Status →{" "}
                    <span
                        style={{
                            color: flight.status?.includes("Delayed") ? "red" : "green",
                        }}
                    >
                        {flight.status || "No status available"}
                    </span>
                </Typography>
            </CardContent>
        </Card>
    );

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
                }}>Check. Track. Fly

                    <span style={{ display: "block", fontSize: "18px", color: "black" }}> Real-Time Flight Status at Your Fingertips.</span></Typography>
            </Box>

            <Box sx={{ p: 4 }}>
                <Box sx={{
                    display: "flex", alignItems: "center", mb: 2, gap: 2, flexDirection: {
                        xs: "column", sm: "row"
                    }
                }}>
                    <TextField
                        label="Flight Id"
                        variant="outlined"
                        value={flightId}
                        sx={{
                            width: "100%",
                            maxWidth: 300,
                            height: 55,
                            fontSize: "16px",
                        }}
                        onChange={(e) => setFlightId(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleCheckStatus}
                        sx={{
                            width: "100%",
                            maxWidth: 300,
                            height: 55,
                            fontSize: "16px",
                        }}
                    >
                        Check Status
                    </Button>
                </Box>

                {flightDetails && (
                    <Box sx={{ mb: 4 }}>
                        {flightDetails.status ? (
                            <StatusCard flight={flightDetails} />
                        ) : (
                            <Typography color="error">{flightDetails.message}</Typography>
                        )}
                    </Box>
                )}

                <Typography variant="h6" gutterBottom>
                    Recently Updated Flight Status
                </Typography>
                <Grid container spacing={2}>
                    {recentFlights.map((flight, index) => (
                        <Grid item key={index}>
                            <StatusCard flight={flight} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Card>
    );
}

export default FlightStatus;
