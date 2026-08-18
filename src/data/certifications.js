// Carrega automaticamente todas as imagens da pasta Certifications.
const modules = import.meta.glob('../components/Certifications/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Nomes de arquivo que não seguem o padrão "Certificado X - Emissor" recebem
// título/emissor definidos manualmente aqui em vez de serem deduzidos.
const FILENAME_OVERRIDES = {
  'Aplicação Pratica da Inteligencia Artificial_page-0001.jpg':
    { title: 'Aplicação Prática da Inteligência Artificial', issuer: '' },
  'Lucas Mendes Brito dos Santos TypeScript_page-0001.jpg':
    { title: 'TypeScript', issuer: '' },
  'Lucas Mendes Brito dos Santos introdução ao linux.png':
    { title: 'Introdução ao Linux', issuer: '' },
  "Santader- Introdução aos fundamentos da IA Generativa_page-0001.jpg":
    { title: 'Introdução aos Fundamentos da IA Generativa', issuer: 'Santander' },
  "WGESAD'25 CERTIFICADO - Lucas Mendes Brito dos Santos _page-0001.jpg":
    { title: "WGESAD'25", issuer: 'Certificado de Participação' },
  'Formação Cientista de Dados O Curso Completo 2026_page-0001.jpg':
    { title: 'Formação Cientista de Dados', issuer: 'O Curso Completo 2026' },
  'Desenvolvimento Android Completo - Kotlin & Java_page-0001.jpg':
    { title: 'Desenvolvimento Android Completo - Kotlin & Java', issuer: 'Udemy' },
  'Aprenda Flutter e Desenvolva Apps Para Android e IOS_page-0001.jpg':
    { title: 'Aprenda Flutter e Desenvolva Apps Para Android e IOS', issuer: 'Udemy' },
};

// "#" não pode aparecer no nome do arquivo (quebra a resolução de URL do bundler),
// então o título é normalizado de volta aqui só para exibição.
const TITLE_OVERRIDES = {
  'CSharp-.NET': 'C# / .NET',
};

function parseName(filename) {
  const withoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');
  const withoutPage = withoutExt.replace(/_page-\d+$/i, '');
  const withoutPrefix = withoutPage.replace(/^Certificado\s+/i, '');
  const lastDash = withoutPrefix.lastIndexOf('-');

  const rawTitle = lastDash === -1 ? withoutPrefix.trim() : withoutPrefix.slice(0, lastDash).trim();
  const issuer = lastDash === -1 ? '' : withoutPrefix.slice(lastDash + 1).trim();

  return { title: TITLE_OVERRIDES[rawTitle] ?? rawTitle, issuer };
}

export const certifications = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    const { title, issuer } = FILENAME_OVERRIDES[filename] ?? parseName(filename);
    return { id: path, src, title, issuer };
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
