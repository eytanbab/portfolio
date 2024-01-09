import Contact from './Contact';

const About = () => {
  return (
    <div className='flex w-full flex-col gap-4 items-center justify-center lg:flex-row px-4 min-h-screen'>
      {/* Wrapper */}

      {/* Hero text container*/}
      <div className='w-full flex flex-col gap-2 justify-center items-start text-left '>
        <h1 className='text-5xl text-seashellPeach-50 uppercase max-w-3xl lg:max-w-xl w-full'>
          Greetings!
        </h1>
        <p className='text-karry-200 font-light text-base ml-1  max-w-3xl lg:max-w-xl'>
          I'm not your average code monkey. I'm an alchemist, transforming lines
          of text into pixelated masterpieces. With a dash of HTML, a sprinkle
          of CSS, and a generous helping of Next.js, I sculpt interfaces that
          sing. Think user-friendly symphonies, every click and scroll a
          harmonious note. My passion? Crafting digital experiences that ignite
          the human connection. Websites that aren't just functional, they're
          unforgettable. Websites that make you say "wow" before you even hit
          enter.
        </p>
        <p className='text-lavender-300 text-base font-light italic mt-4 ml-1 line-through max-w-3xl lg:max-w-xl w-full'>
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
  );
};

export default About;
