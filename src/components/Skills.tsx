import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import cvData from '@/content/CVData';
import { Card, CardContent, Container} from '@mui/material';

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

    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.05 }
    };

    const getCardStyles = (category: string) => ({
        backgroundColor: colorMap[category] || theme.palette.primary.main,
        color: theme.palette.getContrastText(colorMap[category] || theme.palette.primary.main),
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
            <Typography variant="h2" component="h2" gutterBottom>
                <span style={{ fontSize: '0.8em' }}>My</span> <br /> <strong style={{ fontSize: '1.5em' }}>Skills</strong>
            </Typography>
            <Typography variant="body1">
                {/* Your tagline goes here */}
                {/* Example: "Discover a world of expertise and innovation" */}
            </Typography>
                <Grid container spacing={4} sx={{ mt: 4 }}>
            {cvData.skills.map((category) => (
                <Grid item xs={12} md={3} key={category.category}>
                    <motion.div variants={cardVariants} initial="initial" animate="animate" whileHover="whileHover">
                        <Card sx={getCardStyles(category.category)}>
                            <CardContent>
                                <Typography variant="h6">{category.category}</Typography>
                                {category.details.map((skill, index) => (
                                    <Paper key={index} sx={paperStyle}>
                                        <Typography>{skill}</Typography>
                                    </Paper>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            ))}
        </Grid>
            </Container>
        </Box>
    );
};

export default SkillsSection;
