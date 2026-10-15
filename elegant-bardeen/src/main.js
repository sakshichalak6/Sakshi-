/**
 * main.js
 * Core application controller for Sakshi Chalak's Portfolio: "The Developer's Little World"
 */

import { portfolioData } from './data/portfolio.js';
import { IslandSVGs } from './components/IslandModels.js';
import { soundManager } from './components/AudioSystem.js';
import { renderPanelContent } from './components/InfoPanel.js';

// Application State
const state = {
  activeLocation: null,
  viewMode: 'island', // 'island' or 'directory'
  ambiance: 'day', // 'day', 'golden-hour', 'twilight'
  soundEnabled: true
};

// DOM Elements cache
let islandStageEl = null;
let backdropEl = null;
let drawerEl = null;
let drawerContentEl = null;
let drawerTitleEl = null;
let drawerCategoryEl = null;
let drawerTaglineEl = null;
let toastEl = null;
let soundBtnEl = null;

// Initialize App
export function initApp() {
  cacheDOM();
  renderIsland();
  renderDirectory();
  attachEventListeners();
  setupPointerParallax();
}

function cacheDOM() {
  islandStageEl = document.getElementById('island-stage');
  backdropEl = document.getElementById('panel-backdrop');
  drawerEl = document.getElementById('info-drawer-panel');
  drawerContentEl = document.getElementById('drawer-content-body');
  drawerTitleEl = document.getElementById('drawer-main-title');
  drawerCategoryEl = document.getElementById('drawer-category-pill');
  drawerTaglineEl = document.getElementById('drawer-tagline');
  toastEl = document.getElementById('toast-notice');
  soundBtnEl = document.getElementById('sound-toggle-btn');
}

// Render the 3D Island Surface & Landmarks
function renderIsland() {
  if (!islandStageEl) return;

  const islandGround = document.createElement('div');
  islandGround.className = 'island-ground';
  islandGround.innerHTML = IslandSVGs.terrain;

  // Insert Base
  islandStageEl.innerHTML = '';
  islandStageEl.appendChild(islandGround);

  // Render each of the 7 landmarks
  portfolioData.islandLocations.forEach(loc => {
    const node = document.createElement('div');
    node.className = `landmark-node node-${loc.id}`;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `${loc.name} - ${loc.category}`);
    node.setAttribute('id', `landmark-${loc.id}`);

    // Billboard floating badge (faces camera directly)
    const badge = `
      <div class="landmark-billboard-badge">
        <span class="badge-icon">${getCategoryEmoji(loc.id)}</span>
        <span>${loc.name}</span>
      </div>
    `;

    // SVG Model
    const modelSvg = IslandSVGs[loc.id] || IslandSVGs.workspace;
    node.innerHTML = badge + modelSvg;

    // Click & Keydown listeners
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
      soundManager.playHoverPop(540);
    });

    islandStageEl.appendChild(node);
  });
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

// Render Mobile/Compact Directory View
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

// Open Specific Location Panel
export function openLocation(id) {
  const loc = portfolioData.islandLocations.find(l => l.id === id);
  if (!loc) return;

  state.activeLocation = id;
  soundManager.playChime(620, 0.28);

  // Update Highlight on Island Landmark
  document.querySelectorAll('.landmark-node').forEach(node => {
    node.classList.remove('active-selected');
  });
  const targetNode = document.getElementById(`landmark-${id}`);
  if (targetNode) {
    targetNode.classList.add('active-selected');
  }

  // Update Navbar active link
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === id);
  });

  // Populate Drawer
  drawerCategoryEl.textContent = loc.category;
  drawerTitleEl.textContent = loc.name;
  drawerTaglineEl.textContent = loc.tagline;
  drawerContentEl.innerHTML = renderPanelContent(id);

  // Open Drawer
  backdropEl.classList.add('open');
  backdropEl.setAttribute('aria-hidden', 'false');

  // Focus trap / focus close button
  setTimeout(() => {
    const closeBtn = document.getElementById('drawer-close-btn');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

// Close Panel
export function closeLocation() {
  state.activeLocation = null;
  soundManager.playHoverPop(440);

  backdropEl.classList.remove('open');
  backdropEl.setAttribute('aria-hidden', 'true');

  document.querySelectorAll('.landmark-node').forEach(node => {
    node.classList.remove('active-selected');
  });

  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

// Parallax Pointer Subtle Tilt on Desktop
function setupPointerParallax() {
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
    resetIslandTransform();
  });
}

export function resetIslandTransform() {
  if (islandStageEl) {
    islandStageEl.style.transform = `rotateX(58deg) rotateZ(-45deg)`;
  }
}

// Event Listeners Setup
function attachEventListeners() {
  // Backdrop click closes
  if (backdropEl) {
    backdropEl.addEventListener('click', (e) => {
      if (e.target === backdropEl) {
        closeLocation();
      }
    });
  }

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeLocation) {
      closeLocation();
    }
  });

  // Sound Toggle
  if (soundBtnEl) {
    soundBtnEl.addEventListener('click', () => {
      const enabled = soundManager.toggleSound();
      state.soundEnabled = enabled;
      soundBtnEl.innerHTML = enabled ? '🔊' : '🔇';
      soundBtnEl.setAttribute('aria-label', enabled ? 'Mute Sound Effects' : 'Enable Sound Effects');
      showToast(enabled ? 'Sound Effects Enabled 🔔' : 'Sound Effects Muted 🔇');
    });
  }
}

// Copy Email Utility with Toast Notification
export function copyEmail() {
  const email = portfolioData.developer.email;
  navigator.clipboard.writeText(email).then(() => {
    soundManager.playSuccessArpeggio();
    showToast('Email address copied to clipboard! 📋');
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

// Show Toast
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2800);
}

// View Mode Toggle (Island vs Quick Directory)
export function setViewMode(mode) {
  state.viewMode = mode;
  const worldSection = document.getElementById('world-viewport-section');
  const directorySection = document.getElementById('directory-view');
  const btnIsland = document.getElementById('btn-mode-island');
  const btnDir = document.getElementById('btn-mode-directory');

  soundManager.playHoverPop(500);

  if (mode === 'island') {
    worldSection.style.display = 'flex';
    directorySection.style.display = 'none';
    if (btnIsland) btnIsland.classList.add('active');
    if (btnDir) btnDir.classList.remove('active');
  } else {
    worldSection.style.display = 'none';
    directorySection.style.display = 'block';
    if (btnIsland) btnIsland.classList.remove('active');
    if (btnDir) btnDir.classList.add('active');
  }
}

// Ambiance Lighting Toggle
export function setAmbiance(mode) {
  state.ambiance = mode;
  document.body.setAttribute('data-ambiance', mode);
  soundManager.playHoverPop(600);

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

// Global window bindings for HTML onclick handlers
if (typeof window !== 'undefined') {
  window.appOpenLocation = openLocation;
  window.appCloseLocation = closeLocation;
  window.copyEmailAddress = copyEmail;
  window.appSetViewMode = setViewMode;
  window.appSetAmbiance = setAmbiance;
  window.appResetIsland = resetIslandTransform;
  window.appNavigateTo = (id) => {
    openLocation(id);
    const worldSection = document.getElementById('world-viewport-section');
    if (worldSection) {
      worldSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
