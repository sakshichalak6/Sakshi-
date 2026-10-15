/**
 * IslandModels.js
 * Crisp, stylized isometric vector models and micro-details for all 7 locations in Sakshi's World.
 * Rendered using precision isometric SVG with CSS animations and lighting.
 */

export const IslandSVGs = {
  // Base Island Terrain (Paths, lake, trees, streetlights, cobblestones)
  terrain: `
    <svg viewBox="0 0 620 620" class="island-terrain-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients -->
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

      <!-- Island Surface Base -->
      <rect width="620" height="620" rx="64" fill="url(#grassGrad)"/>

      <!-- Cobblestone Winding Paths connecting all 7 landmarks -->
      <!-- Central Plaza Ring -->
      <circle cx="310" cy="310" r="80" fill="none" stroke="url(#pathGrad)" stroke-width="26" stroke-dasharray="14 4" opacity="0.95"/>
      <circle cx="310" cy="310" r="76" fill="#F8EFCF" stroke="#E6D3A0" stroke-width="3"/>

      <!-- Path to Web District (North-East) -->
      <path d="M 350 250 Q 380 180 400 130" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- Path to Cloud Tower (North-West) -->
      <path d="M 260 250 Q 210 180 170 120" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- Path to Workspace (West) -->
      <path d="M 240 310 Q 180 300 130 290" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- Path to The Lemon Studio (South-West) -->
      <path d="M 260 360 Q 200 420 160 460" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- Path to IoT Lab (East) -->
      <path d="M 370 320 Q 430 330 480 340" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- Path to Lighthouse (South-East Coast) -->
      <path d="M 350 370 Q 400 430 450 480" fill="none" stroke="url(#pathGrad)" stroke-width="18" stroke-linecap="round" stroke-dasharray="10 3"/>

      <!-- The Miniature Lake / Lotus Pond -->
      <path d="M 330 380 C 370 370, 420 390, 440 430 C 450 460, 420 500, 380 505 C 340 510, 315 470, 310 430 C 305 400, 315 385, 330 380 Z" 
            fill="url(#lakeGrad)" stroke="#A0CBED" stroke-width="3" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))"/>
      
      <!-- Water Lilies on the Lake -->
      <circle cx="360" cy="420" r="10" fill="#75A66E"/>
      <circle cx="360" cy="420" r="4" fill="#F3A89A"/>
      <circle cx="400" cy="450" r="12" fill="#75A66E"/>
      <circle cx="400" cy="450" r="5" fill="#FFF4C2"/>
      <circle cx="340" cy="460" r="9" fill="#75A66E"/>

      <!-- Miniature Stepping Stone Bridge across pond edge -->
      <ellipse cx="330" cy="410" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>
      <ellipse cx="342" cy="402" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>
      <ellipse cx="355" cy="396" rx="7" ry="5" fill="#D2BE9B" stroke="#B8A480"/>

      <!-- Decorative Stylized Miniature Trees -->
      <!-- Lemon Grove Tree 1 (near Lemon Studio) -->
      <g transform="translate(110, 420)">
        <ellipse cx="20" cy="30" rx="18" ry="10" fill="#678E60" opacity="0.4"/>
        <rect x="18" y="15" width="4" height="15" fill="#735338" rx="2"/>
        <circle cx="20" cy="12" r="16" fill="#88B57D"/>
        <circle cx="16" cy="8" r="14" fill="#9CC591"/>
        <!-- Bright yellow lemons -->
        <circle cx="12" cy="14" r="3.5" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
        <circle cx="22" cy="18" r="3.5" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
        <circle cx="24" cy="6" r="3" fill="#FFE843" stroke="#DEB716" stroke-width="0.8"/>
      </g>

      <!-- Lemon Grove Tree 2 -->
      <g transform="translate(190, 490)">
        <ellipse cx="20" cy="30" rx="16" ry="8" fill="#678E60" opacity="0.4"/>
        <rect x="18" y="15" width="4" height="14" fill="#735338" rx="2"/>
        <circle cx="20" cy="12" r="15" fill="#90BD85"/>
        <circle cx="15" cy="16" r="3" fill="#FFE843"/>
        <circle cx="24" cy="10" r="3" fill="#FFE843"/>
      </g>

      <!-- Pine Tree near Cloud Tower -->
      <g transform="translate(120, 160)">
        <ellipse cx="20" cy="35" rx="14" ry="7" fill="#678E60" opacity="0.35"/>
        <rect x="18" y="24" width="4" height="10" fill="#61442B" rx="1"/>
        <polygon points="20,2 8,24 32,24" fill="#588053"/>
        <polygon points="20,8 10,20 30,20" fill="#6C9766"/>
      </g>

      <!-- Round Tree near Web District -->
      <g transform="translate(480, 140)">
        <ellipse cx="20" cy="30" rx="16" ry="8" fill="#678E60" opacity="0.35"/>
        <rect x="18" y="18" width="4" height="12" fill="#735338" rx="2"/>
        <circle cx="20" cy="14" r="15" fill="#88B57D"/>
        <circle cx="17" cy="10" r="13" fill="#A2CC98"/>
      </g>

      <!-- Round Tree near IoT Lab -->
      <g transform="translate(520, 390)">
        <ellipse cx="20" cy="30" rx="16" ry="8" fill="#678E60" opacity="0.35"/>
        <rect x="18" y="18" width="4" height="12" fill="#735338" rx="2"/>
        <circle cx="20" cy="14" r="15" fill="#7CA972"/>
      </g>

      <!-- Warm Golden Streetlamps -->
      <!-- Streetlamp 1 (near Plaza) -->
      <g transform="translate(240, 260)">
        <circle cx="10" cy="10" r="16" fill="rgba(249, 231, 109, 0.25)"/>
        <circle cx="10" cy="10" r="5" fill="#FFF4C2"/>
        <circle cx="10" cy="10" r="2.5" fill="#FFF"/>
        <rect x="9" y="10" width="2" height="14" fill="#3D4B44"/>
      </g>

      <!-- Streetlamp 2 (near Lighthouse) -->
      <g transform="translate(420, 440)">
        <circle cx="10" cy="10" r="16" fill="rgba(249, 231, 109, 0.25)"/>
        <circle cx="10" cy="10" r="5" fill="#FFF4C2"/>
        <circle cx="10" cy="10" r="2.5" fill="#FFF"/>
        <rect x="9" y="10" width="2" height="14" fill="#3D4B44"/>
      </g>
    </svg>
  `,

  // 1. The Developer's Desk — About Me
  workspace: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Desk Shadow -->
      <ellipse cx="50" cy="80" rx="36" ry="16" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Wooden Oak Desk Surface (Isometric angle) -->
      <polygon points="50,42 85,58 50,74 15,58" fill="#D4A76A" stroke="#B08347" stroke-width="1.5"/>
      <!-- Desk Legs / Thickness -->
      <polygon points="15,58 50,74 50,82 15,66" fill="#A87A40"/>
      <polygon points="50,74 85,58 85,66 50,82" fill="#BE8F52"/>
      <!-- Desk Wooden Legs -->
      <rect x="18" y="66" width="4" height="16" fill="#855B27" rx="1"/>
      <rect x="78" y="66" width="4" height="16" fill="#855B27" rx="1"/>
      <rect x="48" y="80" width="4" height="12" fill="#855B27" rx="1"/>

      <!-- Miniature Laptop -->
      <g transform="translate(40, 48)">
        <!-- Base / Keyboard -->
        <polygon points="10,6 22,12 10,18 -2,12" fill="#DDE4E8" stroke="#B0BEC5" stroke-width="0.8"/>
        <!-- Glowing Screen Lid -->
        <polygon points="-2,12 10,6 10,-4 -2,2" fill="#252B28" stroke="#37474F" stroke-width="0.8"/>
        <polygon points="-1,11 9,6 9,-3 -1,3" fill="#B9DDF5"/>
        <!-- Glowing code lines on screen -->
        <line x1="1" y1="2" x2="7" y2="-1" stroke="#355C4B" stroke-width="0.8"/>
        <line x1="0" y1="5" x2="6" y2="2" stroke="#F9E76D" stroke-width="0.8"/>
        <line x1="0" y1="8" x2="5" y2="5" stroke="#F3A89A" stroke-width="0.8"/>
      </g>

      <!-- Lit Desk Lamp with Warm Glow Cone -->
      <g transform="translate(68, 42)">
        <circle cx="5" cy="5" r="14" fill="rgba(249, 231, 109, 0.35)"/>
        <rect x="4" y="8" width="2" height="14" fill="#37474F"/>
        <!-- Lamp Head -->
        <path d="M 0 6 L 10 3 L 8 11 L -2 14 Z" fill="#F9E76D" stroke="#D8C330" stroke-width="0.8"/>
        <circle cx="5" cy="9" r="3" fill="#FFFFFF"/>
      </g>

      <!-- Coffee Mug with Steaming Vapor -->
      <g transform="translate(30, 56)">
        <cylinder />
        <rect x="0" y="4" width="7" height="8" fill="#FFFDF5" stroke="#E0D5B5" stroke-width="0.8" rx="1.5"/>
        <ellipse cx="3.5" cy="4" rx="3.5" ry="1.5" fill="#6A492B"/>
        <path d="M 7 6 C 9 6, 9 9, 7 10" fill="none" stroke="#E0D5B5" stroke-width="0.8"/>
        <!-- Steam curl -->
        <path d="M 3 2 Q 1 -1 4 -3" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="0.8" stroke-linecap="round"/>
      </g>

      <!-- Potted Succulent Plant -->
      <g transform="translate(24, 46)">
        <polygon points="4,10 10,10 8,16 6,16" fill="#E8927C" stroke="#D1745E" stroke-width="0.8"/>
        <circle cx="7" cy="8" r="4.5" fill="#75A66E"/>
        <circle cx="6" cy="6" r="3.5" fill="#95C48E"/>
      </g>

      <!-- Stack of Books & Sticky Notes -->
      <g transform="translate(56, 56)">
        <polygon points="0,5 14,10 8,14 -6,9" fill="#C9B8F0" stroke="#9E88D6" stroke-width="0.8"/>
        <polygon points="-6,9 8,14 8,17 -6,12" fill="#8870C7"/>
        <polygon points="1,3 13,7 7,11 -5,7" fill="#F9E76D" stroke="#DEB716" stroke-width="0.8"/>
      </g>

      <!-- Floating Code Badges `< />` -->
      <text x="18" y="32" font-family="monospace" font-size="12" font-weight="bold" fill="#355C4B" opacity="0.85">&lt;dev/&gt;</text>
    </svg>
  `,

  // 2. Web Development District
  webdev: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="82" rx="38" ry="16" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Modern Web Dev Studio Building (Isometric Box) -->
      <!-- Left Wall -->
      <polygon points="18,52 50,68 50,34 18,18" fill="#B9DDF5" stroke="#8CBEE0" stroke-width="1.2"/>
      <!-- Right Wall -->
      <polygon points="50,68 82,52 82,18 50,34" fill="#8CBEE0" stroke="#6AA3C9" stroke-width="1.2"/>
      <!-- Roof -->
      <polygon points="50,34 82,18 50,4 18,18" fill="#D6EEFC" stroke="#B9DDF5" stroke-width="1.2"/>

      <!-- Browser Window Sign Frame on Roof -->
      <g transform="translate(32, -4)">
        <rect x="0" y="0" width="36" height="24" rx="4" fill="#FFFDF5" stroke="#355C4B" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
        <!-- Window Bar with 3 Dots -->
        <rect x="0" y="0" width="36" height="7" fill="#FFF4C2" rx="4 4 0 0"/>
        <circle cx="5" cy="3.5" r="1.5" fill="#F3A89A"/>
        <circle cx="10" cy="3.5" r="1.5" fill="#F9E76D"/>
        <circle cx="15" cy="3.5" r="1.5" fill="#A8C3A0"/>
        <!-- Code glyph inside browser window -->
        <text x="7" y="18" font-family="monospace" font-size="9" font-weight="900" fill="#355C4B">&lt;WEB/&gt;</text>
      </g>

      <!-- Large Studio Glass Window (Glowing screen) -->
      <polygon points="24,30 44,40 44,55 24,45" fill="#FFFDF5" stroke="#355C4B" stroke-width="1"/>
      <polygon points="26,32 42,40 42,53 26,45" fill="#FFE843" opacity="0.65"/>
      <!-- Neon Code Lines inside Window -->
      <line x1="28" y1="36" x2="38" y2="41" stroke="#355C4B" stroke-width="1.2"/>
      <line x1="28" y1="41" x2="40" y2="47" stroke="#F3A89A" stroke-width="1.2"/>
      <line x1="28" y1="46" x2="36" y2="50" stroke="#355C4B" stroke-width="1.2"/>

      <!-- Studio Entrance Glass Door -->
      <polygon points="56,58 72,50 72,30 56,38" fill="#FFFDF5" stroke="#6AA3C9" stroke-width="1"/>
      <polygon points="58,56 70,50 70,32 58,38" fill="#C9B8F0" opacity="0.5"/>
      <line x1="64" y1="35" x2="64" y2="53" stroke="#FFF" stroke-width="1"/>

      <!-- Floating Tech Badges (HTML, CSS, JS) -->
      <g transform="translate(10, 10)">
        <rect x="0" y="0" width="16" height="12" rx="3" fill="#F3A89A" stroke="#E28978" stroke-width="0.8"/>
        <text x="3" y="9" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFF">HTML</text>
      </g>
      <g transform="translate(76, 26)">
        <rect x="0" y="0" width="14" height="12" rx="3" fill="#F9E76D" stroke="#DEB716" stroke-width="0.8"/>
        <text x="3" y="9" font-family="sans-serif" font-size="7" font-weight="bold" fill="#252B28">JS</text>
      </g>
    </svg>
  `,

  // 3. Cloud Computing Tower
  cloud: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="85" rx="36" ry="14" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Floating Server Tower Base -->
      <polygon points="30,62 50,72 70,62 50,52" fill="#EBE4FA" stroke="#C9B8F0" stroke-width="1.2"/>
      <polygon points="30,62 50,72 50,82 30,72" fill="#9E88D6"/>
      <polygon points="50,72 70,62 70,72 50,82" fill="#7C63BD"/>

      <!-- Middle Server Rack -->
      <polygon points="34,42 50,50 66,42 50,34" fill="#FFFDF5" stroke="#C9B8F0" stroke-width="1"/>
      <polygon points="34,42 50,50 50,62 34,54" fill="#C9B8F0"/>
      <polygon points="50,50 66,42 66,54 50,62" fill="#A894E0"/>

      <!-- Blinking Server LEDs -->
      <circle cx="40" cy="50" r="1.5" fill="#A8C3A0"/>
      <circle cx="44" cy="52" r="1.5" fill="#F9E76D"/>
      <circle cx="48" cy="54" r="1.5" fill="#F3A89A"/>
      <circle cx="56" cy="53" r="1.5" fill="#B9DDF5"/>
      <circle cx="60" cy="51" r="1.5" fill="#A8C3A0"/>

      <!-- Top Tower Dome / Cloud Cap -->
      <!-- Billowing Soft Cloud Geometry -->
      <g transform="translate(20, 10)">
        <circle cx="30" cy="20" r="18" fill="#FFFDF5" filter="drop-shadow(0 4px 8px rgba(201,184,240,0.5))"/>
        <circle cx="16" cy="24" r="14" fill="#F4EFFF"/>
        <circle cx="44" cy="24" r="14" fill="#EBE4FA"/>
        <circle cx="28" cy="12" r="12" fill="#FFFFFF"/>
        <!-- Cloud Antenna / Satellite dish -->
        <line x1="30" y1="8" x2="30" y2="-6" stroke="#9E88D6" stroke-width="2" stroke-linecap="round"/>
        <circle cx="30" cy="-6" r="3.5" fill="#F9E76D" stroke="#9E88D6" stroke-width="1"/>
        <circle cx="30" cy="-6" r="1.5" fill="#FFFFFF"/>
      </g>

      <!-- Floating Data Packets (Pulsing Rings) -->
      <circle cx="24" cy="36" r="4" fill="none" stroke="#B9DDF5" stroke-width="1.5" stroke-dasharray="2 2"/>
      <circle cx="76" cy="38" r="4" fill="none" stroke="#F9E76D" stroke-width="1.5" stroke-dasharray="2 2"/>
      <text x="68" y="22" font-family="sans-serif" font-size="12">☁️</text>
    </svg>
  `,

  // 4. IoT Innovation Lab
  iot: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="82" rx="38" ry="16" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Lab Workshop Building (Isometric) -->
      <!-- Left Wall -->
      <polygon points="18,52 50,68 50,34 18,18" fill="#A8C3A0" stroke="#7A9E72" stroke-width="1.2"/>
      <!-- Right Wall -->
      <polygon points="50,68 82,52 82,18 50,34" fill="#7A9E72" stroke="#5E7E57" stroke-width="1.2"/>
      <!-- Roof (Styled as a giant green PCB board with gold traces) -->
      <polygon points="50,34 82,18 50,4 18,18" fill="#355C4B" stroke="#254235" stroke-width="1.5"/>

      <!-- Gold Circuit Traces on PCB Roof -->
      <path d="M 32 18 L 44 24 L 44 30 L 50 27 L 62 21 L 62 14" fill="none" stroke="#F9E76D" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="32" cy="18" r="2" fill="#FFE843"/>
      <circle cx="62" cy="14" r="2" fill="#FFE843"/>
      <circle cx="50" cy="27" r="2.5" fill="#F3A89A"/>

      <!-- ESP32 Microcontroller IC Package mounted on roof -->
      <polygon points="44,22 56,16 56,22 44,28" fill="#1B2129" stroke="#607D8B" stroke-width="0.8"/>
      <text x="45" y="24" font-family="monospace" font-size="4" font-weight="bold" fill="#B0BEC5">ESP32</text>

      <!-- Glowing Status LED on Lab Wall -->
      <circle cx="34" cy="42" r="5" fill="rgba(168, 195, 160, 0.4)"/>
      <circle cx="34" cy="42" r="2.5" fill="#4CAF50"/>
      <circle cx="34" cy="42" r="1.2" fill="#FFFFFF"/>

      <circle cx="42" cy="46" r="5" fill="rgba(249, 231, 109, 0.4)"/>
      <circle cx="42" cy="46" r="2.5" fill="#FFC107"/>

      <!-- Hardware Lab Entrance / Breadboard window -->
      <polygon points="56,58 74,49 74,32 56,41" fill="#FFFDF5" stroke="#5E7E57" stroke-width="1"/>
      <polygon points="58,56 72,49 72,34 58,41" fill="#FFF4C2" opacity="0.6"/>
      <!-- Breadboard pin row graphic -->
      <circle cx="62" cy="42" r="1" fill="#757575"/>
      <circle cx="65" cy="40.5" r="1" fill="#757575"/>
      <circle cx="68" cy="39" r="1" fill="#757575"/>

      <!-- Mini Wireless Antenna on roof -->
      <line x1="72" y1="12" x2="72" y2="0" stroke="#37474F" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="72" cy="0" r="2.5" fill="#F3A89A"/>

      <!-- Animated Signal Wave Spark -->
      <path d="M 75 0 Q 79 -4 75 -8" fill="none" stroke="#F9E76D" stroke-width="1.2" stroke-linecap="round"/>
      <text x="12" y="32" font-family="monospace" font-size="10">⚡</text>
    </svg>
  `,

  // 5. The Lemon Studio — Creative Corner
  lemonStudio: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="84" rx="40" ry="16" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Lemon-Yellow Art Studio Cottage -->
      <!-- Left Wall (Sunshine Yellow) -->
      <polygon points="20,54 50,68 50,34 20,20" fill="#F9E76D" stroke="#DEB716" stroke-width="1.2"/>
      <!-- Right Wall (Soft Butter Shadow) -->
      <polygon points="50,68 80,54 80,20 50,34" fill="#E8D14E" stroke="#C49B10" stroke-width="1.2"/>
      <!-- Cozy Terracotta / Coral Tile Roof -->
      <polygon points="50,34 80,20 50,6 20,20" fill="#F3A89A" stroke="#E28978" stroke-width="1.5"/>
      <!-- Roof Ridge Stripe -->
      <line x1="50" y1="6" x2="50" y2="34" stroke="#D16E5A" stroke-width="1.5"/>

      <!-- Artist Canvas on Wooden Easel outside studio -->
      <g transform="translate(10, 52)">
        <!-- Wooden Tripod -->
        <line x1="10" y1="18" x2="6" y2="32" stroke="#8D6E63" stroke-width="1.5"/>
        <line x1="10" y1="18" x2="14" y2="32" stroke="#8D6E63" stroke-width="1.5"/>
        <line x1="10" y1="18" x2="10" y2="34" stroke="#6D4C41" stroke-width="1.2"/>
        <!-- Canvas Board -->
        <rect x="3" y="14" width="14" height="12" rx="1.5" fill="#FFFDF5" stroke="#D7CCC8" stroke-width="0.8"/>
        <!-- Mini Lemon Art Painting on Canvas -->
        <circle cx="10" cy="20" r="4" fill="#FFE843"/>
        <path d="M 10 16 Q 12 14 11 13" stroke="#4CAF50" stroke-width="0.8" fill="none"/>
      </g>

      <!-- Studio Chimney with Heart / Flower Smoke -->
      <polygon points="32,16 38,13 38,4 32,7" fill="#FDE8E4" stroke="#E28978" stroke-width="0.8"/>
      <circle cx="35" cy="1" r="3" fill="rgba(255,255,255,0.85)"/>
      <circle cx="38" cy="-5" r="4" fill="rgba(255,255,255,0.7)"/>

      <!-- Studio Picture Window with Paint Palettes -->
      <polygon points="26,34 44,42 44,56 26,48" fill="#FFFDF5" stroke="#355C4B" stroke-width="1"/>
      <polygon points="28,36 42,42 42,54 28,48" fill="#FFF9DD"/>
      <!-- Framed Artwork on Window Wall -->
      <rect x="31" y="40" width="8" height="8" rx="1" fill="#C9B8F0" stroke="#9E88D6" stroke-width="0.6"/>

      <!-- Front Studio Door with Palette Sign -->
      <polygon points="56,58 72,50 72,34 56,42" fill="#795548" stroke="#5D4037" stroke-width="1"/>
      <polygon points="58,56 70,50 70,36 58,42" fill="#A1887F"/>
      <circle cx="68" cy="46" r="1.5" fill="#FFE843"/>

      <!-- Hanging Lemon Signboard -->
      <g transform="translate(48, 26)">
        <circle cx="8" cy="8" r="7" fill="#FFE843" stroke="#DEB716" stroke-width="1"/>
        <text x="5" y="11" font-size="8">🍋</text>
      </g>

      <!-- Lush Lemon Tree beside the studio with yellow lemons -->
      <g transform="translate(68, 44)">
        <rect x="10" y="16" width="3" height="18" fill="#5D4037" rx="1"/>
        <circle cx="11.5" cy="14" r="14" fill="#88B57D"/>
        <circle cx="7" cy="10" r="11" fill="#A2CC98"/>
        <!-- Juicy Yellow Lemons -->
        <circle cx="8" cy="14" r="3" fill="#FFE843" stroke="#C49B10" stroke-width="0.6"/>
        <circle cx="16" cy="12" r="3" fill="#FFE843" stroke="#C49B10" stroke-width="0.6"/>
        <circle cx="12" cy="6" r="2.8" fill="#FFE843" stroke="#C49B10" stroke-width="0.6"/>
      </g>
    </svg>
  `,

  // 6. The Project Plaza — Central Interactive Pedestals
  projects: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="80" rx="42" ry="18" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Circular Tiered Stone Monument Base -->
      <polygon points="18,60 50,74 82,60 50,46" fill="#FFFDF5" stroke="#DCD3BA" stroke-width="1.5"/>
      <polygon points="18,60 50,74 50,80 18,66" fill="#D8CFB4"/>
      <polygon points="50,74 82,60 82,66 50,80" fill="#C2B799"/>

      <!-- Top Inner Tier (Marble Inlay) -->
      <polygon points="26,52 50,62 74,52 50,42" fill="#FFF4C2" stroke="#E6D7A0" stroke-width="1.2"/>

      <!-- Central Hologram / Preview Crystal Pedestal -->
      <polygon points="42,46 58,46 54,30 46,30" fill="#E0F2FE" stroke="#7DD3FC" stroke-width="1"/>
      <polygon points="44,30 54,30 50,14" fill="#BAE6FD" stroke="#38BDF8" stroke-width="1"/>
      
      <!-- Glowing Floating Project Cube / Hologram Crystal -->
      <g transform="translate(36, 6)">
        <polygon points="14,0 28,6 14,12 0,6" fill="rgba(249, 231, 109, 0.85)" stroke="#FFE843" stroke-width="1"/>
        <polygon points="0,6 14,12 14,24 0,18" fill="rgba(243, 168, 154, 0.85)" stroke="#F3A89A" stroke-width="1"/>
        <polygon points="14,12 28,6 28,18 14,24" fill="rgba(168, 195, 160, 0.85)" stroke="#A8C3A0" stroke-width="1"/>
      </g>

      <!-- Pedestal Miniature Banners -->
      <circle cx="28" cy="52" r="3.5" fill="#F3A89A" stroke="#E07A65" stroke-width="0.8"/>
      <circle cx="72" cy="52" r="3.5" fill="#B9DDF5" stroke="#7CB9E8" stroke-width="0.8"/>
      <circle cx="50" cy="62" r="4" fill="#F9E76D" stroke="#DEB716" stroke-width="0.8"/>

      <text x="36" y="2" font-family="sans-serif" font-size="10">🏛️</text>
    </svg>
  `,

  // 7. The Contact Lighthouse & Friendly Mailbox
  contact: `
    <svg viewBox="0 0 100 100" class="building-isometric-model" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow on Coastal Cliff -->
      <ellipse cx="50" cy="84" rx="34" ry="14" fill="rgba(53, 92, 75, 0.25)"/>

      <!-- Coastal Rocky Outcrop Foundation -->
      <polygon points="26,72 50,82 74,72 50,62" fill="#8D8176" stroke="#685E55" stroke-width="1.2"/>
      <polygon points="26,72 50,82 50,90 26,80" fill="#5F564E"/>
      <polygon points="50,82 74,72 74,80 50,90" fill="#4B443D"/>

      <!-- Striped Lighthouse Tower (Tapering Octagon) -->
      <!-- Base White Band -->
      <polygon points="36,66 50,72 64,66 58,54 50,58 42,54" fill="#FFFDF5" stroke="#DDD2B5" stroke-width="1"/>
      <!-- Warm Coral Band -->
      <polygon points="42,54 50,58 58,54 56,42 50,45 44,42" fill="#F3A89A" stroke="#E28978" stroke-width="1"/>
      <!-- Middle White Band -->
      <polygon points="44,42 50,45 56,42 54,30 50,33 46,30" fill="#FFFDF5" stroke="#DDD2B5" stroke-width="1"/>
      <!-- Top Coral Band -->
      <polygon points="46,30 50,33 54,30 53,20 50,22 47,20" fill="#F3A89A" stroke="#E28978" stroke-width="1"/>

      <!-- Lantern Gallery & Glowing Light Room -->
      <polygon points="44,20 50,22 56,20 54,12 50,14 46,12" fill="#FFF4C2" stroke="#F9E76D" stroke-width="1.2"/>
      <circle cx="50" cy="16" r="3.5" fill="#FFE843"/>
      <circle cx="50" cy="16" r="1.5" fill="#FFFFFF"/>

      <!-- Conical Coral Roof Cap -->
      <polygon points="45,12 55,12 50,2" fill="#C0392B" stroke="#962D22" stroke-width="1"/>
      <circle cx="50" cy="2" r="1.5" fill="#F9E76D"/>

      <!-- Rotating Light Beam Cone (Semi-transparent) -->
      <polygon points="50,16 95,-10 90,30" fill="url(#beamGrad)" opacity="0.6"/>
      <defs>
        <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFE843" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FFFDF5" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Friendly Miniature Mailbox beside lighthouse -->
      <g transform="translate(14, 62)">
        <rect x="5" y="10" width="2" height="12" fill="#4E342E"/>
        <rect x="0" y="2" width="12" height="9" rx="4 4 1 1" fill="#F3A89A" stroke="#C0392B" stroke-width="0.8"/>
        <circle cx="2" cy="6" r="1" fill="#FFE843"/>
        <!-- Floating Letter Envelope with seal -->
        <g transform="translate(1, -12)">
          <rect x="0" y="0" width="11" height="8" rx="1" fill="#FFFDF5" stroke="#C9B8F0" stroke-width="0.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"/>
          <path d="M 0 0 L 5.5 4.5 L 11 0" fill="none" stroke="#C9B8F0" stroke-width="0.8"/>
          <circle cx="5.5" cy="4.5" r="1.2" fill="#F3A89A"/>
        </g>
      </g>
    </svg>
  `
};
