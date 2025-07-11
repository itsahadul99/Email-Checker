const WhyChoiceUs = () => {
    return (
        <>
            < section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                        Powerful Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Gmail format validation (@gmail.com, @googlemail.com)",
                            "MX record verification for domain validity",
                            "2FA status check for Workspace accounts",
                            "Disposable email detection",
                            "Typo detection and suggestions",
                            "Real-time API integration",
                            "Bulk email verification support",
                            "Detailed reporting and analytics"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            < section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Our Email Checker
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-indigo-50 rounded-xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-indigo-700 mb-4">For Individuals</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-3">✓</span>
                                    <span>Clean your contact list before important communications</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-3">✓</span>
                                    <span>Verify emails before sending job applications</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-3">✓</span>
                                    <span>Check validity of emails from unknown senders</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-blue-700 mb-4">For Businesses</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    <span>Improve email deliverability and sender reputation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    <span>Reduce bounce rates in marketing campaigns</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    <span>Maintain clean CRM databases with valid contacts</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default WhyChoiceUs;