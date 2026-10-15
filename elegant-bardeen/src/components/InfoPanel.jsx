import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio.js';
import { SkillList } from './SkillList.jsx';
import { ProjectGallery } from './ProjectGallery.jsx';
import { ContactPanel } from './ContactPanel.jsx';

export function InfoPanel({ activeLocation, onClose, onNavigate, onCopyEmail }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (activeLocation && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [activeLocation]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeLocation) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeLocation, onClose]);

  if (!activeLocation) return null;

  const loc = portfolioData.islandLocations.find(l => l.id === activeLocation);
  if (!loc) return null;

  const { developer, cloudTopics, iotProjects, lemonStudio } = portfolioData;

  const renderContent = () => {
    switch (activeLocation) {
      case 'workspace':
        return (
          <>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>☕</span> About Sakshi</h3>
              <p className="bio-lead-text">{developer.bio}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                <span className="skill-tag used">🎓 {developer.currentStatus}</span>
                <span className="skill-tag used">📍 {developer.location}</span>
              </div>
            </div>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>🧭</span> Areas of Curiosity & Interest</h3>
              <div className="interests-grid">
                {developer.interests.map(i => (
                  <div key={i.name} className="interest-item">
                    <div className="interest-icon-wrap">✨</div>
                    <div>
                      <div className="interest-name">{i.name}</div>
                      <div className="interest-desc">{i.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel-section-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Curious to see what I've built?</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-muted-text)' }}>Explore the interactive pedestals in the plaza.</div>
              </div>
              <button className="btn-primary" onClick={() => onNavigate('projects')}>
                Visit Project Plaza →
              </button>
            </div>
          </>
        );

      case 'webdev':
        return <SkillList />;

      case 'cloud':
        return (
          <>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>☁️</span> Somewhere in the Cloud</h3>
              <p className="bio-lead-text">
                Exploring how applications, infrastructure, and connected systems work at scale.
                As an ENTC engineering student, understanding network protocols, cloud storage, and serverless compute bridges my software and hardware interests.
              </p>
            </div>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>📡</span> Cloud Learning Roadmap</h3>
              <div className="cloud-topic-list">
                {cloudTopics.map(t => (
                  <div key={t.title} className="cloud-topic-card">
                    <div className="cloud-topic-header">
                      <span className="cloud-topic-title">{t.title}</span>
                      <span className="badge-status">{t.status}</span>
                    </div>
                    <div className="cloud-topic-desc">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel-section-card" style={{ background: 'var(--color-sky-light)', borderColor: 'var(--color-sky-blue)' }}>
              <div style={{ fontSize: '0.88rem', color: '#27628C', lineHeight: 1.5 }}>
                <strong>Learning Note:</strong> All cloud topics represent active self-directed study and coursework milestones, focusing on architectural understanding and reproducible cloud-native deployments.
              </div>
            </div>
          </>
        );

      case 'iot':
        return (
          <>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>⚡</span> Where Hardware Meets Software</h3>
              <p className="bio-lead-text">
                Bridging physical microcontrollers, sensors, and telemetry into intuitive web interfaces.
                Combining core Electronics & Telecommunication concepts with practical maker builds.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-badge">ESP32 Dev Board</span>
                <span className="spec-badge">Arduino Uno</span>
                <span className="spec-badge">Capacitive Sensors</span>
                <span className="spec-badge">I2C OLED</span>
                <span className="spec-badge">SPI & UART</span>
              </div>
            </div>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>🔬</span> Hardware Lab Projects</h3>
              {iotProjects.map(proj => (
                <div key={proj.id} className="iot-project-card">
                  {proj.image && (
                    <img src={proj.image} alt={proj.title} className="iot-image-preview" loading="lazy" />
                  )}
                  <div className="iot-card-inner">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>{proj.title}</h4>
                      <span className="badge-status">{proj.status}</span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-text)', marginBottom: '10px' }}>
                      <strong>Problem:</strong> {proj.problem}
                    </p>
                    <div className="tech-spec-row">
                      <div><strong>Hardware Used:</strong></div>
                      <div className="spec-badge-group">
                        {proj.hardwareUsed.map(h => (
                          <span key={h} className="spec-badge">{h}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tech-spec-row">
                      <div><strong>Software & Protocols:</strong></div>
                      <div className="spec-badge-group">
                        {proj.softwareUsed.map(s => (
                          <span key={s} className="spec-badge" style={{ background: 'var(--color-soft-butter)', color: 'var(--color-forest-green)' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-forest-green)', background: 'var(--color-sage-light)', padding: '8px 12px', borderRadius: '6px', marginTop: '10px' }}>
                      💡 <strong>Key Takeaway:</strong> {proj.learned}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 'lemon-studio':
        return (
          <>
            <div className="studio-hero-banner">
              <div className="drawer-category-pill" style={{ background: '#FFFDF5', marginBottom: '8px' }}>Creative Corner</div>
              <h3 className="studio-title">{lemonStudio.title}</h3>
              <p className="studio-story-text">{lemonStudio.story}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
                {lemonStudio.categories.map(cat => (
                  <span key={cat} className="spec-badge" style={{ background: 'rgba(255,255,255,0.7)', color: '#2E453A' }}>
                    🎨 {cat}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-section-card">
              <h3 className="panel-section-title"><span>🖼️</span> Original Artworks & Prints</h3>
              <div className="artworks-grid">
                {lemonStudio.artworks.map(art => (
                  <div key={art.id} className="artwork-card">
                    <img src={art.image} alt={art.title} className="artwork-thumb" loading="lazy" />
                    <div className="artwork-details">
                      <div className="artwork-title">{art.title}</div>
                      <div className="artwork-medium">{art.medium} · {art.year}</div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--color-muted-text)', lineHeight: 1.4 }}>{art.desc}</p>
                      <div className="color-swatch-bar" title="Color palette swatches">
                        {art.palette.map(c => (
                          <span key={c} className="color-chip" style={{ background: c }} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel-section-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Follow The Lemon Studio</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-muted-text)' }}>Follow sketchbooks, work-in-progress drops, and art prints.</div>
              </div>
              <a href={developer.studioInstagram} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--color-lemon-yellow)' }}>
                Visit The Lemon Studio 🍋
              </a>
            </div>
          </>
        );

      case 'projects':
        return <ProjectGallery />;

      case 'contact':
        return <ContactPanel onCopyEmail={onCopyEmail} />;

      default:
        return null;
    }
  };

  return (
    <div
      className="panel-backdrop open"
      id="panel-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target.id === 'panel-backdrop') onClose();
      }}
    >
      <div className="info-drawer-panel" id="info-drawer-panel">
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-category-pill">{loc.category}</span>
            <h2 className="drawer-main-title">{loc.name}</h2>
            <p className="drawer-tagline">{loc.tagline}</p>
          </div>
          <button
            className="drawer-close-btn"
            id="drawer-close-btn"
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close Panel"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-content-body">
          {renderContent()}
        </div>

        <div className="drawer-footer">
          <button className="return-island-btn" onClick={onClose}>
            <span>←</span> Return to Island
          </button>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-muted-text)' }}>
            Press <kbd style={{ background: 'var(--color-cream-bg)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--color-subtle-border)' }}>ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
