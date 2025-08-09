// SearchFlights.js
import React, { useState } from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Card,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";

export default function SearchFlight() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState(null);
    const [seat, setSeat] = useState("");
    const [flights, setFlights] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/searchflights", {
                params: {
                    from_: from,
                    to: to,
                    time: time,
                },
            });
            setFlights(response.data);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch flights.");
        }
    };

    return (
        <Card
            sx={{
                backgroundColor: "#CFF1FF",
                borderRadius: "5px",
                margin: "15px"
            }}>
            <Box p={3}>
                <Typography variant="h6" sx={{
                    fontSize: "32px",
                    color: "blue"
                }}>From Dream to Destination

                    <span style={{ display: "block", fontSize: "18px", color: "black" }}> Find Your Perfect Flight.</span></Typography>
                <Box display="flex" gap={2} mt={2} flexWrap="wrap">
                    <TextField
                        label="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                    <TextField
                        label="To"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                    <TextField
                        label="Time (e.g., 10 pm)"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel>Seat Preference</InputLabel>
                        <Select
                            value={seat}
                            onChange={(e) => setSeat(e.target.value)}
                            label="Seat Preference"
                        >
                            <MenuItem value="First">First</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Economy">Economy</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        sx={{
                            width: "100%",
                            maxWidth: 300,
                            height: 55,
                            fontSize: "16px",
                        }}
                    >
                        Search ..
                    </Button>
                </Box>

                <Typography mt={3}>Available flights</Typography>
                <Paper sx={{ mt: 1, overflowX: "auto" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#90caf9" }}>
                                <TableCell>
                                    <strong>Sr No</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>From</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>To</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Time</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Price</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Flight Name</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {flights.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6}>No flights found.</TableCell>
                                </TableRow>
                            ) : (
                                flights.map((flight, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{flight.from}</TableCell>
                                        <TableCell>{flight.to}</TableCell>
                                        <TableCell>
                                            {flight.time} {flight.st}
                                        </TableCell>
                                        <TableCell>₹{flight.cost}</TableCell>
                                        <TableCell>{flight.flight_id}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Card>
    );
}
