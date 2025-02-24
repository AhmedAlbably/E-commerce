import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        {/* Top Section: Logo & Icons in One Row Always */}
        <div className="flex flex-wrap justify-between items-center gap-3 reorder">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-gray-900 lg:order-1" aria-label="MyShop Home">
            MyShop
          </a>

          {/* Icons (Cart & User) */}
          <div className="flex items-center gap-6 sm:2 md:order-3 lg:order-3">
            <a href="/cart" className="relative" aria-label="Shopping Cart">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </a>
            <a href="/account" className="block" aria-label="User Account">
              <User className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          {/* Search Bar: On Small Screens, Moves Below */}
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:3 md:order-2 lg:order-2">
            <form className="flex items-center w-full sm:w-[300px] md:w-[400px] border border-gray-300 rounded-lg overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 text-gray-700 outline-none bg-transparent"
                aria-label="Search products"
              />
              <button className="bg-blue-500 text-white px-5 py-2 flex items-center gap-2 hover:bg-blue-600 transition-all cursor-pointer">
                <span className=" sm:block">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
