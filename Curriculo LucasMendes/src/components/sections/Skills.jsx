import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import { skillCategories, chemSkillCategories } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const { mode } = useTheme();
  const isChem = mode === 'chem';
  const categories = isChem ? chemSkillCategories : skillCategories;

  const [activeTab, setActiveTab] = useState(categories[0].id);

  const currentTab = categories.find(c => c.id === activeTab) ?? categories[0];
  const safeActiveTab = categories.some(c => c.id === activeTab) ? activeTab : categories[0].id;

  return (
    <section className={`section section--alt ${styles.skills}`} id="skills">
      <div className="container">
        <SectionHeader
          tag="Competências Técnicas"
          title="Minhas"
          titleAccent="Skills"
          subtitle={
            isChem
              ? 'Competências laboratoriais, de qualidade e gestão de processos.'
              : 'Tecnologias e ferramentas que utilizo para transformar ideias em produtos digitais de alto impacto.'
          }
        />

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className={styles.tabs}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.tab} ${safeActiveTab === cat.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.icon}</span>
                {cat.label}
                {safeActiveTab === cat.id && (
                  <motion.div className={styles.tabIndicator} layoutId={`tabIndicator-${mode}`} />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${safeActiveTab}`}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {currentTab.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.04 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{skill.icon}</span>
                  <span className={styles.cardName}>{skill.name}</span>
                  <span className={styles.cardLevel}>{skill.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Todos os chips */}
        <ScrollReveal delay={0.2}>
          <div className={styles.allSection}>
            <p className={styles.allTitle}>Todas as competências</p>
            <div className={styles.allChips}>
              {categories.flatMap(cat => cat.skills).map(skill => (
                <motion.span
                  key={`${mode}-${skill.name}`}
                  className={styles.chip}
                  whileHover={{ scale: 1.08, borderColor: 'var(--accent)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon} {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
