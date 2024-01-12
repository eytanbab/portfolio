import React from 'react';
import Marquee from './Marquee';

const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div className='text-5xl uppercase min-h-screen snap-start font-black  lg:text-7xl w-full skew-y-2'>
      <div
        ref={skillsRef}
        className='flex flex-col gap-1 text-center overflow-hidden relative items-center justify-center'
      >
        <Marquee
          direction='right'
          className='text-seashellPeach-50 bg-shark-950/50'
        >
          react
        </Marquee>
        <Marquee direction='left' className='text-lavender-300'>
          javascript
        </Marquee>
        <Marquee direction='right' className='text-hoki-500 bg-lavender-300/10'>
          typescript
        </Marquee>
        <Marquee direction='left' className='text-flesh-200'>
          next.js
        </Marquee>
        <Marquee
          direction='right'
          className='text-shark-950 bg-lavender-300/30'
        >
          postgreSQL
        </Marquee>
        <Marquee direction='left' className='text-karry-200 '>
          node.js
        </Marquee>
        <Marquee
          direction='right'
          className='text-brightGray-900 bg-shark-950/50'
        >
          python
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
