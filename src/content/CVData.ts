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
            details: [
                { name: "Python (6 years)", logo: "/logos/python.svg" },
                { name: "R (2 years)", logo: "/logos/R.svg" },
                { name: "MATLAB (2 years)", logo: "/logos/matlab.svg" },
                { name: "Bash (4 years)", logo: "/logos/bash.svg" },
                { name: "SQL (2 years)", logo: "/logos/sql.svg" },
                { name: "Javascript (1 year)", logo: "/logos/javascript.svg" },
                { name: "Typescript (1 year)", logo: "/logos/typescript.svg" }
            ]
        },
        {
            category: "Software Development",
            details: [
                { name: "Git (GitHub)", logo: "/logos/github.svg" },
                { name: "CI/CD (CircleCI)", logo: "/logos/circleci.svg" },
                { name: "Unit Testing (Pytest)", logo: "/logos/pytest.svg" },
                { name: "Documentation (Sphinx)", logo: "/logos/sphinxdoc.webp" }
            ]
        },
        {
            category: "Machine Learning Tools",
            details: [
                { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
                { name: "PyTorch", logo: "/logos/pytorch.svg" },
                { name: "Lightning", logo: "/logos/lightning.svg" },
                { name: "Scikit-Learn", logo: "/logos/scikit-learn.svg" },
                { name: "Pandas", logo: "/logos/pandas.jpg" },
                { name: "NumPy", logo: "/logos/numpy.svg" },
                { name: "SciPy", logo: "/logos/scipy.svg" },
                { name: "Jax", logo: "/logos/jax.svg" },
                { name: "HuggingFace", logo: "/logos/huggingface.svg" }
            ]
        },
        {
            category: "Machine Learning Techniques",
            details: [
                { name: "Deep Learning" }, // Assuming no logos for these techniques
                { name: "NLP" },
                { name: "Computer Vision" },
                { name: "Self-Supervised Learning" },
                { name: "Reinforcement Learning" }
            ]
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
