export interface ProjectData {
    title: string;
    year: number;
    oneLiner: string;
    badges: string[];
    techStack: string[];
    images: string[];
    repo?: string;
    demo?: string; // Keep for backward compat, but prefer website
    youtube?: string;
    website?: string;
    websiteLabel?: string;
    // Expanded Content
    description?: string;
    keyContributions?: string[];
    technicalApproach?: string;
    metrics?: string[];
}

export interface PublicationData {
    id: string;
    title: string;
    abstract: string;
    fullText: string;
    date: string;
    publisher: string;
    tags: string[];
    link?: string;
    pdf?: string;
}

export interface ExperienceData {
    id: string;
    title: string; // Date/Time
    role: string;
    company: string;
    description: string;
    achievements?: string[];
    skills?: string[];
    image?: string;
    iconType: "Rocket" | "Award" | "Globe" | "Cpu" | "Star" | "TrendingUp" | "Zap" | "Search" | "Target" | "Briefcase";
}

export interface ProfileData {
    name: string;
    title: string;
    subtitle: string;
    roles: string[];
    summary: string;
    stats: string;
    resumeLink: string;
    githubLink: string;
    linkedinLink?: string;
}
