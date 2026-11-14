import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onOpenJoinModal }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
    { name: 'Skills & Internships', path: '/skills-and-internships' },
    { name: 'About Us', path: '/about-us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="h-16 max-w-[1280px] mx-auto px-margin flex items-center justify-between gap-space-md">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-space-md">
          <Link to="/" className="flex items-center gap-space-sm group">
            <img 
              alt="BBA Career Hub Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA55QjFJlTNazKDbCHqlvekw_uJMFd2eVLycX33nuIEAm1jF6HHfy_N67oltRxVJRVBg05wKsuks4sva1METF7I2M1w6qSVK7yC2vDI4__myDtFvstDA5R6rbBBJA4OJC21s3X66HkZ8sCNkVb7jogoE7sOqyqcL0u-LN71KKH2VOJgnElzhGIzOENgv794HWvVztk_YpZjUezeSuqRQywk0AsgAwOaQsp3-ffMhRkYfv1wXsAqhhLTSw"
            />
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              BBA Career Hub
            </span>
          </Link>
          <span className="hidden sm:inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm border border-secondary-fixed">
            Student Initiative
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg h-full">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors flex items-center h-full px-space-xs font-label-lg text-label-lg ${
                  active
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-md">
          <button
            onClick={onOpenJoinModal}
            className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-lg border border-outline-variant font-label-md text-label-md text-primary hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer active:scale-95"
          >
            Join Community
          </button>
          
          <button
            onClick={onOpenJoinModal}
            title="User Profile / Community"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 rounded-md hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant px-margin py-space-md flex flex-col gap-space-md animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-space-xs font-label-lg text-label-lg ${
                isActive(link.path)
                  ? 'text-primary font-bold border-l-4 border-primary pl-2'
                  : 'text-on-surface-variant hover:text-primary pl-2'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoinModal();
            }}
            className="w-full py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-center mt-2 cursor-pointer"
          >
            Join Community
          </button>
        </div>
      )}
    </header>
  );
}
