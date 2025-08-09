import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Flights", "Offers", "About Us"];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#000000ff" }}>
                <Toolbar>
                    <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                        <img
                            src="/Icons/plane.png"
                            alt="logo"
                            style={{ width: 40, height: 40, marginRight: 8 }}
                        />
                        <Typography
                            variant="h5"
                            sx={{

                                color: "white",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Hindustan Airlines
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            flex: 2,
                            gap: 4,
                        }}
                    >
                        {pages.map((item) => (
                            <Button
                                key={item}
                                onClick={() => setActiveItem(item)}
                                sx={{
                                    color: "white",
                                    fontWeight: activeItem === item ? "bold" : "normal",
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -4,
                                        left: 0,
                                        width: activeItem === item ? "100%" : "0%",
                                        height: "3px",
                                        backgroundColor: "#61dafb",
                                        transition: "width 0.3s ease",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flex: 1,
                            gap: 1,
                        }}
                    >
                        <IconButton
                            sx={{ color: "white", display: { xs: "flex", md: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>

                        <IconButton sx={{ color: "white" }}>
                            <img
                                src="/Icons/user.png"
                                alt="logo"
                                style={{ width: 40, height: 40, marginRight: 8 }}
                            />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                >
                    <List>
                        {pages.map((text) => (
                            <ListItem
                                button
                                key={text}
                                selected={activeItem === text}
                                onClick={() => setActiveItem(text)}
                            >
                                <ListItemText
                                    primary={text}
                                    primaryTypographyProps={{
                                        fontFamily: "Montserrat",
                                        fontWeight: activeItem === text ? "bold" : "normal",
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
