const Projects = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-4'>
      <div className='flex  items-center justify-center'>
        {/* Hero text */}
        <div className='px-4 flex flex-col gap-2 justify-center items-start w-1/2 h-screen '>
          <h1 className='text-8xl text-seashellPeach-50 uppercase'>
            Greetings!
          </h1>
          <p className='ml-4 text-karry-200 font-light text-4xl'>
            I'm not your average code monkey. I'm an alchemist, transforming
            lines of text into pixelated masterpieces. With a dash of HTML, a
            sprinkle of CSS, and a generous helping of Next.js, I sculpt
            interfaces that sing. Think user-friendly symphonies, every click
            and scroll a harmonious note. My passion? Crafting digital
            experiences that ignite the human connection. Websites that aren't
            just functional, they're unforgettable. Websites that make you say
            "wow" before you even hit enter.
          </p>
          <p className='text-lavender-300 text-xl font-light italic mt-4 ml-4 line-through'>
            This bio was crafted with a sprinkle of artificial intelligence.
          </p>
        </div>
        {/* Avatar */}
        <img
          src='avatar.png'
          className='rounded-full bg-flesh-200 max-w-[33%]'
        />
      </div>
      {/* Reccomendation Cards */}
    </div>
  );
};

export default Projects;
