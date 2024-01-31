import React from 'react';
import { Container, Box, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import socials from '@/content/socials.json'; // Import the JSON file for social links

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const getIcon = (name: string) => {
        switch (name) {
            case 'GitHub':
                return <GitHubIcon />;
            case 'LinkedIn':
                return <LinkedInIcon />;
            case 'Twitter':
                return <TwitterIcon />;
            case 'Instagram':
                return <InstagramIcon />;
            default:
                return null;
        }
    };

    return (
        <Box component="footer" sx={{ backgroundColor: grey[800], color: 'white', py: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h6">Get in Touch</Typography>
                        <Typography variant="body1">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                        </Typography>
                        <Link href="mailto:your.email@example.com" color="inherit" underline="hover">Send an Email</Link>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h6">Social Media</Typography>
                        <Stack direction="row" spacing={2}>
                            {socials.map((social) => (
                                <IconButton key={social.name} component="a" href={social.url} target="_blank" color="inherit">
                                    {getIcon(social.name)}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: grey[500], my: 2 }} />

                <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body2" color="inherit">
                            &copy; {currentYear} James Chapman. All Rights Reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
