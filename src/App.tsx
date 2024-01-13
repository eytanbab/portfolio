import { useState, useRef } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
import Loader from './components/Loader/Loader';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
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
  const fill1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const fill2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const fill3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const fill4 = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const fill5 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

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
          {/* <motion.div
            className='bg-lavender-300 fixed w-px top-0 left-8 bottom-0 origin-top-left shadow-glow'
            style={{ scaleY: scrollYProgress }}
          /> */}
          <Navbar
            aboutRef={aboutRef}
            recommendationRef={recommendationRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
          />
          <motion.svg
            viewBox='0 0 100 100'
            strokeWidth={0.4}
            className='fixed inset-0 w-full h-full origin-top-left stroke-lavender-300'
          >
            <motion.line
              style={{ pathLength: fill1 }}
              x1={4}
              x2={4}
              y1={-100}
              y2={25}
            />
            <motion.line
              style={{ pathLength: fill2 }}
              x1={4}
              x2={94}
              y1={25}
              y2={25}
            />
            <motion.line
              style={{ pathLength: fill3 }}
              x1={94}
              x2={94}
              y1={25}
              y2={75}
            />
            <motion.line
              style={{ pathLength: fill4 }}
              x1={94}
              x2={25}
              y1={75}
              y2={75}
            />
            <motion.line
              style={{ pathLength: fill5 }}
              x1={25}
              x2={25}
              y1={75}
              y2={150}
            />
          </motion.svg>

          <div className='w-screen max-w-7xl flex flex-col justify-center gap-24 items-center snap-y  relative oveflow-x-hidden'>
            {/* Progress line */}

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
