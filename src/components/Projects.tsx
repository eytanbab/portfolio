const Projects = () => {
  return (
    <div className='w-full flex text-seashellPeach-50'>
      {/* Content container */}
      <div className='flex flex-col gap-2 w-full p-4'>
        {/* Site image */}
        <img src='defino.jpg' className='rounded-xl w-full object-contain' />
        {/* Project description */}
        <div className='w-full bg-shark-950 rounded-xl flex flex-col  p-4 h-max'>
          <h1 className='text-4xl font-light uppercase'>Defino</h1>
          <p className='font-extralight'>
            Unleash the power of language with Defino, the ultimate online
            dictionary. Explore over 750,000 words with ease, find precise
            definitions, and discover unexpected connections. Synonyms,
            antonyms, and etymology are just a click away, making Defino your
            perfect companion for writing, learning, or simply expanding your
            vocabulary. Download now and elevate your language game!
          </p>
          <p className='italic text-lavender-300 mt-4 font-light text-sm'>
            totally not written by chatGPT
          </p>
          {/* Links */}
          <ul className='flex gap-4 self-center flex-1 my-8'>
            <li>Link</li>
            <li>Github</li>
          </ul>
          {/* Used technology*/}
          <ul className='flex self-center gap-4 items-center text-center text-sm'>
            <li className='border px-4 py-1  rounded-full'>React</li>
            <li className='border px-4 py-1 rounded-full'>Tailwind CSS</li>
            <li className='border px-4 py-1 rounded-full'>Dictionary API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
