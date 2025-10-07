'use client';

import { useEffect, useRef, useState } from 'react';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

const RepairGalleryNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        // Scrolling down
        if (currentScrollY > lastScrollY) {
          setIsScrolledDown(true);
        } else {
          // Scrolling up
          setIsScrolledDown(false);
        }
      } else {
        // At top of page
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isScrolledDown ? '-translate-y-[110%]' : 'translate-y-0'
      }`}
      ref={navbarRef}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <TopBar />
        <MainHeader />
        <NavigationBar />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileHeader onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default RepairGalleryNavbar;
