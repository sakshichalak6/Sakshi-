import React, { useRef, useEffect } from 'react';
import { WorldLocation } from './WorldLocation.jsx';
import { IslandSVGs } from './IslandModels.js';
import { portfolioData } from '../data/portfolio.js';

export function MiniatureWorld({ activeLocation, onSelectLocation, onHoverLocation }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = 58 - y * 10;
      const rotZ = -45 + x * 10;
      stage.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg)`;
    };

    const handleMouseLeave = () => {
      stage.style.transform = `rotateX(58deg) rotateZ(-45deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="world-viewport-section" id="world-viewport-section" aria-label="Interactive Isometric World">
      <div className="world-container" id="world-container" ref={containerRef}>
        {/* Sky Layer (Drifting clouds & lemon balloon) */}
        <div className="sky-layer">
          <div className="drifting-cloud cloud-1" />
          <div className="drifting-cloud cloud-2" />
          <div className="drifting-cloud cloud-3" />

          <div
            className="floating-lemon-balloon"
            onClick={() => onSelectLocation('lemon-studio')}
            title="Visit The Lemon Studio"
            role="button"
            tabIndex={0}
          >
            <div className="balloon-body" />
            <div className="balloon-basket" />
          </div>
        </div>

        {/* 3D Isometric Island Stage */}
        <div className="island-stage" id="island-stage" ref={stageRef}>
          {/* Island Ground with Winding Paths & Lake */}
          <div
            className="island-ground"
            dangerouslySetInnerHTML={{ __html: IslandSVGs.terrain }}
          />

          {/* 7 Landmarks */}
          {portfolioData.islandLocations.map(location => (
            <WorldLocation
              key={location.id}
              location={location}
              isActive={activeLocation === location.id}
              onSelect={onSelectLocation}
              onHover={() => onHoverLocation && onHoverLocation(540)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
