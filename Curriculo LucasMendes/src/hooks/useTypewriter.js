import { useState, useEffect, useRef } from 'react';

export function useTypewriter(words, { typeSpeed = 95, deleteSpeed = 55, pauseMs = 2200 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[wordIdx];

    function tick() {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          timeoutRef.current = setTimeout(() => setDeleting(true), pauseMs);
          return;
        }
        timeoutRef.current = setTimeout(tick, typeSpeed);
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
          return;
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed);
      }
    }

    timeoutRef.current = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
