import Card from './Card';

const RecommendationCards = () => {
  return (
    <div className='h-screen w-full'>
      <div className='flex gap-4 items-center flex-wrap  w-full justify-center mt-96 px-36'>
        <div className='w-full flex gap-4 justify'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='w-full flex gap-4 justify-center'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default RecommendationCards;
