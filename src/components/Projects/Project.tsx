import { Code, EyeIcon } from 'lucide-react';
import { projectProps } from './data';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0.8 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      type: 'tween',
    },
  },
};
const item = {
  hidden: { opacity: 0.8, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      type: 'tween',
    },
  },
};

const Project = ({ project }: { project: projectProps }) => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      transition={{ staggerChildren: 1, delayChildren: 1 }}
      className='flex flex-col w-96 h-60 p-2 bg-shark-950 rounded-lg gap-1 relative overflow-hidden xl:w-[36rem] xl:h-80'
    >
      <motion.div variants={item} initial='hidden' whileInView='show'>
        <h1 className='text-flesh-200 uppercase text-xl font-extrabold xl:text-3xl'>
          {project.projectName}
        </h1>
        <p className='text-xs font-extralight w-60 xl:w-80 xl:text-base'>
          {project.projectDesc}
        </p>
      </motion.div>
      <p className='text-xs font-extralight italic text-lavender-300 line-through	'>
        Totally not generated with chatGPT
      </p>
      <div className='flex-1 w-full flex flex-col justify-end gap-4 xl:gap-8'>
        <div className='self-center flex gap-4 items-center'>
          <a
            href={project.link}
            className='hover:scale-105 hover:text-flesh-200'
          >
            <EyeIcon />
          </a>
          <a
            href={project.repo}
            className='hover:scale-105 hover:text-lavender-300'
          >
            <Code />
          </a>
        </div>

        <ul className='flex justify-center gap-2 z-10 w-full'>
          {project.techUsed.map((tech) => (
            <li
              key={tech}
              className='bg-brightGray-900 px-3 py-1 rounded-full text-xs font-light uppercase flex items-center text-center'
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
    </motion.div>
  );
};

export default Project;
