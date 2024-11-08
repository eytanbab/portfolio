import { useRef } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
// import Loader from './components/Loader/Loader';
import Skills from './components/Skills/Skills';
import { motion, useScroll } from 'framer-motion';

function App() {
  // const [loading, isLoading] = useState<boolean>(true);
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
      {/* <AnimatePresence>
        {loading && <Loader isLoading={isLoading} />}
      </AnimatePresence> */}
      {/* {!loading && ( */}
      <motion.div
        initial={{ opacity: 0, y: 200 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up to original position
        transition={{ duration: 1, type: 'tween' }}
        className=' w-full flex flex-col justify-center items-center'
      >
        <Navbar
          aboutRef={aboutRef}
          recommendationRef={recommendationRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
        />
        {/* Progress line */}
        <motion.div
          className='bg-lavender-300 fixed w-px top-0 left-8 bottom-0 origin-top-left shadow-glow'
          style={{ scaleY: scrollYProgress }}
        />
        <div className='w-screen max-w-7xl flex flex-col justify-center gap-24 items-center snap-y  relative oveflow-x-hidden'>
          <About aboutRef={aboutRef} />
          <RecommendationCards recommendationRef={recommendationRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
        </div>
      </motion.div>
      {/* )} */}
    </div>
  );
}

export default App;
