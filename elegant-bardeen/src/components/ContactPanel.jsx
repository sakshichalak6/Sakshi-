import React from 'react';
import { portfolioData } from '../data/portfolio.js';

export function ContactPanel({ onCopyEmail }) {
  const { developer } = portfolioData;

  return (
    <>
      <div className="contact-cta-box">
        <div style={{ fontSize: '36px' }}>📬</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-dark-text)' }}>
          Let's Start a Conversation
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-muted-text)', maxWidth: '440px', lineHeight: 1.5 }}>
          Whether you'd like to discuss web development, chat about microcontroller circuits, collaborate on creative artwork, or share engineering advice — I'm always excited to connect!
        </p>

        <div className="email-copy-bar">
          <span className="email-display-text" id="email-address-text">{developer.email}</span>
          <button className="copy-btn" onClick={onCopyEmail}>
            📋 Copy Email
          </button>
        </div>

        <a href={`mailto:${developer.email}`} className="btn-primary" style={{ marginTop: '6px' }}>
          Open Email Client ✉️
        </a>
      </div>

      <div className="panel-section-card">
        <h3 className="panel-section-title">
          <span>🌐</span> Connect Across Platforms
        </h3>
        <div className="social-links-row">
          <a href={developer.github} target="_blank" rel="noopener noreferrer" className="social-pill-link">
            <span>🐙</span> GitHub Profile
          </a>
          <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-link">
            <span>💼</span> LinkedIn Profile
          </a>
          <a href={developer.studioInstagram} target="_blank" rel="noopener noreferrer" className="social-pill-link">
            <span>🍋</span> The Lemon Studio
          </a>
        </div>
      </div>
    </>
  );
}
