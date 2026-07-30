import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { certifications } from '../../data/certifications';
import styles from './Certifications.module.css';

const AUTOPLAY_MS = 6000;

export default function Certifications() {
  const total = certifications.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next) => {
    setIndex(current => {
      const target = ((next % total) + total) % total;
      setDirection(target >= current ? 1 : -1);
      return target;
    });
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next, total]);

  if (total === 0) return null;

  const current = certifications[index];

  return (
    <section className={`section ${styles.certSection}`} id="certifications">
      <div className="container">
        <SectionHeader
          tag="Qualificações"
          title="Minhas"
          titleAccent="Certificações"
          subtitle="Cursos e certificados concluídos ao longo da minha trajetória profissional."
        />

        <ScrollReveal delay={0.1}>
          <div
            className={styles.carousel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={prev}
              aria-label="Certificado anterior"
            >
              ‹
            </button>

            <div className={styles.viewport}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={current.id}
                  className={styles.slide}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 50 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={current.src} alt={current.title} className={styles.image} loading="lazy" />
                  <figcaption className={styles.caption}>
                    <span className={styles.captionTitle}>{current.title}</span>
                    {current.issuer && <span className={styles.captionIssuer}>{current.issuer}</span>}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={next}
              aria-label="Próximo certificado"
            >
              ›
            </button>
          </div>

          <div className={styles.counter}>{index + 1} / {total}</div>

          <div className={styles.dots}>
            {certifications.map((cert, i) => (
              <button
                key={cert.id}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para o certificado: ${cert.title}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
