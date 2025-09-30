'use client';

import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import LogoGreen from '../../../../public/images/shared/logo-green.svg';
import MobileMenu from '../MobileMenu';
import AboutMenu from '../mega-menu/AboutMenu';
import BlogMenu from '../mega-menu/BlogMenu';
import HomeMegaMenu from '../mega-menu/HomeMegaMenu';
import PageMegaMenu from '../mega-menu/PageMegaMenu';
import ServicesMenu from '../mega-menu/ServicesMenu';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';

const NavbarFour = () => {
  const { isScrolled } = useNavbarScroll(100);
  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'fixed top-3 left-0 z-50 flex w-full items-center px-12 transition-all duration-500 ease-in-out md:top-0',
          isScrolled && 'bg-black/40 px-5 backdrop-blur-3xl dark:bg-transparent',
        )}>
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">
          <div>
            <Link href="/">
              <span className="sr-only">Home</span>
              <Image src={LogoGreen} alt="NextSass" />
            </Link>
          </div>
          <div className="flex items-center gap-[76px]">
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center gap-6">
                {navigationItems.map((item) => {
                  const renderMegaMenu = () => {
                    switch (item?.megaMenuComponent) {
                      case 'HomeMegaMenu':
                        return <HomeMegaMenu />;
                      case 'PageMegaMenu':
                        return <PageMegaMenu />;
                      case 'AboutMenu':
                        return <AboutMenu />;
                      case 'ServicesMenu':
                        return <ServicesMenu />;
                      case 'BlogMenu':
                        return <BlogMenu />;
                      default:
                        return null;
                    }
                  };

                  // mega menu render
                  return (
                    <li key={item?.id} className={cn('py-6', item?.hasDropdown && 'group/nav relative cursor-pointer')}>
                      <NavItemLink variant="white" item={item} />
                      {item.hasDropdown && renderMegaMenu()}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <NavCTAButton
                href="/signup-01"
                btnClassName={cn('btn-primary hover:btn-white-dark dark:hover:btn-white')}
                label="Get started"
              />
              {/* mobile menu btn */}
              <MobileMenuButton />
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

export default NavbarFour;
