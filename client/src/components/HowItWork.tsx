const HowItWork = () => { 
    return (
             <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Enter Email",
                description: "Type in the Gmail address you want to verify",
                icon: "📩"
              },
              {
                title: "2. Advanced Checks",
                description: "Our system performs multiple validation steps",
                icon: "🔍"
              },
              {
                title: "3. Get Results",
                description: "Receive detailed verification report instantly",
                icon: "✅"
              }
            ].map((step, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default HowItWork;