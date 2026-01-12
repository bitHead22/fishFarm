import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary dark:text-primary font-bold" : "text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-[#22252a] border-b border-slate-100 dark:border-slate-800">
      <div className="flex justify-center w-full px-4 lg:px-12">
        <div className="flex flex-col max-w-[1440px] flex-1">
          <header className="flex items-center justify-between whitespace-nowrap py-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="size-8 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">water_drop</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
                Hare Krishna <span className="text-primary">Fish Farm</span>
              </h2>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <Link to="/" className={`${isActive('/')} text-sm transition-colors`}>Home</Link>
              <Link to="/about" className={`${isActive('/about')} text-sm transition-colors`}>About Us</Link>
              <Link to="/services" className={`${isActive('/services')} text-sm transition-colors`}>Services</Link>
              <Link to="/catalog" className={`${isActive('/catalog')} text-sm transition-colors`}>Products</Link>
              <Link to="/contact" className={`${isActive('/contact')} text-sm transition-colors`}>Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/contact">
                <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-sm transition-all duration-300 transform hover:-translate-y-0.5">
                  Get a Quote
                </button>
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden text-slate-600 dark:text-gray-300 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </header>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-2 duration-200">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-gray-300 font-semibold px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-gray-300 font-semibold px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">About Us</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-gray-300 font-semibold px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">Services</Link>
              <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-gray-300 font-semibold px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">Products</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-gray-300 font-semibold px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded">Contact</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center rounded-lg h-10 flex items-center justify-center bg-primary text-white font-bold">Get a Quote</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;