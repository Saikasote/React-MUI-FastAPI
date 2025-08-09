import { Box, Card, CardContent } from '@mui/material';

export default function Deals() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "50px"
            }}
        >
            <Card
                sx={{
                    border: "2px solid #000",
                    borderRadius: "12px",
                    padding: "20px",
                    width: "100%",
                    maxWidth: "1200px"
                }}
            >
                <CardContent>
                    <Box
                        display="grid"
                        gridTemplateColumns={{
                            xs: "1fr",
                            sm: "1fr 1fr"
                        }}
                        gap="15px"
                    >
                        {/* Left Big Card */}
                        <Card sx={{ display: "flex" }}>
                            <Box
                                component="img"
                                src="/Icons/Section 9.png"
                                alt="Hotel Check Inns"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "0px"
                                }}
                            />
                        </Card>

                        {/* Right Column */}
                        <Box display="grid" gridTemplateRows="1fr 1fr" gap="15px">
                            {/* Top Card */}
                            <Card sx={{ display: "flex" }}>
                                <Box
                                    component="img"
                                    src="/Icons/Section 8.png"
                                    alt="Premium"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        borderRadius: "0px"
                                    }}
                                />
                            </Card>

                            {/* Bottom Two Cards in a Row */}
                            <Box
                                display="grid"
                                gridTemplateColumns="1fr 1fr"
                                gap="15px"
                            >
                                <Card sx={{ display: "flex" }}>
                                    <Box
                                        component="img"
                                        src="/Icons/Section 6.png"
                                        alt="Student Offer"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            borderRadius: "0px"
                                        }}
                                    />
                                </Card>
                                <Card sx={{ display: "flex" }}>
                                    <Box
                                        component="img"
                                        src="/Icons/Section 7.png"
                                        alt="Corporate Offer"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            borderRadius: "0"
                                        }}
                                    />
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
