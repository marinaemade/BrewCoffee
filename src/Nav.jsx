import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-20 ${
      isScrolled || menuOpen ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      
      <div className="navbar-start">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost lg:hidden text-white relative w-12 h-12"
        >
          <div className="flex flex-col justify-center items-center">
            <span className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </div>
        </button>

        <Link className="text-xl md:text-2xl font-serif font-bold text-white cursor-pointer ml-2" to="/">
          Brew<span className="text-[#ECB159]">Coffee</span>
        </Link>
      </div>

      {/* DESKTOP */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-medium gap-6">
          <li><Link to="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-amber-200 transition-colors">About</Link></li>
          <li><Link to="/menu" className="hover:text-amber-200 transition-colors">Menu</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link
          to="/contact"
          className="btn bg-[#6F4E37] hover:bg-[#5D402E] border-none text-white rounded-full px-4 md:px-8 capitalize text-sm md:text-base"
        >
          Contact Us
        </Link>
      </div>

      {/* MOBILE */}
      <div className={`lg:hidden absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100 border-b border-white/10' : 'max-h-0 opacity-0'
      }`}>
        <ul className="menu menu-vertical p-8 text-white text-xl gap-4 font-serif">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;