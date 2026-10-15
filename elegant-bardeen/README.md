# The Developer's Little World 🍋
> **An Interactive 3D Miniature Developer Portfolio for Sakshi Chalak**  
> *Third-Year B.E. Electronics & Telecommunication (ENTC) Engineering Student · Web Developer · Cloud & IoT Explorer · Founder of The Lemon Studio*

---

## 🌟 Overview

"Sakshi's World" is a playful, interactive isometric 3D miniature island portfolio. Instead of standard corporate cards or generic SaaS templates, visitors explore a stylized floating miniature world with pastel architecture, tiny cobblestone roads, a serene lake, drifting clouds, glowing streetlights, and 7 distinct interactive landmarks:

1. **☕ The Developer's Desk (About Me)**: A cozy open-air terrace workspace with miniature laptop, glowing desk lamp, succulent, coffee mug with steam, and sticky notes.
2. **💻 Web Development District (Things I Build)**: A modern studio with an animated browser frame, terminal screen, and clearly separated *Technologies Used in Projects* vs *Currently Learning*.
3. **☁️ Cloud Computing Tower (Infrastructure & Scale)**: A floating server tower surrounded by soft clouds, blinking LEDs, and cloud architecture learning milestones.
4. **⚡ IoT Innovation Lab (Where Hardware Meets Software)**: An embedded electronics lab with a PCB roof, ESP32 microcontroller, breadboards, and real-world telemetry projects.
5. **🍋 The Lemon Studio (Creative Corner)**: A sunny lemon-yellow art studio with artist easel, canvas, color palettes, and handmade gouache/watercolor artwork previews.
6. **🏛️ The Project Plaza (Featured Showcase)**: A central stone plaza featuring interactive project pedestals with problem statements, features, tech stacks, and repo links.
7. **📬 The Contact Lighthouse (Let's Connect)**: A coastal lighthouse with a rotating beacon, friendly mailbox, "Copy Email" interaction with toast alerts, and social links.

---

## 🎨 Design System: "Lemon Dreamscape"

- **Lemon Yellow (`#F9E76D`)** & **Soft Butter (`#FFF4C2`)**: Primary interactive highlights, buttons, and badges.
- **Sage Green (`#A8C3A0`)** & **Forest Green (`#355C4B`)**: Natural foliage, typography, and contrast borders.
- **Cream (`#FFFDF5`)**: Gentle, readable background that avoids eye strain.
- **Sky Blue (`#B9DDF5`)** & **Lavender (`#C9B8F0`)**: Water bodies, cloud towers, and atmospheric accents.
- **Warm Coral (`#F3A89A`)**: Lighthouse stripes and highlight accents.
- **Ambiance Lighting Modes**: Toggle between **Morning Sun ☀️**, **Golden Hour 🌅**, and **Starry Twilight 🌙**.
- **Cozy Micro-Interactions**: Built-in Web Audio API procedural sound effects (marimba pops, water drop chimes).

---

## 🚀 Quick Start

### 1. Direct Browser Preview (Zero Dependencies)
You can open `index.html` directly in modern web browsers (Chrome, Edge, Safari, Firefox) with no installations required.

### 2. Using Vite / NPM
If Node.js and npm are installed on your machine:
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

---

## ✏️ Customizing Portfolio Content

All personal information, links, projects, skills, and art gallery items are stored in a single editable file:
📂 **`src/data/portfolio.js`**

You can easily customize:
- `developer.name`, `developer.bio`, `developer.email`, and social links.
- `skills.usedInProjects` and `skills.currentlyLearning`.
- `cloudTopics` for your learning roadmap.
- `iotProjects` for hardware schematics and microcontroller builds.
- `lemonStudio` for art prints, mediums, and studio descriptions.
- `projects` for featured software builds.

---

## 🏗️ Architecture & Component Structure

The project is structured with modular, reusable React components and pure CSS styles:

```
src/
├── components/
│   ├── Navbar.jsx          # Floating navigation bar with lemon logo & audio toggle
│   ├── Hero.jsx            # Welcoming hero section with primary/secondary CTAs
│   ├── MiniatureWorld.jsx  # 3D isometric island stage with parallax & drifting clouds
│   ├── WorldLocation.jsx   # Individual interactive landmark with billboard badge
│   ├── InfoPanel.jsx       # Accessible slide-over drawer and mobile bottom sheet
│   ├── ProjectGallery.jsx  # Central plaza interactive project pedestals
│   ├── SkillList.jsx       # Separated "Used in Projects" vs "Currently Learning"
│   ├── ContactPanel.jsx    # Lighthouse contact details & 1-click email copy
│   ├── Footer.jsx          # Whimsical lemon-themed footer
│   ├── AudioSystem.js      # Procedural Web Audio API sound synthesizer
│   └── IslandModels.js     # High-precision isometric SVG architectural models
├── data/
│   └── portfolio.js        # Single editable configuration file for all content
├── hooks/
│   ├── useSound.js         # Sound effects state & trigger hook
│   └── useAmbiance.js      # Lighting atmosphere controller ('day', 'golden-hour', 'twilight')
├── styles/
│   ├── global.css          # Design system tokens, typography, and layout
│   ├── world.css           # Isometric 3D island landmass, terrain, and lighting
│   ├── panel.css           # Slide-over drawer and mobile bottom sheet styles
│   └── animations.css     # Keyframes for subtle micro-interactions & wind breeze
├── App.jsx                 # Main application view coordinator
└── main.jsx                # React root mount point
```


## ♿ Accessibility & Responsiveness

- **Keyboard Friendly**: Tab navigates between all landmarks; `Enter` or `Space` opens details; `ESC` closes modals.
- **Responsive Views**: Seamlessly adapts from desktop 3D isometric view to mobile bottom sheets. Also includes a **Quick Directory** mode for instant mobile browsing.
- **Reduced Motion**: Automatically respects `prefers-reduced-motion` settings.

---

*Built with curiosity, creativity, and a little lemon energy 🍋*
