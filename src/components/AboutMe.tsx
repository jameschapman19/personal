// components/AboutMeSection.tsx
"use client"
import React from 'react';
import {Box, Typography, Container, Grid, useTheme} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMeSection = () => {
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
                    <Grid container spacing={2} alignItems="center">
                        <Grid item md={6}>
                            <Image
                                src="/professional.jpg"
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
                        <Grid item md={6}>
                            <Typography variant="h3" component="h2" gutterBottom color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                About Me
                            </Typography>
                            <Typography variant="body1" color={theme.palette.getContrastText(theme.palette.primary.main)}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Hello! I'm James Chapman, a Machine Learning enthusiast with a solid foundation in Engineering, Economics, and Management from the University of Oxford.
                                {/* Continue adding your story here */}
                            </Typography>
                            {/* Add more content about hobbies or fun facts */}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default AboutMeSection;
