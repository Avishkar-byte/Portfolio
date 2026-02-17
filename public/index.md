# {{NAME}} — Portfolio

---

## Home {#home}

![Profile Photo](assets/profile.jpg)

**{{TAGLINE}}**

{{NAME}} is an engineer focused on robotics, embedded systems, and computer vision. Work spans applied research, deployed prototypes, and patented inventions. Selected impact: 10+ projects • 3 patents (filed/granted) • 5 peer-reviewed papers.

### Skills

- **ML / CV:** PyTorch, TensorFlow, OpenCV, YOLOv7, scikit-learn
- **Embedded:** Raspberry Pi, Arduino, Jetson Nano, ADS1015
- **Tools:** Git, Docker, ROS2, SolidWorks, Linux

### Quick Links

- [Download CV (PDF)](assets/cv.pdf)
- [GitHub](https://github.com/yourname)
- [LinkedIn](https://linkedin.com/in/yourname)
- [Email](mailto:you@example.com)
- [Google Scholar](https://scholar.google.com/citations?user=XXXXX)

---

## Projects {#projects}

A selection of applied research and engineering projects spanning robotics, computer vision, and embedded systems.

### Featured Projects

#### TS-III Defense Rover — 2024 — Lead Developer

Autonomous rover integrating YOLO object detection with sensor fusion for obstacle and threat detection.

**Accuracy: 93% • FPS: 12 • Rank: Top 5/1000**

<details>
<summary>Read more</summary>

- **Problem:** Military and security patrol require autonomous threat detection in GPS-denied environments.
- **Solution summary:** Built a rover platform with YOLOv7-based detection, LiDAR-camera fusion, and edge inference on Jetson Nano, achieving real-time autonomous navigation.
- **My role & contributions:**
  - Designed end-to-end perception pipeline (camera + LiDAR fusion)
  - Trained and deployed YOLOv7 model on Jetson Nano (12 FPS)
  - Implemented ROS2 navigation stack with obstacle avoidance
  - Led hardware integration and field testing (3 environments)
- **Tech stack:** Python, PyTorch, YOLOv7, ROS2, Jetson Nano, LiDAR, OpenCV
- **Architecture:** ![architecture-diagram](assets/architecture-diagram.png)
- **Reproducibility / Run:** `docker compose up --build` — [Repo](https://github.com/yourname/ts3-rover)
- **Artifacts:** [Repo](https://github.com/yourname/ts3-rover) | [Demo Video](https://youtube.com/watch?v=XXXXX)
- **Metrics & evidence:** 93% mAP, 12 FPS on Jetson Nano

</details>

#### Smart Agriculture Monitoring System — 2023 — ML Engineer

IoT-based crop health monitoring using multispectral imaging and edge ML for early disease detection.

**Accuracy: 96% • Latency: 45ms**

<details>
<summary>Read more</summary>

- **Problem:** Crop diseases detected too late cause significant yield loss in smallholder farms.
- **Solution summary:** Deployed multispectral camera drones with lightweight CNN classifiers on Raspberry Pi for early disease detection, integrated with a farmer-facing dashboard.
- **My role & contributions:**
  - Developed lightweight CNN for leaf disease classification (96% accuracy)
  - Built data pipeline from drone captures to Pi inference
  - Created REST API and simple dashboard for farmers
- **Tech stack:** Python, TensorFlow Lite, Raspberry Pi, Flask, PostgreSQL, NDVI
- **Reproducibility / Run:** `python main.py --config config.yaml` — [Repo](https://github.com/yourname/smart-agri)
- **Artifacts:** [Repo](https://github.com/yourname/smart-agri)
- **Metrics & evidence:** 96% classification accuracy, 45ms inference latency

</details>

#### EMG-Controlled Prosthetic Hand — 2022 — Hardware & ML Lead

Low-cost prosthetic hand controlled by EMG signals with real-time gesture classification.

**Accuracy: 91% • Gestures: 5 • Cost: $120**

<details>
<summary>Read more</summary>

- **Problem:** Commercial prosthetic hands are prohibitively expensive for patients in low-resource settings.
- **Solution summary:** Designed a 3D-printed prosthetic hand controlled via surface EMG signals, using an ADS1015 ADC and Arduino with a lightweight gesture classifier.
- **My role & contributions:**
  - Designed EMG signal acquisition circuit (ADS1015 + analog front-end)
  - Trained SVM gesture classifier (5 gestures, 91% accuracy)
  - Built 3D-printed mechanical hand with servo actuation
  - Conducted user study with 8 participants
- **Tech stack:** Arduino, ADS1015, Python, scikit-learn, SolidWorks, 3D Printing
- **Reproducibility / Run:** `arduino-cli compile --upload` — [Repo](https://github.com/yourname/emg-hand)
- **Artifacts:** [Repo](https://github.com/yourname/emg-hand) | [Demo Video](https://youtube.com/watch?v=YYYYY) | [Slides](assets/emg-hand-slides.pdf)
- **Metrics & evidence:** 91% gesture accuracy, 5 gesture classes, $120 total BOM

</details>

### Other Projects

| Title | Year | Role |
|-------|------|------|
| Indoor SLAM with ROS | 2024 | Developer |
| Drone Swarm Coordination | 2023 | Contributor |
| Voice-Controlled Home Automation | 2023 | Lead |
| Warehouse Inventory Robot | 2022 | ML Engineer |
| Solar Tracker with MPPT | 2021 | Hardware Lead |
| Line-Following Competition Bot | 2020 | Team Lead |

[↑ Back to top](#home)

---

## Papers & Patents {#papers-patents}

### Publications

#### Highlighted

**A. Author, B. Author. "Real-Time Object Detection for Autonomous Defense Platforms Using YOLOv7." Proceedings of the International Conference on Robotics and Automation (ICRA), Springer, 2025. DOI:10.1000/xyz123**

We present an optimized YOLOv7 pipeline for real-time threat detection on resource-constrained edge platforms, achieving 93% mAP at 12 FPS on Jetson Nano hardware.

- Designed the detection pipeline and training methodology
- Conducted all edge-deployment experiments and benchmarking
- [DOI](https://doi.org/10.1000/xyz123) | [PDF](assets/paper-yolo-defense.pdf)

**C. Author, A. Author. "Surface EMG Gesture Classification for Low-Cost Prosthetic Control." Journal of Biomedical Engineering, Elsevier, 2023. DOI:10.1000/abc456**

This work introduces a lightweight SVM-based gesture classification system for surface EMG signals, targeting affordable prosthetic hand control.

- Developed signal processing and feature extraction pipeline
- Led user study design and data collection
- [DOI](https://doi.org/10.1000/abc456) | [PDF](assets/paper-emg.pdf)

<details>
<summary>Full publications list</summary>

1. A. Author, B. Author. "Real-Time Object Detection for Autonomous Defense Platforms Using YOLOv7." ICRA, Springer, 2025.
2. C. Author, A. Author. "Surface EMG Gesture Classification for Low-Cost Prosthetic Control." J. Biomedical Eng., Elsevier, 2023.
3. A. Author. "Edge Computing for Agricultural Monitoring." Workshop on IoT, IEEE, 2023.
4. A. Author, D. Author. "Sensor Fusion Approaches for Indoor Robotics." IROS Workshop, 2022.
5. A. Author et al. "Low-Cost Prosthetics: A Survey." Rehabilitation Engineering, Springer, 2022.

</details>

### Patents

**Adaptive Washing Machine System for Non-Fabric Materials**
Application No: 2025-XXXX | Filed: 2025-07-15 | Status: Filed

An adaptive washing system that dynamically adjusts cycle parameters based on material composition analysis, enabling safe cleaning of non-fabric items.

- A sensor-driven material classification module that determines optimal wash parameters
- An adaptive cycle controller that modifies water pressure, temperature, and agitation
- Assignee: {{NAME}} / {{INSTITUTION}}
- [Patent PDF](assets/patent-1.pdf)

*IP Note: For licensing inquiries, contact you@example.com.*

[↑ Back to top](#home)

---

## Journey {#journey}

### Technical Evolution

A structured overview of technical growth across four phases.

#### Foundation — 2016–2019
- Learned embedded programming (Arduino, C/C++) and basic electronics
- Built first competition robot (line-following bot, regional winner)
- Outcome: Solid hardware-software integration fundamentals

#### Applied ML — 2019–2021
- Acquired ML/CV skills (PyTorch, TensorFlow, OpenCV)
- Completed solar tracker and prosthetic hand projects
- Outcome: 2 publications, 1 patent application

#### Systems Integration — 2021–2023
- Combined ML with embedded/IoT for deployed systems
- Led smart agriculture and warehouse robotics projects
- Outcome: 3 deployed prototypes, 96% accuracy on edge devices

#### Research & Leadership — 2023–Present
- Leading autonomous systems research (defense rover, SLAM)
- Filing patents and publishing at top venues (ICRA, Springer)
- Outcome: 2 additional patents, team leadership of 4+ engineers

### Current Focus & Future Direction

Focused on bridging the gap between research prototypes and deployable autonomous systems. Priorities include real-time edge AI, robust sensor fusion for GPS-denied environments, and scalable embedded ML pipelines.

**Elevator version:** {{NAME}} progressed from embedded systems fundamentals through applied ML to leading autonomous systems research. Over four phases, this journey produced 10+ projects, 5 publications (Springer, IEEE, Elsevier), and 3 patents, with current focus on deployable edge AI for robotics.

[↑ Back to top](#home)

---

## Contact & Media {#contact}

### Contact

- **Email (preferred):** [you@example.com](mailto:you@example.com)
- **GitHub:** [github.com/yourname](https://github.com/yourname)
- **LinkedIn:** [linkedin.com/in/yourname](https://linkedin.com/in/yourname)

### Downloads

- [CV (PDF)](assets/cv.pdf)
- [One-Page Resume (PDF)](assets/resume.pdf)
- [Portfolio Archive (.zip)](assets/portfolio.zip)

### Media

- [Demo: TS-III Rover](https://youtube.com/watch?v=XXXXX)
- [Demo: EMG Hand](https://youtube.com/watch?v=YYYYY)
- Slide decks and posters available upon request.

### Testimonials

> "Exceptional ability to take a concept from whiteboard to working prototype in weeks." — *Collaborator, Robotics Lab*

> "Strong technical depth combined with clear communication of complex ideas." — *Advisor, University*

---

*© {{NAME}}. Some assets are IP-restricted; contact for access.*

[↑ Back to top](#home)
