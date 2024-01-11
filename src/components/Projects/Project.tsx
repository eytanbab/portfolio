import { projectProps } from './data';

const Project = ({ project }: { project: projectProps }) => {
  return (
    <div className='flex flex-col w-96 h-60 p-2 bg-shark-950 rounded-lg gap-1 relative overflow-hidden xl:w-[36rem] xl:h-80'>
      <div>
        <h1 className='text-flesh-200 uppercase text-xl font-extrabold xl:text-3xl'>
          {project.projectName}
        </h1>
        <p className='text-xs font-extralight w-60 xl:w-80 xl:text-base'>
          {project.projectDesc}
        </p>
      </div>
      <p className='text-xs font-extralight italic text-lavender-300 line-through	'>
        Totally not generated with chatGPT
      </p>
      <div className='flex-1 w-full flex flex-col justify-end gap-4 xl:gap-8'>
        <div className='self-center flex gap-4 text-xs xl:text-sm'>
          <a
            href={project.link}
            className='underline underline-offset-2 hover:underline-offset-4 transition-all duration-150 ease-in-out'
          >
            Link
          </a>
          <a
            className='underline underline-offset-2 hover:underline-offset-4  transition-all duration-150 ease-in-out'
            href={project.repo}
          >
            Github
          </a>
        </div>

        <ul className='flex gap-4 self-center z-10'>
          {project.techUsed.map((tech) => (
            <li
              key={tech}
              className='bg-brightGray-900 px-3 py-1 rounded-full text-xs font-light uppercase'
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={project.projectImagePath}
        className='absolute w-32 drop-shadow-md -right-12 -rotate-6 hover:-rotate-12 duration-150 ease-in-out top-1/2 -translate-y-1/2 hover:scale-105 xl:w-48'
      />
    </div>
  );
};

export default Project;
