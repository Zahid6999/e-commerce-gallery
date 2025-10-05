'use client';

import { SearchIcon } from '@/icons';
import Image from 'next/image';
import cart from '../../../../public/images/icons/cart.svg';
import logo from '../../../../public/images/icons/logo.svg';
import user from '../../../../public/images/icons/user.svg';
const MainHeader = () => {
  return (
    <div className="bg-white py-7">
      <div className="main-container">
        <div className="flex items-center gap-4 justify-start">
          {/* Logo */}
          <div className="flex items-center gap-3  md:pr-16 lg:pr-[180px]  xl:pr-[229px]">
            <Image src={logo} alt="logo" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[586px] bg-white rounded-3xl  shadow-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="size-6 " />
              </div>
              <input
                type="text"
                placeholder="Search for product"
                className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-full text-secondary placeholder-[#808080] focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 border-2 border-black/5 rounded-full flex items-center justify-center hover:bg-white/70 cursor-pointer transition-colors"
              aria-label="User Account">
              <Image src={user} alt="user" />
            </button>
            <button
              className="w-10 h-10 border-2 border-black/5 rounded-full flex items-center justify-center hover:bg-white/70 cursor-pointer transition-colors relative"
              aria-label="Shopping Cart">
              <Image src={cart} alt="cart" />
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 bg-primary  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
