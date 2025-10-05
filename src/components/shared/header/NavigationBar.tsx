'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavigationBar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('Home');

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Best Selling', href: '/best-selling' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Brands', href: '/brands' },
  ];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="bg-white border-b-2 border-[rgba(142,0,11,0.15)] mt-2">
      <div className="main-container">
        <nav className="flex items-center justify-center ">
          <div className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleItemClick(item.name)}
                className={`relative px-4 py-2 text-tagline-1  transition-colors ${
                  activeItem === item.name || pathname === item.href
                    ? 'text-primary font-bold'
                    : 'text-secondary hover:text-primary font-normal'
                }`}>
                {item.name}
                {/* Active underline */}
                {(activeItem === item.name || pathname === item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 w-5 mx-auto rounded-md  h-1.5 bg-primary"></div>
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
