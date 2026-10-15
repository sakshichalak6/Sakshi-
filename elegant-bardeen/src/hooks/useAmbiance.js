import { useState, useEffect } from 'react';

export function useAmbiance(defaultMode = 'day') {
  const [ambiance, setAmbianceState] = useState(defaultMode);

  useEffect(() => {
    document.body.setAttribute('data-ambiance', ambiance);
  }, [ambiance]);

  const setAmbiance = (mode) => {
    setAmbianceState(mode);
  };

  return { ambiance, setAmbiance };
}
