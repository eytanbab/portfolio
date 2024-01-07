import Hero from './Hero';
import RecommendationCards from './RecommendationCards';

const About = () => {
  return (
    <div className='flex flex-col gap-48 items-center lg:mt-24'>
      <Hero />
      <RecommendationCards />
    </div>
  );
};

export default About;
