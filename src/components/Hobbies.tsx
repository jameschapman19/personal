// components/HobbiesSection.tsx
"use client";
import React from "react";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import MotionDiv from '@/components/MotionDiv';
const HobbiesSection = () => {
    const theme = useTheme();

    return (
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh", // Set a minimum height for the section
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(/rowing.jpg)`, // Set image as background
                    backgroundSize: "cover", // Stretch image to fill the section
                    backgroundPosition: "center", // Center the image
                    textAlign: "left", // Align text left
                    pt: 8,
                    pb: 8,
                    backgroundColor: theme.palette.primary.main, // Optional background color with opacity for text readability
                    opacity: 0.8, // Optional background color opacity
                }}
            >
                <MotionDiv direction="right">
                <Container maxWidth="lg">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                                color={theme.palette.getContrastText(theme.palette.primary.main)}
                            >
                                <span style={{ fontSize: "0.8em" }}>Outside</span> <br />
                                <strong style={{ fontSize: "1.5em" }}>Work</strong> <br />
                                <span style={{ fontSize: "0.8em" }}>Rowing, Reading</span>
                            </Typography>
                            <Typography
                                variant="body1"
                                color={theme.palette.getContrastText(theme.palette.primary.main)}
                            >
                                Outside of my professional life, I find solace in rowing with Vesta Rowing Club, cheering for Reading FC, and keeping up with the fast-paced world of Formula 1.
                            </Typography>
                            {/* Add more content about hobbies or fun facts */}
                        </Grid>
                    </Grid>
                </Container>
                </MotionDiv>
            </Box>
    );
};

export default HobbiesSection;
