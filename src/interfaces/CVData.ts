// interfaces/CVData.ts

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface SkillDetail {
    name: string;
    logo?: string; // Logo is now optional
}

export interface Skill {
    category: string;
    details: SkillDetail[]; // Array of SkillDetail objects
}



export interface Education {
    period: string;
    institution: string;
    qualification: string;
    details: string[];
}

export interface Publication {
    title: string;
    link: string;
    description: string;
    codeLink: string;
}

export interface WorkExperience {
    period: string;
    role: string;
    company: string;
    details: string[];
}

export interface CVData {
    personalInfo: PersonalInfo;
    skills: Skill[];
    education: Education[];
    publications: Publication[];
    workExperience: WorkExperience[];
    outsideOfWork: string[];
}
