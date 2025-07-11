import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VerificationResult {
  email: string;
  isValidFormat: boolean;
  hasMxRecords: boolean;
  hasTwoFA: boolean;
  isDisposable: boolean;
  isRoleAccount: boolean;
}

const Checker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'bulk'>('single');
  const [singleEmail, setSingleEmail] = useState('');
  const [bulkEmails, setBulkEmails] = useState('');
  const [results, setResults] = useState<VerificationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

 const verifyEmails = async (emails: string[]) => {
  setIsLoading(true);
  setError('');
  setResults([]);

  try {
    const response = await fetch('http://localhost:5000/api/check-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emails }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    setResults(data);
  } catch (err) {
    setError('Failed to verify emails. Please try again.');
    console.error('Verification error:', err);
  } finally {
    setIsLoading(false);
  }
};

  const handleSingleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!singleEmail.trim()) {
      setError('Please enter an email address');
      return;
    }
    verifyEmails([singleEmail.trim()]);
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailList = bulkEmails
      .split('\n')
      .map(email => email.trim())
      .filter(email => email);
    
    if (emailList.length === 0) {
      setError('Please enter at least one email address');
      return;
    }
    verifyEmails(emailList);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Gmail Validator Pro
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verify email authenticity with our advanced validation technology
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('single')}
              className={`flex-1 py-5 px-6 text-center font-medium relative ${activeTab === 'single' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Single Email
              {activeTab === 'single' && (
                <motion.div 
                  layoutId="tabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('bulk')}
              className={`flex-1 py-5 px-6 text-center font-medium relative ${activeTab === 'bulk' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Bulk Verification
              {activeTab === 'bulk' && (
                <motion.div 
                  layoutId="tabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: activeTab === 'single' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activeTab === 'single' ? -20 : 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Single Email Form */}
                {activeTab === 'single' && (
                  <form onSubmit={handleSingleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={singleEmail}
                          onChange={(e) => setSingleEmail(e.target.value)}
                          placeholder="example@gmail.com"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <svg className="-ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Verify Email
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Bulk Email Form */}
                {activeTab === 'bulk' && (
                  <form onSubmit={handleBulkSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="emails" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Addresses (one per line)
                      </label>
                      <textarea
                        id="emails"
                        value={bulkEmails}
                        onChange={(e) => setBulkEmails(e.target.value)}
                        placeholder={`user1@gmail.com\nuser2@googlemail.com\nuser3@gmail.com`}
                        rows={8}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm font-mono"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        {bulkEmails.split('\n').filter(e => e.trim()).length} emails entered
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying {bulkEmails.split('\n').filter(e => e.trim()).length} emails...
                        </>
                      ) : (
                        <>
                          <svg className="-ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Verify All Emails
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg"
              >
                <p>{error}</p>
              </motion.div>
            )}

            {/* Results Section */}
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Verification Results
                  </h3>
                  <div className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
                    {results.length} {results.length === 1 ? 'email' : 'emails'} checked
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total</p>
                        <p className="text-2xl font-semibold text-gray-800">{results.length}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-green-100 text-green-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Valid</p>
                        <p className="text-2xl font-semibold text-gray-800">
                          {results.filter(r => r.isValidFormat && r.hasMxRecords).length}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-xl border border-red-200 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-red-100 text-red-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Invalid</p>
                        <p className="text-2xl font-semibold text-gray-800">
                          {results.filter(r => !r.isValidFormat || !r.hasMxRecords).length}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">2FA Enabled</p>
                        <p className="text-2xl font-semibold text-gray-800">
                          {results.filter(r => r.hasTwoFA).length}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Results Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MX</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2FA</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {results.map((result, index) => (
                          <motion.tr 
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={result.isValidFormat && result.hasMxRecords ? 'bg-white' : 'bg-red-50'}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <div className="flex items-center">
                                {result.isValidFormat && result.hasMxRecords ? (
                                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                )}
                                {result.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${result.isValidFormat && result.hasMxRecords ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {result.isValidFormat && result.hasMxRecords ? 'Valid' : 'Invalid'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${result.isValidFormat ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {result.isValidFormat ? 'Valid' : 'Invalid'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${result.hasMxRecords ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {result.hasMxRecords ? 'Found' : 'Missing'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${result.hasTwoFA ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                {result.hasTwoFA ? 'Enabled' : 'Disabled'}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Export Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CSV
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download JSON
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Share Results
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checker;