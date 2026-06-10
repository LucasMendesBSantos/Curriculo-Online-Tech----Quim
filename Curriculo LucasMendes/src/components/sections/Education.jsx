import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';
import {
  academicItems, certifications,
  chemAcademicItems, chemCertifications, chemCourses,
} from '../../data/education';
import styles from './Education.module.css';

const CERT_BADGE_STYLES = {
  harvard:       { bg: 'rgba(220,38,38,0.08)',  color: '#ef4444', border: 'rgba(220,38,38,0.22)' },
  iso:           { bg: 'rgba(34,197,94,0.08)',  color: '#22c55e', border: 'rgba(34,197,94,0.22)' },
  lean:          { bg: 'rgba(245,158,11,0.08)', color: '#f59e0b', border: 'rgba(245,158,11,0.22)' },
  international: { bg: 'rgba(239,68,68,0.08)',  color: '#f87171', border: 'rgba(239,68,68,0.22)' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const { mode } = useTheme();
  const isChem = mode === 'chem';

  const academic = isChem ? chemAcademicItems : academicItems;
  const certs    = isChem ? chemCertifications : certifications;

  return (
    <section className={`section section--alt ${styles.edu}`} id="education">
      <div className="container">
        <SectionHeader
          tag="Conhecimento Acadêmico"
          title="Formação &"
          titleAccent="Certificações"
          subtitle={
            isChem
              ? 'Formação em Química combinada com certificações de qualidade e pesquisa de nível mundial.'
              : 'Base acadêmica sólida combinada com certificações internacionais de prestígio.'
          }
        />

        {/* Grade principal: formação + certificações */}
        <div className={styles.grid}>

          <div>
            <ScrollReveal>
              <div className={styles.colTitle}>
                <span>{isChem ? '⚗️' : '🎓'}</span>
                {isChem ? 'Formação' : 'Formação Acadêmica'}
              </div>
            </ScrollReveal>

            <motion.div
              key={mode}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {academic.map(item => (
                <motion.div key={item.id} variants={itemVariants}>
                  <div className={styles.eduCard}>
                    <div className={styles.eduCardAccent} />
                    <span className={styles.eduIcon}>{item.icon}</span>
                    <div className={styles.eduTitle}>{item.title}</div>
                    <div className={styles.eduInstitution}>{item.institution}</div>
                    <div className={styles.eduPeriod}>{item.period}</div>
                    {item.detail && <p className={styles.eduDetail}>{item.detail}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <ScrollReveal>
              <div className={styles.colTitle}>
                <span>🏆</span> Certificações de Destaque
              </div>
            </ScrollReveal>

            <motion.div
              key={`certs-${mode}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {certs.map(cert => {
                const bs = CERT_BADGE_STYLES[cert.badgeType] || CERT_BADGE_STYLES.iso;
                return (
                  <motion.div key={cert.id} variants={itemVariants}>
                    <div className={styles.certCard}>
                      <div className={styles.certGlow} />
                      <span
                        className={styles.certBadge}
                        style={{ background: bs.bg, color: bs.color, borderColor: bs.border }}
                      >
                        {cert.badge}
                      </span>
                      <div className={styles.certTitle}>{cert.title}</div>
                      <div className={styles.certIssuer}>{cert.issuer}</div>
                      {cert.detail && <p className={styles.certDetail}>{cert.detail}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Cursos e Eventos — apenas modo química */}
        {isChem && (
          <ScrollReveal delay={0.1}>
            <div className={styles.coursesSection}>
              <div className={styles.coursesSectionTitle}>
                <span>📅</span> Cursos & Eventos Científicos
              </div>
              <div className={styles.coursesGrid}>
                {chemCourses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    className={styles.courseCard}
                    initial={{ opacity: 0, scale: 0.94, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    whileHover={{ y: -4, borderColor: 'var(--border-3)' }}
                  >
                    <div className={styles.courseHeader}>
                      <span className={styles.courseIcon}>{course.icon}</span>
                      <span className={styles.coursePeriod}>{course.period}</span>
                      {course.hours && (
                        <span className={styles.courseHours}>{course.hours}</span>
                      )}
                      {course.type && (
                        <span className={styles.courseType}>{course.type}</span>
                      )}
                    </div>
                    <p className={styles.courseTitle}>{course.title}</p>
                    <p className={styles.courseInst}>
                      {course.institution}
                      {course.acronym && <span className={styles.courseAcronym}> · {course.acronym}</span>}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
