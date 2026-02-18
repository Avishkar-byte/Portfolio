import { ExperienceData } from "@/types";

export const EXPERIENCES: ExperienceData[] = [
    {
        id: "exp-1",
        title: "Dec 2025",
        role: "Smart India Hackathon 2025-Finalist",
        company: "Smart India Hackathon",
        description: "Selected as a national finalist for SPARC (Smart Perception & Assistive Reality Companion), a retrofittable assistive system designed to enable real-time Indian Sign Language (ISL) recognition and two-way communication. Focused on building inclusive, human-centric AI that elevates ISL as a first-class mode of communication in everyday environments.",
        iconType: "Award",
        image: "/experience/SIH_Finals.jpeg",
        achievements: [
            "Proposed a novel AI solution for real-world problem statement given by Ministry of Social Justice and Empowerment(MoSJE)",
            "Selected among the Top 5 teams for the National Finals out of 250+ teams nationwide."
        ]
    },
    {
        id: "exp-1.5",
        title: "Nov 2025",
        role: "Organizer - Pravahan 1.0 (TECHNOVIT, VIT Chennai)",
        company: "Vellore Institute of Technology, Chennai",
        description: "Served as a member of the Organizing Committee for Pravahan 1.0, the rover competition conducted during TECHNOVIT, the annual technical fest of VIT Chennai. Contributed to the planning, coordination, and successful execution of the event.",
        iconType: "Target",
        image: "/experience/Pravahan_1.0.jpeg",
        achievements: [
            "Contributed in crafting the official problem statement and designed the rover competition arena, defining task objectives, constraints, and evaluation structure.",
            "Evaluated participating teams during the preliminary round based on technical performance and solution robustness.",
        ]
    },
    {
        id: "exp-2",
        title: "Aug 2025",
        role: "AI & Robotics Intern",
        company: "Stemtec AI & Robotics Pvt Ltd.",
        description: "Worked on developing a ROS2-based autonomous mobile robot, focusing on real-time SLAM, EKF-based sensor fusion, and low-latency navigation control for indoor environments.",
        iconType: "Cpu",
        image: "/experience/Stemtec.png",
        achievements: [
            "Designed and developed a ROS2-based indoor autonomous mobile robot (STEMBOT) with modular localization, mapping, and motion control architecture, implementing a real-time SLAM pipeline using SLAM Toolbox with 0.05 m map resolution and 92% loop-closure accuracy.",
            "Implemented EKF-based multi-sensor fusion (15 Hz), reducing localization error from 0.45 m to 0.18 m and orientation drift from 7.8° to 2.4°, while maintaining sub-50 ms system latency and 95% obstacle avoidance success rate."
        ]
    },
    {
        id: "exp-3",
        title: "Jul 2025",
        role: "Product Development Intern",
        company: "SpectoV Assistive Technologies",
        description: "Developed a hybrid assistive wearable system enabling real-time sign language recognition and contextual scene awareness through optimized edge AI deployment.",
        iconType: "Zap",
        image: "/experience/Spectov.jpeg",
        achievements: [
            "Collected and curated a custom dataset of 12,000+ images across 42 classes and trained a real-time ASL recognition model, optimized for low-latency on-device inference on Raspberry Pi.",
            "Integrated stereo RGB-D camera, IMU, and micro-OLED HUD with sensor fusion logic, achieving ~370 ms ASL latency and ~1.05 s ASR latency for wearable deployment and pilot validation."
        ]
    },
    {
        id: "exp-4",
        title: "May 2025",
        role: "Software Developer Intern",
        company: "Algo Technologies Pvt. Ltd.",
        description: "Worked as a Software Developer Intern, contributing to web application development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Actively involved in feature implementation, debugging, and performance optimization while enhancing full-stack development proficiency in real-world production workflows.",
        iconType: "Globe",
        image: "/experience/Algo_technologies.jpeg",
        achievements: [
            "Developed and improved scalable web application features using the MERN stack, contributing to backend APIs and frontend UI components.",
            "Demonstrated strong problem-solving skills and collaborative development practices in a professional on-site environment."
        ]
    },
    {
        id: "exp-5",
        title: "Apr 2025",
        role: "Co-founder & Head of Programming",
        company: "Namo Nirvana (VIT-C)",
        description: "Co-founded one of the official robotics teams of VIT Chennai, defining the technical vision, competition roadmap, and development standards while leading the Programming Department.",
        iconType: "Rocket",
        image: "/experience/Namo_Nirvana.jpeg",
        achievements: [
            "Established the core team structure, recruitment pipeline, and technical onboarding framework while defining development workflows and architecture standards for robotics and AI projects.",
            "Led the Programming Department, overseeing autonomous navigation, perception stacks, and full system integration across competition robots."
        ]
    },
    {
        id: "exp-6",
        title: "Mar 2025",
        role: "1st Place - Innovate for Impact",
        company: "Drishti Guide (Assistive Technology Project)",
        description: "Won 1st place for developing Drishti Guide, an AI-powered assistive system integrating computer vision and smart sensors to enhance mobility and situational awareness for visually impaired individuals.",
        iconType: "Award",
        image: "/experience/Innovate_for_impact.jpeg",
        achievements: [
            "Designed and implemented a YOLOv8-based real-time vision system on Raspberry Pi for object detection, obstacle awareness, and face recognition with audio feedback.",
            "Integrated ESP32-based smart stick with ultrasonic, IMU, and GPS sensors, enabling haptic navigation feedback and fall detection for safe outdoor mobility."
        ]
    },
    {
        id: "exp-7",
        title: "Jan 2025",
        role: "Team Participant",
        company: "ISRO Robotics Challenge (IRoC '25)",
        description: "Represented VIT Chennai in the ISRO Robotics Challenge (IRoC '25), developing ANAV - a GPS-denied autonomous quadcopter for Mars-like navigation environments.",
        iconType: "Star",
        image: "/experience/Anav.jpg",
        achievements: [
            "Led development of a hybrid Visual-Inertial Odometry (VIO) pipeline integrating high-rate IMU and stereo/RGB/depth streams via ROS and VINS-Fusion, achieving centimeter-level state estimation.",
            "Designed hardware-time synchronization and sensor-fusion architecture for stable SLAM performance; team ranked among the top ~100 out of ~5000 participating institutes."
        ]
    },
    {
        id: "exp-8",
        title: "Aug 2024",
        role: "Rank 5 Overall & Rank 2 (Hardware)",
        company: "VITSIH 2024 — Internal SIH Selection (Organized by V-NEST, VIT Chennai)",
        description: "Qualified through VITSIH 2024 for Smart India Hackathon after competing among 548 teams; secured 5th overall rank and 2nd in the Hardware category with the Terrain Scout rover project.",
        iconType: "TrendingUp",
        image: "/experience/VITISH_2024.png",
        achievements: [
            "Selected among the top 120 teams out of 548 in the screening round for the 24-hour internal hackathon.",
            "Secured 5th overall rank and 2nd in Hardware for 'Terrain Scout: Multi-Operational Defence Rover'."
        ]
    },
    {
        id: "exp-9",
        title: "Jul 2024",
        role: "Summer Research Intern",
        company: "Under Dr. Saurav Gupta (VIT-C)",
        description: "Worked on developing a computer vision-based CCTV surveillance system using YOLO and OpenCV, integrating pose detection for enhanced activity monitoring.",
        iconType: "Search",
        image: "/experience/Summer_research_intern.png",
        achievements: [
            "Implemented real-time object detection and human pose estimation pipeline using YOLO and OpenCV.",
            "Designed and tested a vision-based monitoring framework for intelligent surveillance applications."

        ]
    },
    {
        id: "exp-10",
        title: "Feb 2024",
        role: "Team Member",
        company: "ISRO Robotics Challenge (IRoC 2024)",
        description: "Represented VIT Chennai in IRoC 2024 with Namo Rover, a multi-terrain autonomous rover designed for simulated lunar navigation and mission-based task execution.",
        iconType: "Rocket",
        image: "/experience/Iroc2024.png",
        achievements: [
            "Led the autonomous navigation stack integrating 360° 2D LiDAR, IMU, and wheel odometry using EKF-based sensor fusion on NVIDIA Jetson Nano.",
            "Implemented ROS-based SLAM and real-time path planning (MoveBase), enabling stable obstacle avoidance and reduced localization drift."
        ]
    },
    {
        id: "exp-11",
        title: "Jan 2024",
        role: "1st Prize - Ingenium Hardware Hackathon",
        company: "Pragyan '24 (NIT Trichy)",
        description: "Winner of the Ingenium Hardware Hackathon at Pragyan '24 for developing Terrain Scout, a semi-autonomous multi-sensor rover integrating computer vision, obstacle avoidance.",
        iconType: "Award",
        image: "/experience/Ingenium_hardware.png",
        achievements: [
            "Designed and implemented a real-time head-tracking system using Haar Cascade face detection on Raspberry Pi 4, integrated with Arduino-controlled servo actuation via serial communication.",
            "Built a multi-sensor rover combining ultrasonic obstacle avoidance, radar-based environmental sensing, and vision-driven control on a rocker-bogie chassis, achieving low-latency tracking on constrained hardware."
        ]
    },
    {
        id: "exp-12",
        title: "Aug 2023",
        role: "Joined B.Tech ECM",
        company: "VIT Chennai",
        description: "Began my academic journey in Electronics & Computer Engineering, building a strong foundation in embedded systems, robotics, Artificial Intelligence, which evolved into national-level competitions & hackathons, research publications, and patent work.",
        iconType: "Briefcase",
        image: "/experience/Joined_btech_ecm.png",
        achievements: [
            "Initiated hands-on robotics development in the first year, leading to the award-winning Terrain Scout rover project.",
            "Actively engaged in research, competitions, and technical leadership, shaping a focus on autonomous systems and edge AI."
        ]
    },
];
