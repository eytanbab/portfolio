import { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, isLoading] = useState<boolean>(true);
  const aboutRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  const recommendationRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  // const skillsRef: React.MutableRefObject<HTMLDivElement | null> | null =
  //   useRef(null);
  const projectsRef: React.MutableRefObject<HTMLDivElement | null> | null =
    useRef(null);
  return (
    <div className='overflow-x-hidden w-screen h-screen  relative flex flex-col items-center snap-y snap-mandatory'>
      {loading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Navbar
            aboutRef={aboutRef}
            recommendationRef={recommendationRef}
            projectsRef={projectsRef}
          />
          <div className='w-full max-w-7xl flex flex-col justify-center gap-24 items-center'>
            <About aboutRef={aboutRef} />
            <RecommendationCards recommendationRef={recommendationRef} />
            <Projects projectsRef={projectsRef} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
