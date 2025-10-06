'use client';

import { SearchIcon } from '@/icons';

import { HamburgerIcon } from '@/icons';
import Image from 'next/image';
import cart from '../../../../public/images/icons/cart.svg';
import user from '../../../../public/images/icons/user.svg';
import logo from '../../../../public/images/mobile-logo.svg';

interface MobileHeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileHeader = ({ onMenuToggle, isMenuOpen }: MobileHeaderProps) => {
  return (
    <div className="bg-white  lg:hidden ">
      <div className="flex bg-[#e2000033] items-center px-6 py-2 justify-between">
        {/* Hamburger Menu */}
        <button
          onClick={onMenuToggle}
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu">
          <span className="text-lg font-bold text-primary">{isMenuOpen ? '✕' : <HamburgerIcon />}</span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-11 h-7.5" />
        </div>

        {/* User Icons */}
        <div className="flex items-center gap-3">
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 bg-white hover:scale-105 cursor-pointer transition-all duration-200"
            aria-label="User Account">
            <Image src={user} alt="user" className="w-4 h-4" />
          </button>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 bg-white hover:scale-105 cursor-pointer transition-all duration-200 relative"
            aria-label="Shopping Cart">
            <Image src={cart} alt="cart" className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-6">
        <div className="relative max-w-[336px] mx-auto">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <SearchIcon className="size-5" />
          </div>
          <input
            type="text"
            placeholder="Search for product"
            className="w-full pl-14 pr-4 py-3.5  rounded-full text-secondary placeholder-[#808080] focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent bg-white shadow-1 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
