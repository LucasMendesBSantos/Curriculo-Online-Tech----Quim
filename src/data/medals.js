// Carrega automaticamente todas as imagens da pasta Medalhas.
const modules = import.meta.glob('../components/Medalhas/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function parseName(filename) {
  const withoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');
  return withoutExt.replace(/^Selo\s+/i, '').trim();
}

// Link do selo/badge (ex: Credly) para abrir ao clicar. Chave = nome do arquivo.
const MEDAL_LINKS = {
  'Selo Digital Safety -- Solo.png':
    'https://www.credly.com/badges/23828b1e-643b-446a-a1cb-a49c10dab842',
};

export const medals = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    return { id: path, src, title: parseName(filename), url: MEDAL_LINKS[filename] };
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
