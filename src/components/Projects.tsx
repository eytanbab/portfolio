import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Projects = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className='flex flex-col w-full p-4 text-seashellPeach-50 items-center justify-center gap-4'>
      <h1 className='max-w-[570px] lg:max-w-full text-3xl uppercase text-left w-full xl:text-5xl ml-2'>
        Projects
      </h1>
      {/* Project container */}
      <div className='w-full flex flex-col items-center lg:flex-row lg:gap-4 xl:justify-center'>
        {/* Site image */}

        <img
          src='defino.jpg'
          className='rounded-t-xl object-contain max-h-80 lg:max-h-96 lg:rounded-xl 3xl:max-h-[720px]'
        />

        {/* Mobile & Tablet view */}
        {/* Project description */}
        <div className='lg:hidden w-full bg-shark-950 rounded-b-xl flex flex-col  p-2 h-max max-w-[570px] '>
          <div className='w-full flex justify-between items-center'>
            <h1
              className={`${
                expand ? 'text-3xl' : 'text-xl'
              }  font-light uppercase`}
            >
              Defino
            </h1>
            <ChevronDown
              onClick={handleExpand}
              className={`${
                expand ? 'rotate-180' : 'rotate-0'
              } transition-transform duration-300`}
            />
          </div>
          <div className={`${expand ? 'flex flex-col' : 'hidden'}`}>
            <p className='font-extralight text-karry-200'>
              Unleash the power of language with Defino, the ultimate online
              dictionary. Explore over 750,000 words with ease, find precise
              definitions, and discover unexpected connections. Synonyms,
              antonyms, and etymology are just a click away, making Defino your
              perfect companion for writing, learning, or simply expanding your
              vocabulary.
            </p>
            <p className='italic text-lavender-300 mt-4 font-light text-sm'>
              totally not written by chatGPT
            </p>
            {/* Links */}
            <ul className='flex gap-4 self-center flex-1 my-8'>
              <li className='underline font-extralight'>Link</li>
              <li className='underline font-extralight'>Github</li>
            </ul>
            {/* Used technology*/}
            <ul className='flex self-center gap-4 items-center text-center text-xs uppercase'>
              <li className='px-4 py-1  rounded-full bg-brightGray-900'>
                React
              </li>
              <li className='px-4 py-1 rounded-full bg-brightGray-900'>
                Tailwind CSS
              </li>
              <li className='px-4 py-1 rounded-full bg-brightGray-900'>
                Dictionary API
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop view*/}
        <div className='hidden lg:flex w-full bg-shark-950 rounded-xl flex-col p-4 h-96 max-w-xl 3xl:max-h-[720px] 3xl:h-full'>
          <h1 className='text-3xl font-light uppercase'>Defino</h1>
          {/* Description */}
          <div className='flex flex-col h-full'>
            <p className='font-extralight text-sm  text-karry-200'>
              Unleash the power of language with Defino, the ultimate online
              dictionary. Explore over 750,000 words with ease, find precise
              definitions, and discover unexpected connections. Synonyms,
              antonyms, and etymology are just a click away, making Defino your
              perfect companion for writing, learning, or simply expanding your
              vocabulary.
            </p>
            <p className='italic text-lavender-300 mt-2 font-light text-sm'>
              totally not written by chatGPT
            </p>
            {/* Links */}
            <ul className='flex gap-4 self-center flex-1 my-4'>
              <li className='underline font-extralight'>Link</li>
              <li className='underline font-extralight'>Github</li>
            </ul>
            {/* Used technology*/}
            <ul className='flex self-center gap-4 items-center text-center text-xs uppercase'>
              <li className='px-4 py-1  rounded-full bg-brightGray-900'>
                React
              </li>
              <li className='px-4 py-1 rounded-full bg-brightGray-900'>
                Tailwind CSS
              </li>
              <li className='px-4 py-1 rounded-full bg-brightGray-900'>
                Dictionary API
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
