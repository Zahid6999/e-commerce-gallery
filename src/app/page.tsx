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
      <main className="bg-background-2 dark:bg-background-5">
        <section className="main-container">
          <h2 className="text-heading-1 font-lato"> Hello World </h2>
        </section>
      </main>
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
