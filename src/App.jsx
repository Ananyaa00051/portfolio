import { useEffect } from 'react';
import Lenis from 'lenis';
import Cursor from './components/common/Cursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Academics from './sections/Academics';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll progress line
    const progressBar = document.getElementById('scroll-progress');
    
    lenis.on('scroll', ({ scroll, limit }) => {
      if (progressBar) {
        const progress = scroll / limit;
        progressBar.style.transform = `scaleX(${progress})`;
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-base min-h-screen text-text font-sans overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        className="fixed top-0 left-0 w-full h-1 bg-accent z-[100] origin-left scale-x-0"
      />

      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Academics />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
