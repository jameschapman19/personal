// components/AboutMeSection.tsx
"use client"
import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import MotionDiv from '@/components/MotionDiv';

const AboutMeSection = () => {
    const theme = useTheme();

    return (
            <Box sx={{
                minHeight: "100vh", // Set a minimum height for the section
                textAlign: 'center',
                pt: 8,
                pb: 8,
                backgroundColor: theme.palette.primary.main, // Background color for the entire section
            }}>
                <MotionDiv direction="left">
                <Container>
                    <Grid container spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'initial' }}>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Image
                                src="/travel.jpg"
                                alt="James Chapman"
                                sizes="100vw"
                                style={{
                                    width: 'auto',
                                    height: '65%',
                                    borderRadius: '10px',
                                }}
                                layout="responsive" // This ensures that the image resizes responsively
                                width={125}
                                height={75}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                            <Typography variant="h2" component="h2" gutterBottom color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                <span style={{ fontSize: '0.8em' }}>About</span> <br /> <strong style={{ fontSize: '1.5em' }}>Me</strong> <br /> <span style={{ fontSize: '0.8em' }}>AI Enthusiast & Innovator</span>
                            </Typography>
                            <Typography variant="body1" color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I combine my engineering and economics background to work on machine learning, focusing on deep learning, natural language processing, and computer vision. I enjoy building algorithms and exploring new AI methods. I've worked on various projects, both in academic and industry settings, and I'm always eager to tackle challenges in fast-paced environments. If you're interested in pushing the boundaries of AI together, let's chat.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                </MotionDiv>
            </Box>
    );
};

export default AboutMeSection;
