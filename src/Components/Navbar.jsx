import { useState } from "react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between px-4 py-4 md:px-8">
        <h1 className="text-2xl font-bold tracking-wide hover:text-gray-300">
          My Store
        </h1>

        {/* Desktop Links */}
        <div className="hidden gap-6 md:flex items-center">
          <a className="hover:text-gray-300" href="/">
            Home
          </a>

          <a className="hover:text-gray-300" href="/products">
            Products
          </a>

          <a className="hover:text-gray-300" href="/cart">
            Cart
          </a>

          <a className="hover:text-gray-300" href="/about">
            About
          </a>
        </div>

        {/* React Icons */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Search Icon */}
          <button className="hover:text-gray-300 transition">
            <Search size={20} />
          </button>
          {/* Heart Icon */}
          <button className="hover:text-gray-300 transition">
            <Heart size={20} />
          </button>
          {/* User Icon */}
          <button className="hover:text-gray-300 transition">
            <User size={20} />
          </button>
          {/* Shopping Cart */}
          <button className="relative hover:text-gray-300 transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </button>
          <div className="flex items-center gap-2 ml-2">
            <button
              className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-600 transition"
              onClick={() => setCartCount((prev) => Math.max(prev - 1, 0))}
            >
              -
            </button>

            <span className="px-3 font-semibold"> {cartCount} </span>

            <button
              className="bg-green-500 px-2 py-1 rounded-md hover:bg-green-600 transition"
              onClick={() => setCartCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="shrink-0 text-2xl md:hidden mr-8"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-700 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a className="hover:text-gray-300" href="/">
              Home
            </a>

            <a className="hover:text-gray-300" href="/products">
              Products
            </a>

            <a
              className="flex items-center gap-2 hover:text-gray-300"
              href="/cart"
            >
              <span className="relative">
                <ShoppingCart size={18} />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </span>
              Cart
            </a>

            <a className="hover:text-gray-300" href="/about">
              About
            </a>

            <a
              className="flex items-center gap-2 hover:text-gray-300"
              href="/wishlist"
            >
              <Heart size={18} />
              Wishlist
            </a>
            <a
              className="flex items-center gap-2 hover:text-gray-300"
              href="/profile"
            >
              <User size={18} />
              User
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
