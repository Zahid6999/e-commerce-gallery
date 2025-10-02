import Hero from '@/components/homepage-01/Hero';
import CTAV1 from '@/components/shared/cta/CTAV1';

import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Crypto - NextSaaS',
  description: 'Homepage One of NextSaaS',
};

const Homepage01 = () => {
  return (
    <Fragment>
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <section className="main-container">
          <h2 className="text-heading-1 font-lato"> Hello World </h2>
        </section>

        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-white"
          ctaBtnText="Get started"
        />
      </main>
    </Fragment>
  );
};
Homepage01.displayName = 'Homepage01';
export default Homepage01;
