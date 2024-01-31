// data/cvData.ts

import { CVData } from '@/interfaces/CVData';

const cvData: CVData = {
    personalInfo: {
        name: "James Chapman",
        email: "chapmajw@gmail.com",
        phone: "+447825 538191",
        github: "https://github.com/jameschapman19",
        linkedin: "https://www.linkedin.com/in/jameswhchapman"
    },
    skills: [
        {
            category: "Programming Languages",
            details: ["Python (6 years)", "R (2 years)", "MATLAB (2 years)", "Bash (4 years)", "SQL (2 years)", "Javascript (beginner)"]
        },
        {
            category: "Software Development",
            details: ["Git", "CI/CD (CircleCI, GitHub Actions)", "Unit Testing (Pytest)", "Documentation (Sphinx)"]
        },
        {
            category: "Machine Learning Tools",
            details: ["TensorFlow", "PyTorch", "Lightning", "Scikit-Learn", "Pandas", "NumPy", "SciPy", "Jax", "HuggingFace"]
        },
        {
            category: "Machine Learning Techniques",
            details: ["Deep Learning", "NLP", "Computer Vision", "Self-Supervised Learning", "Reinforcement Learning"]
        },
    ],
    education: [
        {
            period: "2019 - present",
            institution: "University College London",
            qualification: "PhD + MRes (Distinction) funded by i4Health CDT",
            details: ["Researched scalable GPU optimized algorithms for Interpretable Multiview Machine Learning with High-Dimensional Biomedical Data"]
        },
        {
            period: "2013 - 2017",
            institution: "University of Oxford",
            qualification: "MEng Engineering, Economics & Management, 1st Class",
            details: []
        },
        {
            period: "2008 - 2013",
            institution: "Wellington College",
            qualification: "5 A-Level A*s (Further Maths, Physics, Chemistry, Economics)",
            details: []
        }
    ],
    publications: [
        {
            title: "Efficient Algorithms for the CCA Family: Unconstrained Objectives with Unbiased Gradients",
            link: "https://openreview.net/forum?id=PHLVmV88Zy",
            description: "Presented at ICLR 2024. Developed an algorithm for efficiently solving classical ML problems including PCA, addressing large-scale data challenges in computer vision.",
            codeLink: "https://github.com/jameschapman19/deltaeigengamejax"
        },
        {
            title: "CCA with Shared Weights for Self-Supervised Learning",
            link: "https://nips.cc/virtual/2023/80864",
            description: "Presented at NeurIPS 2023 Workshop. Innovated a self-supervised representation learning technique, using PyTorch and Lightning for GPU-optimized computer vision applications.",
            codeLink: "https://github.com/jameschapman19/SSL-EY"
        }
        // Add more publications as needed
    ],
    workExperience: [
        {
            period: "2019 - present",
            role: "Assistant Lecturer + Teaching Assistant",
            company: "University College London",
            details: [
                "Lectured and designed coursework on Foundations of AI",
                "Taught Supervised Learning, Numerical Optimisation, and Machine Learning for Domain Specialists"
            ]
        },
        {
            period: "2022",
            role: "PhD Intern: Advanced Research & Outreach",
            company: "Bank of England",
            details: [
                "Solved previously intractable DSGE models using Reinforcement Learning (PPO) in PyTorch, enabling more realistic models of human behaviour."
            ]
        },
        {
            period: "2017 - 2019",
            role: "Analyst: Systematic Investment Research Team",
            company: "M&G",
            details: [
                "Built version 1 of the €209m Global Maxima quantitative fund using Caret in R.",
                "Built a proof-of-concept tool to analyse newsflow using NLP (word2vec, NLTK) and topic modelling (LDA)"
            ]
        }
    ],
    outsideOfWork: [
        "Rowing with Vesta Rowing Club",
        "Reading FC fan for 20 years",
        "Keen follower of Formula 1"
    ]
};

export default cvData;
