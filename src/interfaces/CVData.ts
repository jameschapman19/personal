// interfaces/CVData.ts

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
}

export interface Skill {
    category: string;
    details: string[];
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
