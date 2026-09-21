import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';

const TECH_LINKS = [
  { id: 'hero',           label: 'Início'         },
  { id: 'skills',         label: 'Skills'         },
  { id: 'experience',     label: 'Experiência'    },
  { id: 'education',      label: 'Formação'       },
  { id: 'certifications', label: 'Certificações'  },
  { id: 'contact',        label: 'Contato'        },
];

const CHEM_LINKS = [
  { id: 'hero',         label: 'Início'       },
  { id: 'skills',       label: 'Skills'       },
  { id: 'experience',   label: 'Experiência'  },
  { id: 'education',    label: 'Formação'     },
  { id: 'publications', label: 'Publicações'  },
  { id: 'contact',      label: 'Contato'      },
];

const ALL_SECTION_IDS = ['hero', 'skills', 'experience', 'education', 'publications', 'certifications', 'contact'];

/* Ícone do botão de alternância:
   modo Tech  → mostra ⚗️  (clica para ir para Química)
   modo Chem  → mostra 💻  (clica para ir para Computação)
*/
function ModeIcon({ mode }) {
  if (mode === 'tech') {
    return (
      <span title="Alternar para Currículo de Química" className={styles.modeIcon}>
        ⚗️
      </span>
    );
  }
  return (
    <span title="Alternar para Currículo de TI" className={styles.modeIcon}>
      💻
    </span>
  );
}

export default function Navbar() {
  const { mode, toggleMode } = useTheme();
  const activeSection = useActiveSection(ALL_SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hoveringModeBtn, setHoveringModeBtn] = useState(false);
  const [autoPeek, setAutoPeek] = useState(false);
  const showModeTip = hoveringModeBtn || autoPeek;

  // Mostra a dica automaticamente por alguns segundos ao carregar,
  // para sinalizar que o botão é clicável mesmo sem hover (ex: mobile)
  useEffect(() => {
    const showTimer = setTimeout(() => setAutoPeek(true), 1200);
    const hideTimer = setTimeout(() => setAutoPeek(false), 5200);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
      const doc   = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total ? (window.scrollY / total) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const h = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const isChem = mode === 'chem';
  const navLinks = isChem ? CHEM_LINKS : TECH_LINKS;

  return (
    <>
      {/* Barra de progresso */}
      <div className={styles.progressTrack}>
        <motion.div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      >
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a
            href="#hero"
            className={styles.logo}
            onClick={() => setMenuOpen(false)}
          >
            {isChem ? <>Lucas<span>.chem</span></> : <>Lucas<span>.dev</span></>}
          </a>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      className={styles.activeDot}
                      layoutId="navActiveDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className={styles.actions}>
            <div className={styles.themeBtnWrapper}>
              <span className={styles.pulseRing} aria-hidden="true" />

              <motion.button
                className={styles.themeBtn}
                onClick={toggleMode}
                onHoverStart={() => setHoveringModeBtn(true)}
                onHoverEnd={() => setHoveringModeBtn(false)}
                onFocus={() => setHoveringModeBtn(true)}
                onBlur={() => setHoveringModeBtn(false)}
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Alternar modo"
              >
                <ModeIcon mode={mode} />
              </motion.button>

              <AnimatePresence>
                {showModeTip && (
                  <motion.span
                    className={styles.themeTooltip}
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: [6, -3, 0], scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.9 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {isChem ? 'Clique aqui para Dev' : 'Clique aqui para Quimico'}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{    opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${styles.mobileLink} ${activeSection === link.id ? styles.mobileActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
