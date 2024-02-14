// Home.tsx
"use client";
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMe';
import SkillsSection from '@/components/Skills';
import PublicationsSection from "@/components/Publications";
import CVSection from '../components/CVSection';
import HobbiesSection from '@/components/Hobbies';
import Projects from '@/components/Projects';
import cvData from '@/content/CVData';

const Home = () => {
    return (
        <>
            <section id="hero-section">
            <HeroSection />
            </section>
            <section id="about-me-section">
            <AboutMeSection />
            </section>
                <section id="projects-section">
                        <Projects/>
                </section>
                <section id="publications-section">
                        <PublicationsSection />
                </section>
            <section id="skills-section">
            <SkillsSection />
            </section>
            {/*<section id="carousel-section">*/}
            {/*<LogoCarousel/>*/}
            {/*</section>*/}
                <section id="hobbies-section">
                        <HobbiesSection />
                </section>
            <section id="cv-section">
            <CVSection cvData={cvData} />
            </section>
        </>
    );
};

export default Home;
