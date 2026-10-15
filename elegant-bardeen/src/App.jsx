import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { MiniatureWorld } from './components/MiniatureWorld.jsx';
import { InfoPanel } from './components/InfoPanel.jsx';
import { Footer } from './components/Footer.jsx';
import { useSound } from './hooks/useSound.js';
import { useAmbiance } from './hooks/useAmbiance.js';
import { portfolioData } from './data/portfolio.js';
import './styles/global.css';
import './styles/world.css';
import './styles/panel.css';
import './styles/animations.css';

export function App() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [viewMode, setViewMode] = useState('island'); // 'island' or 'directory'
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const { soundEnabled, toggleSound, playHoverPop, playChime, playSuccessArpeggio } = useSound();
  const { ambiance, setAmbiance } = useAmbiance('day');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const handleSelectLocation = (id) => {
    setActiveLocation(id);
    playChime(620, 0.28);
  };

  const handleClosePanel = () => {
    setActiveLocation(null);
    playHoverPop(440);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.developer.email).then(() => {
      playSuccessArpeggio();
      triggerToast('Email address copied to clipboard! 📋');
    }).catch(() => {
      triggerToast(`Email: ${portfolioData.developer.email}`);
    });
  };

  const handleSoundToggle = () => {
    const newState = toggleSound();
    triggerToast(newState ? 'Sound Effects Enabled 🔔' : 'Sound Effects Muted 🔇');
  };

  const handleNavigate = (id) => {
    handleSelectLocation(id);
    const worldEl = document.getElementById('world-viewport-section');
    if (worldEl) worldEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      <Navbar
        onNavigate={handleNavigate}
        activeLocation={activeLocation}
        soundEnabled={soundEnabled}
        onToggleSound={handleSoundToggle}
      />

      <main id="main-content">
        <Hero
          onExplore={() => handleSelectLocation('workspace')}
          onViewProjects={() => handleSelectLocation('projects')}
        />

        {/* World Controls Bar */}
        <div className="world-controls-bar" role="toolbar" aria-label="World Controls">
          <button
            className={`control-pill ${viewMode === 'island' ? 'active' : ''}`}
            onClick={() => {
              setViewMode('island');
              playHoverPop(500);
            }}
          >
            <span>🗺️</span> 3D Island Map
          </button>
          <button
            className={`control-pill ${viewMode === 'directory' ? 'active' : ''}`}
            onClick={() => {
              setViewMode('directory');
              playHoverPop(500);
            }}
          >
            <span>📋</span> Quick Directory
          </button>

          <button
            className={`control-pill ${ambiance === 'day' ? 'active' : ''}`}
            onClick={() => {
              setAmbiance('day');
              playHoverPop(600);
              triggerToast('Atmosphere: Morning Sun ☀️');
            }}
          >
            <span>☀️</span> Morning
          </button>
          <button
            className={`control-pill ${ambiance === 'golden-hour' ? 'active' : ''}`}
            onClick={() => {
              setAmbiance('golden-hour');
              playHoverPop(600);
              triggerToast('Atmosphere: Golden Hour 🌅');
            }}
          >
            <span>🌅</span> Golden Hour
          </button>
          <button
            className={`control-pill ${ambiance === 'twilight' ? 'active' : ''}`}
            onClick={() => {
              setAmbiance('twilight');
              playHoverPop(600);
              triggerToast('Atmosphere: Starry Twilight 🌙');
            }}
          >
            <span>🌙</span> Twilight
          </button>
        </div>

        {/* 3D Island View or Directory Grid */}
        {viewMode === 'island' ? (
          <MiniatureWorld
            activeLocation={activeLocation}
            onSelectLocation={handleSelectLocation}
            onHoverLocation={playHoverPop}
          />
        ) : (
          <section className="directory-view-container" aria-label="Locations Directory">
            <div className="directory-grid">
              {portfolioData.islandLocations.map(loc => (
                <div
                  key={loc.id}
                  className="directory-card"
                  style={{ '--accent-color': loc.accentColor }}
                  onClick={() => handleSelectLocation(loc.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="directory-card-top">
                    <span className="directory-card-icon">✨</span>
                    <span className="drawer-category-pill">{loc.category}</span>
                  </div>
                  <h3 className="directory-card-title">{loc.name}</h3>
                  <p className="directory-card-desc">{loc.description}</p>
                  <div className="directory-card-action">
                    <span>Explore District</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <InfoPanel
        activeLocation={activeLocation}
        onClose={handleClosePanel}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
      />

      <div className={`toast-notice ${showToast ? 'show' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      <Footer />
    </div>
  );
}

export default App;
