import Hero from '@/components/homepage-01/Hero';
import RepairGalleryNavbar from '@/components/shared/header/RepairGalleryNavbar';

import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Repair Gallery - Home',
  description: 'Professional repair services for all your devices',
};

const Homepage01 = () => {
  return (
    <Fragment>
      <RepairGalleryNavbar />
      <main className="bg-white dark:bg-background-5">
        <Hero />
      </main>
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
