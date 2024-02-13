// components/HobbiesSection.tsx
"use client"
import React from 'react';
import {Box, Typography, Container, Grid, useTheme} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HobbiesSection = () => {
    const theme = useTheme();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 1 }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Box sx={{
                textAlign: 'center',
                pt: 8,
                pb: 8,
                backgroundColor: theme.palette.primary.main, // Background color for the entire section
            }}>
                <Container>
                    <Grid container spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'initial' }}>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                            <Image
                                src="/rowing.jpg"
                                alt="James Chapman"
                                sizes="70vw"
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                    borderRadius: '10px'
                                }}
                                width={500}
                                height={300}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                            <Typography variant="h2" component="h2" gutterBottom color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                <span style={{ fontSize: '0.8em' }}>Outside</span> <br /> <strong style={{ fontSize: '1.5em' }}>Work</strong> <br /> <span style={{ fontSize: '0.8em' }}>Rowing, Reading</span>
                            </Typography>
                            <Typography variant="body1" color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                Outside of my professional life, I find solace in rowing with Vesta Rowing Club, cheering for Reading FC, and keeping up with the fast-paced world of Formula 1.
                            </Typography>
                            {/* Add more content about hobbies or fun facts */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default HobbiesSection;
