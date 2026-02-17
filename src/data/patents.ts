
export type PatentItem = {
    id: string;
    title: string;
    identifier: string; // app number or DOI
    category: 'publication' | 'utility' | 'design';
    iconKey: string;
};

export const PATENTS: PatentItem[] = [
    {
        id: 'pub-01',
        title: 'Advancing Smart Parking Systems: A Polyline-Based Methodology for Adaptive Space Detection',
        identifier: 'DOI: 10.1007/978-3-032-14041-8_28\nIssued Jan 28, 2026',
        category: 'publication',
        iconKey: 'BookOpen',
    },
    {
        id: 'pat-02',
        title: 'System to Circulate Information in Educational Campus and Method Thereof',
        identifier: 'App: 202641003926\nIssued Jan 30, 2026',
        category: 'utility',
        iconKey: 'Share2',
    },
    {
        id: 'pat-01',
        title: 'System And Method of Fabric Durability Assessment',
        identifier: 'App: 202541130829\nIssued Jan 2, 2026',
        category: 'utility',
        iconKey: 'FileText',
    },
    {
        id: 'pat-03',
        title: 'Autonomous System and Method for Detection, Extraction, and Treatment of Foam from The Water Surface',
        identifier: 'App: 202541106890\nIssued Nov 4, 2025',
        category: 'utility',
        iconKey: 'Droplet',
    },
    {
        id: 'pat-04',
        title: 'Modular Smart Eyewear System and Method for Providing Breathing Assistance and Temple Massage',
        identifier: 'App: 202541092481\nIssued Oct 31, 2025',
        category: 'utility',
        iconKey: 'Eye',
    },
    {
        id: 'pat-05',
        title: 'Retrofittable Vehicle Control System and Method for Enabling Command-Based Operation',
        identifier: 'App: 202541091087\nIssued Oct 24, 2025',
        category: 'utility',
        iconKey: 'SteeringWheel',
    },
    {
        id: 'pat-06',
        title: 'Calibration Apparatus and Method Thereof',
        identifier: 'App: 202541090570\nIssued Oct 24, 2025',
        category: 'utility',
        iconKey: 'Sliders',
    },
    {
        id: 'pat-07',
        title: 'An Adaptive Modular Robotic System for Search and Rescue Operations and Method Thereof',
        identifier: 'App: 202541073102\nIssued Aug 15, 2025',
        category: 'utility',
        iconKey: 'Cpu',
    },

    {
        id: 'design-01',
        title: 'Defence Rover: Terrain Scout',
        identifier: 'Design ID: 411148-001\nIssued Oct 25, 2024',
        category: 'design',
        iconKey: 'Layers',
    },
];
