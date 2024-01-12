import { motion, useScroll } from 'framer-motion';
import { RefObject, useEffect, useRef } from 'react';

declare module 'framer-motion' {
  export function useInView(options?: IntersectionObserverInit): {
    ref: RefObject<Element>;
    inView: boolean;
  };
}

const RecommendationCards = ({
  recommendationRef,
}: {
  recommendationRef: React.MutableRefObject<HTMLDivElement | null> | null;
}) => {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (window.innerWidth < 1024 && ref.current) {
      // Ensure ref.current exists before accessing
      ref.current.style.transform = `translateY(${scrollY.get() * 0.2}px)`;
    }
  }, [scrollY, ref]);

  return (
    <div
      ref={recommendationRef}
      className='w-full min-h-screen snap-start flex items-center'
    >
      <div className='flex gap-4 items-center flex-wrap w-full justify-center p-4 content-center'>
        {/* Card content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col items-center justify-center'
        >
          <div className='flex items-center gap-2'>
            <img
              className='rounded-full size-20 object-cover bg-blue-200'
              src='./recommendationAvatars/bill_gates.jpg'
            />
            <div className='flex flex-col mt-2'>
              <h1 className='text-seashellPeach-50'>Bill Gates</h1>
              <p className='text-lavender-300 text-xs'>
                Co-founder of Microsoft
              </p>
            </div>
          </div>
          <p className='text-karry-200 mt-2 font-extralight italic'>
            Don’t know the guy but it seems he’s the best at whatever he does.
          </p>
        </motion.div>
        {/* Card content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col'
        >
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
        </motion.div>
        {/* Card content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col'
        >
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
        </motion.div>
        {/* Card content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col'
        >
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
        </motion.div>
        {/* Card content */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='w-96 h-48 p-4 rounded-2xl bg-shark-950 shrink-0 flex flex-col'
        >
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
            This legend taught me everything I know about coding. My coding
            Yoda, my personal Obi-Wan Kenobi.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RecommendationCards;
