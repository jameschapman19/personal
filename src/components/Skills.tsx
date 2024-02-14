import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import cvData from '@/content/CVData';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
type ColorMap = {
    [key: string]: string;
};

const SkillsSection = () => {
    const theme = useTheme();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 1 }
        }
    };
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
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Box sx={{
                display: "flex",
                minHeight: "100vh", // Set a minimum height for the section
                textAlign: 'left',
                pt: 8,
                pb: 8,
            }}>
            <Container>
                <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" component="h2" gutterBottom>
                            <span style={{ fontSize: '0.8em' }}>My</span> <br /> <strong style={{ fontSize: '1.5em' }}>Skills</strong>
                        </Typography>
                        <Typography variant="body1">
                            {/* Your tagline goes here */}
                            {/* Example: "Discover a world of expertise and innovation" */}
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
                                                        <Paper sx={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            {skill.logo ? (
                                                                <Image
                                                                    src={skill.logo}
                                                                    alt={`${skill.name} logo`}
                                                                    width={60} // Specify width
                                                                    height={60} // Specify height
                                                                    objectFit="contain" // Ensure the image fits within the dimensions without distortion
                                                                    layout="fixed" // This ensures the image uses the specified width and height
                                                                />
                                                            ) : (
                                                                <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                                                                    {skill.name[0]}
                                                                </div> // A placeholder div for skills without a logo
                                                            )}
                                                            <Typography variant="body2">{skill.name}</Typography>
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
            </Container>
            </Box>
        </motion.div>
    );
};

export default SkillsSection;
