import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { projectProps } from './data';

const Project = ({ project }: { project: projectProps }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div
      className={`${
        project.projectId % 2 === 0 ? 'lg:flex-row-reverse' : ''
      } w-full flex flex-col items-start lg:flex-row lg:gap-4 xl:justify-start`}
    >
      {/* Site image */}
      <img
        src={project.projectImagePath}
        className='rounded-t-xl w-full object-contain max-h-80 xl:max-h-96 lg:rounded-xl 3xl:max-h-[720px]'
      />
      {/* Project description */}
      <div className='w-full bg-shark-950 rounded-b-xl h-full flex flex-col p-4 max-w-[570px] xl:max-w-xl lg:rounded-xl lg:h-80 xl:h-96'>
        <div
          className='w-full flex justify-between items-center '
          onClick={handleExpand}
        >
          <h1
            className={`${
              expand ? 'text-3xl' : 'text-xl'
            }  font-light uppercase lg:text-3xl`}
          >
            {project.projectName}
          </h1>
          <ChevronDown
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
            {project.projectDesc}
          </p>
          <p className='italic text-lavender-300 mt-4 font-light text-xs'>
            totally not written by chatGPT
          </p>
          {/* Links */}
          <ul className='flex gap-4 self-center my-8'>
            <a href={project.link} className='underline font-extralight'>
              Link
            </a>
            <a href={project.repo} className='underline font-extralight'>
              Github
            </a>
          </ul>
          {/* Used technology*/}
          <ul className='flex self-center gap-4 items-center h-full text-center text-xs uppercase lg:items-end'>
            {project.techUsed.map((tech) => (
              <li className='px-4 py-1  rounded-full bg-brightGray-900'>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
