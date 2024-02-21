"use client"
import { Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import cvData from '@/content/CVData';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
type ColorMap = {
    [key: string]: string;
};
import AnimationTheme from "@/AnimationTheme";

const SkillsSection = () => {
    const theme = useTheme();

    // Using Material-UI theme colors for categories
    const colorMap: ColorMap = {
        "Programming Languages": theme.palette.primary.main,
        "Software Development": theme.palette.primary.light,
        "Machine Learning Tools": theme.palette.secondary.main,
        "Machine Learning Techniques": theme.palette.secondary.light,
        // Add more categories and colors as needed
    };

    const getCardStyles = (category: string) => ({
        backgroundColor: colorMap[category] || theme.palette.primary.main,
        color: theme.palette.getContrastText(colorMap[category] || theme.palette.primary.main),
    });

    return (
        <Container sx={{
            minHeight: "100vh", // Set a minimum height for the section
            textAlign: 'center',
            pt: 8,
            pb: 8,
        }}>
            <AnimationTheme variant="hiddenLeft">
                <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h2" component="h2" gutterBottom>
                            <span style={{ fontSize: '0.8em' }}>My</span> <br /> <strong style={{ fontSize: '1.5em' }}>Skills</strong>
                        </Typography>
                        <Typography variant="body1">
                            Versatile expertise spanning programming languages, software development, and machine learning tools, coupled with a commitment to continuous learning and innovation.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={4}>
                            {cvData.skills.map((category) => (
                                <Grid item xs={12} key={category.category}>
                                    <Accordion sx={getCardStyles(category.category)}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="h6">{category.category}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>
                                                {category.details.map((skill, index) => (
                                                    <Grid item xs={6} md={4} key={index}>
                                                        <Paper
                                                            sx={{
                                                                padding: '1rem',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '5px',
                                                            }}
                                                        >
                                                            {/* Render the logo if available, otherwise render a placeholder */}
                                                            {skill.logo ? (
                                                                <Image
                                                                    src={skill.logo}
                                                                    alt={`${skill.name} logo`}
                                                                    width={60} // Specify width
                                                                    height={60} // Specify height
                                                                    objectFit="contain" // Ensure the image fits within the dimensions without distortion
                                                                />
                                                            ) : (
                                                                <div
                                                                    style={{
                                                                        width: '60px',
                                                                        height: '60px',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontSize: '1.25rem',
                                                                    }}
                                                                >
                                                                    {skill.name[0]} {/* Display the first letter of the skill name as a placeholder */}
                                                                </div>
                                                            )}
                                                            {/* Render the skill name and years of experience */}
                                                            <Typography variant="body2">
                                                                <strong>{skill.name}</strong>
                                                                {skill.years && ( // Only display years of experience if available
                                                                    <>
                                                                        <br />
                                                                        {skill.years} years {/* Display years of experience on a new line */}
                                                                    </>
                                                                )}
                                                            </Typography>
                                                        </Paper>
                                                    </Grid>
                                                    ))}
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </AnimationTheme>
        </Container>
    );
};

export default SkillsSection;
