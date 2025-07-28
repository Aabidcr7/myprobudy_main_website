import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center py-3 lg:py-3 gap-4 lg:gap-0">
          {/* Logo and Mobile Menu Toggle */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <img 
              src="/images/img_header_logo.png" 
              alt="MyPitchDeck Logo" 
              className="w-[150px] sm:w-[180px] lg:w-[230px] h-auto"
            />
            
            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto order-3 lg:order-2`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-9 py-4 lg:py-0 w-full lg:justify-start">
              <button 
                role="menuitem"
                className="relative text-base sm:text-lg lg:text-[22px] font-poppins font-medium leading-[33px] text-primary transition-colors duration-200 hover:text-primary-purple-2 group"
              >
                Debt
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-purple-2 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                role="menuitem"
                className="relative text-base sm:text-lg lg:text-[22px] font-poppins font-medium leading-[33px] text-primary transition-colors duration-200 hover:text-primary-purple-2 group"
              >
                Equity
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-purple-2 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                role="menuitem"
                className="relative text-base sm:text-lg lg:text-[22px] font-poppins font-medium leading-[33px] text-primary transition-colors duration-200 hover:text-primary-purple-2 group"
              >
                Grants
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-purple-2 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button
                variant="orange"
                size="medium"
                className="w-full sm:w-auto text-sm lg:text-base font-jakarta font-bold leading-[21px] text-white bg-btn-orange-1 hover:bg-primary-orange-2 px-4 lg:px-[22px] py-3 lg:py-3 rounded-[10px] transition-all duration-200 transform hover:scale-105 hover:brightness-110"
              >
                Get started
              </Button>
            </div>
            
          </nav>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;