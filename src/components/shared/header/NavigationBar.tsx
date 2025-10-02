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
    <div className="bg-white border-b border-red-200">
      <div className="main-container">
        <nav className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleItemClick(item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeItem === item.name || pathname === item.href
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}>
                {item.name}
                {/* Active underline */}
                {(activeItem === item.name || pathname === item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></div>
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
