'use client';

const TopBar = () => {
  return (
    <div className="bg-red-900 text-white py-2">
      <div className="main-container">
        <div className="flex items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook">
              {/* <Facebook className="w-4 h-4 text-red-900" /> */}
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram">
              {/* <Instagram className="w-4 h-4 text-red-900" /> */}
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="TikTok">
              {/* <Music className="w-4 h-4 text-red-900" /> */}
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="YouTube">
              {/* <Youtube className="w-4 h-4 text-red-900" /> */}
            </a>
          </div>

          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+8801887734268"
              className="bg-white text-red-900 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              +880 1887 734268
            </a>
            <a
              href="mailto:yourmailaddress@gmail.com"
              className="bg-white text-red-900 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              yourmailaddress@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
