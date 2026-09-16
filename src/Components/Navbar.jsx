import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          My Store
        </h1>

        {/* Desktop Links */}
        <div className="hidden gap-6 md:flex">
          <a
            className="hover:text-gray-300"
            href="/"
          >
            Home
          </a>

          <a
            className="hover:text-gray-300"
            href="/products"
          >
            Products
          </a>

          <a
            className="hover:text-gray-300"
            href="/cart"
          >
            Cart
          </a>

          <a
            className="hover:text-gray-300"
            href="/about"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-700 px-6 py-4 md:hidden">
          
          <div className="flex flex-col gap-4">
            
            <a
              className="hover:text-gray-300"
              href="/"
            >
              Home
            </a>

            <a
              className="hover:text-gray-300"
              href="/products"
            >
              Products
            </a>

            <a
              className="hover:text-gray-300"
              href="/cart"
            >
              Cart
            </a>

            <a
              className="hover:text-gray-300"
              href="/about"
            >
              About
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;