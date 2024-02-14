import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Image from 'next/image';
import { GitHub, LinkedIn } from '@mui/icons-material'; // Import Material-UI icons for GitHub and LinkedIn
import { motion } from 'framer-motion'; // Import motion from framer-motion

const MotionButton = motion(Button); // Wrap Button with motion for animations

const HeroSection = () => {
    return (
        <Box sx={{
            display: "flex",
            minHeight: "100vh", // Set a minimum height for the section
            padding: '4rem 1rem' }}>
            <Container>
                <Grid container spacing={2} alignItems="center" justifyContent={{ xs: 'center', md: 'initial' }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <span style={{ fontSize: '0.8em' }}>Hello, I'm</span> <br /> <strong style={{ fontSize: '1.3em' }}>James Chapman</strong> <br /> <span style={{ fontSize: '0.8em' }}>AI Researcher</span>
                        </Typography>
                        <Typography variant="h5" sx={{ marginBottom: '2rem', fontWeight: 'bold' }}>
                            Exploring the Frontiers of Machine Learning & Open Source
                        </Typography>
                        {/* LinkedIn button with LinkedIn colors */}
                        <MotionButton
                            variant="contained"
                            color="primary"
                            size="large"
                            href="https://www.linkedin.com/in/jameswhchapman"
                            rel="noopener noreferrer"
                            startIcon={<LinkedIn />}
                            sx={{ backgroundColor: '#0077b5', '&:hover': { backgroundColor: '#005885' }, marginLeft: { xs: '1rem', sm: '1rem' }, marginTop: { xs: '1rem', sm: '1rem' } }} // LinkedIn colors
                            whileHover={{ scale: 1.1 }} // Scale up on hover
                        >
                            LinkedIn
                        </MotionButton>
                        {/* GitHub button with black and white colors */}
                        <MotionButton
                            variant="contained"
                            color="primary"
                            size="large"
                            href="https://github.com/jameschapman19"
                            rel="noopener noreferrer"
                            startIcon={<GitHub />}
                            sx={{ backgroundColor: '#24292e', color: '#ffffff', '&:hover': { backgroundColor: '#161b22' }, marginLeft: { xs: '1rem', sm: '1rem' }, marginTop: { xs: '1rem', sm: '1rem' } }} // GitHub colors
                            whileHover={{ scale: 1.1 }} // Scale up on hover
                        >
                            GitHub
                        </MotionButton>
                        {/* Contact Me button to send an email */}
                        <MotionButton
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={() => {
                                window.location.href = "mailto:chapmajw@gmail.com";
                            }}
                            sx={{ marginLeft: { xs: '1rem', sm: '1rem' }, marginTop: { xs: '1rem', sm: '1rem' } }}
                            whileHover={{ scale: 1.1 }} // Scale up on hover
                        >
                            Contact Me
                        </MotionButton>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                        <Image
                            src="/professional.jpg"
                            alt="James Chapman"
                            sizes="100vw"
                            style={{
                                width: 'auto',
                                height: '65%',
                                borderRadius: '10px',
                            }}
                            width={125}
                            height={75}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
