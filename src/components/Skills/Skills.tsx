import React, { useState, useEffect, useRef } from 'react';
import Skill from './Skill';
import { useScroll } from 'framer-motion';
import Marquee from './Marquee';

const skills: string[] = [
  'javascript',
  'typescript',
  'React',
  'next.js',
  'postgreSQL',
  'python',
  'node.js',
];

const Skills = ({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div
      ref={skillsRef}
      className='text-5xl uppercase min-h-screen snap-start font-black gap-4 text-center overflow-hidden relative lg:text-9xl flex flex-col items-center justify-center w-full skew-y-2'
    >
      <Marquee direction='right' className='text-seashellPeach-50'>
        react
      </Marquee>
      <Marquee direction='left' className='text-lavender-300'>
        javascript
      </Marquee>
      <Marquee direction='right' className='text-hoki-500'>
        typescript
      </Marquee>
      <Marquee direction='left' className='text-flesh-200'>
        next.js
      </Marquee>
      <Marquee direction='right' className='text-shark-950'>
        postgreSQL
      </Marquee>
      <Marquee direction='left' className='text-karry-200'>
        node.js
      </Marquee>
      <Marquee direction='right' className='text-brightGray-900'>
        python
      </Marquee>
    </div>
  );
};

export default Skills;
