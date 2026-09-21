# 🎓 Currículo Online — Tech & Química

Portfólio pessoal interativo de **Lucas Mendes Brito dos Santos**, com um diferencial: um único site que alterna entre duas identidades profissionais — **Desenvolvedor Full Stack** e **Assistente/Auditor Químico** — com um toggle de tema que muda paleta de cores, conteúdo e até o currículo em PDF disponível para download.

🔗 **Acesse:** [lucasmendessdev](https://lucasmendessdev.vercel.app) <!-- ajuste para a URL real do deploy -->

## ✨ Destaques

- **Dois modos, um só site** — alterne entre o tema `tech` (azul) e `chem` (verde) e veja skills, experiências e o PDF do currículo se adaptarem ao contexto.
- **Seções sob medida para cada área** — Certificações técnicas no modo Tech, Publicações/Auditorias no modo Química.
- **Visual vivo** — fundo com partículas animadas, efeito de digitação no Hero, reveal on-scroll e microinterações com Framer Motion.
- **Currículo em PDF** — download do currículo correspondente ao modo ativo, direto pelo botão de contato.
- **QR Code de contato** para compartilhamento rápido do perfil.
- **Preferência persistida** — o tema escolhido fica salvo no `localStorage`.

## 🧩 Seções do site

| Seção | Descrição |
|---|---|
| Hero | Apresentação, efeito de digitação e CTA de contato |
| Skills | Habilidades técnicas ou competências químicas, conforme o modo |
| Experience | Trajetória profissional |
| Education | Formação acadêmica |
| Certifications *(modo Tech)* | Galeria de certificados (AWS, .NET, Java, Python, Palo Alto, etc.) |
| Publications *(modo Química)* | Publicações e auditorias |
| Contact | E-mails, WhatsApp, redes sociais e download do currículo em PDF |

## 🛠️ Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animações e transições
- [qrcode.react](https://github.com/zpao/qrcode.react) — geração do QR Code
- CSS Modules + variáveis CSS para theming
- ESLint para padronização de código
- Deploy na [Vercel](https://vercel.com/)

## 🚀 Rodando localmente

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# preview do build
npm run preview

# lint
npm run lint
```

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Skills, Experience, Education, Publications, Certifications, Contact
│   ├── ui/           # Button, ParticlesCanvas, ScrollReveal, BackToTop, SocialLogos...
│   └── Certifications/ # imagens dos certificados
├── context/          # ThemeContext (tech ⇄ chem)
├── data/             # conteúdo (skills, experience, education, certifications, contact...)
├── hooks/            # useActiveSection, useScrollReveal, useTypewriter
└── styles/           # variáveis e animações CSS globais
```

## 📬 Contato

- **E-mail:** lucasmendessdev@gmail.com
- **LinkedIn:** [lucas-mendes-brito](https://www.linkedin.com/in/lucas-mendes-brito-b87ab8199/)
- **GitHub:** [LucasMendesBrito](https://github.com/LucasMendesBrito)

---

Feito com <_> e um pouco de 🧪 por mim (Lucas Mendes).
