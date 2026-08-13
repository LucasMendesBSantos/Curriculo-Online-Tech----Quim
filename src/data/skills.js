/* ── MODO TECH ─────────────────────────────────────────────── */
export const skillCategories = [
  {
    id: 'languages',
    label: 'Linguagens',
    icon: '🖥️',
    skills: [
      { name: 'C',          icon: '⚙️', level: 75 },
      { name: 'C++',        icon: '⚙️', level: 70 },
      { name: 'C#',         icon: '🔷', level: 88 },
      { name: 'Java',       icon: '☕', level: 72 },
      { name: 'JavaScript', icon: '🟨', level: 90 },
      { name: 'Python',     icon: '🐍', level: 88 },
    ],
  },
  {
    id: 'frontend',
    label: 'Front-End & UI',
    icon: '🎨',
    skills: [
      { name: 'HTML5',        icon: '🌐', level: 95 },
      { name: 'CSS3',         icon: '🎨', level: 92 },
      { name: 'React',        icon: '⚛️', level: 85 },
      { name: 'Angular',      icon: '🅰️', level: 88 },
      { name: 'Bootstrap',    icon: '🅱️', level: 88 },
      { name: 'Tailwind CSS', icon: '💨', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End & Dados',
    icon: '🔧',
    skills: [
      { name: 'Node.js',    icon: '🟢', level: 78 },
      { name: '.NET',       icon: '🟣', level: 88 },
      { name: 'APIs REST',  icon: '🔌', level: 82 },
      { name: 'SQL',        icon: '🗄️', level: 74 },
      { name: 'MySQL',      icon: '🐬', level: 65 },
      { name: 'PostgreSQL', icon: '🐘', level: 72 },
      { name: 'SQLite',     icon: '🗃️', level: 76 },
      { name: 'AWS',        icon: '☁️', level: 65 },
    ],
  },
  {
    id: 'cybersec',
    label: 'Cibersegurança & SOC',
    icon: '🛡️',
    groups: [
      {
        title: 'SOC & Investigação em Ambientes Linux',
        skills: [
          { name: 'Análise de Logs do Linux (syslog, auth.log, journalctl, auditd)', icon: '🐧', level: 82 },
          { name: 'Resposta a Incidentes e Investigação de Processos (lsof, netstat/ss, ps, top)', icon: '🔎', level: 78 },
          { name: 'Detecção de Persistência (Cron, Systemd, WebShells, Bash)', icon: '🕵️', level: 75 },
          { name: 'Análise de Tráfego e Captura de Pacotes (tcpdump, Wireshark)', icon: '📡', level: 80 },
          { name: 'Hardening e Controle de Acesso (UFW/iptables, sudoers)', icon: '🔒', level: 77 },
        ],
      },
      {
        title: 'SOC & Investigação em Ambientes Windows',
        skills: [
          { name: 'Windows Event Logs & Sysmon (EventIDs de autenticação, processos, privilégios)', icon: '🪟', level: 80 },
          { name: 'Investigação de Processos e Artefatos (Sysinternals: Procmon, Autoruns, Process Hacker)', icon: '🧰', level: 76 },
          { name: 'Persistência e Artefatos do Windows (Registry, Scheduled Tasks, Prefetch, Shimcache, Amcache)', icon: '🗂️', level: 74 },
          { name: 'Auditoria de Execução (PowerShell Script Block & Command-Line Logging)', icon: '💠', level: 78 },
          { name: 'Contenção de Endpoint e Threat Hunting (EDR/SIEM, Isolamento de Host)', icon: '🎯', level: 79 },
        ],
      },
      {
        title: 'Habilidades Gerais de SOC & Operação',
        skills: [
          { name: 'Triagem e Análise de Alertas em SIEM', icon: '🚨', level: 83 },
          { name: 'Análise e Validação de Indicadores de Comprometimento (IoCs)', icon: '🧩', level: 80 },
          { name: 'Mapeamento de Ameaças (MITRE ATT&CK & Cyber Kill Chain)', icon: '🗺️', level: 85 },
        ],
      },
    ],
  },
  {
    id: 'other',
    label: 'Outros',
    icon: '🌟',
    skills: [
      { name: 'Manutenção de Hardware', icon: '🔩', level: 88 },
      { name: 'Engenharia de Prompts',  icon: '🤖', level: 90 },
      { name: 'IA Generativa',          icon: '🧠', level: 80 },
      { name: 'Ciência de Dados',       icon: '📊', level: 72 },
      { name: 'Química',                icon: '⚗️', level: 84 },
    ],
  },
];

/* ── MODO QUÍMICA ──────────────────────────────────────────── */
export const chemSkillCategories = [
  {
    id: 'analytical',
    label: 'Química Analítica',
    icon: '🔬',
    skills: [
      { name: 'Química Analítica',   icon: '⚗️', level: 88 },
      { name: 'Espectrometria',      icon: '📡', level: 82 },
      { name: 'Cromatografia',       icon: '🔍', level: 79 },
      { name: 'Titulometria',        icon: '🧪', level: 85 },
    ],
  },
  {
    id: 'quality',
    label: 'Qualidade & Normas ISO',
    icon: '✅',
    skills: [
      { name: 'ISO 9001 — Qualidade',          icon: '📋', level: 92 },
      { name: 'ISO 14001 — Ambiental',         icon: '🌿', level: 88 },
      { name: 'ISO 45001 — Saúde & Seg.',      icon: '🦺', level: 88 },
      { name: 'ISO 22000 — Alimentos',         icon: '🍽️', level: 85 },
    ],
  },
  {
    id: 'process',
    label: 'Processos & Melhoria',
    icon: '⚙️',
    skills: [
      { name: 'Lean Six Sigma Black Belt', icon: '🥋', level: 92 },
      { name: 'Metodologia DMAIC',         icon: '📊', level: 90 },
      { name: 'Análise Estatística',       icon: '📈', level: 85 },
      { name: 'Melhoria Contínua',         icon: '🔄', level: 88 },
    ],
  },
  {
    id: 'lab',
    label: 'Laboratório & Segurança',
    icon: '🧬',
    skills: [
      { name: 'Boas Práticas de Lab.',  icon: '📝', level: 90 },
      { name: 'Segurança Química',      icon: '⚠️', level: 88 },
      { name: 'Gestão de Resíduos',     icon: '♻️', level: 82 },
      { name: 'NR-09 / NR-15',          icon: '🦺', level: 85 },
    ],
  },
];
