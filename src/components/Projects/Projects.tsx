import Project from './Project';
import { data } from './data';

const Projects = ({ projectsRef }) => {
  return (
    <div
      ref={projectsRef}
      className='flex flex-col w-full p-4 text-seashellPeach-50 items-center justify-start gap-2 min-h-screen'
    >
      <h1 className='max-w-[570px] lg:max-w-full text-3xl uppercase text-left w-full xl:text-5xl'>
        Projects
      </h1>
      <div className='flex flex-col gap-8'>
        {data?.map((project) => (
          <Project key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
