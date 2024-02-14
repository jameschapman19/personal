import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container, Link, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from 'next/image';

// Define a structure for your project's data that includes the GitHub API data you want to use
interface Project {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    stars: number;
    languages: string[];
    logo: string;
    demoLink?: string;
}

const Projects = () => {
    // Directly initialize state with hardcoded project data
    const projects: Project[] = [
        {
            name: "CCA Zoo",
            description: "A collection of canonical correlation analysis (CCA) methods and related utility functions.",
            technologies: ["Python", "Machine Learning"],
            githubLink: "https://github.com/jameschapman19/cca_zoo",
            stars: 169, // Example star count
            languages: ["Python"],
            logo: "/logos/cca-zoo.svg",
        },
        {
            name: "Fusilli",
            description: "A Python package housing a collection of deep-learning multi-modal data fusion method pipelines! From data loading, to training, to evaluation - fusilli's got you covered 🌸",
            technologies: ["Deep Learning", "Multi-modal Data Fusion"],
            githubLink: "https://github.com/florencejt/fusilli",
            stars: 128, // Example star count
            languages: ["Python"],
            logo: "/logos/fusilli.png",
        },
        // Add more projects as needed
    ];

    return (
        <Box sx={{
            textAlign: 'center',
            pt: 8,
            pb: 8,
            minHeight: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Container>
                <Typography variant="h2" component="h2" gutterBottom>
                    <span style={{ fontSize: '0.8em' }}>Explore My</span> <br /> <strong style={{ fontSize: '1.5em' }}>Projects Portfolio</strong>
                </Typography>
                <Typography variant="body1">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Check out some of the exciting projects I've worked on.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Card sx={{ minHeight: '500px' }}>
                                    <CardContent>
                                        <div style={{ marginBottom: '10px' }}>
                                        <Image
                                            src={project.logo}
                                            alt={`${project.name} logo`}
                                            width={150} // Specify width
                                            height={150} // Specify height
                                        />
                                        </div>
                                        <Typography variant="h6" gutterBottom>{project.name}</Typography>
                                        <Typography variant="body2" paragraph>{project.description}</Typography>
                                        <Typography variant="body2" paragraph>⭐ {project.stars} Stars</Typography>
                                        <Typography variant="body2" paragraph>Languages: {project.languages.join(', ')}</Typography>
                                        <Box>
                                            <Link href={project.githubLink} target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
                                                <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
                                                    View on GitHub
                                                </Button>
                                            </Link>
                                            {project.demoLink && (
                                                <Link href={project.demoLink} target="_blank" style={{ textDecoration: 'none' }}>
                                                    <Button variant="contained" color="secondary">
                                                        Live Demo
                                                    </Button>
                                                </Link>
                                            )}
                                        </Box>
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

export default Projects;



// import React, { useEffect, useState } from 'react';
// import { Grid, Card, CardContent, Typography, Box, Container, Link, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import GitHubIcon from "@mui/icons-material/GitHub";
// import Image from 'next/image';
// // Define a structure for your project's data that includes the GitHub API data you want to use
// interface Project {
//     name: string;
//     description: string;
//     technologies: string[];
//     githubLink: string;
//     stars: number;
//     languages: string[];
//     logo: string;
//     demoLink?: string;
// }
//
//
// const Projects = () => {
//     const [projects, setProjects] = useState<Project[]>([]);
//
//     useEffect(() => {
//         // GitHub API URLs for the repositories
//
//         const fetchProjects = async () => {
//             const repoInfos = [
//                 { owner: "jameschapman19", repo: "cca_zoo", logo: "/logos/cca-zoo.svg" },
//                 { owner: "florencejt", repo: "fusilli", logo: "/logos/fusilli.png" }
//             ];
//
//             const projectsData: Project[] = await Promise.all(repoInfos.map(async ({owner, repo, logo}) => {
//                 const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
//                 const repoData = await repoResponse.json();
//
//                 const languagesResponse = await fetch(repoData.languages_url);
//                 const languagesData = await languagesResponse.json();
//                 const languages = Object.keys(languagesData); // Convert language JSON object to array of language names
//
//                 return {
//                     name: repoData.name,
//                     description: repoData.description,
//                     technologies: languages, // Assuming languages are a proxy for technologies
//                     githubLink: repoData.html_url,
//                     stars: repoData.stargazers_count,
//                     languages: languages,
//                     logo: logo, // Path to the logo image
//                     demoLink: '' // Handle demo links separately if available
//                 };
//             }));
//
//             setProjects(projectsData);
//         };
//
//
//         fetchProjects();
//     }, []);
//
//     return (
//         <Box sx={{
//             textAlign: 'center',
//             pt: 8,
//             pb: 8,
//             minHeight: '100vh',
//             backgroundColor: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//         }}>
//             <Container>
//                 <Typography variant="h2" component="h2" gutterBottom>
//                     <span style={{ fontSize: '0.8em' }}>Explore My</span> <br /> <strong style={{ fontSize: '1.5em' }}>Projects Portfolio</strong>
//                 </Typography>
//                 <Typography variant="body1">
//                     {/* eslint-disable-next-line react/no-unescaped-entities */}
//                     Check out some of the exciting projects I've worked on.
//                 </Typography>
//                 <Grid container spacing={2} sx={{ mt: 4 }}>
//                     {projects.map((project, index) => (
//                         <Grid item xs={12} sm={6} md={4} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.1 * index }}
//                             >
//                                 <Card>
//                                     <CardContent>
//                                         {/*<div style={{ marginBottom: '10px' }}>*/}
//                                         {/*    <Image*/}
//                                         {/*        src={project.logo}*/}
//                                         {/*        alt={`${project.name} logo`}*/}
//                                         {/*        width={100} // Specify width*/}
//                                         {/*        height={100} // Specify height*/}
//                                         {/*    />*/}
//                                         {/*</div>*/}
//                                         <Typography variant="h6" gutterBottom>{project.name}</Typography>
//                                         <Typography variant="body2" paragraph>{project.description}</Typography>
//                                         <Typography variant="body2" paragraph>⭐ {project.stars} Stars</Typography>
//                                         <Typography variant="body2" paragraph>Languages: {project.languages.join(', ')}</Typography>
//                                         <Box>
//                                             <Link href={project.githubLink} target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
//                                                 <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
//                                                     View on GitHub
//                                                 </Button>
//                                             </Link>
//                                             {project.demoLink && (
//                                                 <Link href={project.demoLink} target="_blank" style={{ textDecoration: 'none' }}>
//                                                     <Button variant="contained" color="secondary">
//                                                         Live Demo
//                                                     </Button>
//                                                 </Link>
//                                             )}
//                                         </Box>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };
//
// export default Projects;