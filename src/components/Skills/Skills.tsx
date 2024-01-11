import React, { useRef } from 'react';
import Skill from './Skill';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion';

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
  const baseVelocity = 10;
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 10], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={skillsRef}
      className='text-4xl uppercase h-screen w-full snap-start flex flex-col font-black gap-2 justify-center items-center text-center overflow-hidden lg:text-7xl'
    >
      {skills.map((skill) => (
        // change empty string to x
        <Skill key={skill} skill={skill} x={''} />
      ))}
    </div>
  );
};

export default Skills;
