import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { LinkedInLogo, GitHubLogo } from '../ui/SocialLogos';
import { useTheme } from '../../context/ThemeContext';
import { contactItems, networks, pdfByMode } from '../../data/contact';
import styles from './Contact.module.css';

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.95 },
  visible: i => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function NetworkLogo({ type, size = 28 }) {
  if (type === 'linkedin') return <LinkedInLogo size={size} />;
  return <GitHubLogo size={size} color="#ffffff" />;
}

export default function Contact() {
  const { mode } = useTheme();
  const pdf = pdfByMode[mode];

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeader
          tag="Vamos Conversar"
          title="Entre em"
          titleAccent="Contato"
          subtitle="Aberto a oportunidades, colaborações e projetos inovadores. Vamos construir algo incrível juntos!"
        />

        <div className={styles.grid}>

          {/* ─── Coluna info ─── */}
          <div>
            <ScrollReveal>
              <p className={styles.infoTitle}>📬 Informações de Contato</p>
            </ScrollReveal>

            <div className={styles.contactList}>
              {contactItems.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.08}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={styles.contactItem}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      <ContactItemInner item={item} />
                    </a>
                  ) : (
                    <div className={styles.contactItem}>
                      <ContactItemInner item={item} />
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>

            {/* Card do PDF */}
            <ScrollReveal delay={0.3}>
              <div className={styles.pdfCard}>
                <div className={styles.pdfIcon}>📄</div>
                <div className={styles.pdfInfo}>
                  <h4>{pdf.label}</h4>
                  <p>{pdf.sublabel}</p>
                </div>
                <div className={styles.pdfActions}>
                  <Button
                    variant="primary"
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir PDF
                  </Button>
                  <Button
                    variant="secondary"
                    href={pdf.href}
                    download={pdf.download}
                  >
                    ⬇ Baixar
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ─── Cards de redes ─── */}
          <div className={styles.networksCol}>
            <ScrollReveal>
              <p className={styles.infoTitle}>🌐 Conecte-se</p>
            </ScrollReveal>

            <div className={styles.networksList}>
              {networks.map((net, i) => (
                <motion.div
                  key={net.id}
                  className={`${styles.networkCard} ${styles[net.id]}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-accent-lg)' }}
                >
                  {/* Topo */}
                  <div className={styles.netTop}>
                    <div className={styles.netLogo}>
                      <div className={`${styles.netLogoIcon} ${styles[`logo_${net.id}`]}`}>
                        <NetworkLogo type={net.logoType} size={26} />
                      </div>
                      <div>
                        <h4 className={styles.netName}>{net.platform}</h4>
                        <p className={styles.netSub}>{net.subtitle}</p>
                      </div>
                    </div>
                    <a
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.netBtn}
                      style={{ '--net-color': net.color }}
                    >
                      {net.id === 'linkedin'
                        ? <><LinkedInLogo size={14} /> {net.btnLabel}</>
                        : <><GitHubLogo size={14} color="currentColor" /> {net.btnLabel}</>
                      }
                    </a>
                  </div>

                  {/* QR + label */}
                  <div className={styles.netBottom}>
                    <div className={styles.qrWrapper}>
                      <QRCodeSVG
                        value={net.url}
                        size={72}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="M"
                      />
                    </div>
                    <p className={styles.qrLabel}>
                      <strong>Escaneie o QR Code</strong> ou clique no botão
                      para acessar meu perfil {net.platform}.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItemInner({ item }) {
  return (
    <>
      <div className={styles.contactIcon}>{item.icon}</div>
      <div>
        <div className={styles.contactLabel}>{item.label}</div>
        <div className={styles.contactValue}>{item.value}</div>
      </div>
      {item.href && <span className={styles.contactArrow}>→</span>}
    </>
  );
}
