import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { articles, bookChapters, conferenceAbstracts } from '../../data/publications';
import styles from './Publications.module.css';

const TABS = [
  { id: 'articles',   label: 'Artigos em Periódicos',        icon: '📰', data: articles,           count: articles.length },
  { id: 'chapters',   label: 'Capítulos de Livros',          icon: '📚', data: bookChapters,       count: bookChapters.length },
  { id: 'abstracts',  label: 'Resumos em Congressos',        icon: '🎤', data: conferenceAbstracts, count: conferenceAbstracts.length },
];

/* Destaca o nome de Lucas na lista de autores */
function AuthorList({ authors }) {
  return (
    <p className={styles.authors}>
      {authors.map((a, i) => (
        <span key={i}>
          {a.isLucas
            ? <strong className={styles.authorHighlight}>{a.name}</strong>
            : <span>{a.name}</span>
          }
          {i < authors.length - 1 && '; '}
        </span>
      ))}
    </p>
  );
}

function ArticleCard({ pub, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.yearBadge}>{pub.year}</span>
        <span className={styles.typeBadge} style={{ background: 'rgba(0,207,255,0.08)', color: 'var(--accent)', borderColor: 'var(--border-2)' }}>
          Periódico
        </span>
      </div>
      <h4 className={styles.cardTitle}>{pub.title}</h4>
      {pub.titleEn && <p className={styles.cardTitleEn}>{pub.titleEn}</p>}
      <AuthorList authors={pub.authors} />
      <div className={styles.cardMeta}>
        <span className={styles.journal}>{pub.journal}</span>
        <span className={styles.metaDot}>·</span>
        <span>{pub.volume}, {pub.pages}</span>
      </div>
    </motion.div>
  );
}

function ChapterCard({ pub, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.yearBadge}>{pub.year}</span>
        <span className={styles.typeBadge} style={{ background: 'rgba(245,158,11,0.08)', color: '#f59e0b', borderColor: 'rgba(245,158,11,0.25)' }}>
          Cap. de Livro
        </span>
      </div>
      <h4 className={styles.cardTitle}>{pub.title}</h4>
      <AuthorList authors={pub.authors} />
      <div className={styles.chapterBook}>
        <span className={styles.bookIcon}>📖</span>
        <div>
          <p className={styles.bookTitle}>In: {pub.book}</p>
          <p className={styles.bookMeta}>{pub.org}</p>
          <p className={styles.bookMeta}>{pub.edition} {pub.publisher}, {pub.location}, {pub.volume}, {pub.pages}.</p>
        </div>
      </div>
    </motion.div>
  );
}

function AbstractCard({ pub, index }) {
  return (
    <motion.div
      className={`${styles.card} ${styles.cardAbstract}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.yearBadge}>{pub.year}</span>
        <span className={styles.typeBadge} style={{ background: 'rgba(34,197,94,0.08)', color: '#22c55e', borderColor: 'rgba(34,197,94,0.22)' }}>
          Congresso
        </span>
      </div>
      <h4 className={styles.cardTitle}>{pub.title}</h4>
      <AuthorList authors={pub.authors} />
      <div className={styles.cardMeta}>
        <span className={styles.journal}>{pub.event}</span>
        <span className={styles.metaDot}>·</span>
        <span>{pub.location}</span>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [activeTab, setActiveTab] = useState('articles');
  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <section className={`section ${styles.pubSection}`} id="publications">
      <div className="container">
        <SectionHeader
          tag="Produção Científica"
          title="Publicações"
          titleAccent="Científicas"
          subtitle="Artigos, capítulos de livros e apresentações em congressos nacionais e internacionais."
        />

        {/* Contador de publicações */}
        <ScrollReveal delay={0.05}>
          <div className={styles.statsRow}>
            {TABS.map(t => (
              <div key={t.id} className={styles.statBox}>
                <span className={styles.statNum}>{t.count}</span>
                <span className={styles.statLbl}>{t.icon} {t.label}</span>
              </div>
            ))}
            <div className={styles.statBox}>
              <span className={styles.statNum}>{TABS.reduce((s, t) => s + t.count, 0)}</span>
              <span className={styles.statLbl}>📊 Total</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className={styles.tabs}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
                <span className={styles.tabCount}>{tab.count}</span>
                {activeTab === tab.id && (
                  <motion.div className={styles.tabIndicator} layoutId="pubTabIndicator" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.grid}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'articles' && articles.map((pub, i) => (
              <ArticleCard key={pub.id} pub={pub} index={i} />
            ))}
            {activeTab === 'chapters' && bookChapters.map((pub, i) => (
              <ChapterCard key={pub.id} pub={pub} index={i} />
            ))}
            {activeTab === 'abstracts' && conferenceAbstracts.map((pub, i) => (
              <AbstractCard key={pub.id} pub={pub} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
