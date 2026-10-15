import { useState, useCallback } from 'react';
import { soundManager } from '../components/AudioSystem.js';

export function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = useCallback(() => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
    return newState;
  }, []);

  const playHoverPop = useCallback((pitch = 540) => {
    soundManager.playHoverPop(pitch);
  }, []);

  const playChime = useCallback((freq = 620, duration = 0.28) => {
    soundManager.playChime(freq, duration);
  }, []);

  const playSuccessArpeggio = useCallback(() => {
    soundManager.playSuccessArpeggio();
  }, []);

  return {
    soundEnabled,
    toggleSound,
    playHoverPop,
    playChime,
    playSuccessArpeggio
  };
}
