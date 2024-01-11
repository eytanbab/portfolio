import { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
import Loader from './components/Loader/Loader';
import { motion } from 'framer-motion';
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
  return (
    <div className='overflow-x-hidden w-screen h-screen  relative flex flex-col items-center snap-y snap-mandatory'>
      <Loader loading={loading} isLoading={isLoading} />
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 1000 }} // Start slightly above for smoother entry
          animate={{ opacity: 1, y: 0 }} // Animate both opacity and y-position
        >
          <Navbar
            aboutRef={aboutRef}
            recommendationRef={recommendationRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
          />
          <div className='w-screen max-w-7xl flex flex-col justify-center gap-24 items-center '>
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
