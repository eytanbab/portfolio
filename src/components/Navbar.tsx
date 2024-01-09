import { useEffect, useState } from 'react';
import MenuIcon from './MenuIcon/MenuIcon';
interface NavbarProps {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  aboutRef: React.MutableRefObject<HTMLDivElement>;
  recommendationRef: React.MutableRefObject<HTMLDivElement>;
  projectsRef: React.MutableRefObject<HTMLDivElement>;
}
type Active = 'about' | 'recommendations' | 'skills' | 'projects';

const Navbar = ({
  openNav,
  setOpenNav,
  aboutRef,
  recommendationRef,
  projectsRef,
}: NavbarProps) => {
  const handleMobileNav = () => {
    setOpenNav((prev) => !prev);
  };
  const [active, setActive] = useState<Active>('about');

  return (
    <>
      {/* Mobile nav */}
      <nav className='lg:hidden p-4 h-20 w-full bg-woodsmoke-950/10 backdrop-blur-3xl text-seashellPeach-50 flex justify-between items-center z-10 relative'>
        <h1 className='text-xl text-flesh-200 font-light relative'>
          Ethan Babaev
        </h1>
        <button
          onClick={handleMobileNav}
          className='flex items-center justify-center'
        >
          <MenuIcon />
        </button>
      </nav>
      {/* Menu Modal */}
      <div
        className={`${
          openNav ? 'translate-x-0' : 'translate-x-full'
        } text-center bg-woodsmoke-950/10 absolute inset-0 backdrop-blur-3xl  text-3xl transition-transform duration-300 lg:hidden`}
      >
        <ul className='flex w-full h-full flex-col items-center justify-center gap-8 text-seashellPeach-50 text-xl'>
          <button>
            <li>About</li>
          </button>
          <button>
            <li>Projects</li>
          </button>
          <button>
            <li>Contact</li>
          </button>
          <button>
            <li>Resume</li>
          </button>
        </ul>
      </div>

      {/*  Desktop navbar */}
      <nav className='hidden lg:flex bg-seashellPeach-50/10 backdrop-blur-3xl fixed right-8 top-[50%] z-50 flex-col gap-4 p-2 rounded-full translate-y-[-50%]'>
        {/* About icon */}
        <svg
          className={`${
            active === 'about' ? 'fill-seashellPeach-50' : 'fill-hoki-500'
          } size-8 cursor-pointer `}
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
          id='about'
          onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            setActive('about');
          }}
        >
          <path d='M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z' />
        </svg>

        {/* Recommendations icon */}
        <svg
          version='1.1'
          id='recommendations'
          xmlns='http://www.w3.org/2000/svg   '
          viewBox='0 0 512 512'
          className={`${
            active === 'recommendations'
              ? 'fill-seashellPeach-50'
              : 'fill-hoki-500'
          } size-8 cursor-pointer `}
          onClick={() => {
            recommendationRef.current.scrollIntoView({ behavior: 'smooth' });
            setActive('recommendations');
          }}
        >
          <style type='text/css'></style>
          <g>
            <path
              className='st0'
              d='M147.57,320.188c-0.078-0.797-0.328-1.531-0.328-2.328v-6.828c0-3.25,0.531-6.453,1.594-9.5
		c0,0,17.016-22.781,25.063-49.547c-8.813-18.594-16.813-41.734-16.813-64.672c0-5.328,0.391-10.484,0.938-15.563
		c-11.484-12.031-27-18.844-44.141-18.844c-35.391,0-64.109,28.875-64.109,73.75c0,35.906,29.219,74.875,29.219,74.875
		c1.031,3.047,1.563,6.25,1.563,9.5v6.828c0,8.516-4.969,16.266-12.719,19.813l-46.391,18.953
		C10.664,361.594,2.992,371.5,0.852,383.156l-0.797,10.203c-0.406,5.313,1.406,10.547,5.031,14.438
		c3.609,3.922,8.688,6.125,14.016,6.125H94.93l3.109-39.953l0.203-1.078c3.797-20.953,17.641-38.766,36.984-47.672L147.57,320.188z'
            />
            <path
              className='st0'
              d='M511.148,383.156c-2.125-11.656-9.797-21.563-20.578-26.531l-46.422-18.953
		c-7.75-3.547-12.688-11.297-12.688-19.813v-6.828c0-3.25,0.516-6.453,1.578-9.5c0,0,29.203-38.969,29.203-74.875
		c0-44.875-28.703-73.75-64.156-73.75c-17.109,0-32.625,6.813-44.141,18.875c0.563,5.063,0.953,10.203,0.953,15.531
		c0,22.922-7.984,46.063-16.781,64.656c8.031,26.766,25.078,49.563,25.078,49.563c1.031,3.047,1.578,6.25,1.578,9.5v6.828
		c0,0.797-0.266,1.531-0.344,2.328l11.5,4.688c20.156,9.219,34,27.031,37.844,47.984l0.188,1.094l3.094,39.969h75.859
		c5.328,0,10.406-2.203,14-6.125c3.625-3.891,5.438-9.125,5.031-14.438L511.148,383.156z'
            />
            <path
              className='st0'
              d='M367.867,344.609l-56.156-22.953c-9.375-4.313-15.359-13.688-15.359-23.969v-8.281
		c0-3.906,0.625-7.797,1.922-11.5c0,0,35.313-47.125,35.313-90.594c0-54.313-34.734-89.234-77.594-89.234
		c-42.844,0-77.594,34.922-77.594,89.234c0,43.469,35.344,90.594,35.344,90.594c1.266,3.703,1.922,7.594,1.922,11.5v8.281
		c0,10.281-6.031,19.656-15.391,23.969l-56.156,22.953c-13.047,5.984-22.344,17.984-24.906,32.109l-2.891,37.203h139.672h139.672
		l-2.859-37.203C390.211,362.594,380.914,350.594,367.867,344.609z'
            />
          </g>
        </svg>

        {/* Skills icon */}
        <svg
          version='1.1'
          id='skills'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 256 256'
          className={`${
            active === 'skills' ? 'fill-seashellPeach-50' : 'fill-hoki-500'
          } size-8 cursor-pointer `}
        >
          <g>
            <g>
              <g>
                <path d='M58.3,10.4c-4.1,1-7.8,3.9-9.9,8c-1.1,2-1.2,2.9-1.2,6.2c0,3.4,0.2,4.3,1.3,6.6c2.3,4.7,7.7,8.2,12.5,8.2c13.9,0,24.7,12.3,22.5,25.5c-1.8,11-11.1,18.8-22.1,18.8c-9.3,0-18.2-6.8-20.9-15.9c-0.2-0.8-0.6-3.3-0.8-5.6C39.1,57,37.8,54,35,51.2c-3.1-3-6-4.2-10.2-4.2c-4.2,0-7.5,1.3-10.3,4.2c-4,4-5.2,9.7-3.8,18.4c3.4,20.6,18.2,36.9,38.5,42.1c8.9,2.3,19.9,1.9,27.6-1l3.1-1.2l33.4,33.4l33.4,33.4l-0.9,1.8c-1.3,2.7-2.4,8.5-2.7,14.5c-0.7,14.2,4.6,27.8,14.9,38.1c8.1,8.1,17.8,13.1,29.1,14.8c8.7,1.3,13.8,0.2,17.9-3.9c3-3.1,4.2-6,4.2-10.2c0-4.3-1.2-7.2-4.2-10.2c-2.8-2.9-5.7-4.1-11-4.6c-6.9-0.6-11.3-2.6-15.4-6.9c-10.1-10.5-7-28.1,6.1-34.7c14.9-7.6,32.2,3.4,32.2,20.3c0,4.8,3.6,10.2,8.2,12.5c2.3,1.1,3.2,1.3,6.6,1.3c3.3,0,4.3-0.2,6.2-1.2c3-1.6,5.9-4.6,7.2-7.5c0.9-2,1.1-3,1-7.4c-0.3-18.5-11.5-36.1-28.7-44.7c-6-3-15.8-5.4-22.7-5.4c-4.2,0-11,1.2-15.1,2.6l-3.5,1.2l-9.3-9.3l-9.3-9.3l22.1-22.1l22.1-22.1L187,69l-14.6-14.7l-22.1,22.1l-22.1,22.1l-9.2-9.2c-7.1-7.1-9.2-9.5-9.1-10.2c0.1-0.5,0.6-2.1,1.2-3.6c1.2-3.3,2.4-10.2,2.4-14.2c0-4.5-1.2-11.5-2.8-16.3c-2.7-8.1-7-14.7-13.5-20.9c-8.4-8-18.3-12.7-29.9-14C62.6,9.8,60.7,9.8,58.3,10.4z' />
                <path d='M218.8,10.4c-1,0.4-2.4,1-3.2,1.4c-0.7,0.4-7.5,6.8-14.9,14.3l-13.5,13.5l14.7,14.7l14.6,14.6L230.4,55C245.9,39.3,246,39.2,246,33.1c0-5.4-0.9-6.9-8-14.2c-7.2-7.3-9.3-8.7-14.3-8.9C221.9,9.9,219.8,10.1,218.8,10.4z' />
                <path d='M46.8,180L10,216.8v14.7v14.6h14.7h14.6l36.9-36.9l36.9-36.9l-14.5-14.5c-8-8-14.6-14.5-14.8-14.5C83.7,143.2,67,159.7,46.8,180z' />
              </g>
            </g>
          </g>
        </svg>

        {/* Projects icon */}
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 256 256'
          className={`${
            active === 'projects' ? 'fill-seashellPeach-50' : 'fill-hoki-500'
          } size-8 cursor-pointer `}
          id='projects'
          onClick={() => {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
            setActive('projects');
          }}
        >
          <g>
            <g>
              <path d='M226.8,136.1c-1.6-1.6-3.2-3-4.9-4.4V18.6c0-5.8-4.7-10.5-10.5-10.5H20.5C14.7,8,10,12.8,10,18.6v199.5c0,5.8,4.7,10.5,10.5,10.5h112.9V228c0.2,0.2,0.5,0.5,0.7,0.7c12.4,12.4,28.8,19.2,46.3,19.2s34-6.8,46.3-19.2c12.4-12.4,19.2-28.8,19.2-46.3C246,164.9,239.2,148.5,226.8,136.1z M20.5,220.5c-1.3,0-2.4-1.1-2.4-2.4V18.6c0-1.3,1.1-2.4,2.4-2.4h190.9c1.3,0,2.4,1.1,2.4,2.4V126c-10-5.9-21.4-9.1-33.4-9.1c-15.2,0-29.7,5.2-41.3,14.7H70.3v8.1h60.5c-7.4,8.6-12.4,18.8-14.6,29.8H70.3v8.1h44.8c-0.1,1.6-0.2,3.2-0.2,4.8c0,13.8,4.3,27,12.2,38H20.5L20.5,220.5z M180.5,239.8c-31.6,0-57.4-25.7-57.4-57.4c0-31.6,25.7-57.4,57.4-57.4c31.6,0,57.4,25.7,57.4,57.4C237.9,214.1,212.1,239.8,180.5,239.8z' />
              <path d='M215.5,163.7l-37.7,36.6l-23.3-19.7l-5.2,6.2l28.9,24.4l43-41.7L215.5,163.7z' />
              <path d='M42.6,55.8h19.6v8.1H42.6V55.8z' />
              <path d='M70.3,55.8h121.1v8.1H70.3V55.8L70.3,55.8z' />
              <path d='M42.6,93.7h19.6v8.1H42.6V93.7z' />
              <path d='M70.3,93.7h121.1v8.1H70.3V93.7L70.3,93.7z' />
              <path d='M42.6,131.6h19.6v8.1H42.6V131.6z' />
              <path d='M42.6,169.5h19.6v8.1H42.6V169.5z' />
            </g>
          </g>
        </svg>
      </nav>
    </>
  );
};

export default Navbar;
