import Project from './Project';
import { data } from './data';

const Projects = ({
  projectsRef,
}: {
  projectsRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div
      ref={projectsRef}
      className='flex flex-col p-4 text-seashellPeach-50 items-center justify-center gap-4 min-h-screen snap-start lg:w-full'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 place-items-between gap-4'>
        <h1 className='lg:max-w-full text-3xl uppercase text-left self-start col-span-full xl:text-5xl font-extrabold'>
          Projects
        </h1>
        {data?.map((project) => (
          <Project key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
