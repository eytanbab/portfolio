import { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
import Loader from './components/Loader/Loader';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Skills from './components/Skills/Skills';

function App() {
  const [loading, isLoading] = useState<boolean>(true);
  const aboutRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  const recommendationRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  const skillsRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  const projectsRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  const { scrollYProgress } = useScroll();
  return (
    <div className='overflow-x-hidden w-full relative flex flex-col items-center overflow-hidden'>
      <AnimatePresence>
        {loading && <Loader isLoading={isLoading} />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: 'tween' }}
          className=' w-full flex justify-center'
        >
          {/* Progress line */}
          <motion.div
            className='bg-lavender-300 fixed w-px top-0 left-8 bottom-0 origin-top-left shadow-glow'
            style={{ scaleY: scrollYProgress }}
          />
          <Navbar
            aboutRef={aboutRef}
            recommendationRef={recommendationRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
          />
          <div className='w-screen max-w-7xl flex flex-col justify-center gap-24 items-center snap-y  relative oveflow-x-hidden'>
            <About aboutRef={aboutRef} />
            <RecommendationCards recommendationRef={recommendationRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectsRef={projectsRef} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
