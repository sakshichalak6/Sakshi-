/**
 * AudioSystem.js
 * Lightweight, procedural Web Audio API sound generator.
 * Produces cozy, gentle marimba pops, water drop chimes, and soft clicks without external audio files.
 */

class SoundEffectsManager {
  constructor() {
    this.ctx = null;
    this.enabled = true; // Can be toggled by the user
    this.initAudioContext = this.initAudioContext.bind(this);
  }

  initAudioContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.initAudioContext();
      this.playChime(660, 0.12);
    }
    return this.enabled;
  }

  // Soft wooden marimba pop (on hover / button focus)
  playHoverPop(pitch = 520) {
    if (!this.enabled) return;
    this.initAudioContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.5, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // Cozy gentle water droplet chime (on landmark click / modal open)
  playChime(freq = 587.33, duration = 0.25) {
    if (!this.enabled) return;
    this.initAudioContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration * 0.3);
      osc.frequency.exponentialRampToValueAtTime(freq, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Fallback
    }
  }

  // Sweet multi-note success chord (on copy email or special action)
  playSuccessArpeggio() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playChime(freq, 0.22);
      }, index * 60);
    });
  }
}

export const soundManager = new SoundEffectsManager();
