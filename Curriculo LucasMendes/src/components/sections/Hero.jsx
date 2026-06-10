import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useTheme } from '../../context/ThemeContext';
import { scrollToSection } from '../../utils/index';
import Button from '../ui/Button';
import profileTech from '../../assets/profile.jpg';
import profileChem from '../../assets/profile-chem.png';
import styles from './Hero.module.css';

const TECH_ROLES = [
  'Cientista da Computação',
  'Desenvolvedor Full Stack',
  'Químico',
  'Engenheiro de Prompts',
];

const CHEM_ROLES = [
  'Químico',
  'Assistente Químico',
  'Auditor ISO',
  'Black Belt Lean Six Sigma',
];

const TECH_ORBS = ['⚛️', '🟨', '🌐', '🟢', '⚙️', '🎨'];
const CHEM_ORBS = ['⚗️', '🔬', '🧪', '⚡', '🧬', '📊'];

const TECH_STATS = [
  { num: '4+',  label: 'Projetos'  },
  { num: '15+', label: 'Skills'    },
  { num: '2+',  label: 'Anos'      },
];

const CHEM_STATS = [
  { num: '4',   label: 'ISO Normas' },
  { num: 'BBT', label: 'Six Sigma'  },
  { num: '2022', label: 'Harvard'   },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { mode } = useTheme();
  const isChem = mode === 'chem';

  const roles = isChem ? CHEM_ROLES : TECH_ROLES;
  const orbs  = isChem ? CHEM_ORBS  : TECH_ORBS;
  const stats = isChem ? CHEM_STATS : TECH_STATS;

  const typed = useTypewriter(roles);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / rect.height) * 12,
      y: ((e.clientX - cx) / rect.width)  * -12,
    });
  }
  function handleMouseLeave() { setTilt({ x: 0, y: 0 }); }

  return (
    <section className={`section ${styles.hero}`} id="hero">
      <div className={styles.heroBg} />

      <div className="container">
        <div className={styles.grid}>

          {/* ─── Texto ─── */}
          <motion.div
            className={styles.content}
            key={mode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.badge} variants={itemVariants}>
              <span className={styles.badgeDot} />
              {isChem ? 'Aberto a oportunidades na área química' : 'Disponível para novos projetos'}
            </motion.div>

            <motion.p className={styles.greeting} variants={itemVariants}>
              Olá, eu sou
            </motion.p>

            <motion.h1 className={styles.name} variants={itemVariants}>
              Lucas{' '}
              <span className={styles.nameAccent}>Mendes</span>
              <br />
              Brito dos Santos
            </motion.h1>

            <motion.div className={styles.typewriterWrap} variants={itemVariants}>
              <span className={styles.typewriterLabel}>I&apos;m a&nbsp;</span>
              <span className={styles.typewriterText}>{typed}</span>
              <span className={styles.cursor} />
            </motion.div>

            <motion.p className={styles.bio} variants={itemVariants}>
              {isChem
                ? 'Químico com formação técnica e experiência em análise e controle de qualidade. Certificado Black Belt em Lean Six Sigma e Auditor Interno do SGI em 4 normas ISO, com passagem pelo programa da Harvard Medical School & Brigham and Women\'s Hospital.'
                : 'Desenvolvedor apaixonado por criar soluções digitais que unem tecnologia e impacto real. Com background em Ciências da Computação e Química, conecto mundos analíticos e criativos para entregar produtos inovadores, responsivos e centrados no usuário.'
              }
            </motion.p>

            <motion.div className={styles.cta} variants={itemVariants}>
              <Button onClick={() => scrollToSection('experience')}>
                {isChem ? '🔬 Ver Experiência' : '🚀 Ver Projetos'}
              </Button>
              <Button
                variant="secondary"
                href={isChem ? '/curriculo-quimica.pdf' : '/curriculo-lucas-mendes.pdf'}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Ver Currículo PDF
              </Button>
              <Button
                variant="ghost"
                href={isChem ? '/curriculo-quimica.pdf' : '/curriculo-lucas-mendes.pdf'}
                download={isChem ? 'Currículo_Lucas_Mendes_Quimica.pdf' : 'Currículo_Lucas_Mendes_TI.pdf'}
              >
                ⬇ Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* ─── Foto ─── */}
          <motion.div
            className={styles.photoCol}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {orbs.map((orb, i) => (
              <div
                key={i}
                className={styles.orb}
                style={{
                  '--orb-delay':    `${i * -1.5}s`,
                  '--orb-duration': `${7 + i * 0.8}s`,
                  '--orb-radius':   i % 2 === 0 ? '130px' : '165px',
                  '--orb-start':    `${i * 60}deg`,
                }}
              >
                {orb}
              </div>
            ))}

            <motion.div
              ref={cardRef}
              className={styles.photoCard}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX: tilt.x, rotateY: tilt.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={styles.glowRing} />
              <motion.img
                key={mode}
                src={isChem ? profileChem : profileTech}
                alt="Lucas Mendes Brito dos Santos"
                className={styles.photo}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>

            <motion.div
              className={styles.statsCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {stats.map(s => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollToSection('skills')}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </motion.div>
    </section>
  );
}
