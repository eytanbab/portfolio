const Navbar = () => {
  return (
    <nav className='fixed top-0 p-4 h-20 w-full bg-woodsmoke-950/10 backdrop-blur-3xl text-seashellPeach-50 flex justify-between items-center'>
      <h1 className='text-4xl text-flesh-200 font-light'>Ethan Babaev</h1>
      <ul className='flex gap-8 items-center'>
        <li>
          <span className='text-flesh-200 font-normal'>01. </span>
          About
        </li>
        <li>
          <span className='text-flesh-200 font-normal'>02. </span>
          Projects
        </li>
        <li>
          <span className='text-flesh-200 font-normal'>03. </span>
          Contact
        </li>
        <li className='border-[1.5px] border-flesh-200 px-6 py-1 rounded-full'>
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
