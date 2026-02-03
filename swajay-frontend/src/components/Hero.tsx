import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#FAFAF9]">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 max-w-2xl animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                            Innovate with <br />
                            <span className="text-slate-900">Swajay</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Solutions</span>
                        </h1>

                        <p className="text-xl text-slate-600 font-normal leading-relaxed max-w-lg">
                            Empowering your business with cutting-edge AI and seamless digital solutions. We turn your vision into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                                <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </Link>
                            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                                <button className="px-8 py-4 bg-white border border-gray-200 text-slate-700 font-semibold text-lg rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        <p className="text-sm text-slate-400 pt-8">
                            Designed to fit within existing systems and processes.
                        </p>
                    </div>

                    {/* Right Column: Visual Mockup */}
                    <div className="relative">
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-50 -z-10"></div>

                        {/* Glass Card UI Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Mock Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs font-mono text-gray-400">Swajay Solution Engine v1.0</div>
                            </div>

                            <div className="flex gap-6">
                                {/* Document List */}
                                <div className="w-1/3 space-y-3 border-r border-gray-100 pr-6">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Document Set</div>
                                    {['1003 / URLA', 'Paystub', 'W2', 'Bank Statement', 'VOF'].map((doc, i) => (
                                        <div key={i} className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${i === 3 ? 'bg-blue-50 text-blue-900 border border-blue-100' : 'hover:bg-gray-50 text-slate-600'}`}>
                                            <div className="flex items-center gap-2">
                                                <svg className={`w-4 h-4 ${i === 3 ? 'text-blue-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                {doc}
                                            </div>
                                            {i === 3 ? (
                                                <span className="text-blue-500">⚠</span>
                                            ) : (
                                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Main View */}
                                <div className="w-2/3 space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-xs text-gray-400 mb-1">DECISION-READY SUMMARY</div>
                                            <h3 className="text-lg font-bold text-slate-800">Bank Statement — Page 2</h3>
                                        </div>
                                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">Needs Review</span>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-4 space-y-4 border border-gray-100">
                                        <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                                            <span className="text-gray-500">Borrower Name</span>
                                            <span className="font-semibold text-green-600 bg-green-50 px-2 rounded">Matched</span>
                                        </div>
                                        <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                                            <span className="text-gray-500">Average Balance</span>
                                            <span className="font-bold text-slate-900">$12,847</span>
                                        </div>
                                        <div className="flex justify-between text-sm pb-2">
                                            <span className="text-gray-500">Large Deposit</span>
                                            <span className="font-bold text-blue-600 bg-blue-50 px-2 rounded">$8,500</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-xs font-bold text-gray-400 uppercase">Evidence</div>
                                        <div className="text-xs text-slate-500">Citations: Pg 2, lines 14-22</div>
                                        <div className="text-xs text-slate-500">Confidence: <span className="text-green-600 font-bold">High</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
