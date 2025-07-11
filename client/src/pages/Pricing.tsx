import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Simple, <span className="text-blue-600">Transparent</span> Pricing
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
        <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
          <button
            type="button"
            className="px-6 py-3 text-sm font-medium rounded-l-lg bg-blue-600 text-white"
          >
            Monthly
          </button>
          <button
            type="button"
            className="px-6 py-3 text-sm font-medium rounded-r-lg bg-white text-blue-600 hover:bg-gray-50"
          >
            Annual (Save 20%)
          </button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {/* Free Tier */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for individuals and small projects</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100 validations/month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic email validation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Single email verification</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-5 w-5 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No API access</span>
              </li>
            </ul>
            <Link
              to="/checker"
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Pro Tier - Featured */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 transform scale-105 z-10">
          <div className="bg-blue-500 text-white text-center py-2">
            <span className="text-sm font-semibold">MOST POPULAR</span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For professionals and growing businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">$19</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5,000 validations/month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced validation checks</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Bulk email verification</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>API access included</span>
              </li>
            </ul>
            <Link
              to="/checker"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 shadow-md"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Enterprise Tier */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations with custom needs</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>25,000 validations/month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>All advanced features</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority API access</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-4 text-left font-semibold text-gray-700">Feature</th>
                <th className="pb-4 text-center font-semibold text-gray-700">Starter</th>
                <th className="pb-4 text-center font-semibold text-gray-700">Pro</th>
                <th className="pb-4 text-center font-semibold text-gray-700">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { feature: "Email Validations", starter: "100/mo", pro: "5,000/mo", enterprise: "25,000/mo" },
                { feature: "Bulk Verification", starter: "✗", pro: "✓", enterprise: "✓" },
                { feature: "API Access", starter: "✗", pro: "✓", enterprise: "✓" },
                { feature: "2FA Detection", starter: "✗", pro: "✓", enterprise: "✓" },
                { feature: "Priority Support", starter: "✗", pro: "Email", enterprise: "24/7" },
                { feature: "Custom Rules", starter: "✗", pro: "✗", enterprise: "✓" },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="py-4 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-4 text-center">{row.starter}</td>
                  <td className="py-4 text-center text-blue-600 font-semibold">{row.pro}</td>
                  <td className="py-4 text-center">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. You'll only pay the difference for the remaining period."
            },
            {
              question: "Do you offer discounts for non-profits?",
              answer: "We offer special pricing for registered non-profit organizations. Please contact our sales team for more information."
            },
            {
              question: "What happens if I exceed my validation limit?",
              answer: "For Pro and Enterprise plans, additional validations can be purchased as needed. Starter plans will need to upgrade."
            },
            {
              question: "Is there a free trial?",
              answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start the trial."
            },
            {
              question: "How do you handle my data?",
              answer: "We take privacy seriously. Email addresses are only used for validation and are never stored or shared."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;