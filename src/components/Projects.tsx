import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Projects = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-2 w-full p-4 text-seashellPeach-50'>
      {/* Site image */}
      <img src='defino.jpg' className='rounded-xl w-full object-contain' />
      {/* Project description */}
      <div className='w-full bg-shark-950 rounded-xl flex flex-col  p-4 h-max'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-3xl font-light uppercase'>Defino</h1>
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
            vocabulary. Download now and elevate your language game!
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
            <li className='px-4 py-1  rounded-full bg-brightGray-900'>React</li>
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
  );
};

export default Projects;
