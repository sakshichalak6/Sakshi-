import React from 'react';
import { portfolioData } from '../data/portfolio.js';

export function SkillList() {
  const { skills } = portfolioData;

  return (
    <div className="panel-section-card">
      <h3 className="panel-section-title">
        <span>💻</span> Things I Build
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--color-dark-text)', marginBottom: '16px' }}>
        Exploring responsive layouts, accessible component patterns, and creative frontend engineering.
        Here is a clear snapshot of tools I've put to work in projects, alongside technologies I am actively studying.
      </p>

      <div className="skills-column-container">
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-forest-green)', marginBottom: '8px' }}>
            ✅ Technologies Used in Projects
          </div>
          <div className="skills-pill-group">
            {skills.usedInProjects.map(s => (
              <span key={s.name} className="skill-tag used">
                <strong>{s.name}</strong> · {s.level}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '10px' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#4C3C78', marginBottom: '8px' }}>
            🌱 Currently Learning & Exploring
          </div>
          <div className="skills-pill-group">
            {skills.currentlyLearning.map(s => (
              <span key={s.name} className="skill-tag learning">
                <strong>{s.name}</strong> ({s.focus})
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
