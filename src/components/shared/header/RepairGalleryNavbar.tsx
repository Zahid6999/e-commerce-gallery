'use client';

import { useState } from 'react';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

const RepairGalleryNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log('Close mobile menu');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
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
