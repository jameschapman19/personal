// components/CVSection.tsx
"use client"
import React from 'react';
import { Box, Typography, Button, Card, CardContent, Container, Grid, Paper, useTheme, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { CVData } from '@/interfaces/CVData';

interface CVSectionProps {
    cvData: CVData;
}

const CVSection: React.FC<CVSectionProps> = ({ cvData }) => {
    const theme = useTheme();

    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.05 }
    };

    const getCardStyles = (index: number) => ({
        backgroundColor: index % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
        color: index % 2 === 0 ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
    });

    const paperStyle = {
        padding: '1rem',
        margin: '0.5rem 0',
        backgroundColor: theme.palette.background.paper,
    };

    return (
        <Box sx={{
            textAlign: 'center',
            pt: 8, // Increase top padding
            pb: 8, // Increase bottom padding
            minHeight: '100vh', // Set minimum height to 100% of the viewport height
            backgroundColor: 'white', // White background color
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Vertically center the content
        }}>
            <Container>
            <Typography variant="h2" gutterBottom><strong>CV</strong></Typography>
                <Button variant="contained" color="primary" href="/CV.pdf" download sx={{ mt: 4, fontSize: '1.2rem', padding: '12px 24px', fontWeight: 'bold' }}>Download CV as PDF</Button>
                {/* Add vertical padding before the email */}
                <Typography variant="body1" sx={{ mt: 2 }}><strong>Email:</strong> {cvData.personalInfo.email} | <strong>Phone:</strong> {cvData.personalInfo.phone}</Typography>
            <MuiLink href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></MuiLink>
            {' | '}
            <MuiLink href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></MuiLink>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {/* Skills */}
                <Grid item xs={12} md={6}>
                    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="whileHover">
                    <Card sx={getCardStyles(0)}>
                        <CardContent>
                            <Typography variant="h6">Skills</Typography>
                            {cvData.skills.map((skill, idx) => (
                                <Paper key={idx} sx={paperStyle}>
                                    <Typography><strong>{skill.category}:</strong> {skill.details.join(', ')}</Typography>
                                </Paper>
                            ))}
                        </CardContent>
                    </Card>
                    </motion.div>
                </Grid>

                {/* Education */}
                <Grid item xs={12} md={6}>
                    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="whileHover">
                    <Card sx={getCardStyles(1)}>
                        <CardContent>
                            <Typography variant="h6">Education</Typography>
                            {cvData.education.map((edu, idx) => (
                                <Paper key={idx} sx={paperStyle}>
                                    <Typography><strong>{edu.institution}</strong> - {edu.qualification}</Typography>
                                    {edu.details.map((detail, index) => (
                                        <Typography key={index}>&bull; {detail}</Typography>
                                    ))}
                                </Paper>
                            ))}
                        </CardContent>
                    </Card>
                    </motion.div>
                </Grid>

                {/* Work Experience */}
                <Grid item xs={12}>
                    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="whileHover">
                    <Card sx={getCardStyles(2)}>
                        <CardContent>
                            <Typography variant="h6">Work Experience</Typography>
                            {cvData.workExperience.map((work, idx) => (
                                <Paper key={idx} sx={paperStyle}>
                                    <Typography><strong>{work.company}</strong> - {work.role} ({work.period})</Typography>
                                    {work.details.map((detail, index) => (
                                        <Typography key={index}>&bull; {detail}</Typography>
                                    ))}
                                </Paper>
                            ))}
                        </CardContent>
                    </Card>
                    </motion.div>
                </Grid>

                {/* Outside of Work */}
                <Grid item xs={12}>
                    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="whileHover">
                    <Card sx={getCardStyles(3)}>
                        <CardContent>
                            <Typography variant="h6">Outside of Work</Typography>
                            {cvData.outsideOfWork.map((hobby, index) => (
                                <Paper key={index} sx={paperStyle}>
                                    <Typography>&bull; {hobby}</Typography>
                                </Paper>
                            ))}
                        </CardContent>
                    </Card>
                    </motion.div>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default CVSection;
