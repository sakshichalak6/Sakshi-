/**
 * Sakshi Chalak - Portfolio Data Configuration
 * "The Developer's Little World"
 * 
 * All portfolio information, projects, skills, and links can be easily edited here.
 * Authentic data for Sakshi Chalak:
 * Third-year BE ENTC student interested in Web Development, Cloud Computing, and IoT.
 * Founder of The Lemon Studio.
 */

export const portfolioData = {
  developer: {
    name: "Sakshi Chalak",
    tagline: "Hi, I'm Sakshi.",
    headline: "I build things for the web, connect ideas with technology, and turn curiosity into experiences.",
    subtitle: "ENTC Engineering Student · Web Developer in Progress · Cloud & IoT Explorer · Artist",
    bio: "Hey, I'm Sakshi Chalak, a third-year BE ENTC (Electronics & Telecommunication) engineering student exploring the intersection of design, software, electronics, and connected technology. I enjoy learning by building, experimenting with creative ideas, and transforming concepts into useful digital experiences.",
    currentStatus: "3rd Year B.E. in Electronics & Telecommunication Engineering",
    location: "Pune, India",
    email: "sakshichalak.dev@gmail.com", // Editable contact email
    github: "https://github.com/sakshichalak", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/sakshichalak", // Replace with your LinkedIn URL
    studioInstagram: "https://instagram.com/thelemonstudio", // Replace with your Art Studio URL
    interests: [
      { name: "Frontend Development", icon: "code", desc: "Building responsive, delightful user interfaces with modern web standards." },
      { name: "Cloud Computing", icon: "cloud", desc: "Understanding scalable architectures, deployments, and distributed systems." },
      { name: "Internet of Things", icon: "cpu", desc: "Bridging physical sensors, microcontrollers, and real-time telemetry." },
      { name: "Creative UI/UX", icon: "palette", desc: "Crafting intuitive layouts, gentle color palettes, and playful micro-interactions." },
      { name: "Electronics & Tech", icon: "zap", desc: "Circuit fundamentals, signal processing, and embedded systems from ENTC studies." }
    ]
  },

  islandLocations: [
    {
      id: "workspace",
      name: "The Developer's Desk",
      category: "About Me",
      tagline: "Where ideas take root & coffee turns into code",
      hoverText: "Meet the Developer ☕",
      icon: "laptop",
      accentColor: "#F9E76D",
      coordinates: { x: 26, y: 38 },
      description: "A cozy open-air developer nook surrounded by potted plants, study notes, and the glow of late-night code sessions."
    },
    {
      id: "webdev",
      name: "Web Development District",
      category: "Things I Build",
      tagline: "Modern web experiences built with curiosity & care",
      hoverText: "Explore Web District 💻",
      icon: "code-2",
      accentColor: "#B9DDF5",
      coordinates: { x: 62, y: 22 },
      description: "The software core of Sakshi's world where markup, styling, and interactive scripts come alive."
    },
    {
      id: "cloud",
      name: "Cloud Computing Tower",
      category: "Infrastructure & Scale",
      tagline: "Exploring how applications, infrastructure, and connected systems work at scale",
      hoverText: "Somewhere in the Cloud ☁",
      icon: "cloud",
      accentColor: "#C9B8F0",
      coordinates: { x: 28, y: 14 },
      description: "A dreamy floating tower rising into the clouds, transmitting packets and discovering cloud-native architectures."
    },
    {
      id: "iot",
      name: "IoT Innovation Lab",
      category: "Where Hardware Meets Software",
      tagline: "Bridging embedded circuits, sensors, and telemetry",
      hoverText: "Enter the Hardware Lab ⚡",
      icon: "cpu",
      accentColor: "#A8C3A0",
      coordinates: { x: 74, y: 44 },
      description: "A miniature maker workshop with breadboards, microcontrollers, real-time sensor streams, and blinking status LEDs."
    },
    {
      id: "lemon-studio",
      name: "The Lemon Studio",
      category: "Creative Corner",
      tagline: "Where Code Meets Creativity 🍋",
      hoverText: "Where Code Meets Creativity 🍋",
      icon: "palette",
      accentColor: "#F9E76D",
      coordinates: { x: 30, y: 68 },
      description: "The artistic heart of Sakshi's world — a bright yellow creative art studio filled with watercolors, gouache, and playful botanical prints."
    },
    {
      id: "projects",
      name: "The Project Plaza",
      category: "Featured Showcase",
      tagline: "Interactive pedestals showcasing curated builds & experiments",
      hoverText: "Visit Project Plaza 🏛️",
      icon: "folder-git-2",
      accentColor: "#F3A89A",
      coordinates: { x: 50, y: 48 },
      description: "The central gathering square where engineering assignments, weekend hacks, and creative applications are on display."
    },
    {
      id: "contact",
      name: "The Contact Lighthouse",
      category: "Let's Connect",
      tagline: "Beacons glowing bright for collaborations & conversations",
      hoverText: "Reach the Lighthouse 📬",
      icon: "mail",
      accentColor: "#FFF4C2",
      coordinates: { x: 72, y: 74 },
      description: "Perched peacefully on the rocky coastline, sending warm signals to fellow developers, mentors, and art lovers."
    }
  ],

  // Clearly separated skills
  skills: {
    usedInProjects: [
      { name: "HTML5 & Semantic Web", level: "Foundation", icon: "html", category: "Frontend" },
      { name: "CSS3 & Responsive Design", level: "Foundation", icon: "css", category: "Frontend" },
      { name: "JavaScript (ES6+)", level: "Core Logic", icon: "javascript", category: "Frontend" },
      { name: "Git & GitHub", level: "Version Control", icon: "git", category: "Tools" },
      { name: "C / C++ Basics", level: "ENTC Coursework", icon: "code", category: "Programming" },
      { name: "Arduino / Embedded C", level: "Hardware Lab", icon: "cpu", category: "Hardware" }
    ],
    currentlyLearning: [
      { name: "React.js & Modern Component Architecture", focus: "Component lifecycles, hooks & state", category: "Frontend" },
      { name: "Cloud Fundamentals (AWS / Azure)", focus: "Core storage (S3/Blob), compute basics & hosting", category: "Cloud" },
      { name: "ESP32 & IoT Protocols (MQTT / HTTP)", focus: "Wireless sensor data transmission & REST APIs", category: "IoT" },
      { name: "UI/UX & Design Systems", focus: "Figma prototyping, accessible typography & color theory", category: "Design" },
      { name: "Digital Signal Processing", focus: "Signals, filters, and telecommunications theory", category: "ENTC" }
    ]
  },

  // Cloud learning roadmap & topics
  cloudTopics: [
    {
      title: "Cloud Fundamentals & Architecture",
      status: "Actively Exploring",
      desc: "Understanding IaaS, PaaS, SaaS models, high availability, fault tolerance, and multi-region deployment concepts."
    },
    {
      title: "Deployment & Static Hosting",
      status: "Applied in Practice",
      desc: "Deploying web apps via modern edge networks (Vercel, GitHub Pages, Netlify) with continuous integration workflows."
    },
    {
      title: "Cloud Storage & Buckets",
      status: "Learning",
      desc: "Managing unstructured assets, access permissions, CORS policies, and CDN distribution."
    },
    {
      title: "Serverless & Microservices",
      status: "Conceptual Study",
      desc: "Exploring event-driven compute functions (AWS Lambda / Azure Functions) for lightweight IoT event processing."
    }
  ],

  // IoT projects and hardware explorations
  iotProjects: [
    {
      id: "smart-plant-monitor",
      title: "Smart Indoor Plant Telemetry Node",
      problem: "Houseplants often suffer from irregular watering and suboptimal indoor ambient conditions.",
      hardwareUsed: ["ESP32 Dev Module", "Capacitive Soil Moisture Sensor", "DHT11 Temp & Humidity", "0.96 inch I2C OLED Display"],
      softwareUsed: ["Arduino C++", "WiFiClient", "ThingSpeak / Local HTTP Server"],
      status: "Working Prototype",
      learned: "Calibration of analog capacitive moisture curves, low-power deep sleep modes, and I2C bus wiring.",
      github: "https://github.com/sakshichalak", // Editable
      image: "assets/images/iot_project.jpg"
    },
    {
      id: "rfid-smart-gate",
      title: "RFID Access Control & Sensor Station",
      problem: "Simple, reliable contactless credential verification for student lab equipment lockers.",
      hardwareUsed: ["Arduino Uno / Nano", "RC522 13.56MHz RFID Module", "Servo Actuator", "Status Bi-Color LEDs"],
      softwareUsed: ["Embedded C++", "SPI Bus Interface", "EEPROM Storage"],
      status: "Academic Lab Project",
      learned: "SPI communication timings, anti-collision protocol logic for RFID transponders, and hardware debounce.",
      github: "https://github.com/sakshichalak",
      image: null
    }
  ],

  // The Lemon Studio artworks & details
  lemonStudio: {
    title: "The Lemon Studio",
    tagline: "Where Code Meets Creativity 🍋",
    story: "Founded by Sakshi Chalak, The Lemon Studio is an independent creative sanctuary celebrating the joy of handmade art, digital sketches, botanical gouache paintings, and cozy aesthetics. It's a joyful reminder that engineering and artistic curiosity feed each other.",
    categories: ["Watercolor & Gouache", "Botanical & Floral", "Cozy Desk Doodles", "Digital Prints"],
    artworks: [
      {
        id: "art-1",
        title: "Morning Citrus & Lemon Blossoms",
        medium: "Watercolor & Gouache on Cold-Pressed Paper",
        year: "2026",
        palette: ["#F9E76D", "#FFF4C2", "#A8C3A0", "#355C4B"],
        desc: "Sun-drenched fresh lemons with fragrant white blossoms in a speckled ceramic bowl by the studio windowsill.",
        image: "assets/images/lemon_art_1.jpg"
      },
      {
        id: "art-2",
        title: "The Sunny Studio Desk & Sleeping Tabby",
        medium: "Gouache on Paper",
        year: "2026",
        palette: ["#FFFDF5", "#A8C3A0", "#F3A89A", "#F9E76D"],
        desc: "A warm afternoon workspace filled with leafy potted plants, color swatch books, hot tea, and a cozy resting cat.",
        image: "assets/images/lemon_art_2.jpg"
      }
    ]
  },

  // Project Plaza pedestals
  projects: [
    {
      id: "sakshis-world",
      title: "Sakshi's Little World — 3D Portfolio",
      category: "Creative Frontend",
      tag: "Featured Project",
      overview: "An interactive, stylized isometric miniature island portfolio that lets visitors discover engineering, cloud, and art milestones through exploration.",
      problem: "Traditional developer portfolios often feel like identical CV cards and lack personal warmth and creative storytelling.",
      features: [
        "Interactive 30° isometric island with layered 3D depth and buildings",
        "7 dedicated explorable thematic districts with rich modals",
        "Day / Golden Hour / Twilight ambient lighting modes",
        "Synthesized procedural audio chime effects using Web Audio API",
        "Accessible keyboard navigation, ESC shortcuts, and mobile bottom sheet"
      ],
      techStack: ["HTML5", "CSS3 Isometric 3D", "Modern JavaScript (ES6+)", "Lucide Icons", "Web Audio API"],
      learned: "Mastering complex CSS 3D coordinate transformations, state-driven drawer dialogs, and harmonious design systems.",
      image: "assets/images/web_project.jpg",
      github: "https://github.com/sakshichalak",
      demo: "#"
    },
    {
      id: "iot-plant-node",
      title: "ESP32 Flora Care Telemetry Station",
      category: "IoT & Hardware",
      tag: "Embedded System",
      overview: "A physical compact plant monitoring gadget that samples soil hydration, room humidity, and ambient temperature with an OLED face.",
      problem: "Keeping delicate indoor botanical plants thriving without manual guesswork or overwatering.",
      features: [
        "Continuous analog soil moisture polling with threshold alerts",
        "I2C 128x64 mini OLED screen displaying animated emotional plant faces",
        "WiFi-enabled telemetry reporting",
        "Energy-efficient polling loop for battery endurance"
      ],
      techStack: ["ESP32", "C++ / Arduino IDE", "I2C OLED", "DHT11 Sensor"],
      learned: "Sensor calibration math, handling hardware noise, and designing readable micro-screen UI.",
      image: "assets/images/iot_project.jpg",
      github: "https://github.com/sakshichalak",
      demo: null
    },
    {
      id: "lemon-studio-web",
      title: "The Lemon Studio — Visual Showcase",
      category: "Design & Web",
      tag: "Creative Studio",
      overview: "A warm, joyful digital gallery and catalog space designed for art prints, original sketches, and botanical collections.",
      problem: "Presenting handmade art with an authentic studio atmosphere rather than a cold e-commerce grid.",
      features: [
        "Palette-driven artwork inspection and zoom viewer",
        "Subtle tactile paper textures and soft pastel gradients",
        "Category filtering for gouache, watercolors, and digital stickers"
      ],
      techStack: ["Semantic HTML", "Vanilla CSS", "JavaScript", "Responsive Grid"],
      learned: "Image optimization, color harmonization, and accessible image alt descriptions.",
      image: "assets/images/lemon_art_1.jpg",
      github: "https://github.com/sakshichalak",
      demo: "#"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = portfolioData;
}

