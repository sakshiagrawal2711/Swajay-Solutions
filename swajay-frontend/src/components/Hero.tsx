import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#FAFAF9]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-6 sm:space-y-8 max-w-2xl animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                            Innovate with <br />
                            <span className="text-slate-900">Swajay</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Solutions</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-lg">
                            Empowering your business with cutting-edge AI and seamless digital solutions. We turn your vision into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold text-base sm:text-lg rounded-lg hover:bg-blue-600 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 min-h-[48px]">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </Link>
                            <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border border-gray-200 text-slate-700 font-semibold text-base sm:text-lg rounded-lg hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-300 shadow-sm min-h-[48px]">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 pt-4 sm:pt-8">
                            Designed to fit within existing systems and processes.
                        </p>
                    </div>

                    {/* Right Column: PDF Field Extraction Interface - Hidden on mobile, visible on md+ */}
                    <div className="relative hidden md:block">
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[250px] md:w-[350px] lg:w-[400px] h-[250px] md:h-[350px] lg:h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-50 -z-10"></div>

                        {/* PDF Field Extraction UI */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900">PDF Field Extraction</h3>
                                    <p className="text-sm text-gray-500">Dual Source Report Generator</p>
                                </div>
                            </div>

                            {/* Progress Steps */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between">
                                    {[
                                        { step: '1', label: 'Upload', active: true },
                                        { step: '2', label: 'Configure', active: false },
                                        { step: '3', label: 'Extract', active: false },
                                        { step: '4', label: 'Review', active: false },
                                        { step: '5', label: 'Export', active: false }
                                    ].map((item, idx, arr) => (
                                        <div key={idx} className="flex items-center flex-1">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${item.active ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                    {item.active ? (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : item.step}
                                                </div>
                                                <span className={`text-xs font-medium ${item.active ? 'text-blue-600' : 'text-gray-400'}`}>
                                                    {item.label}
                                                </span>
                                            </div>
                                            {idx < arr.length - 1 && (
                                                <div className={`flex-1 h-0.5 mx-2 ${idx === 0 ? 'bg-gray-200' : 'bg-gray-100'}`}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upload Section */}
                            <div className="space-y-4">
                                <div className="text-center">
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Upload ICE PDF</h4>
                                    <p className="text-sm text-gray-600">Upload the ICE PDF to extract relevant fields and generate the report.</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold text-gray-900">ICE PDF</span>
                                        <span className="text-xs text-gray-500">File extracted from ICE</span>
                                    </div>

                                    {/* Upload Box */}
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer group">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors duration-300">
                                                <svg className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm font-semibold text-gray-700 mb-1">Drop PDF here or click to browse</p>
                                                <p className="text-xs text-gray-500">Supports single PDF file up to 50MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Continue Button */}
                                <div className="pt-4">
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                        Continue to Field Configuration
                                    </button>
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
