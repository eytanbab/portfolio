import { useState } from 'react';
import Project from './Project';
const Projects = () => {
  return (
    <div className='flex flex-col w-full p-4 text-seashellPeach-50 items-center justify-start gap-4 min-h-screen'>
      <h1 className='max-w-[570px] lg:max-w-full text-3xl uppercase text-left w-full xl:text-5xl ml-2'>
        Projects
      </h1>
      <Project />
    </div>
  );
};

export default Projects;
