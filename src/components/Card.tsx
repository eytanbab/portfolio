const Card = () => {
  return (
    <div className='w-96 h-48  p-4 rounded-2xl bg-shark-950 shrink-0'>
      <div className='flex items-center gap-2'>
        <img className='rounded-full h-20 w-20 bg-blue-200' src='avatar.png' />
        <div className='flex flex-col mt-2'>
          <h1 className='text-seashellPeach-50'>Bill Gates</h1>
          <p className='text-lavender-300 text-xs'>Co-founder of Microsoft</p>
        </div>
      </div>
      <p className='text-karry-200 mt-2'>
        Don’t know the guy but it seems he’s the best at whatever he does
      </p>
    </div>
  );
};

export default Card;
