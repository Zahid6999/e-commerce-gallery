import Categories from '@/components/homepage-01/Categories';
import Hero from '@/components/homepage-01/Hero';
import OurCommitments from '@/components/homepage-01/OurCommitments';
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
      <main className="bg-white dark:bg-background-5 pt-[240px]">
        <Hero />
        <OurCommitments />
        <Categories />
      </main>
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
