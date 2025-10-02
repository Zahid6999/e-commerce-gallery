'use client';

const MainHeader = () => {
  return (
    <div className="bg-white py-4">
      <div className="main-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Smartphone with wrench icon */}
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center relative">
                <div className="w-6 h-8 bg-red-800 rounded-sm relative">
                  {/* Circuit lines */}
                  <div className="absolute -left-1 top-1 w-1 h-1 bg-red-300 rounded-full"></div>
                  <div className="absolute -right-1 top-2 w-1 h-1 bg-red-300 rounded-full"></div>
                  <div className="absolute -left-1 bottom-2 w-1 h-1 bg-red-300 rounded-full"></div>
                  <div className="absolute -right-1 bottom-1 w-1 h-1 bg-red-300 rounded-full"></div>
                  {/* Wrench inside */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-red-900 uppercase tracking-wide">REPAIR GALLERY</div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {/* <Search className="h-5 w-5 text-red-600" /> */}
              </div>
              <input
                type="text"
                placeholder="Search for product"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 border-2 border-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
              aria-label="User Account">
              {/* <User className="w-5 h-5 text-red-600" /> */}
            </button>
            <button
              className="w-10 h-10 border-2 border-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors relative"
              aria-label="Shopping Cart">
              {/* <ShoppingCart className="w-5 h-5 text-red-600" /> */}
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
