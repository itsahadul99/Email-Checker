import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common classes for nav items to reduce duplication
  const navItemClasses = "px-3 py-2 rounded-md text-sm font-medium transition duration-150";
  const mobileNavItemClasses = "block px-3 py-2 rounded-md text-base font-medium";

  // Active class handler
  const getActiveClass = (isActive: boolean) => 
    isActive 
      ? "text-blue-600" 
      : "text-gray-700 hover:text-gray-900";

  // Navigation links data
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/checker", text: "Email Checker" },
    { to: "/about", text: "About" },
    { to: "/features", text: "Features" },
    { to: "/pricing", text: "Pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline">Gmail Checker</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `${navItemClasses} ${getActiveClass(isActive)}`}
                end
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavLink
              to="/checker"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-sm hover:shadow-md"
            >
              Try Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition duration-150"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1 px-2 bg-white shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `${mobileNavItemClasses} ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`
              }
              onClick={() => setIsOpen(false)}
              end
            >
              {link.text}
            </NavLink>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <NavLink
              to="/checker"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;