const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center bg-white/20 backdrop-blur-lg rounded-lg p-8 shadow-lg border border-white/30">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          About Gmail Checker
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Built with React, TypeScript, and Tailwind CSS, Gmail Checker is inspired by tools like ychecker.com. It provides a seamless experience for validating Gmail addresses with a focus on speed, accuracy, and user-friendly design.
        </p>
      </div>
    </div>
  );
};

export default About;