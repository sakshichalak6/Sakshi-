import React from 'react';
import { IslandSVGs } from './IslandModels.js';

export function WorldLocation({ location, isActive, onSelect, onHover }) {
  const getCategoryEmoji = (id) => {
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
  };

  const svgMarkup = IslandSVGs[location.id] || IslandSVGs.workspace;

  return (
    <div
      className={`landmark-node node-${location.id} ${isActive ? 'active-selected' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${location.name} - ${location.category}`}
      id={`landmark-${location.id}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(location.id);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(location.id);
        }
      }}
      onMouseEnter={() => onHover && onHover()}
    >
      <div className="landmark-billboard-badge">
        <span className="badge-icon">{getCategoryEmoji(location.id)}</span>
        <span>{location.name}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
    </div>
  );
}
