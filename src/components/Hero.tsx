const Hero = () => {
  return (
    <div className='flex w-full flex-col gap-4'>
      {/* Hero text container*/}
      <div className='w-full p-4 flex flex-col gap-2 justify-center items-start mt-8'>
        <h1 className='text-5xl text-seashellPeach-50 uppercase'>Greetings!</h1>
        <p className='text-karry-200 font-light text-base ml-1'>
          I'm not your average code monkey. I'm an alchemist, transforming lines
          of text into pixelated masterpieces. With a dash of HTML, a sprinkle
          of CSS, and a generous helping of Next.js, I sculpt interfaces that
          sing. Think user-friendly symphonies, every click and scroll a
          harmonious note. My passion? Crafting digital experiences that ignite
          the human connection. Websites that aren't just functional, they're
          unforgettable. Websites that make you say "wow" before you even hit
          enter.
        </p>
        <p className='text-lavender-300 text-base font-light italic mt-4 ml-1 line-through'>
          This bio was crafted with a sprinkle of artificial intelligence.
        </p>
      </div>
      {/* Avatar */}
      <img
        src='avatar.png'
        className='rounded-full bg-flesh-200 w-72 h-72 self-center'
      />
    </div>
  );
};

export default Hero;