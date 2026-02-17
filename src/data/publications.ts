import { PublicationData } from "@/types";

export const PUBLICATIONS: PublicationData[] = Array.from({ length: 11 }).map((_, i) => ({
    id: `pub-${i}`,
    title: [
        "Edge Neural Architectures",
        "Macroscopic Entanglement",
        "Ambient Noise Energy",
        "Auto-Fleet Security",
        "Soft Robotics Resuce",
        "LLM Code Synthesis",
        "Solid State Interfaces",
        "Decentralized Identity",
        "Haptic Virtual Surgery",
        "Climate GNN Modeling",
        "Ethical AI Frameworks"
    ][i] || `Research Title ${i + 1}`,
    abstract: "Exploring advanced methodology to improve efficiency, scalability, and robustness in real-world scenarios.",
    fullText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This work demonstrates a 40% improvement in processing speed while reducing energy consumption by 25% compared to state-of-the-art methods. Future work will focus on scaling this approach to distributed clusters.`,
    date: `202${5 - (i % 3)}`,
    publisher: ["IEEE", "Springer", "Elsevier", "ACM", "Nature"][i % 5],
    tags: ["Research", "Technology", "Innovation"],
    link: "#",
    pdf: "#"
}));
