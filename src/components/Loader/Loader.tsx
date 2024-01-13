import { useEffect, useRef, useState } from 'react';
import { words } from './words';
import { motion } from 'framer-motion';

type Props = {
  isLoading: (a: boolean) => void;
};

const Loader = ({ isLoading }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordVariantRef = useRef<HTMLDivElement>(null);
  const [isLastWordDelay, setIsLastWordDelay] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (currentWordIndex !== words.length - 1) {
      intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 400 - currentWordIndex * 25); // Adjust initial speed and acceleration
    }

    if (currentWordIndex === words.length - 1) {
      setTimeout(() => {
        isLoading(false);
      }, 1000); // Delay before final animation
      setIsLastWordDelay(true); // Prevent interval during delay
    }

    return () => {
      clearInterval(intervalId);
      setIsLastWordDelay(false); // Allow interval to resume
    };
  }, [words, currentWordIndex, isLastWordDelay]);

  return (
    <motion.div
      key='loader'
      ref={wordVariantRef}
      initial={{ opacity: 1, y: 0 }} // Start slightly above for smoother entry
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className='items-center justify-center h-screen w-full text-3xl md:text-5xl uppercase flex font-black text-seashellPeach-50 lg:text-7xl xl:text-9xl bg-woodsmoke-950/50'
    >
      {words[currentWordIndex]}
    </motion.div>
  );
};

export default Loader;
