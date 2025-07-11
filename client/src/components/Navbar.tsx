import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main nav */}
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
            <Link
              to="/"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              activeClassName="bg-blue-50 text-blue-700"
            >
              Home
            </Link>

            <Link
              to="/checker"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              activeClassName="bg-blue-50 text-blue-700"
            >
              Email Checker
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              activeClassName="bg-blue-50 text-blue-700"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              activeClassName="bg-blue-50 text-blue-700"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              activeClassName="bg-blue-50 text-blue-700"
            >
              Pricing
            </Link>
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/checker"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-sm hover:shadow-md"
            >
              Try Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition duration-150"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/checker"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Email Checker
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              to="/checker"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;