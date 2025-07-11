import { useState } from 'react';

const Checker: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [result, setResult] = useState<{
    format: boolean | null;
    mxRecords: boolean | null;
    twoFA: boolean | null;
  }>({ format: null, mxRecords: null, twoFA: null });

  const handleCheck = () => {
    // Placeholder for backend API call
    // Simulate result for now
    setResult({
      format: email.endsWith('@gmail.com') || email.endsWith('@googlemail.com'),
      mxRecords: true, // Replace with actual DNS check
      twoFA: false, // Replace with Google Admin SDK check
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Check Gmail Address
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Gmail address"
            className="w-full px-4 py-2 rounded-md bg-white/50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none fokus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCheck}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Check Email
          </button>
        </div>
        {/* Result Box with Animation */}
        {result.format !== null && (
          <div className="mt-6 p-4 bg-white/30 backdrop-blur-md rounded-md border border-white/30 animate-fadeIn">
            <h2 className="text-lg font-semibold text-gray-800">Results</h2>
            <p className="text-sm text-gray-600">
              Format Valid:{' '}
              <span
                className={`font-bold ${
                  result.format ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {result.format ? '✓ Valid' : '✗ Invalid'}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              MX Records:{' '}
              <span
                className={`font-bold ${
                  result.mxRecords ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {result.mxRecords ? '✓ Found' : '✗ Not Found'}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              2FA Enabled:{' '}
              <span
                className={`font-bold ${
                  result.twoFA ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {result.twoFA ? '✓ Enabled' : '✗ Not Enabled'}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checker;