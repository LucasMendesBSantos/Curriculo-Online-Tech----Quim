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

export const medals = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    return { id: path, src, title: parseName(filename) };
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
