"use client"
import React from 'react';
import { Project } from '@/interfaces/project';
import { Grid, Card, CardContent, Typography, Box, Container, Link, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Sample data, replace with real project data or fetch from an API
const projects: Project[] = [
    {
        name: "Project Name 1",
        description: "Brief description of the project.",
        technologies: ["React", "Node.js"],
        githubLink: "https://github.com/yourusername/project1",
        demoLink: "http://projectdemo1.com"
    },
    // ... more projects
];

const Portfolio = () => {
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
                <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">{project.name}</Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                        <Typography variant="body2">Technologies: {project.technologies.join(', ')}</Typography>
                                        <Link href={project.githubLink} target="_blank">
                                            <Button variant="outlined" color="primary">GitHub</Button>
                                        </Link>
                                        {project.demoLink && (
                                            <Link href={project.demoLink} target="_blank">
                                                <Button variant="outlined" color="secondary">Demo</Button>
                                            </Link>
                                        )}
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

export default Portfolio;