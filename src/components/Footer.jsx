import { Box, Grid, Typography, Divider, Stack } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: "#121212", color: "#fff", px: { xs: 2, sm: 8 }, py: 4 }}>
            <Grid container spacing={4}>
                {/* Company */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography variant="h6" sx={{ fontSize: { xs: "16px", sm: "20px" } }} gutterBottom>Company</Typography>
                    {[
                        "The CEO", "Board of directors", "Leadership Team", "Our Investors", "Vision",
                        "Motto", "Careers", "Seat Information", "Aircraft Information"
                    ].map((item, index) => (
                        <Typography key={index} sx={{ fontSize: { xs: "14px", sm: "16px" } }} variant="body2">{item}</Typography>
                    ))}
                </Grid>

                {/* Support */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography variant="h6" gutterBottom>Support</Typography>
                    {[
                        "Baggage", "Refund Claims", "Hotels", "Car service", "Seat Select", "Disclaimer",
                        "Medical Assistance", "Special Assistance", "FAQ,s"
                    ].map((item, index) => (
                        <Typography key={index} sx={{ fontSize: { xs: "14px", sm: "16px" } }} variant="body2">{item}</Typography>
                    ))}
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography variant="h6" gutterBottom>Quick Links</Typography>
                    {[
                        "Book a flight", "flight status", "book a hotel", "Destinations", "Advertise with us",
                        "Purchase Requirement", "Terms & conditions", "Hand baggage Info", "Baggage Weights"
                    ].map((item, index) => (
                        <Typography key={index} sx={{ fontSize: { xs: "14px", sm: "16px" } }} variant="body2">{item}</Typography>
                    ))}
                </Grid>

                {/* Policy */}
                <Grid item xs={12} sm={6} md={2.4}>
                    <Typography variant="h6" gutterBottom>Policy</Typography>
                    {[
                        "Customer Policy", "Refund Policy", "Career Policy", "Membership Policy", "Hotel Policy"
                    ].map((item, index) => (
                        <Typography key={index} sx={{ fontSize: { xs: "14px", sm: "16px" } }} variant="body2">{item}</Typography>
                    ))}
                </Grid>

                {/* Brand & QR */}
                <Grid item xs={12} md={2.4}>
                    <Stack spacing={1}>

                        <Box display="flex" alignItems="center" gap={1} justifyContent={"center"}>
                            <img src="/Icons/plane.png" alt="Plane Icon" width={24} />
                            <Typography variant="h6">Hindustan Airlines</Typography>
                        </Box>

                        <Typography variant="body2">Scan To download the app</Typography>
                        <img src="/Icons/qr-code.png" alt="QR" width={80} />

                        <Typography variant="body2" sx={{ mt: 2 }}>Follow us on</Typography>
                        <Box display="flex" gap={2}>
                            <img src="/Icons/twitter.png" alt="Twitter" width={30} />
                            <img src="/Icons/instagram.png" alt="Instagram" width={30} />
                            <img src="/Icons/facebook.png" alt="Facebook" width={30} />

                        </Box>
                    </Stack>
                </Grid>
            </Grid>

            <Divider sx={{ my: 4, borderColor: "#333" }} />

            {/* Bottom Text */}
            <Typography align="center" variant="body2">
                Proudly Made In India. ©Copyright 2024 Hindustan Airlines. All rights reserved
            </Typography>
        </Box>
    );
}
