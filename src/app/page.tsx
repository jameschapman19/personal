// Home.tsx
"use  client";
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMe';
import SkillsSection from '@/components/Skills';
import PublicationsSection from "@/components/Publications";
import CVSection from '../components/CVSection';
import cvData from '@/content/CVData';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <PublicationsSection />
            <CVSection cvData={cvData} />
            {/* You can add more sections here as needed */}
        </>
    );
};

export default Home;
