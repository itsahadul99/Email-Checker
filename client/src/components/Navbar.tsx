import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Gmail Checker
          </Link>
          {/* Page Link */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
          {/* Try Now Button */}
          <Link
            to="/checker"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
          >
            Try Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;