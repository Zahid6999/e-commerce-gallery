'use client';

import { FacebookIcon, InstagramIcon, TikTokIcon, YoutubeIcon } from '@/icons';
const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2.5">
      <div className="main-container">
        <div className="flex items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="size-6 " aria-label="Facebook">
              <FacebookIcon className="size-full " />
            </a>
            <a href="#" className="size-7 " aria-label="Instagram">
              <InstagramIcon className="size-full " />
            </a>

            <a href="#" className="size-7 " aria-label="TikTok">
              <TikTokIcon className="size-full " />
            </a>

            <a href="#" className="size-7 " aria-label="YouTube">
              <YoutubeIcon className="size-full " />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+8801887734268"
              className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              +880 1887 734268
            </a>
            <a
              href="mailto:yourmailaddress@gmail.com"
              className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              yourmailaddress@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
