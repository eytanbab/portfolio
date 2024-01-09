import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import RecommendationCards from './components/RecommendationCards';

function App() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <div
      className={`${
        openNav ? 'overflow-y-hidden' : 'overflow-y-visible'
      } overflow-x-hidden w-screen h-screen relative flex flex-col gap-4 items-center`}
    >
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <div className='w-full max-w-7xl flex flex-col justify-center gap-24 items-center'>
        <About />
        <RecommendationCards />
        <Projects />
      </div>
    </div>
  );
}

export default App;
