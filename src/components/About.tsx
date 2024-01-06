import Hero from './Hero';
import RecommendationCards from './RecommendationCards';

const About = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Hero />
      <RecommendationCards />
    </div>
  );
};

export default About;
