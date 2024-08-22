import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/Contact'); 
  };


  return (
    <nav className="flex items-center justify-between bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(69,58,58,0.37)] p-5 h-14 rounded-full m-6 z-50 relative md:flex md:justify-between md:items-center md:p-5 md:h-14 md:rounded-full md:m-6 md:z-50">
      <h1 className="bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-white text-3xl font-bold">
        Saurabh Shelar
      </h1>
      <div className="md:hidden flex items-center">
        <img
          onClick={handleClick}
          className="w-6 h-5 hover:scale-105 duration-200 cursor-pointer"
          src={open ? "public/images/cross.png" : "public/images/menu.png"}
          alt={open ? "close menu" : "open menu"}
        />
      </div>
      <div className={`absolute top-full left-0 w-full transition-transform duration-300 ease-in-out bg-slate-95 rounded-3xl ${open ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[-20px] opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center space-y-2 shadow-lg p-4 rounded-lg">
          <li className="my-1">
            <Link to="/">Home</Link>
          </li>
          <li className="my-1">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="my-1">
            <Link to="/about">About</Link>
          </li>
          <li className="my-1">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="my-1">
            <Link to="/contact">Contact</Link>
          </li>
          <Button onClick={handleContactRedirect}>Contact Me</Button>
        </ul>
      </div>
      <ul className="hidden md:flex md:gap-24 md:justify-end md:items-center">
        <li className="hover:scale-105 duration-200 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <Button onClick={handleContactRedirect}>Contact Me</Button>

      </ul>
    </nav>
  );
};

export default Navbar;
