import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { company, experiences, chemCompany, chemExperiences } from '../../data/experience';
import styles from './Experience.module.css';

const BADGE_COLORS = {
  blue:   { bg: 'rgba(0,112,240,0.10)',  color: '#3399ff', border: 'rgba(0,112,240,0.25)' },
  purple: { bg: 'rgba(140,0,255,0.08)', color: '#b57bff', border: 'rgba(140,0,255,0.22)' },
  cyan:   { bg: 'rgba(0,207,255,0.08)', color: 'var(--accent)', border: 'rgba(0,207,255,0.22)' },
  gold:   { bg: 'rgba(245,158,11,0.08)', color: '#f59e0b', border: 'rgba(245,158,11,0.22)' },
  red:    { bg: 'rgba(239,68,68,0.08)',  color: '#f87171', border: 'rgba(239,68,68,0.22)'  },
  green:  { bg: 'rgba(34,197,94,0.08)', color: '#22c55e', border: 'rgba(34,197,94,0.22)'  },
};

export default function Experience() {
  const { mode } = useTheme();
  const isChem = mode === 'chem';

  const currentCompany     = isChem ? chemCompany     : company;
  const currentExperiences = isChem ? chemExperiences : experiences;

  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader
          tag="Trajetória Profissional"
          title="Experiência"
          titleAccent="Profissional"
          subtitle={
            isChem
              ? 'Atuações em qualidade, auditoria e pesquisa científica de alto impacto.'
              : 'Projetos desenvolvidos com foco em inovação, usabilidade e impacto real.'
          }
        />

        {/* Cabeçalho da empresa/área */}
        <ScrollReveal delay={0.1}>
          <div className={styles.companyCard}>
            <div className={styles.companyLogo}>
              {isChem ? '⚗️' : 'QT'}
            </div>
            <div className={styles.companyInfo}>
              <h3>{currentCompany.name}</h3>
              <p>
                <span className={styles.companyRole}>{currentCompany.role}</span>
                <span className={styles.companyMeta}> · {currentCompany.location} · {currentCompany.period}</span>
              </p>
            </div>
            <div className={styles.companyBadge}>
              <span className={styles.pulse} />
              Em andamento
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {currentExperiences.map((exp, i) => {
            const isOpen = expanded === `${mode}-${exp.id}`;
            const bs = BADGE_COLORS[exp.badgeColor] || BADGE_COLORS.cyan;

            return (
              <ScrollReveal key={`${mode}-${exp.id}`} delay={i * 0.1}>
                <div className={styles.timelineItem}>
                  <motion.div
                    className={`${styles.dot} ${isOpen ? styles.dotActive : ''}`}
                    whileHover={{ scale: 1.4 }}
                  >
                    <span>{exp.icon}</span>
                  </motion.div>

                  <motion.div
                    className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    onClick={() => setExpanded(isOpen ? null : `${mode}-${exp.id}`)}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleGroup}>
                        <h3 className={styles.cardTitle}>{exp.title}</h3>
                        <p className={styles.cardSubtitle}>{exp.subtitle}</p>
                      </div>
                      <div className={styles.cardRight}>
                        <span className={styles.badge} style={{ background: bs.bg, color: bs.color, borderColor: bs.border }}>
                          {exp.badge}
                        </span>
                        <motion.span
                          className={styles.chevron}
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{    height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className={styles.cardBody}>
                            <div className={styles.highlight}>
                              <span className={styles.highlightIcon}>⚡</span>
                              {exp.highlight}
                            </div>
                            <p className={styles.description}>{exp.description}</p>
                            <div className={styles.tags}>
                              {exp.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
