import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className='w-full  text-seashellPeach-50 flex gap-8 items-center mt-4 justify-center lg:justify-start lg:ml-1'>
      <a
        className='hover:text-seashellPeach-50/85'
        href='https://github.com/eytanbab'
      >
        <Github className='size-8' />
      </a>
      <a
        className='hover:text-seashellPeach-50/85'
        href='https://www.linkedin.com/in/ethan-babaev/'
      >
        <Linkedin className='size-8' />
      </a>
      <a
        className='hover:text-seashellPeach-50/85'
        href='mailto:ethan.babaev@gmail.com'
      >
        <Mail className='size-8' />
      </a>
      <a
        href='https://drive.google.com/file/d/1yCg-B6YAWPD5iIJHXEJX32xnSSScFd9D/view?usp=sharing'
        className='px-4 py-1 border-2 border-seashellPeach-50 rounded-full hover:text-seashellPeach-50/85 hover:border-seashellPeach-50/85'
      >
        Resume
      </a>
    </div>
  );
};

export default Contact;
