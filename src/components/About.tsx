import Hero from './Hero';
import RecommendationCards from './RecommendationCards';

const About = () => {
  return (
    <div className='flex flex-col gap-24 items-center '>
      <Hero />
      <RecommendationCards />
    </div>
  );
};

export default About;
