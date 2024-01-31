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
                                Hello! I'm James Chapman, and I have a strong academic background in Engineering, Economics, and Management from the University of Oxford. With a 1st Class MEng degree, my journey in academia ignited a passion for technology and its endless possibilities.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                As a Machine Learning enthusiast, I've honed my skills and expertise in areas like Deep Learning, Natural Language Processing, and Computer Vision. I'm well-versed in popular tools and frameworks, including TensorFlow, PyTorch, and Scikit-Learn, and have a solid foundation in programming languages such as Python, R, and MATLAB.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Beyond academics, I've had the privilege of working on impactful projects, including developing efficient algorithms for classical ML problems, presented at ICLR 2024. I've also innovated self-supervised representation learning techniques, contributing to the future of GPU-optimized computer vision applications.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                In my professional journey, I've served as an Assistant Lecturer and Teaching Assistant at University College London, where I've shared my knowledge with students and designed coursework on Foundations of AI. I've also ventured into the world of finance, working as an Analyst on the Systematic Investment Research Team at M&G.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                When I'm not immersed in technology and academia, I find solace in rowing with Vesta Rowing Club, cheering for Reading FC, and keeping up with the fast-paced world of Formula 1.
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm dedicated to continuous learning, innovation, and making a positive impact in the field of technology and beyond.
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
