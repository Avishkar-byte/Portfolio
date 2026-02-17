import { ProjectData } from "@/types";

export const ALL_PROJECTS: ProjectData[] = [
    {
        title: "SPARC: Smart Perception & Assistive Reality Companion",
        year: 2025,
        oneLiner: "Assistive AI system for Indian Sign Language recognition and real-time wearable scene awareness.",
        badges: ["Edge AI", "ISL Recognition", "Computer Vision", "Real-Time"],
        techStack: ["Python", "YOLOv8", "OpenCV", "cvzone", "TensorFlow Lite", "scikit-learn", "Intel RealSense", "Raspberry Pi", "MQTT"],
        images: [
            "/projects/ts-iii-defense-rover/1.jpg",
            "/projects/ts-iii-defense-rover/2.jpg",
        ],
        repo: "https://github.com/Avishkar-byte/SPARC-Smart-Perception-Assistive-Reality-Companion",
        youtube: "https://youtu.be/W2UOCENfXzg",
        website: "https://sparc-web-app.vercel.app/",
        description: "SPARC is a real-time assistive AI system that enables two-way interaction through Indian Sign Language (ISL) recognition and scene-aware feedback. The system integrates computer vision, depth perception, and lightweight models optimized for on-device edge inference, making it suitable for wearable deployment.",
        keyContributions: [
            "Collected and curated a 12,000+ image dataset spanning 42 classes for ISL training.",
            "Trained and deployed optimized gesture recognition models with YOLO and landmark-based features for real-time edge inference.",
            "Integrated stereo RGB-D camera, IMU, and micro-OLED HUD, achieving ASL latency ≈ 370 ms and ASR latency ≈ 1.05 s on Raspberry Pi.",
            "Implemented sensor fusion and system-level control logic for assistive wearable interaction and pilot validation."
        ],
        technicalApproach: "The system was built in two variants: a smartphone-based VR viewer and a dedicated wearable with Intel RealSense D455 + Raspberry Pi. The core pipeline uses YOLO for detection and cvzone landmark extraction with engineered joint features feeding a RandomForest classifier for low-latency ISL token prediction. Median depth fusion enhances scene perception stability; text-to-speech outputs provide responsive user feedback.",
        metrics: [
            "Dataset: 12,000+ images, 42 classes",
            "Latency: ASL ≈ 370 ms, ASR ≈ 1.05 s",
            "Robustness: stable edge performance with minimal resource consumption"
        ]
    },
    {
        title: "DrishtiGuide: Your Vision Companion",
        year: 2025,
        oneLiner: "AI-powered assistive navigation system integrating real-time object detection and multi-modal feedback for visually impaired individuals.",
        badges: ["Assistive AI", "Computer Vision", "Edge AI", "Embedded Systems"],
        techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Raspberry Pi", "ESP32", "MPU6050", "Ultrasonic Sensor", "GPS"],
        images: ["/projects/ecosense-iot-grid/1.jpg"], // Placeholder until user adds new images
        repo: "#",
        youtube: "",
        website: "",
        description: "DrishtiGuide is an intelligent assistive system designed to enhance mobility and situational awareness for visually impaired individuals. The system integrates a Smart Stick and AI-powered Smart Glasses to deliver real-time obstacle detection, object recognition, and navigation assistance through multi-modal feedback.",
        keyContributions: [
            "Designed and optimized the AI vision pipeline using YOLOv8 for real-time object detection.",
            "Implemented edge inference workflows on Raspberry Pi for low-latency deployment.",
            "Tuned model parameters for stable outdoor detection performance under varying lighting conditions.",
            "Integrated object distance estimation and contextual voice alerts for enhanced situational awareness."
        ],
        technicalApproach: "The Smart Glasses use a Raspberry Pi 5 running YOLOv8 for real-time object detection and recognition. Detected objects are processed to estimate distance and generate contextual voice alerts delivered via Bluetooth earbuds. The Smart Stick (ESP32 + ultrasonic + MPU6050 + GPS) complements the vision module by providing obstacle proximity detection, fall detection, and navigation support through haptic vibration arrays embedded in a wearable jacket.",
        metrics: [
            "Impact: Real-time multi-modal feedback (audio + haptic)",
            "Performance: Improved detection beyond traditional cane-level limitations",
            "Usability: Enhanced outdoor mobility and independent navigation"
        ]
    },
    {
        title: "ANAV: Autonomous GPS-Denied Drone (IROC'25)",
        year: 2025,
        oneLiner: "Autonomous GPS-denied quadcopter for martial environment, integrating SLAM and robust state estimation. Designed a hybrid Visual-Inertial Odometry (VIO) pipeline to enable accurate, drift-resistant pose tracking.",
        badges: ["VIO", "Visual-Inertial SLAM", "Edge AI", "ROS", "IROC'25"],
        techStack: ["Python", "ROS", "LibRealSense", "VINS-Fusion", "OpenCV", "Jetson Nano", "Pixhawk", "Intel RealSense D455"],
        images: ["/assets/project-anav-thumb.webp"], // Placeholder
        repo: "https://github.com/Avishkar-byte/HybridVIO-D455",
        youtube: "https://youtu.be/gOIhg97PdYc",
        website: "",
        description: "ANAV is a lightweight, GPS-denied quadcopter designed for autonomous navigation in mars like environments as per the IROC'25 challenge. The system integrates high-rate IMU streams, stereo/RGB/depth sensing, and a robust visual-inertial odometry (VIO) pipeline to deliver centimeter-level state estimation and reliable SLAM in field conditions.",
        keyContributions: [
            "Lead developer of the Hybrid Visual-Inertial Odometry (VIO) pipeline: designed and implemented a hybrid driver architecture that decouples IMU and camera streams for reliable VIO on Intel RealSense D455.",
            "Implemented hardware-time synchronization logic aligning RealSense hardware timestamps with ROS time to prevent VIO drift and improve pose stability.",
            "Integrated high-rate IMU (LibRealSense/Python) with stereo/RGB/depth streams and VINS-Fusion for robust state estimation.",
            "Tuned VIO parameters, performed field calibration, and validated centimeter-level tracking during real-time flight demos."
        ],
        technicalApproach: "The ANAV VIO uses a hybrid architecture that bypasses common D455 driver synchronization issues by reading IMU at high-rate via LibRealSense (Python) while subscribing to camera streams through ROS. Custom timestamp alignment and buffering logic ensure consistent temporal alignment between IMU and image frames, feeding VINS-Fusion for visual-inertial state estimation. The pipeline supports RGB + Depth + Stereo IR + IMU concurrently, with separate launch profiles for Hybrid (full-sensor) and Stereo-Only fallback modes.",
        metrics: [
            "Achieved centimeter-level state estimation in controlled demos (VINS-Fusion playback)",
            "Real-time VIO tracking demo during IROC'25 evaluation",
            "Result: National representation; ranked among the top ~100 teams out of ~5000 institutes"
        ]
    },
    {
        title: "Namo Rover: Nexus Astro Monitoring & Obsevation Rover",
        year: 2024,
        oneLiner: "Autonomous multi-terrain rover with rocker bogie mobility and robust LiDAR+IMU+wheel odometry navigation. Built for the ISRO Robotics Challenge (IROC'24). Represented Vellore Institute of Technology at the national level — Ranked Top 100/4000.",
        badges: ["Autonomous Navigation", "LiDAR", "Sensor Fusion", "Jetson Nano", "IROC'24"],
        techStack: ["Python", "ROS", "OpenCV", "NVIDIA Jetson Nano", "Arduino Mega", "RP LiDAR", "MPU6050", "Rhino RMCS-2303", "EKF", "SLAM"],
        images: ["/assets/project-namo-thumb.webp"], // Placeholder
        repo: "",
        youtube: "https://youtu.be/MPHP1elkcBY",
        website: "",
        description: "ISRO Robotics Challenge (IROC'24), 2024 — Organized by Indian Space Research Organisation. National Finalist (Top 100 / 4000 Institutes) representing Vellore Institute of Technology.\n\nNamo is an autonomous, rocker-bogie multi-terrain rover designed to operate in complex outdoor environments. The platform integrates a full sensor suite (360° 2D LiDAR, IMU, wheel encoders, cameras) with a Jetson Nano-based perception and control pipeline to enable robust SLAM, obstacle avoidance, and mission-level navigation.",
        keyContributions: [
            "Lead — Autonomous Navigation Stack: designed and implemented the perception & navigation pipeline (2D LiDAR + IMU + wheel odometry fusion), SLAM integration, and real-time path planning on NVIDIA Jetson Nano.",
            "Implemented sensor-fusion (EKF/Complementary filters) for odometry & IMU stabilization and created robust LiDAR pre-processing (scan segmentation, ground removal, dynamic object filtering).",
            "Integrated ROS-based SLAM and localization (ROS + RT node architecture), tuned VIO/SLAM parameters, and validated centimeter-to-decimeter level localization under varied terrain and dynamic obstacles.",
            "Tuned control loops and trajectory following (PID/velocity profiling) and implemented safety features (kill-switch, watchdog, redundant stop)."
        ],
        technicalApproach: "Mobility: Rocker-bogie chassis with Rhino encoder motors and six-wheel configuration for stability. Sensor Fusion: Merges 360° 2D LiDAR, MPU6050 IMU, and wheel odometry via EKF to establish robust pose estimation. Compute: NVIDIA Jetson Nano handles perception/SLAM/planning while Arduino Mega manages low-level actuation. Pipeline: LiDAR scan pre-filtering → Cartographer/GMapping SLAM → MoveBase path planning → Velocity command generation.",
        metrics: [
            "Competition: Represented VIT at national level; ranked top ~100 of ~4000 institutes (IROC'24)",
            "System Weight: ~13 kg (assembled)",
            "Navigation: Stable autonomous traversal with real-time obstacle negotiation",
            "Performance: Reliable encoder-based odometry with sensor fusion reduced drift significantly"
        ]
    },
    {
        title: "Polyline-Based Smart Parking System",
        year: 2024,
        oneLiner: "Adaptive parking-management system using YOLOv8 + OpenCV polyline delineation for robust occupancy detection and automated billing.",
        badges: ["YOLOv8", "Polyline PPA", "LPR", "Real-Time", "CVR 2025"],
        techStack: ["Python", "YOLOv8", "OpenCV", "Tesseract OCR", "PyTorch", "CNRPark-EXT"],
        images: ["/assets/project-parking-thumb.webp"], // Placeholder
        repo: "",
        youtube: "",
        website: "https://link.springer.com/chapter/10.1007/978-3-032-14041-8_28",
        websiteLabel: "Paper (Springer)",
        description: "An adaptive parking-management solution that fuses YOLOv8 detection with OpenCV polyline-based parking delineation to handle varied camera angles and lighting. The approach enables flexible parking polygons, accurate occupancy detection, and license-plate-based automated billing for real-time surveillance.",
        keyContributions: [
            "Led dataset engineering and labeling from my college’s (VIT-C) CCTV footage, collecting multi-condition samples.",
            "Defined class taxonomy and annotation pipeline for parking occupancy and LPR regions.",
            "Trained and fine-tuned YOLOv8 detection models, engineered augmentations, and validated performance across viewpoints and weather conditions."
        ],
        technicalApproach: "Detection pipeline uses YOLOv8 for vehicle & plate detection; OpenCV polyline definitions create flexible parking polygons (Polyline Parking Allocation). LPR pipeline crops plate regions post-detection and uses Tesseract OCR for character recognition; timestamps enable automated billing and entry/exit logging. Training used a COCO-pretrained backbone fine-tuned on the custom dataset with augmentations simulating rain, blur, illumination shifts, and camera angle variation.",
        metrics: [
            "Parking occupancy detection accuracy: 97.38%",
            "F1-score: 0.9948",
            "Billing accuracy: 98%",
            "Robust performance across lighting and occlusion scenarios"
        ]
    },
    {
        title: "Terrain Scout: Semi-Autonomous Defense Rover",
        year: 2023,
        oneLiner: "Semi-autonomous defence rover developed in my first year, integrating obstacle avoidance, radar sensing, and real-time vision tracking using Raspberry Pi-Arduino serial communication. Presented at Pragyan 2024 (NIT Trichy), it secured First Prize at the Ingenium Hardware Hackathon.",
        badges: ["Computer Vision", "Embedded Systems", "Obstacle Avoidance", "Raspberry Pi", "Arduino"],
        techStack: ["Python", "OpenCV", "Haar Cascade", "Raspberry Pi 4", "Arduino Uno", "Ultrasonic Sensors", "Radar Module", "Servo Motors"],
        images: ["/assets/project-ts3-thumb.webp"], // Placeholder
        repo: "",
        youtube: "https://youtu.be/t6z_sI_cP-s",
        website: "",
        description: "Presented at Pragyan'24 - NIT Trichy Annual Tech Fest. Winner - Ingenium Hardware Hackathon 2024 (First Prize).\n\nTerrain Scout is a semi-autonomous defense rover developed during my first year of engineering. The system integrates computer vision, obstacle avoidance, radar-based detection, and embedded control to create a robust multi-sensor autonomous platform capable of navigating complex terrains and responding to dynamic stimuli.",
        keyContributions: [
            "Designed and implemented a real-time head-tracking mechanism using Haar Cascade face detection on Raspberry Pi 4.",
            "Integrated Raspberry Pi with Arduino via serial communication to control servo-based targeting mechanisms.",
            "Developed logic for object tracking, orientation correction, and automated response alignment.",
            "Optimized detection pipeline for low-latency execution on constrained hardware."
        ],
        technicalApproach: "Dual ultrasonic sensors for obstacle avoidance; Radar sensor for threat detection and situational awareness. Raspberry Pi 4 acts as the main processor for vision and high-level decision-making, while Arduino Uno handles motor and actuator control via serial interface. A servo-based targeting mechanism is controlled through vision-based tracking, mounted on a rocker-bogie style chassis for terrain adaptability.",
        metrics: [
            "First large-scale embedded AI project",
            "Integrated computer vision with mechanical actuation",
            "Demonstrated real-time tracking on low-power hardware",
            "Award-winning hardware system at national tech fest"
        ]
    },

    {
        title: "Shree Anna (PWA): Digital Millet Marketplace",
        year: 2025,
        oneLiner: "Progressive Web Application digitizing the millet value chain with end-to-end traceability, marketplace integration, and rural-first architecture.",
        badges: ["PWA", "Traceability", "AgriTech", "UPI Integration", "Data Analytics"],
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA", "QR Traceability", "UPI Integration"],
        images: ["/assets/project-shreeanna-thumb.webp"], // Placeholder
        repo: "",
        youtube: "https://youtu.be/-ws0F1UwPRo",
        website: "https://shree-ann-sih-teal.vercel.app/",
        description: "Shree Anna is a Progressive Web Application designed to digitize the millet value chain from farm to fork. The platform enables transparent trade, verified sourcing, digital payments, and data-driven procurement, empowering FPOs, SHGs, and farmers with direct market access and traceable supply chains.",
        keyContributions: [
            "Designed and implemented the offline-first PWA architecture using React and Service Workers for low-bandwidth rural connectivity.",
            "Integrated UPI-enabled digital payments and DigiLocker credential verification for trusted B2B/B2C trade.",
            "Developed the QR-based batch traceability system to verify millet sourcing and quality across the supply chain.",
            "Built demand forecasting dashboards and price trend analytics to optimize procurement for FPOs."
        ],
        technicalApproach: "Frontend: React + TypeScript + Vite with Shadcn UI and Tailwind CSS. Architecture: Offline-first PWA with background sync and local caching. Integrations: UPI for payments, DigiLocker for identity, and QR code generation for batch traceability. Backend-ready scalable API structure for inventory and logistics management.",
        metrics: [
            "Digitizes unorganized agri supply chain",
            "Reduces intermediary dependency",
            "Improves farmer price realization",
            "Enables compliance-ready traceability for government procurement"
        ]
    }
];
