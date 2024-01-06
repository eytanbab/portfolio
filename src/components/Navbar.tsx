import MenuIcon from './MenuIcon/MenuIcon';

interface NavbarProps {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ openNav, setOpenNav }: NavbarProps) => {
  const handleMobileNav = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <>
      <nav className='p-4 h-20 w-full bg-woodsmoke-950/10 backdrop-blur-3xl text-seashellPeach-50 flex justify-between items-center z-10 relative'>
        <h1 className='text-xl text-flesh-200 font-light relative'>
          Ethan Babaev
        </h1>
        <button onClick={handleMobileNav}>
          <MenuIcon />
        </button>
      </nav>
      <div
        className={`${
          openNav ? 'translate-x-0' : 'translate-x-full'
        } text-center bg-woodsmoke-950/10 absolute inset-0 backdrop-blur-3xl  text-3xl transition-transform duration-300`}
      >
        <ul className='flex w-full h-full flex-col items-center justify-center gap-8 text-seashellPeach-50 text-xl'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </>
    // <nav className='fixed top-0 p-4 h-20 w-full bg-woodsmoke-950/10 backdrop-blur-3xl text-seashellPeach-50 flex justify-between items-center'>
    //   <h1 className='text-xl text-flesh-200 font-light'>Ethan Babaev</h1>
    //   <ul className='flex gap-8 items-center'>
    //     <li>
    //       <span className='text-flesh-200 font-normal'>01. </span>
    //       About
    //     </li>
    //     <li>
    //       <span className='text-flesh-200 font-normal'>02. </span>
    //       Projects
    //     </li>
    //     <li>
    //       <span className='text-flesh-200 font-normal'>03. </span>
    //       Contact
    //     </li>
    //     <li className='border-[1.5px] border-flesh-200 px-6 py-1 rounded-full'>
    //       Resume
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
