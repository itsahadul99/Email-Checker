import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Powerful <span className="text-blue-600">Features</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Discover how Gmail Checker helps you validate email addresses with precision and efficiency
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/checker"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try It Now
          </Link>
          <Link
            to="/pricing"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Email Validation",
              description: "Verify if an email address exists and can receive emails with our advanced validation system",
              highlights: [
                "Syntax checking",
                "Domain verification",
                "Mailbox existence"
              ]
            },
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Security Checks",
              description: "Identify potential security risks associated with email addresses",
              highlights: [
                "Disposable email detection",
                "Role-based account flagging",
                "Known fraud patterns"
              ]
            },
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Lightning Fast",
              description: "Get results in milliseconds with our optimized validation engine",
              highlights: [
                "Bulk processing",
                "API integration",
                "Cached results"
              ]
            },
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Detailed Reports",
              description: "Comprehensive validation results with actionable insights",
              highlights: [
                "Quality score",
                "Risk assessment",
                "Suggestions"
              ]
            },
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "2FA Verification",
              description: "Check if Google Workspace accounts have two-factor authentication enabled",
              highlights: [
                "Security status",
                "Workspace integration",
                "Admin insights"
              ]
            },
            {
              icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Custom Solutions",
              description: "Tailored validation rules for your specific needs",
              highlights: [
                "API customization",
                "Enterprise plans",
                "White-label options"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why We Stand Out</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 text-left font-semibold text-gray-700">Feature</th>
                <th className="pb-4 text-center font-semibold text-gray-700">Gmail Checker</th>
                <th className="pb-4 text-center font-semibold text-gray-700">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { feature: "Validation Speed", us: "Instant", others: "5-10 seconds" },
                { feature: "Bulk Processing", us: "✓ Unlimited", others: "Limited" },
                { feature: "API Access", us: "✓ Free Tier", others: "Paid only" },
                { feature: "Data Privacy", us: "No storage", others: "Logs emails" },
                { feature: "2FA Detection", us: "✓ Supported", others: "✗ Not available" },
                { feature: "Typo Correction", us: "✓ Smart suggestions", others: "Basic only" },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="py-4 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-4 text-center text-blue-600 font-semibold">{row.us}</td>
                  <td className="py-4 text-center text-gray-500">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Features;