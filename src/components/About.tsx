import Contact from './Contact';

const About = ({
  aboutRef,
}: {
  aboutRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div className='flex w-full items-center justify-center lg:flex-row p-4 min-h-screen snap-start'>
      {/* About wrapper */}
      <div
        ref={aboutRef}
        className='flex flex-col gap-4 items-start justify-center lg:flex-row'
      >
        {/* Hero text container*/}
        <div className='w-full flex flex-col gap-2 items-start justify-center text-left lg:h-96 xl:h-[36rem] p-4'>
          <h1 className='text-5xl text-seashellPeach-50 font-bold uppercase max-w-3xl lg:max-w-xl w-full xl:text-7xl'>
            Greetings!
          </h1>
          <p className='text-karry-200 font-light text-base ml-1  max-w-3xl lg:max-w-xl xl:text-xl'>
            I’m Ethan — a fullstack developer with a passion for building clean,
            responsive web applications. I specialize in React, Vite,
            TypeScript, and PostgreSQL, focusing on creating intuitive,
            user-friendly interfaces. I love combining creativity with
            problem-solving to deliver impactful digital experiences. When I’m
            not coding, I enjoy making electronic music and exploring new tech
            trends. Let’s connect and build something great together!
          </p>
          <p className='text-lavender-300 text-base font-light italic mt-4 ml-1 line-through max-w-3xl lg:max-w-xl w-full xl:text-lg'>
            This bio was crafted with a sprinkle of artificial intelligence.
          </p>
          <Contact />
        </div>

        {/* Avatar */}
        <img
          src='avatar.png'
          className='rounded-full bg-flesh-200 size-72 self-center md:size-96 xl:size-[36rem]'
        />
      </div>
    </div>
  );
};

export default About;
