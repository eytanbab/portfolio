import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className='w-full  text-seashellPeach-50 flex gap-8 items-center mt-4 justify-center lg:justify-start lg:ml-1'>
      <a href='https://github.com/eytanbab'>
        <Github size={24} />
      </a>
      <a href='https://www.linkedin.com/in/ethan-babaev/'>
        <Linkedin size={24} />
      </a>
      <a href='mailto:ethan.babaev@gmail.com'>
        <Mail size={24} />
      </a>
    </div>
  );
};

export default Contact;
