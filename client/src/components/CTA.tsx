import { Link, useLocation } from 'react-router-dom';

const CTA = () => {
    const location = useLocation();
    return (
        <section className={`${location.pathname === '/checker' ? "hidden": "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700"}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Verify Your Emails?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Join thousands of users who trust our email verification tool for their personal and business needs.
                </p>
                <Link
                    to="/checker"
                    className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                    Get Started Now - It's Free
                </Link>
            </div>
        </section>
    );
};

export default CTA;