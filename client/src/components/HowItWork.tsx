import { motion } from "framer-motion";

const HowItWork = () => { 
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const steps = [
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
    ];

    return (
        <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
                >
                    How It Works
                </motion.h2>
                
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index} 
                            variants={item}
                            className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWork;