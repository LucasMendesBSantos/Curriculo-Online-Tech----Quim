import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>
          Lucas <span>Mendes</span> Brito dos Santos
        </p>
        <p className={styles.roles}>
          Ciências da Computação · Desenvolvedor Full Stack · Químico
        </p>
        <div className={styles.divider} />
        <p className={styles.copy}>
          © {year} · Todos os direitos reservados · Fortaleza, CE
        </p>
      </div>
    </footer>
  );
}
