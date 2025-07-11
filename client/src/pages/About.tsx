import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center bg-white/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/40 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-blue-600">Gmail Checker</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The ultimate tool for validating Gmail addresses with precision and speed. Built with modern web technologies to deliver a seamless verification experience.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/checker"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try It Now
          </Link>
          <Link
            to="/features"
            className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-all duration-300"
          >
            View Features
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Gmail Checker was born out of frustration with existing email validation tools that were either too slow, inaccurate, or had clunky interfaces.
            </p>
            <p className="text-gray-700 mb-4">
              Inspired by services like ychecker.com, we set out to create a tool that combines robust validation with a beautiful, intuitive interface.
            </p>
            <p className="text-gray-700">
              Our mission is to help individuals and businesses improve their email deliverability and maintain clean contact lists.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Lightning-fast validation powered by modern APIs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">No unnecessary data collection or tracking</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Open-source core with community contributions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: 'React', icon: '⚛️', description: 'Frontend framework' },
            { name: 'TypeScript', icon: '📘', description: 'Type-safe JavaScript' },
            { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS' },
            { name: 'Node.js', icon: '🟢', description: 'Backend runtime' },
            { name: 'Express', icon: '🚂', description: 'API framework' },
            { name: 'MongoDB', icon: '🍃', description: 'Database' },
            { name: 'Jest', icon: '🧪', description: 'Testing framework' },
            { name: 'GitHub', icon: '🐙', description: 'Version control' },
          ].map((tech, index) => (
            <div key={index} className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors duration-200 border border-gray-200">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet The Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Alex Johnson', role: 'Founder & Developer', bio: 'Full-stack developer with 8+ years of experience building web applications.' },
            { name: 'Sam Wilson', role: 'UI/UX Designer', bio: 'Design specialist focused on creating intuitive user experiences.' },
            { name: 'Taylor Smith', role: 'DevOps Engineer', bio: 'Infrastructure and deployment expert ensuring maximum uptime.' },
          ].map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Interested in joining our team? We're always looking for talented individuals.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;