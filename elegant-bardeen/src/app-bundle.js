/**
 * app-bundle.js
 * Standalone universal bundle for Sakshi Chalak's Portfolio.
 * Ensures 100% compatibility when opened directly via file:/// in any browser
 * as well as when served via HTTP / Vite dev server.
 */

(function () {
  'use strict';

  // 1. Portfolio Data
  const portfolioData = {
    developer: {
      name: "Sakshi Chalak",
      tagline: "Hi, I'm Sakshi.",
      headline: "I build things for the web, connect ideas with technology, and turn curiosity into experiences.",
      subtitle: "ENTC Engineering Student · Web Developer in Progress · Cloud & IoT Explorer · Artist",
      bio: "Hey, I'm Sakshi Chalak, a third-year BE ENTC (Electronics & Telecommunication) engineering student exploring the intersection of design, software, electronics, and connected technology. I enjoy learning by building, experimenting with creative ideas, and transforming concepts into useful digital experiences.",
      currentStatus: "3rd Year B.E. in Electronics & Telecommunication Engineering",
      location: "Pune, India",
      email: "sakshichalak.dev@gmail.com",
      github: "https://github.com/sakshichalak",
      linkedin: "https://linkedin.com/in/sakshichalak",
      studioInstagram: "https://instagram.com/thelemonstudio",
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

    skills: {
      usedInProjects: [
        { name: "HTML5 & Semantic Web", level: "Foundation", category: "Frontend" },
        { name: "CSS3 & Responsive Design", level: "Foundation", category: "Frontend" },
        { name: "JavaScript (ES6+)", level: "Core Logic", category: "Frontend" },
        { name: "Git & GitHub", level: "Version Control", category: "Tools" },
        { name: "C / C++ Basics", level: "ENTC Coursework", category: "Programming" },
        { name: "Arduino / Embedded C", level: "Hardware Lab", category: "Hardware" }
      ],
      currentlyLearning: [
        { name: "React.js & Modern Component Architecture", focus: "Component lifecycles, hooks & state", category: "Frontend" },
        { name: "Cloud Fundamentals (AWS / Azure)", focus: "Core storage (S3/Blob), compute basics & hosting", category: "Cloud" },
        { name: "ESP32 & IoT Protocols (MQTT / HTTP)", focus: "Wireless sensor data transmission & REST APIs", category: "IoT" },
        { name: "UI/UX & Design Systems", focus: "Figma prototyping, accessible typography & color theory", category: "Design" },
        { name: "Digital Signal Processing", focus: "Signals, filters, and telecommunications theory", category: "ENTC" }
      ]
    },

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

    iotProjects: [
      {
        id: "smart-plant-monitor",
        title: "Smart Indoor Plant Telemetry Node",
        problem: "Houseplants often suffer from irregular watering and suboptimal indoor ambient conditions.",
        hardwareUsed: ["ESP32 Dev Module", "Capacitive Soil Moisture Sensor", "DHT11 Temp & Humidity", "0.96 inch I2C OLED Display"],
        softwareUsed: ["Arduino C++", "WiFiClient", "ThingSpeak / Local HTTP Server"],
        status: "Working Prototype",
        learned: "Calibration of analog capacitive moisture curves, low-power deep sleep modes, and I2C bus wiring.",
        github: "https://github.com/sakshichalak",
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

  // 2. Procedural Sound Synthesizer
  class SoundEffectsManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.init();
        this.playChime(660, 0.12);
      }
      return this.enabled;
    }

    playHoverPop(pitch = 520) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(pitch * 0.5, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    playChime(freq = 587.33, duration = 0.25) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration * 0.3);
        osc.frequency.exponentialRampToValueAtTime(freq, this.ctx.currentTime + duration);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    playSuccessArpeggio() {
      if (!this.enabled) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        setTimeout(() => this.playChime(freq, 0.22), idx * 60);
      });
    }
  }

  const sound = new SoundEffectsManager();

  // 3. Island Vector Models
  const IslandSVGs = {
    terrain: `
      <svg viewBox="0 0 620 620" class="island-terrain-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#B2CCA8"/>
            <stop offset="60%" stop-color="#A0BD96"/>
            <stop offset="100%" stop-color="#8DAF84"/>
          </linearGradient>
          <radialGradient id="lakeGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#E2F2FC"/>
            <stop offset="50%" stop-color="#B9DDF5"/>
            <stop offset="100%" stop-color="#93C8EB"/>
          </radialGradient>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF9DD"/>
            <stop offset="100%" stop-color="#EFE0B6"/>
          </linearGradient>
        </defs>

        <rect width="620" height="620" rx="64" fill="url(#grassGrad)"/>

        <!-- Cobblestone Winding Paths connecting landmarks -->
        <circle cx="310" cy="310" r="80" fill="none" stroke="url(#pathGrad)" stroke-width="26" stroke-dasharray="14 4" opacity="0.95"/>
        <circle cx="310" cy="310" r="76" fill="#F8EFCF" stroke="#E6D3A0" stroke-width="3"/>

        <!-- Pathways to 6 surrounding districts -->
        <path d="M 350 250 Q 380 180 400 130" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>
        <path d="M 260 250 Q 210 180 170 120" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>
        <path d="M 240 310 Q 180 300 130 290" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>
        <path d="M 260 360 Q 200 420 160 460" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>
        <path d="M 370 320 Q 430 330 480 340" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>
        <path d="M 350 370 Q 400 430 450 480" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

        <!-- Miniature Lake / Lily Pond -->
        <path d="M 330 380 C 370 370, 420 390, 440 430 C 450 460, 420 500, 380 505 C 340 510, 315 470, 310 430 C 305 400, 315 385, 330 380 Z" 
              fill="url(#lakeGrad)" stroke="#A0CBED" stroke-width="3"/>
        <circle cx="360" cy="420" r="10" fill="#75A66E"/>
        <circle cx="360" cy="420" r="4" fill="#F3A89A"/>
        <circle cx="400" cy="450" r="12" fill="#75A66E"/>
        <circle cx="400" cy="450" r="5" fill="#FFF4C2"/>
        <circle cx="340" cy="460" r="9" fill="#75A66E"/>

        <!-- Stepping stones -->
        <ellipse cx="330" cy="410" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>
        <ellipse cx="342" cy="402" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>
        <ellipse cx="355" cy="396" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>

        <!-- Miniature Lemon Trees & Foliage -->
        <g transform="translate(110, 420)">
          <ellipse cx="20" cy="30" rx="18" ry="10" fill="#678E60" opacity="0.4"/>
          <rect x="18" y="15" width="4" height="15" fill="#735338" rx="2"/>
          <circle cx="20" cy="12" r="16" fill="#88B57D"/>
          <circle cx="16" cy="8" r="14" fill="#9CC591"/>
          <circle cx="12" cy="14" r="3.5" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
          <circle cx="22" cy="18" r="3.5" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
          <circle cx="24" cy="6" r="3" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
        </g>
        <g transform="translate(190, 490)">
          <ellipse cx="20" cy="30" rx="16" ry="8" fill="#678E60" opacity="0.4"/>
          <rect x="18" y="15" width="4" height="14" fill="#735338" rx="2"/>
          <circle cx="20" cy="12" r="15" fill="#90BD85"/>
          <circle cx="15" cy="16" r="3" fill="#FFE843"/>
          <circle cx="24" cy="10" r="3" fill="#FFE843"/>
        </g>
        <g transform="translate(120, 160)">
          <polygon points="20,2 8,24 32,24" fill="#588053"/>
          <polygon points="20,8 10,20 30,20" fill="#6C9766"/>
        </g>
        <g transform="translate(480, 140)">
          <circle cx="20" cy="14" r="15" fill="#88B57D"/>
          <circle cx="17" cy="10" r="13" fill="#A2CC98"/>
        </g>
        <g transform="translate(520, 390)">
          <circle cx="20" cy="14" r="15" fill="#7CA972"/>
        </g>
      </svg>
    `,

    workspace: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="80" rx="36" ry="16" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="50,42 85,58 50,74 15,58" fill="#D4A76A" stroke="#B08347" stroke-width="1.5"/>
        <polygon points="15,58 50,74 50,82 15,66" fill="#A87A40"/>
        <polygon points="50,74 85,58 85,66 50,82" fill="#BE8F52"/>
        <rect x="18" y="66" width="4" height="16" fill="#855B27" rx="1"/>
        <rect x="78" y="66" width="4" height="16" fill="#855B27" rx="1"/>
        <rect x="48" y="80" width="4" height="12" fill="#855B27" rx="1"/>

        <!-- Laptop with glowing screen -->
        <g transform="translate(40, 48)">
          <polygon points="10,6 22,12 10,18 -2,12" fill="#DDE4E8" stroke="#B0BEC5" stroke-width="0.8"/>
          <polygon points="-2,12 10,6 10,-4 -2,2" fill="#252B28" stroke="#37474F" stroke-width="0.8"/>
          <polygon points="-1,11 9,6 9,-3 -1,3" fill="#B9DDF5"/>
          <line x1="1" y1="2" x2="7" y2="-1" stroke="#355C4B" stroke-width="0.8"/>
          <line x1="0" y1="5" x2="6" y2="2" stroke="#F9E76D" stroke-width="0.8"/>
          <line x1="0" y1="8" x2="5" y2="5" stroke="#F3A89A" stroke-width="0.8"/>
        </g>

        <!-- Desk Lamp with Warm Glow -->
        <g transform="translate(68, 42)">
          <circle cx="5" cy="5" r="14" fill="rgba(249, 231, 109, 0.35)"/>
          <rect x="4" y="8" width="2" height="14" fill="#37474F"/>
          <path d="M 0 6 L 10 3 L 8 11 L -2 14 Z" fill="#F9E76D" stroke="#D8C330" stroke-width="0.8"/>
          <circle cx="5" cy="9" r="3" fill="#FFFFFF"/>
        </g>

        <!-- Steaming Coffee Cup -->
        <g transform="translate(30, 56)">
          <rect x="0" y="4" width="7" height="8" fill="#FFFDF5" stroke="#E0D5B5" stroke-width="0.8" rx="1.5"/>
          <ellipse cx="3.5" cy="4" rx="3.5" ry="1.5" fill="#6A492B"/>
          <path d="M 3 2 Q 1 -1 4 -3" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="0.8" stroke-linecap="round"/>
        </g>

        <!-- Succulent Plant -->
        <g transform="translate(24, 46)">
          <polygon points="4,10 10,10 8,16 6,16" fill="#E8927C" stroke="#D1745E" stroke-width="0.8"/>
          <circle cx="7" cy="8" r="4.5" fill="#75A66E"/>
        </g>

        <!-- Sticky Notes & Books -->
        <g transform="translate(56, 56)">
          <polygon points="0,5 14,10 8,14 -6,9" fill="#C9B8F0" stroke="#9E88D6" stroke-width="0.8"/>
          <polygon points="1,3 13,7 7,11 -5,7" fill="#F9E76D" stroke="#DEB716" stroke-width="0.8"/>
        </g>
        <text x="18" y="32" font-family="monospace" font-size="12" font-weight="bold" fill="#355C4B" opacity="0.85">&lt;dev/&gt;</text>
      </svg>
    `,

    webdev: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="82" rx="38" ry="16" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="18,52 50,68 50,34 18,18" fill="#B9DDF5" stroke="#8CBEE0" stroke-width="1.2"/>
        <polygon points="50,68 82,52 82,18 50,34" fill="#8CBEE0" stroke="#6AA3C9" stroke-width="1.2"/>
        <polygon points="50,34 82,18 50,4 18,18" fill="#D6EEFC" stroke="#B9DDF5" stroke-width="1.2"/>

        <!-- Browser Signboard on Roof -->
        <g transform="translate(32, -4)">
          <rect x="0" y="0" width="36" height="24" rx="4" fill="#FFFDF5" stroke="#355C4B" stroke-width="1.5"/>
          <rect x="0" y="0" width="36" height="7" fill="#FFF4C2" rx="4 4 0 0"/>
          <circle cx="5" cy="3.5" r="1.5" fill="#F3A89A"/>
          <circle cx="10" cy="3.5" r="1.5" fill="#F9E76D"/>
          <circle cx="15" cy="3.5" r="1.5" fill="#A8C3A0"/>
          <text x="7" y="18" font-family="monospace" font-size="9" font-weight="900" fill="#355C4B">&lt;WEB/&gt;</text>
        </g>

        <!-- Screen Window with Neon Code -->
        <polygon points="24,30 44,40 44,55 24,45" fill="#FFFDF5" stroke="#355C4B" stroke-width="1"/>
        <polygon points="26,32 42,40 42,53 26,45" fill="#FFE843" opacity="0.65"/>
        <line x1="28" y1="36" x2="38" y2="41" stroke="#355C4B" stroke-width="1.2"/>
        <line x1="28" y1="41" x2="40" y2="47" stroke="#F3A89A" stroke-width="1.2"/>
        <line x1="28" y1="46" x2="36" y2="50" stroke="#355C4B" stroke-width="1.2"/>

        <polygon points="56,58 72,50 72,30 56,38" fill="#FFFDF5" stroke="#6AA3C9" stroke-width="1"/>
        <polygon points="58,56 70,50 70,32 58,38" fill="#C9B8F0" opacity="0.5"/>

        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="16" height="12" rx="3" fill="#F3A89A"/>
          <text x="3" y="9" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFF">HTML</text>
        </g>
        <g transform="translate(76, 26)">
          <rect x="0" y="0" width="14" height="12" rx="3" fill="#F9E76D"/>
          <text x="3" y="9" font-family="sans-serif" font-size="7" font-weight="bold" fill="#252B28">JS</text>
        </g>
      </svg>
    `,

    cloud: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="85" rx="36" ry="14" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="30,62 50,72 70,62 50,52" fill="#EBE4FA" stroke="#C9B8F0" stroke-width="1.2"/>
        <polygon points="30,62 50,72 50,82 30,72" fill="#9E88D6"/>
        <polygon points="50,72 70,62 70,72 50,82" fill="#7C63BD"/>

        <polygon points="34,42 50,50 66,42 50,34" fill="#FFFDF5" stroke="#C9B8F0" stroke-width="1"/>
        <polygon points="34,42 50,50 50,62 34,54" fill="#C9B8F0"/>
        <polygon points="50,50 66,42 66,54 50,62" fill="#A894E0"/>

        <!-- Blinking LEDs -->
        <circle cx="40" cy="50" r="1.5" fill="#A8C3A0"/>
        <circle cx="44" cy="52" r="1.5" fill="#F9E76D"/>
        <circle cx="48" cy="54" r="1.5" fill="#F3A89A"/>
        <circle cx="56" cy="53" r="1.5" fill="#B9DDF5"/>

        <!-- Billowing Cloud Cap & Antenna -->
        <g transform="translate(20, 10)">
          <circle cx="30" cy="20" r="18" fill="#FFFDF5"/>
          <circle cx="16" cy="24" r="14" fill="#F4EFFF"/>
          <circle cx="44" cy="24" r="14" fill="#EBE4FA"/>
          <line x1="30" y1="8" x2="30" y2="-6" stroke="#9E88D6" stroke-width="2" stroke-linecap="round"/>
          <circle cx="30" cy="-6" r="3.5" fill="#F9E76D"/>
        </g>
        <circle cx="24" cy="36" r="4" fill="none" stroke="#B9DDF5" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="68" y="22" font-family="sans-serif" font-size="12">☁️</text>
      </svg>
    `,

    iot: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="82" rx="38" ry="16" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="18,52 50,68 50,34 18,18" fill="#A8C3A0" stroke="#7A9E72" stroke-width="1.2"/>
        <polygon points="50,68 82,52 82,18 50,34" fill="#7A9E72" stroke="#5E7E57" stroke-width="1.2"/>
        <polygon points="50,34 82,18 50,4 18,18" fill="#355C4B" stroke="#254235" stroke-width="1.5"/>

        <!-- Gold circuit traces & ESP32 IC -->
        <path d="M 32 18 L 44 24 L 44 30 L 50 27 L 62 21 L 62 14" fill="none" stroke="#F9E76D" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="32" cy="18" r="2" fill="#FFE843"/>
        <circle cx="62" cy="14" r="2" fill="#FFE843"/>
        <polygon points="44,22 56,16 56,22 44,28" fill="#1B2129" stroke="#607D8B" stroke-width="0.8"/>
        <text x="45" y="24" font-family="monospace" font-size="4" font-weight="bold" fill="#B0BEC5">ESP32</text>

        <!-- Glowing LEDs -->
        <circle cx="34" cy="42" r="2.5" fill="#4CAF50"/>
        <circle cx="42" cy="46" r="2.5" fill="#FFC107"/>

        <!-- Antenna & signal waves -->
        <line x1="72" y1="12" x2="72" y2="0" stroke="#37474F" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="72" cy="0" r="2.5" fill="#F3A89A"/>
        <text x="12" y="32" font-family="monospace" font-size="10">⚡</text>
      </svg>
    `,

    'lemon-studio': `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="84" rx="40" ry="16" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="20,54 50,68 50,34 20,20" fill="#F9E76D" stroke="#DEB716" stroke-width="1.2"/>
        <polygon points="50,68 80,54 80,20 50,34" fill="#E8D14E" stroke="#C49B10" stroke-width="1.2"/>
        <polygon points="50,34 80,20 50,6 20,20" fill="#F3A89A" stroke="#E28978" stroke-width="1.5"/>

        <!-- Wooden Easel & Painting Canvas -->
        <g transform="translate(10, 52)">
          <line x1="10" y1="18" x2="6" y2="32" stroke="#8D6E63" stroke-width="1.5"/>
          <line x1="10" y1="18" x2="14" y2="32" stroke="#8D6E63" stroke-width="1.5"/>
          <line x1="10" y1="18" x2="10" y2="34" stroke="#6D4C41" stroke-width="1.2"/>
          <rect x="3" y="14" width="14" height="12" rx="1.5" fill="#FFFDF5" stroke="#D7CCC8" stroke-width="0.8"/>
          <circle cx="10" cy="20" r="4" fill="#FFE843"/>
        </g>

        <!-- Lemon signboard -->
        <g transform="translate(48, 26)">
          <circle cx="8" cy="8" r="7" fill="#FFE843" stroke="#DEB716" stroke-width="1"/>
          <text x="5" y="11" font-size="8">🍋</text>
        </g>

        <!-- Lemon tree with bright lemons -->
        <g transform="translate(68, 44)">
          <rect x="10" y="16" width="3" height="18" fill="#5D4037" rx="1"/>
          <circle cx="11.5" cy="14" r="14" fill="#88B57D"/>
          <circle cx="8" cy="14" r="3" fill="#FFE843"/>
          <circle cx="16" cy="12" r="3" fill="#FFE843"/>
        </g>
      </svg>
    `,

    projects: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="80" rx="42" ry="18" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="18,60 50,74 82,60 50,46" fill="#FFFDF5" stroke="#DCD3BA" stroke-width="1.5"/>
        <polygon points="18,60 50,74 50,80 18,66" fill="#D8CFB4"/>
        <polygon points="50,74 82,60 82,66 50,80" fill="#C2B799"/>
        <polygon points="26,52 50,62 74,52 50,42" fill="#FFF4C2" stroke="#E6D7A0" stroke-width="1.2"/>

        <!-- Hologram preview crystal -->
        <g transform="translate(36, 6)">
          <polygon points="14,0 28,6 14,12 0,6" fill="rgba(249, 231, 109, 0.85)" stroke="#FFE843" stroke-width="1"/>
          <polygon points="0,6 14,12 14,24 0,18" fill="rgba(243, 168, 154, 0.85)" stroke="#F3A89A" stroke-width="1"/>
          <polygon points="14,12 28,6 28,18 14,24" fill="rgba(168, 195, 160, 0.85)" stroke="#A8C3A0" stroke-width="1"/>
        </g>
        <text x="36" y="2" font-family="sans-serif" font-size="10">🏛️</text>
      </svg>
    `,

    contact: `
      <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="84" rx="34" ry="14" fill="rgba(53, 92, 75, 0.25)"/>
        <polygon points="26,72 50,82 74,72 50,62" fill="#8D8176" stroke="#685E55" stroke-width="1.2"/>
        <polygon points="26,72 50,82 50,90 26,80" fill="#5F564E"/>
        <polygon points="50,82 74,72 74,80 50,90" fill="#4B443D"/>

        <!-- Striped Lighthouse Tower -->
        <polygon points="36,66 50,72 64,66 58,54 50,58 42,54" fill="#FFFDF5" stroke="#DDD2B5" stroke-width="1"/>
        <polygon points="42,54 50,58 58,54 56,42 50,45 44,42" fill="#F3A89A" stroke="#E28978" stroke-width="1"/>
        <polygon points="44,42 50,45 56,42 54,30 50,33 46,30" fill="#FFFDF5" stroke="#DDD2B5" stroke-width="1"/>
        <polygon points="46,30 50,33 54,30 53,20 50,22 47,20" fill="#F3A89A" stroke="#E28978" stroke-width="1"/>

        <!-- Glowing Lantern Room & Beam -->
        <polygon points="44,20 50,22 56,20 54,12 50,14 46,12" fill="#FFF4C2" stroke="#F9E76D" stroke-width="1.2"/>
        <circle cx="50" cy="16" r="3.5" fill="#FFE843"/>
        <polygon points="45,12 55,12 50,2" fill="#C0392B" stroke="#962D22" stroke-width="1"/>

        <!-- Mailbox with floating envelope -->
        <g transform="translate(14, 62)">
          <rect x="5" y="10" width="2" height="12" fill="#4E342E"/>
          <rect x="0" y="2" width="12" height="9" rx="4 4 1 1" fill="#F3A89A" stroke="#C0392B" stroke-width="0.8"/>
          <circle cx="2" cy="6" r="1" fill="#FFE843"/>
          <g transform="translate(1, -12)">
            <rect x="0" y="0" width="11" height="8" rx="1" fill="#FFFDF5" stroke="#C9B8F0" stroke-width="0.8"/>
            <path d="M 0 0 L 5.5 4.5 L 11 0" fill="none" stroke="#C9B8F0" stroke-width="0.8"/>
          </g>
        </g>
      </svg>
    `
  };

  // 4. Panel Content Renderer
  function renderPanelContent(id) {
    const { developer, skills, cloudTopics, iotProjects, lemonStudio, projects } = portfolioData;

    switch (id) {
      case 'workspace':
        return `
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>☕</span> About Sakshi</h3>
            <p class="bio-lead-text">${developer.bio}</p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
              <span class="skill-tag used">🎓 ${developer.currentStatus}</span>
              <span class="skill-tag used">📍 ${developer.location}</span>
            </div>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🧭</span> Areas of Curiosity & Interest</h3>
            <div class="interests-grid">
              ${developer.interests.map(i => `
                <div class="interest-item">
                  <div class="interest-icon-wrap">✨</div>
                  <div>
                    <div class="interest-name">${i.name}</div>
                    <div class="interest-desc">${i.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="panel-section-card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="font-weight:700; font-size:0.95rem;">Curious to see what I've built?</div>
              <div style="font-size:0.85rem; color:var(--color-muted-text);">Explore the interactive pedestals in the plaza.</div>
            </div>
            <button class="btn-primary" onclick="window.appNavigateTo('projects')">
              Visit Project Plaza →
            </button>
          </div>
        `;

      case 'webdev':
        return `
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>💻</span> Things I Build</h3>
            <p style="font-size:0.95rem; color:var(--color-dark-text); margin-bottom:16px;">
              Exploring responsive layouts, accessible component patterns, and creative frontend engineering.
              Here is a clear snapshot of tools I've put to work in projects, alongside technologies I am actively studying.
            </p>
            <div class="skills-column-container">
              <div>
                <div style="font-weight:700; font-size:0.9rem; color:var(--color-forest-green); margin-bottom:8px;">
                  ✅ Technologies Used in Projects
                </div>
                <div class="skills-pill-group">
                  ${skills.usedInProjects.map(s => `
                    <span class="skill-tag used"><strong>${s.name}</strong> · ${s.level}</span>
                  `).join('')}
                </div>
              </div>
              <div style="margin-top:10px;">
                <div style="font-weight:700; font-size:0.9rem; color:#4C3C78; margin-bottom:8px;">
                  🌱 Currently Learning & Exploring
                </div>
                <div class="skills-pill-group">
                  ${skills.currentlyLearning.map(s => `
                    <span class="skill-tag learning"><strong>${s.name}</strong> (${s.focus})</span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🚀</span> Featured Web Project Preview</h3>
            <div class="iot-project-card">
              <img src="assets/images/web_project.jpg" alt="Web application dashboard preview" class="iot-image-preview" loading="lazy" />
              <div class="iot-card-inner">
                <h4 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:6px;">Sakshi's Little World — 3D Portfolio</h4>
                <p style="font-size:0.88rem; color:var(--color-muted-text); margin-bottom:12px;">
                  An explorable isometric miniature world built with CSS 3D coordinate transformations, SVG vector models, and Web Audio API synthesizer.
                </p>
                <div class="spec-badge-group">
                  <span class="spec-badge">HTML5</span>
                  <span class="spec-badge">CSS 3D</span>
                  <span class="spec-badge">Vanilla ES6</span>
                  <span class="spec-badge">Web Audio</span>
                </div>
              </div>
            </div>
          </div>
        `;

      case 'cloud':
        return `
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>☁️</span> Somewhere in the Cloud</h3>
            <p class="bio-lead-text">
              Exploring how applications, infrastructure, and connected systems work at scale.
              As an ENTC engineering student, understanding network protocols, cloud storage, and serverless compute bridges my software and hardware interests.
            </p>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>📡</span> Cloud Learning Roadmap</h3>
            <div class="cloud-topic-list">
              ${cloudTopics.map(t => `
                <div class="cloud-topic-card">
                  <div class="cloud-topic-header">
                    <span class="cloud-topic-title">${t.title}</span>
                    <span class="badge-status">${t.status}</span>
                  </div>
                  <div class="cloud-topic-desc">${t.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="panel-section-card" style="background:var(--color-sky-light); border-color:var(--color-sky-blue);">
            <div style="font-size:0.88rem; color:#27628C; line-height:1.5;">
              <strong>Learning Note:</strong> All cloud topics represent active self-directed study and coursework milestones, focusing on architectural understanding and reproducible cloud-native deployments.
            </div>
          </div>
        `;

      case 'iot':
        return `
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>⚡</span> Where Hardware Meets Software</h3>
            <p class="bio-lead-text">
              Bridging physical microcontrollers, sensors, and telemetry into intuitive web interfaces.
              Combining core Electronics & Telecommunication concepts with practical maker builds.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <span class="spec-badge">ESP32 Dev Board</span>
              <span class="spec-badge">Arduino Uno</span>
              <span class="spec-badge">Capacitive Sensors</span>
              <span class="spec-badge">I2C OLED</span>
              <span class="spec-badge">SPI & UART</span>
            </div>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🔬</span> Hardware Lab Projects</h3>
            ${iotProjects.map(proj => `
              <div class="iot-project-card">
                ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" class="iot-image-preview" loading="lazy" />` : ''}
                <div class="iot-card-inner">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <h4 style="font-family:var(--font-display); font-size:1.1rem;">${proj.title}</h4>
                    <span class="badge-status">${proj.status}</span>
                  </div>
                  <p style="font-size:0.88rem; color:var(--color-muted-text); margin-bottom:10px;">
                    <strong>Problem:</strong> ${proj.problem}
                  </p>
                  <div class="tech-spec-row">
                    <div><strong>Hardware Used:</strong></div>
                    <div class="spec-badge-group">
                      ${proj.hardwareUsed.map(h => `<span class="spec-badge">${h}</span>`).join('')}
                    </div>
                  </div>
                  <div class="tech-spec-row">
                    <div><strong>Software & Protocols:</strong></div>
                    <div class="spec-badge-group">
                      ${proj.softwareUsed.map(s => `<span class="spec-badge" style="background:var(--color-soft-butter); color:var(--color-forest-green);">${s}</span>`).join('')}
                    </div>
                  </div>
                  <p style="font-size:0.84rem; color:var(--color-forest-green); background:var(--color-sage-light); padding:8px 12px; border-radius:6px; margin-top:10px;">
                    💡 <strong>Key Takeaway:</strong> ${proj.learned}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        `;

      case 'lemon-studio':
        return `
          <div class="studio-hero-banner">
            <div class="drawer-category-pill" style="background:#FFFDF5; margin-bottom:8px;">Creative Corner</div>
            <h3 class="studio-title">${lemonStudio.title}</h3>
            <p class="studio-story-text">${lemonStudio.story}</p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:14px;">
              ${lemonStudio.categories.map(cat => `<span class="spec-badge" style="background:rgba(255,255,255,0.7); color:#2E453A;">🎨 ${cat}</span>`).join('')}
            </div>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🖼️</span> Original Artworks & Prints</h3>
            <div class="artworks-grid">
              ${lemonStudio.artworks.map(art => `
                <div class="artwork-card">
                  <img src="${art.image}" alt="${art.title}" class="artwork-thumb" loading="lazy" />
                  <div class="artwork-details">
                    <div class="artwork-title">${art.title}</div>
                    <div class="artwork-medium">${art.medium} · ${art.year}</div>
                    <p style="font-size:0.84rem; color:var(--color-muted-text); line-height:1.4;">${art.desc}</p>
                    <div class="color-swatch-bar" title="Color palette swatches">
                      ${art.palette.map(c => `<span class="color-chip" style="background:${c};"></span>`).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="panel-section-card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <div style="font-weight:700; font-size:0.95rem;">Follow The Lemon Studio</div>
              <div style="font-size:0.85rem; color:var(--color-muted-text);">Follow sketchbooks, work-in-progress drops, and art prints.</div>
            </div>
            <a href="${developer.studioInstagram}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background:var(--color-lemon-yellow);">
              Visit The Lemon Studio 🍋
            </a>
          </div>
        `;

      case 'projects':
        return `
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🏛️</span> Project Plaza Pedestals</h3>
            <p style="font-size:0.92rem; color:var(--color-muted-text); margin-bottom:16px;">
              Curated personal builds, engineering coursework demonstrations, and design experiments.
            </p>
          </div>
          ${projects.map(proj => `
            <div class="panel-section-card" style="padding:0; overflow:hidden;">
              ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" style="width:100%; height:200px; object-fit:cover; border-bottom:1px solid var(--color-subtle-border);" loading="lazy" />` : ''}
              <div style="padding:20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span class="spec-badge" style="background:var(--color-soft-butter); color:var(--color-forest-green);">${proj.tag}</span>
                  <span style="font-size:0.8rem; font-weight:600; color:var(--color-muted-text);">${proj.category}</span>
                </div>
                <h4 style="font-family:var(--font-display); font-size:1.25rem; font-weight:700; margin-bottom:6px;">${proj.title}</h4>
                <p style="font-size:0.92rem; color:var(--color-dark-text); margin-bottom:12px; line-height:1.5;">${proj.overview}</p>
                <div style="margin-bottom:12px;">
                  <div style="font-size:0.82rem; font-weight:700; color:var(--color-forest-green); margin-bottom:4px;">KEY FEATURES</div>
                  <ul style="padding-left:18px; font-size:0.85rem; color:var(--color-muted-text); line-height:1.5;">
                    ${proj.features.map(f => `<li>${f}</li>`).join('')}
                  </ul>
                </div>
                <div style="margin-bottom:14px;">
                  <div style="font-size:0.82rem; font-weight:700; color:var(--color-forest-green); margin-bottom:6px;">TECH STACK</div>
                  <div class="spec-badge-group">
                    ${proj.techStack.map(t => `<span class="spec-badge">${t}</span>`).join('')}
                  </div>
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:16px; border-top:1px solid var(--color-subtle-border); padding-top:14px;">
                  <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:8px 16px; font-size:0.88rem;">
                    GitHub Repository ↗
                  </a>
                  ${proj.demo ? `
                    <a href="${proj.demo}" class="btn-primary" style="padding:8px 16px; font-size:0.88rem;">
                      Live Interactive Demo ✨
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        `;

      case 'contact':
        return `
          <div class="contact-cta-box">
            <div style="font-size:36px;">📬</div>
            <h3 style="font-family:var(--font-display); font-size:1.45rem; font-weight:800; color:var(--color-dark-text);">
              Let's Start a Conversation
            </h3>
            <p style="font-size:0.95rem; color:var(--color-muted-text); max-width:440px; line-height:1.5;">
              Whether you'd like to discuss web development, chat about microcontroller circuits, collaborate on creative artwork, or share engineering advice — I'm always excited to connect!
            </p>
            <div class="email-copy-bar">
              <span class="email-display-text" id="email-address-text">${developer.email}</span>
              <button class="copy-btn" id="copy-email-btn" onclick="window.copyEmailAddress()">
                📋 Copy Email
              </button>
            </div>
            <a href="mailto:${developer.email}" class="btn-primary" style="margin-top:6px;">
              Open Email Client ✉️
            </a>
          </div>
          <div class="panel-section-card">
            <h3 class="panel-section-title"><span>🌐</span> Connect Across Platforms</h3>
            <div class="social-links-row">
              <a href="${developer.github}" target="_blank" rel="noopener noreferrer" class="social-pill-link">
                <span>🐙</span> GitHub Profile
              </a>
              <a href="${developer.linkedin}" target="_blank" rel="noopener noreferrer" class="social-pill-link">
                <span>💼</span> LinkedIn Profile
              </a>
              <a href="${developer.studioInstagram}" target="_blank" rel="noopener noreferrer" class="social-pill-link">
                <span>🍋</span> The Lemon Studio
              </a>
            </div>
          </div>
        `;

      default:
        return `<p>Select a location from Sakshi's World to explore.</p>`;
    }
  }

  // 5. Main App Setup
  let islandStageEl = null;
  let backdropEl = null;
  let drawerContentEl = null;
  let drawerTitleEl = null;
  let drawerCategoryEl = null;
  let drawerTaglineEl = null;
  let toastEl = null;
  let soundBtnEl = null;

  function init() {
    islandStageEl = document.getElementById('island-stage');
    backdropEl = document.getElementById('panel-backdrop');
    drawerContentEl = document.getElementById('drawer-content-body');
    drawerTitleEl = document.getElementById('drawer-main-title');
    drawerCategoryEl = document.getElementById('drawer-category-pill');
    drawerTaglineEl = document.getElementById('drawer-tagline');
    toastEl = document.getElementById('toast-notice');
    soundBtnEl = document.getElementById('sound-toggle-btn');

    renderIsland();
    renderDirectory();
    attachEvents();
    setupParallax();
  }

  function getCategoryEmoji(id) {
    switch (id) {
      case 'workspace': return '☕';
      case 'webdev': return '💻';
      case 'cloud': return '☁️';
      case 'iot': return '⚡';
      case 'lemon-studio': return '🍋';
      case 'projects': return '🏛️';
      case 'contact': return '📬';
      default: return '✨';
    }
  }

  function renderIsland() {
    if (!islandStageEl) return;
    const islandGround = document.createElement('div');
    islandGround.className = 'island-ground';
    islandGround.innerHTML = IslandSVGs.terrain;

    islandStageEl.innerHTML = '';
    islandStageEl.appendChild(islandGround);

    portfolioData.islandLocations.forEach(loc => {
      const node = document.createElement('div');
      node.className = `landmark-node node-${loc.id}`;
      node.setAttribute('role', 'button');
      node.setAttribute('tabindex', '0');
      node.setAttribute('aria-label', `${loc.name} - ${loc.category}`);
      node.setAttribute('id', `landmark-${loc.id}`);

      const badge = `
        <div class="landmark-billboard-badge">
          <span class="badge-icon">${getCategoryEmoji(loc.id)}</span>
          <span>${loc.name}</span>
        </div>
      `;

      const modelSvg = IslandSVGs[loc.id] || IslandSVGs.workspace;
      node.innerHTML = badge + modelSvg;

      node.addEventListener('click', (e) => {
        e.stopPropagation();
        openLocation(loc.id);
      });

      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLocation(loc.id);
        }
      });

      node.addEventListener('mouseenter', () => {
        sound.playHoverPop(540);
      });

      islandStageEl.appendChild(node);
    });
  }

  function renderDirectory() {
    const container = document.getElementById('directory-view');
    if (!container) return;

    container.innerHTML = `
      <div class="directory-grid">
        ${portfolioData.islandLocations.map(loc => `
          <div class="directory-card" 
               style="--accent-color:${loc.accentColor};" 
               onclick="window.appOpenLocation('${loc.id}')"
               role="button"
               tabindex="0">
            <div class="directory-card-top">
              <span class="directory-card-icon">${getCategoryEmoji(loc.id)}</span>
              <span class="drawer-category-pill">${loc.category}</span>
            </div>
            <h3 class="directory-card-title">${loc.name}</h3>
            <p class="directory-card-desc">${loc.description}</p>
            <div class="directory-card-action">
              <span>Explore District</span>
              <span>→</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function openLocation(id) {
    const loc = portfolioData.islandLocations.find(l => l.id === id);
    if (!loc) return;

    sound.playChime(620, 0.28);

    document.querySelectorAll('.landmark-node').forEach(node => {
      node.classList.remove('active-selected');
    });
    const targetNode = document.getElementById(`landmark-${id}`);
    if (targetNode) targetNode.classList.add('active-selected');

    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nav === id);
    });

    if (drawerCategoryEl) drawerCategoryEl.textContent = loc.category;
    if (drawerTitleEl) drawerTitleEl.textContent = loc.name;
    if (drawerTaglineEl) drawerTaglineEl.textContent = loc.tagline;
    if (drawerContentEl) drawerContentEl.innerHTML = renderPanelContent(id);

    if (backdropEl) {
      backdropEl.classList.add('open');
      backdropEl.setAttribute('aria-hidden', 'false');
    }

    setTimeout(() => {
      const closeBtn = document.getElementById('drawer-close-btn');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeLocation() {
    sound.playHoverPop(440);
    if (backdropEl) {
      backdropEl.classList.remove('open');
      backdropEl.setAttribute('aria-hidden', 'true');
    }
    document.querySelectorAll('.landmark-node').forEach(node => {
      node.classList.remove('active-selected');
    });
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.classList.remove('active');
    });
  }

  function setupParallax() {
    const container = document.getElementById('world-container');
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = 58 - y * 10;
      const rotZ = -45 + x * 10;
      if (islandStageEl) {
        islandStageEl.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg)`;
      }
    });

    container.addEventListener('mouseleave', () => {
      resetIsland();
    });
  }

  function resetIsland() {
    if (islandStageEl) {
      islandStageEl.style.transform = `rotateX(58deg) rotateZ(-45deg)`;
    }
  }

  function attachEvents() {
    if (backdropEl) {
      backdropEl.addEventListener('click', (e) => {
        if (e.target === backdropEl) closeLocation();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdropEl && backdropEl.classList.contains('open')) {
        closeLocation();
      }
    });

    if (soundBtnEl) {
      soundBtnEl.addEventListener('click', () => {
        const enabled = sound.toggle();
        soundBtnEl.innerHTML = enabled ? '🔊' : '🔇';
        soundBtnEl.setAttribute('aria-label', enabled ? 'Mute Sound Effects' : 'Enable Sound Effects');
        showToast(enabled ? 'Sound Effects Enabled 🔔' : 'Sound Effects Muted 🔇');
      });
    }
  }

  function copyEmail() {
    const email = portfolioData.developer.email;
    navigator.clipboard.writeText(email).then(() => {
      sound.playSuccessArpeggio();
      showToast('Email address copied to clipboard! 📋');
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2800);
  }

  function setViewMode(mode) {
    const worldSection = document.getElementById('world-viewport-section');
    const directorySection = document.getElementById('directory-view');
    const btnIsland = document.getElementById('btn-mode-island');
    const btnDir = document.getElementById('btn-mode-directory');

    sound.playHoverPop(500);

    if (mode === 'island') {
      if (worldSection) worldSection.style.display = 'flex';
      if (directorySection) directorySection.style.display = 'none';
      if (btnIsland) btnIsland.classList.add('active');
      if (btnDir) btnDir.classList.remove('active');
    } else {
      if (worldSection) worldSection.style.display = 'none';
      if (directorySection) directorySection.style.display = 'block';
      if (btnIsland) btnIsland.classList.remove('active');
      if (btnDir) btnDir.classList.add('active');
    }
  }

  function setAmbiance(mode) {
    document.body.setAttribute('data-ambiance', mode);
    sound.playHoverPop(600);

    document.querySelectorAll('[data-ambiance-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.ambianceBtn === mode);
    });

    const names = {
      'day': 'Morning Sun ☀️',
      'golden-hour': 'Golden Hour 🌅',
      'twilight': 'Starry Twilight 🌙'
    };
    showToast(`Atmosphere: ${names[mode] || mode}`);
  }

  // Window bindings for HTML event handlers
  window.appOpenLocation = openLocation;
  window.appCloseLocation = closeLocation;
  window.copyEmailAddress = copyEmail;
  window.appSetViewMode = setViewMode;
  window.appSetAmbiance = setAmbiance;
  window.appResetIsland = resetIsland;
  window.appNavigateTo = (id) => {
    openLocation(id);
    const worldSection = document.getElementById('world-viewport-section');
    if (worldSection) {
      worldSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
