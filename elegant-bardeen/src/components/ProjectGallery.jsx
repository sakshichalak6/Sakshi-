import React from 'react';
import { portfolioData } from '../data/portfolio.js';

export function ProjectGallery() {
  const { projects } = portfolioData;

  return (
    <>
      <div className="panel-section-card">
        <h3 className="panel-section-title">
          <span>🏛️</span> Project Plaza Pedestals
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-text)', marginBottom: '16px' }}>
          Curated personal builds, engineering coursework demonstrations, and design experiments.
        </p>
      </div>

      {projects.map(proj => (
        <div key={proj.id} className="panel-section-card" style={{ padding: 0, overflow: 'hidden' }}>
          {proj.image && (
            <img
              src={proj.image}
              alt={proj.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--color-subtle-border)' }}
              loading="lazy"
            />
          )}
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="spec-badge" style={{ background: 'var(--color-soft-butter)', color: 'var(--color-forest-green)' }}>
                {proj.tag}
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-muted-text)' }}>
                {proj.category}
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
              {proj.title}
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-dark-text)', marginBottom: '12px', lineHeight: 1.5 }}>
              {proj.overview}
            </p>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-forest-green)', marginBottom: '4px' }}>
                KEY FEATURES
              </div>
              <ul style={{ paddingLeft: '18px', fontSize: '0.85rem', color: 'var(--color-muted-text)', lineHeight: 1.5 }}>
                {proj.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-forest-green)', marginBottom: '6px' }}>
                TECH STACK
              </div>
              <div className="spec-badge-group">
                {proj.techStack.map(t => (
                  <span key={t} className="spec-badge">{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px', borderTop: '1px solid var(--color-subtle-border)', paddingTop: '14px' }}>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.88rem' }}
              >
                GitHub Repository ↗
              </a>
              {proj.demo && (
                <a
                  href={proj.demo}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.88rem' }}
                >
                  Live Interactive Demo ✨
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
