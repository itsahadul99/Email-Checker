const FAQ: React.FC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {[
                        {
                            question: "Is this service free to use?",
                            answer: "Yes, our basic email verification is completely free. We offer premium plans for advanced features and bulk verification."
                        },
                        {
                            question: "How accurate is the email verification?",
                            answer: "Our verification is highly accurate, combining multiple validation techniques including syntax check, domain verification, and SMTP validation."
                        },
                        {
                            question: "Do you store the emails I verify?",
                            answer: "No, we do not store or log the email addresses you verify. Your privacy and data security are our top priorities."
                        },
                        {
                            question: "Can I verify emails in bulk?",
                            answer: "Yes, we offer bulk verification for users with premium accounts. You can upload CSV files with up to 10,000 emails at once."
                        },
                        {
                            question: "What's the difference between free and premium?",
                            answer: "The free version checks basic validity, while premium adds advanced checks like mailbox existence, role-based detection, and higher request limits."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <details className="group">
                                <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-6 pt-0 text-gray-600">
                                    {faq.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default FAQ;