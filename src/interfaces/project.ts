// interfaces/Project.ts

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink?: string; // Optional if some projects don't have a demo link
}
