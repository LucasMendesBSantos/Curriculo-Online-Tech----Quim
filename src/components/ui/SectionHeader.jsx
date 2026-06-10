import ScrollReveal from './ScrollReveal';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ tag, title, titleAccent, subtitle }) {
  return (
    <ScrollReveal>
      <div className={styles.header}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h2 className={styles.title}>
          {title}{' '}
          {titleAccent && <span className={styles.accent}>{titleAccent}</span>}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
}
