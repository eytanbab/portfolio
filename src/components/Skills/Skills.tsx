import React from 'react';
import Row from './Row';
import { useScroll, useTransform } from 'framer-motion';
const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  const { scrollYProgress } = useScroll();
  const xRight = useTransform(scrollYProgress, [0, 1], [-1500, -1000]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -1500]);

  return (
    <div className='text-5xl uppercase min-h-screen snap-start font-black lg:text-7xl w-full flex items-center'>
      <div
        ref={skillsRef}
        className='flex flex-col gap-4 text-left  relative items-center justify-center'
      >
        <Row x={xRight} className='text-seashellPeach-50 '>
          React
        </Row>
        <Row x={xLeft} className='text-shark-950 '>
          javascript
        </Row>
        <Row x={xRight} className='text-flesh-200'>
          typescript
        </Row>
        <Row x={xLeft} className='text-brightGray-900'>
          next.js
        </Row>
        <Row x={xRight} className='text-lavender-300'>
          node.js
        </Row>
        <Row x={xLeft} className='text-seashellPeach-50'>
          node.js
        </Row>
      </div>
    </div>
  );
};

export default Skills;
