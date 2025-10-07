'use client';

// import { Hexagon, Home, ShoppingBag, ShoppingCart, Star, Tag, Truck, X } from 'lucide-react';
import { HexagonIcon, HomeIcon, ShoppingBagIcon, StarIcon, TagIcon, TruckIcon } from '@/icons';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Shop', href: '/shop', icon: ShoppingBagIcon },
    { name: 'Best Selling', href: '/best-selling', icon: StarIcon },
    { name: 'Brands', href: '/brands', icon: TagIcon },
    { name: 'New Arrivals', href: '/new-arrivals', icon: HexagonIcon },
    { name: 'Track Order', href: '/track-order', icon: TruckIcon },
    { name: 'Pre Order', href: '/pre-order', icon: ShoppingBagIcon },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={onClose} />}

      {/* Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-secondary">Menu</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Red separator line */}
        <div className="h-1 bg-primary"></div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 hover:translate-x-1 transition-all duration-200 group">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-primary-600 transition-colors duration-200" />
                    </div>
                    <span className="text-secondary font-medium group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Additional Menu Sections */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-4">
            {/* Official Support */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <StarIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">Official Support</p>
                <p className="text-xs text-gray-500">24/7 Customer Service</p>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold text-secondary mb-3">Categories</h3>
              <div className="space-y-2">
                <Link
                  href="/smartphone"
                  onClick={handleLinkClick}
                  className="block p-2 text-secondary hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Smartphone
                </Link>
                <Link
                  href="/laptop"
                  onClick={handleLinkClick}
                  className="block p-2 text-secondary hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Laptop
                </Link>
                <Link
                  href="/tablet"
                  onClick={handleLinkClick}
                  className="block p-2 text-secondary hover:text-primary hover:translate-x-1 transition-all duration-200">
                  Tablet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
