// components/SkillsSection.tsx
"use client"
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import cvData from '@/content/CVData';

type ColorMap = {
    [key: string]: string;
};

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

    const itemVariants = {
        hover: { scale: 1.1 }
    };

    return (
        <Box sx={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                My Skills
            </Typography>
            {cvData.skills.map((category) => (
                <Box key={category.category}>
                    <Typography variant="h5" sx={{ color: colorMap[category.category] || 'text.primary' }}>
                        {category.category}
                    </Typography>
                    <Grid container spacing={2}>
                        {category.details.map(skill => (
                            <Grid item xs={12} sm={6} md={3} key={skill}>
                                <motion.div variants={itemVariants} whileHover="hover">
                                    <Paper elevation={3} sx={{
                                        padding: '1rem',
                                        textAlign: 'center',
                                        backgroundColor: colorMap[category.category],
                                        color: theme.palette.getContrastText(colorMap[category.category])
                                    }}>
                                        <Typography variant="h6">{skill}</Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default SkillsSection;