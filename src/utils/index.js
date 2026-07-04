export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
