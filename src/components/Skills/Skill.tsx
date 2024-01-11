import { motion } from 'framer-motion';

const Skill = ({ skill, x }: { skill: string; x: any }) => {
  return (
    <motion.div
      className='flex gap-2 whitespace-nowrap self-center'
      style={{ x }}
    >
      <span className='text-seashellPeach-50'>{skill}</span>
      <span className='text-transparent font-outline'>{skill}</span>
      <span className='text-seashellPeach-50'>{skill}</span>
      <span className='text-transparent font-outline'>{skill}</span>
      <span className='text-seashellPeach-50'>{skill}</span>
      <span className='text-transparent font-outline'>{skill}</span>
    </motion.div>
  );
};

export default Skill;
