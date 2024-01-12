import React from 'react';
import { motion } from 'framer-motion';

type MarqueeProps = {
  children: React.ReactNode;
  direction: 'right' | 'left';
  className: string;
};

const xVariants = {
  right: { x: ['-10%', '15%'] },
  left: { x: ['10%', '-15%'] },
};

const Marquee = ({ children, direction, className }: MarqueeProps) => {
  return (
    <motion.p
      className={className}
      variants={xVariants}
      animate={direction}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 3,
          ease: 'linear',
        },
      }}
    >
      <span className=''>{children}</span>
      <span className='text-transparent font-outline'>{children}</span>
      <span className=''>{children}</span>
      <span className='text-transparent font-outline'>{children}</span>
      <span className=''>{children}</span>
      <span className='text-transparent font-outline'>{children}</span>
      <span className=''>{children}</span>
      <span className='text-transparent font-outline'>{children}</span>
    </motion.p>
  );
};

export default Marquee;
