import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Project = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div className='w-full flex flex-col items-center lg:flex-row lg:gap-4 xl:justify-center'>
      {/* Site image */}

      <img
        src='defino.jpg'
        className='rounded-t-xl object-contain max-h-80 lg:max-h-96 lg:rounded-xl 3xl:max-h-[720px]'
      />
      {/* Project description */}
      <div className='lg:flex w-full bg-shark-950 rounded-b-xl flex flex-col p-2 lg:h-96 max-w-[570px] lg:max-h-96 lg:max-w-xl 3xl:max-h-[720px] 3xl:h-full lg:rounded-xl'>
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
            } transition-transform duration-300 lg:hidden`}
          />
        </div>
        <div
          className={`${
            expand ? 'flex flex-col' : 'hidden'
          } lg:flex lg:flex-col  lg:h-full`}
        >
          <p className='font-extralight text-karry-200 lg:text-sm'>
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
          <ul className='flex gap-4 self-center flex-1 my-8  h-full'>
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

export default Project;