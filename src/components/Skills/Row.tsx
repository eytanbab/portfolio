import React from 'react';
import { MotionValue, motion } from 'framer-motion';

type RowProps = {
  children: React.ReactNode;
  x: MotionValue<number>;
  className: string;
};

const Row = ({ children, x, className }: RowProps) => {
  console.log(x);
  return (
    <motion.div style={{ translateX: x }} className='w-full'>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
      <span className={className}>{children}</span>
      <span className={`${className} text-transparent font-outline`}>
        {children}
      </span>
    </motion.div>
  );
};

export default Row;
