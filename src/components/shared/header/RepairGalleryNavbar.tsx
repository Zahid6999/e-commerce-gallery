'use client';

import MainHeader from './MainHeader';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

const RepairGalleryNavbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainHeader />
      <NavigationBar />
    </header>
  );
};

export default RepairGalleryNavbar;
