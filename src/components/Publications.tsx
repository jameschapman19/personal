// components/PublicationsSection.tsx
"use client";
import {Box, Typography, Card, CardContent, Container, CardActions, Button, Grid, useTheme} from '@mui/material';
import { motion } from 'framer-motion';
import publications from '@/content/publications.json'; // Path to your JSON file

interface Publication {
    title: string;
    authors: string;
    year: string;
    url: string;
    code_link?: string;
    pdf_link?: string;
    teaser: string;
}

const PublicationsSection = () => {
    const theme = useTheme();
    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    return (
        <Box sx={{
            textAlign: 'center',
            pt: 8,
            pb: 8,
            backgroundColor: theme.palette.secondary.main, // Background color for the entire section
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Container>
                <Typography variant="h3" component="h2" gutterBottom color={theme.palette.getContrastText(theme.palette.secondary.main)}>
                    Publications
                </Typography>
                <Grid container spacing={4}>
                    {publications.map((publication: Publication, index: number) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <motion.div
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="whileHover"
                            >
                                <Card sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    bgcolor: 'common.white', // White background for the card
                                    color: 'text.primary',
                                    ':hover': {
                                        boxShadow: 6, // theme.shadows[6]
                                    },
                                    minHeight: '300px'  // Minimum height for each card
                                }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {publication.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {publication.teaser}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" href={publication.url} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', ':hover': { bgcolor: 'primary.dark' } }}>
                                            Read More
                                        </Button>
                                        {publication.code_link && (
                                            <Button size="small" variant="contained" href={publication.code_link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'info.main', color: 'info.contrastText', ':hover': { bgcolor: 'info.dark' }, ml: 1 }}>
                                                Code
                                            </Button>
                                        )}
                                        {publication.pdf_link && (
                                            <Button size="small" variant="contained" href={publication.pdf_link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', ':hover': { bgcolor: 'warning.dark' }, ml: 1 }}>
                                                PDF
                                            </Button>
                                        )}
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PublicationsSection;