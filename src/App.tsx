import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import MatrixRain from './components/MatrixRain';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ExperienceSection from './components/Experience';
import EducationSection from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <ExperienceSection />
      <EducationSection />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
        {/* Global Matrix rain wallpaper — fixed behind all sections (dark mode only) */}
        <MatrixRain className="fixed z-0 opacity-30" />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
