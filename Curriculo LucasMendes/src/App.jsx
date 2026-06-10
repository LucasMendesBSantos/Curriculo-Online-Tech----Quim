import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar        from './components/layout/Navbar';
import Footer        from './components/layout/Footer';
import Hero          from './components/sections/Hero';
import Skills        from './components/sections/Skills';
import Experience    from './components/sections/Experience';
import Education     from './components/sections/Education';
import Publications  from './components/sections/Publications';
import Contact       from './components/sections/Contact';
import ParticlesCanvas from './components/ui/ParticlesCanvas';
import BackToTop     from './components/ui/BackToTop';
import './App.css';

function AppContent() {
  const { mode } = useTheme();
  const isChem = mode === 'chem';

  return (
    <>
      <ParticlesCanvas />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        {isChem && <Publications />}
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
