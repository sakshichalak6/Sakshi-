import React from 'react';

export function Hero({ onExplore, onViewProjects }) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-pill-badge">
        <span>✨</span> Welcome to Sakshi's Little World
      </div>

      <h1 className="hero-greeting" id="hero-title">
        Hi, I'm <span class="lemon-highlight">Sakshi.</span>
      </h1>

      <p className="hero-headline">
        I build things for the web, connect ideas with technology, and turn curiosity into experiences.
      </p>

      <div className="hero-subtitle">
        <span>ENTC Engineering Student</span>
        <span className="dot-separator">•</span>
        <span>Web Developer in Progress</span>
        <span className="dot-separator">•</span>
        <span>Cloud & IoT Explorer</span>
        <span className="dot-separator">•</span>
        <span>Artist</span>
      </div>

      <div className="hero-cta-group">
        <button className="btn-primary" onClick={onExplore}>
          <span>🧭</span> Explore My World
        </button>
        <button className="btn-secondary" onClick={onViewProjects}>
          <span>🏛️</span> View My Projects
        </button>
      </div>

      <div className="hero-tooltip-hint" onClick={onExplore} role="button" tabIndex={0}>
        <span>Your next adventure starts here</span>
        <span>↘</span>
      </div>
    </section>
  );
}
