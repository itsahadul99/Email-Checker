import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center bg-white/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/40">
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Gmail Email Checker
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 mb-8">
                    The ultimate tool to verify Gmail addresses instantly. Ensure deliverability, check validity, and enhance your email strategy.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/checker"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Start Checking Now
                    </Link>
                    <Link
                        to="#how-it-works"
                        className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner;