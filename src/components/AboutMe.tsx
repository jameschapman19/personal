// components/AboutMeSection.tsx
"use client"
import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
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
                    <Grid container spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'initial' }}>
                        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Image
                                src="/travel.jpg"
                                alt="James Chapman"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    maxWidth: '250px' // Ensure the image is not too large on big screens
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
                                Hi there! I'm James Chapman, an AI enthusiast with a passion for innovation and problem-solving. With a background in Engineering and Economics, I blend creativity with analytical thinking to tackle complex challenges in the field of artificial intelligence.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I specialize in areas like Deep Learning, Natural Language Processing, and Computer Vision, leveraging cutting-edge technologies to drive impactful solutions. Whether it's developing efficient algorithms or pioneering self-supervised learning techniques, I'm dedicated to pushing the boundaries of AI.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                From academia to industry, I've collaborated on diverse projects, contributing to advancements in machine learning and beyond. I thrive in dynamic environments, where I can apply my expertise to drive innovation and make a positive impact.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Let's connect and explore how we can leverage AI to transform ideas into reality.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default AboutMeSection;
