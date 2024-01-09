import { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import RecommendationCards from './components/RecommendationCards';
import Loader from './components/Loader/Loader';

function App() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(true);
  const aboutRef = useRef(null);
  const recommendationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div
      className={`${
        openNav ? '' : 'overflow-y-visible'
      } overflow-x-hidden overflow-y-hidden w-screen h-screen  relative flex flex-col items-center`}
    >
      {loading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Navbar
            openNav={openNav}
            setOpenNav={setOpenNav}
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
