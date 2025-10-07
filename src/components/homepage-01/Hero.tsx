import Image from 'next/image';
import heroBanner from '../../../public/images/homepage/hero-banner.png';

const Hero = () => {
  return (
    <section className="pt-10 pb-20 relative z-10">
      <div className="main-container relative h-[628px]">
        <div className="w-full h-[628px] absolute top-0 left-0 rounded-4xl shadow-2 bg-primary">
          <div className="w-[calc(100%-64px)]  h-[calc(100%-64px)] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary-light shadow-3 rounded-3xl">
            <div className="w-[calc(100%-66px)] h-[calc(100%-64px)] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary-100 shadow-4 rounded-2xl">
              <figure className="max-w-[519px] mx-auto py-12.5 pointer-events-none select-none">
                <Image src={heroBanner} alt="hero banner" className="w-full h-full object-cover" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
