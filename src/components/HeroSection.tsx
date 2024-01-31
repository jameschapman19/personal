"use client"
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <Box sx={{ padding: '4rem 1rem' }}>
            <Container>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item md={6} sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi, I'm James Chapman!
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
                        Exploring the Frontiers of Machine Learning & Open Source
                    </Typography>
                    <Button variant="contained" color="primary" size="large">
                        My Work
                    </Button>
                    <Button variant="outlined" color="primary" size="large" sx={{ marginLeft: '1rem' }}>
                        Contact Me
                    </Button>
                </Grid>
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
            </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;