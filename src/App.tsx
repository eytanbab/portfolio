import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div
      className={`${
        openNav ? 'overflow-y-hidden' : 'overflow-y-visible'
      } overflow-x-hidden w-full h-screen relative flex flex-col`}
    >
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <About />
      {/* <Projects />  */}
    </div>
  );
}

export default App;
