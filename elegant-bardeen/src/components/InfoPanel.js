/**
 * InfoPanel.js
 * Generates the rich detail modal / slide-over drawer for each of the 7 island locations.
 */

import { portfolioData } from '../data/portfolio.js';

export function renderPanelContent(locationId) {
  const { developer, skills, cloudTopics, iotProjects, lemonStudio, projects } = portfolioData;

  switch (locationId) {
    case 'workspace':
      return `
        <div class="panel-section-card">
          <h3 class="panel-section-title">
            <span class="icon-wrap">☕</span>
            About Sakshi
          </h3>
          <p class="bio-lead-text">${developer.bio}</p>
          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
            <span class="skill-tag used">🎓 ${developer.currentStatus}</span>
            <span class="skill-tag used">📍 ${developer.location}</span>
          </div>
        </div>

        <div class="panel-section-card">
          <h3 class="panel-section-title">
            <span class="icon-wrap">🧭</span>
            Areas of Curiosity & Interest
          </h3>
          <div class="interests-grid">
            ${developer.interests.map(item => `
              <div class="interest-item">
                <div class="interest-icon-wrap">✨</div>
                <div>
                  <div class="interest-name">${item.name}</div>
                  <div class="interest-desc">${item.desc}</div>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">💻</span>
            Things I Build
          </h3>
          <p style="font-size:0.95rem; color:var(--color-dark-text); margin-bottom:16px;">
            Exploring responsive layouts, accessible component patterns, and creative frontend engineering.
            Here is a clear snapshot of tools I've put to work in projects, alongside technologies I am actively studying.
          </p>

          <div class="skills-column-container">
            <div>
              <div style="font-weight:700; font-size:0.9rem; color:var(--color-forest-green); margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                <span>✅</span> Technologies Used in Projects
              </div>
              <div class="skills-pill-group">
                ${skills.usedInProjects.map(s => `
                  <span class="skill-tag used">
                    <strong>${s.name}</strong> <span style="opacity:0.7;">· ${s.level}</span>
                  </span>
                `).join('')}
              </div>
            </div>

            <div style="margin-top:10px;">
              <div style="font-weight:700; font-size:0.9rem; color:#4C3C78; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
                <span>🌱</span> Currently Learning & Exploring
              </div>
              <div class="skills-pill-group">
                ${skills.currentlyLearning.map(s => `
                  <span class="skill-tag learning">
                    <strong>${s.name}</strong> <span style="opacity:0.7;">(${s.focus})</span>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="panel-section-card">
          <h3 class="panel-section-title">
            <span class="icon-wrap">🚀</span>
            Featured Web Project Preview
          </h3>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">☁️</span>
            Somewhere in the Cloud
          </h3>
          <p class="bio-lead-text">
            Exploring how applications, infrastructure, and connected systems work at scale.
            As an ENTC engineering student, understanding network protocols, cloud storage, and serverless compute bridges my software and hardware interests.
          </p>
        </div>

        <div class="panel-section-card">
          <h3 class="panel-section-title">
            <span class="icon-wrap">📡</span>
            Cloud Learning Roadmap
          </h3>
          <div class="cloud-topic-list">
            ${cloudTopics.map(topic => `
              <div class="cloud-topic-card">
                <div class="cloud-topic-header">
                  <span class="cloud-topic-title">${topic.title}</span>
                  <span class="badge-status">${topic.status}</span>
                </div>
                <div class="cloud-topic-desc">${topic.desc}</div>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">⚡</span>
            Where Hardware Meets Software
          </h3>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">🔬</span>
            Hardware Lab Projects
          </h3>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">🖼️</span>
            Original Artworks & Prints
          </h3>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">🏛️</span>
            Project Plaza Pedestals
          </h3>
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
          <h3 class="panel-section-title">
            <span class="icon-wrap">🌐</span>
            Connect Across Platforms
          </h3>
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
