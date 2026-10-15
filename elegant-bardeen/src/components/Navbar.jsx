import React from 'react';

export function Navbar({ onNavigate, activeLocation, soundEnabled, onToggleSound }) {
  const navItems = [
    { id: 'workspace', label: 'About' },
    { id: 'webdev', label: 'Web Dev' },
    { id: 'cloud', label: 'Cloud Tower' },
    { id: 'iot', label: 'IoT Lab' },
    { id: 'lemon-studio', label: '🍋 Lemon Studio' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="nav-header" role="banner">
      <nav className="nav-container" aria-label="Main Navigation">
        <a href="#" className="brand-link" aria-label="Sakshi Chalak Home">
          <svg className="brand-lemon-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4 C24 4 28 9 28 16 C28 23 24 28 16 28 C8 28 4 23 4 16 C4 9 8 4 16 4 Z" fill="#F9E76D" stroke="#D8B818" stroke-width="2"/>
            <path d="M16 4 C16 1 19 1 20 3" fill="none" stroke="#75A66E" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <span>Sakshi Chalak</span>
        </a>

        <ul className="nav-links" role="menubar">
          {navItems.map(item => (
            <li key={item.id} role="none">
              <button
                className={`nav-item-btn ${activeLocation === item.id ? 'active' : ''}`}
                role="menuitem"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-circle-btn"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
            title="Sound Effects (Web Audio API)"
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
          <a
            href="https://github.com/sakshichalak"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle-btn"
            aria-label="Sakshi's GitHub Profile"
            title="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
