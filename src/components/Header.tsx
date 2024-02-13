"use client"
import * as React from 'react';
import { AppBar, Box, Container, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';

const sections = [
    { label: 'Home', id: 'hero-section' },
    { label: 'About Me', id: 'about-me-section' },
    { label: 'Skills', id: 'skills-section' },
    { label: 'Projects', id: 'projects-section' },
    { label: 'Publications', id: 'publications-section' },
    { label: 'CV', id: 'cv-section' },
    { label: 'Hobbies', id: 'hobbies-section' }
]; // Define sections with labels and corresponding IDs

function useScrollSpy(sections) {
    const [activeSection, setActiveSection] = React.useState(null);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const selectedSection = sections.find(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    return scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50;
                }
                return false;
            });
            if (selectedSection) {
                setActiveSection(selectedSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return activeSection;
}

function ResponsiveAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const activeSection = useScrollSpy(sections);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSectionClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false); // Close the drawer on section click for mobile view
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {sections.map((section) => (
                    <ListItem key={section.id} onClick={() => handleSectionClick(section.id)} sx={{ backgroundColor: section.id === activeSection ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}>
                        <ListItemText primary={section.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <Link href="#" sx={{ flexGrow: 1, textDecoration: 'none', color: theme.palette.primary.contrastText }}>
                        <Typography noWrap variant="h6">
                            James Chapman
                        </Typography>
                    </Link>
                    {isMobile ? (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                                style={{ color: "white" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                            {sections.map((section) => (
                                <Button key={section.id} onClick={() => handleSectionClick(section.id)} sx={{ color: theme.palette.secondary.contrastText, display: 'block', backgroundColor: section.id === activeSection ? 'rgba(255, 255, 255, 0.1)' : 'transparent', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
                                    {section.label}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}

export default ResponsiveAppBar;
