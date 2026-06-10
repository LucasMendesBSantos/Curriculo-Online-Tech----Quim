export const contactItems = [
  {
    id: 'email-uece',
    icon: '✉️',
    label: 'E-mail Acadêmico',
    value: 'lucasmendes.brito@aluno.uece.br',
    href: 'mailto:lucasmendes.brito@aluno.uece.br',
  },
  {
    id: 'email-gmail',
    icon: '📧',
    label: 'Gmail',
    value: 'lucasmendessdev@gmail.com',
    href: 'mailto:lucasmendessdev@gmail.com',
  },
  {
    id: 'whatsapp',
    icon: '📱',
    label: 'WhatsApp / Telefone',
    value: '(85) 98778-8112',
    href: 'https://wa.me/5585987788112',
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Localização',
    value: 'Fortaleza — CE, Brasil',
    href: null,
  },
];

export const networks = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    subtitle: 'Perfil Profissional',
    logoType: 'linkedin',
    url: 'https://www.linkedin.com/in/lucas-mendes-brito-b87ab8199/',
    btnLabel: 'Conectar',
    color: '#0077b5',
  },
  {
    id: 'github',
    platform: 'GitHub',
    subtitle: 'Repositórios & Projetos',
    logoType: 'github',
    url: 'https://github.com/LucasMendesBrito',
    btnLabel: 'Ver Projetos',
    color: 'var(--accent)',
  },
];

/* PDF por modo */
export const pdfByMode = {
  tech: {
    href:     '/curriculo-lucas-mendes.pdf',
    download: 'Currículo_Lucas_Mendes_TI.pdf',
    label:    'Currículo — Tecnologia da Informação',
    sublabel: 'Desenvolvedor Full Stack · Ciências da Computação',
  },
  chem: {
    href:     '/curriculo-quimica.pdf',
    download: 'Currículo_Lucas_Mendes_Quimica.pdf',
    label:    'Currículo — Assistente Químico',
    sublabel: 'Auditor ISO · Black Belt Lean Six Sigma',
  },
};
