import { useEffect, useRef, useState } from 'react';
import { words } from './words';
import { motion } from 'framer-motion';

type Props = {
  isLoading: (a: boolean) => void;
};

const Loader = ({ isLoading }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordVariantRef = useRef<motion.Variants>(null);
  const [isLastWordDelay, setIsLastWordDelay] = useState(false);

  useEffect(() => {
    let intervalId;

    if (currentWordIndex !== words.length - 1) {
      intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 500 - currentWordIndex * 20); // Adjust initial speed and acceleration
    }

    if (currentWordIndex === words.length - 1) {
      setTimeout(() => {
        wordVariantRef.current.animate({ y: -100 }, { duration: 1 }); // Move component up
        isLoading(false);
      }, 2000); // Delay before final animation
      setIsLastWordDelay(true); // Prevent interval during delay
    }

    return () => {
      clearInterval(intervalId);
      setIsLastWordDelay(false); // Allow interval to resume
    };
  }, [words, currentWordIndex, isLastWordDelay]);

  return (
    <motion.div
      ref={wordVariantRef}
      initial={{ opacity: 1, y: 0 }} // Start slightly above for smoother entry
      animate={{ opacity: 1, y: 0 }} // Animate both opacity and y-position
      transition={{ duration: 0.5 }}
      className='absolute inset-0 items-center justify-center text-3xl md:text-5xl uppercase flex font-black text-seashellPeach-50 lg:text-7xl xl:text-9xl'
    >
      {words[currentWordIndex]}
    </motion.div>
  );
};

export default Loader;