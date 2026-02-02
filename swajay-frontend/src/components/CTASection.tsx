import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="bg-blue-50 py-24 text-center relative overflow-hidden">
            {/* Background Glow - Adjusted for light theme */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Ready to Transform Your <br /> Business?
                </h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Let's discuss how our AI and automation solutions can drive measurable outcomes for your organization
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                        <button className="flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)]">
                            Request Demo
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </Link>
                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                        <button className="flex items-center justify-center px-8 py-3 bg-transparent border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-white hover:border-gray-400 hover:shadow-sm transition-all duration-300 backdrop-blur-sm">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
