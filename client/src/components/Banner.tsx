import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for child elements
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Animation variants for split layout text
const splitTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Animation variants for split layout image
const splitImageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Button animation variants
const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.4)",
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

// SVG animation variant for centered layout
const svgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.2,
    scale: 1,
    transition: {
      duration: 1,
      ease: easeOut,
    },
  },
};

interface BannerProps {
  layoutType?: "centered" | "split";
}

const Banner = ({ layoutType = "centered" }: BannerProps) => {
  return (
    <>
      {layoutType === "centered" ? (
        // Centered Hero Layout
        <motion.section
          className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background SVG with Email Icon */}
          <motion.div
            className="absolute inset-0 z-0"
            variants={svgVariants}
          >
            <svg
              className="w-full h-full opacity-20"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C200 400 600 600 1000 1000H0V0Z"
                fill="url(#gradient)"
              />
              <path
                d="M400 350L600 350L650 450L500 550L350 450L400 350Z"
                fill="white"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="1000">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-7xl w-full text-center bg-white/20 backdrop-blur-xl rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/40"
            variants={childVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
              variants={childVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Gmail Email Checker
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={childVariants}
            >
              Verify Gmail addresses instantly with our powerful tool. Ensure deliverability and optimize your email campaigns effortlessly.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              variants={childVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="/checker"
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Checking Now
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  to="about"
                  className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-indigo-50/50 hover:border-indigo-700"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      ) : (
        // Asymmetric Split Layout
        <motion.section
          className="min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-blue-50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <motion.div
              className="text-left p-8 lg:p-12"
              variants={splitTextVariants}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
                variants={splitTextVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                  Gmail Email Checker
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-md leading-relaxed"
                variants={splitTextVariants}
              >
                Validate Gmail addresses in real-time. Boost your email strategy with accurate deliverability and format checks.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={splitTextVariants}
              >
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="/checker"
                    className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Checking Now
                  </Link>
                </motion.div>
                <motion.div variants={buttonVariants} whileHover="hover">
                  <Link
                    to="#how-it-works"
                    className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:border-blue-700"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Image Section */}
            <motion.div
              className="hidden lg:block relative"
              variants={splitImageVariants}
            >
              <svg
                className="w-full h-auto max-h-[400px]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="200"
                  height="150"
                  rx="20"
                  fill="url(#gradient)"
                />
                <path
                  d="M50 40L150 40L175 80L100 120L25 80L50 40Z"
                  fill="white"
                  opacity="0.5"
                />
                <path
                  d="M60 50L140 50L155 75L100 100L45 75L60 50Z"
                  fill="white"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="150">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Banner;