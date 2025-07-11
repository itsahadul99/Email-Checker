import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Gmail Email Checker
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          A fast, reliable tool to verify Gmail addresses. Check if an email is properly formatted, has valid MX records, and whether 2FA is enabled for Google Workspace accounts.
        </p>
        <ul className="text-left text-gray-600 mb-8 space-y-2">
          <li>✅ Validate Gmail format (@gmail.com or @googlemail.com)</li>
          <li>✅ Verify domain MX records</li>
          <li>✅ Check 2FA status for Workspace accounts</li>
          <li>✅ Real-time results with a modern, responsive UI</li>
        </ul>
        <Link
          to="/checker"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Try Now
        </Link>
      </div>
    </div>
  );
};

export default Home;