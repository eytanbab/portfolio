const RecommendationCards = () => {
  return (
    <div className='flex gap-4 items-center flex-wrap w-full justify-center px-4'>
      {/* Card content */}
      <div className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col'>
        <div className='flex items-center gap-2'>
          <img
            className='rounded-full size-20 object-cover bg-blue-200'
            src='./recommendationAvatars/bill_gates.jpg'
          />
          <div className='flex flex-col mt-2'>
            <h1 className='text-seashellPeach-50'>Bill Gates</h1>
            <p className='text-lavender-300 text-xs'>Co-founder of Microsoft</p>
          </div>
        </div>
        <p className='text-karry-200 mt-2 font-extralight italic'>
          Don’t know the guy but it seems he’s the best at whatever he does.
        </p>
      </div>
      {/* Card content */}
      <div className='w-96 h-48  p-4 rounded-2xl bg-shark-950 shrink-0'>
        <div className='flex items-center gap-2'>
          <img
            className='rounded-full size-20 object-cover bg-blue-200'
            src='./recommendationAvatars/king_charles.jpg'
          />
          <div className='flex flex-col mt-2'>
            <h1 className='text-seashellPeach-50'>Charles III</h1>
            <p className='text-lavender-300 text-xs'>King of England</p>
          </div>
        </div>
        <p className='text-karry-200 mt-2 font-extralight italic'>
          The best frontend developer I’ve seen.
        </p>
      </div>
      {/* Card content */}
      <div className='w-96 h-48  p-4 rounded-2xl bg-shark-950 shrink-0'>
        <div className='flex items-center gap-2'>
          <img
            className='rounded-full size-20 object-cover bg-blue-200'
            src='./recommendationAvatars/linus.jpg'
          />
          <div className='flex flex-col mt-2'>
            <h1 className='text-seashellPeach-50'>Linus Torvalds</h1>
            <p className='text-lavender-300 text-xs'>
              Creator and lead developer of the Linux kernel
            </p>
          </div>
        </div>
        <p className='text-karry-200 mt-2 font-extralight italic'>
          This guy is my childhood hero. All my work is inspired by him.
        </p>
      </div>
      {/* Card content */}
      <div className='w-96 h-48  p-4 rounded-2xl bg-shark-950 shrink-0'>
        <div className='flex items-center gap-2'>
          <img
            className='rounded-full size-20 object-cover bg-blue-200'
            src='./recommendationAvatars/satya.jpg'
          />
          <div className='flex flex-col mt-2'>
            <h1 className='text-seashellPeach-50'>Satya Nadella</h1>
            <p className='text-lavender-300 text-xs'>
              Chairman and CEO at Microsoft
            </p>
          </div>
        </div>
        <p className='text-karry-200 mt-2 font-extralight italic'>
          This dude writes UI like Michelangelo sculpts statues - pure fire!
        </p>
      </div>
      {/* Card content */}
      <div className='w-96 h-48  p-4 rounded-2xl bg-shark-950 shrink-0'>
        <div className='flex items-center gap-2'>
          <img
            className='rounded-full size-20 object-cover bg-blue-200'
            src='./recommendationAvatars/tim_cook.jpg'
          />
          <div className='flex flex-col mt-2'>
            <h1 className='text-seashellPeach-50'>Tim Cook </h1>
            <p className='text-lavender-300 text-xs'>
              Chairman and CEO at Microsoft
            </p>
          </div>
        </div>
        <p className='text-karry-200 mt-2 font-extralight italic'>
          This legend taught me everything I know about coding. My coding Yoda,
          my personal Obi-Wan Kenobi.
        </p>
      </div>
    </div>
  );
};

export default RecommendationCards;
