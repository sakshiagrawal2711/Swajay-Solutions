import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

const Services = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'mortgage' | 'technology'>('mortgage');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab === 'technology') {
            setActiveTab('technology');
        } else {
            setActiveTab('mortgage');
        }
    }, [location.search]);

    const createSlug = (text: string) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 800); // Small delay to ensure render
        }
    }, [location.hash, activeTab]);

    return (
        <div className="min-h-screen bg-blue-50 relative">
            {/* Custom Hero with Arrow Process Diagram */}
            <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#FAFAF9] py-12">
                {/* Background Layers */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-left">
                            <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                Our Services
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Services
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed mb-8">
                                We move beyond traditional BPO by embedding advanced technology—from proprietary applications to sophisticated AI models—directly into your workflows
                            </p>
                        </div>

                        {/* Right Column: Arrow Process Diagram */}
                        <div className="relative hidden lg:block">
                            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 relative z-10">
                                {/* AI Process Title */}
                                <div className="text-center mb-8">
                                    <h3 className="text-lg font-bold text-gray-700 uppercase tracking-wider mb-6">AI PROCESS</h3>
                                </div>

                                {/* Enhanced Arrow Flow with Labels */}
                                <div className="relative mb-8">
                                    {/* Process labels above arrow */}
                                    <div className="flex justify-between mb-4 px-8">
                                        <div className="text-center flex-1">
                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ingest Data</div>
                                        </div>
                                        <div className="text-center flex-1">
                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Flag Exceptions</div>
                                        </div>
                                        <div className="text-center flex-1">
                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Generate Report</div>
                                        </div>
                                    </div>

                                    {/* Arrow SVG */}
                                    <svg viewBox="0 0 600 80" className="w-full h-auto drop-shadow-lg">
                                        <defs>
                                            {/* Gradient for arrow segments */}
                                            <linearGradient id="segment1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#64748b', stopOpacity: 1 }} />
                                            </linearGradient>
                                            <linearGradient id="segment2" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#64748b', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#94a3b8', stopOpacity: 1 }} />
                                            </linearGradient>
                                            <linearGradient id="segment3" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#94a3b8', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#cbd5e1', stopOpacity: 1 }} />
                                            </linearGradient>
                                            <linearGradient id="arrowHead" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" style={{ stopColor: '#cbd5e1', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>

                                        {/* Segment 1 - Document Stack Icon */}
                                        <path d="M 20 20 L 140 20 L 160 40 L 140 60 L 20 60 Z" fill="url(#segment1)" />
                                        <g transform="translate(60, 30)">
                                            <rect x="0" y="0" width="20" height="16" fill="white" opacity="0.4" rx="2" />
                                            <rect x="2" y="2" width="16" height="3" fill="white" opacity="0.6" />
                                            <rect x="2" y="7" width="16" height="3" fill="white" opacity="0.6" />
                                            <rect x="2" y="12" width="12" height="2" fill="white" opacity="0.6" />
                                        </g>

                                        {/* Segment 2 - Processing/Gear Icon */}
                                        <path d="M 160 20 L 280 20 L 300 40 L 280 60 L 160 60 L 140 40 Z" fill="url(#segment2)" />
                                        <g transform="translate(210, 30)">
                                            <circle cx="10" cy="10" r="8" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                                            <circle cx="10" cy="10" r="4" fill="white" opacity="0.4" />
                                        </g>

                                        {/* Segment 3 - Alert Triangle Icon */}
                                        <path d="M 300 20 L 420 20 L 440 40 L 420 60 L 300 60 L 280 40 Z" fill="url(#segment3)" />
                                        <g transform="translate(350, 28)">
                                            <path d="M 10 5 L 16 17 L 4 17 Z" fill="white" opacity="0.5" />
                                            <line x1="10" y1="10" x2="10" y2="14" stroke="white" strokeWidth="1.5" opacity="0.7" />
                                            <circle cx="10" cy="16" r="0.8" fill="white" opacity="0.7" />
                                        </g>

                                        {/* Segment 4 - Folder Icon */}
                                        <path d="M 440 20 L 520 20 L 540 40 L 520 60 L 440 60 L 420 40 Z" fill="#cbd5e1" />
                                        <g transform="translate(470, 32)">
                                            <path d="M 0 0 L 8 0 L 10 2 L 20 2 L 20 14 L 0 14 Z" fill="white" opacity="0.5" />
                                            <rect x="2" y="5" width="16" height="2" fill="white" opacity="0.3" />
                                        </g>

                                        {/* Arrow Head */}
                                        <path d="M 540 20 L 580 40 L 540 60 Z" fill="url(#arrowHead)" />
                                    </svg>
                                </div>

                                {/* Feature Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: "🔍",
                                            title: "AI-Powered Search",
                                            desc: "Machine learning algorithms that understand context, identify patterns, and continuously improve accuracy"
                                        },
                                        {
                                            icon: "🔗",
                                            title: "Multi-Source Integration",
                                            desc: "Seamless access to county records, court databases, and third-party data providers"
                                        },
                                        {
                                            icon: "⚠️",
                                            title: "Exception Management",
                                            desc: "Intelligent flagging of liens, judgements, and other title issues with automated routing"
                                        },
                                        {
                                            icon: "📊",
                                            title: "Automated Reporting",
                                            desc: "Generate comprehensive, compliant title reports with built-in quality assurance checks"
                                        }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                                            <div className="text-2xl mb-2">{feature.icon}</div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline Tabs Navigation */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 -mt-8 relative z-30">
                <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto flex">
                    <button
                        onClick={() => {
                            setActiveTab('mortgage');
                            navigate('/services?tab=mortgage', { replace: true });
                        }}
                        className={`flex-1 py-3 md:py-4 px-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'mortgage' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Mortgage Capabilities
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('technology');
                            navigate('/services?tab=technology', { replace: true });
                        }}
                        className={`flex-1 py-3 md:py-4 px-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'technology' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Technology Excellence
                    </button>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {activeTab === 'mortgage' ? (
                    <motion.div
                        key="mortgage"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Mortgage Functional Capabilities Section */}
                        <section id="mortgage-section" className="py-24 px-6 md:px-16 bg-blue-50 min-h-[60vh] scroll-mt-24">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Mortgage Functional Capabilities
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        End-to-end mortgage processing with AI-powered efficiency
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Document Processing",
                                            desc: "Intelligent document extraction, validation, and management using advanced AI and OCR technology for faster, more accurate processing.",
                                            benefits: ["AI-powered extraction", "99% accuracy", "Faster turnaround"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Title Search",
                                            desc: "Comprehensive property title research and examination services, processing 5,000+ orders monthly with zero defects. Our AI-powered workflows ensure accuracy and speed.",
                                            benefits: ["5,000+ orders/month", "Zero defects", "AI-powered workflows"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Compliance & Quality",
                                            desc: "Rigorous quality assurance and regulatory compliance monitoring to protect your business and maintain the highest standards.",
                                            benefits: ["Regulatory compliance", "Quality assurance", "Risk mitigation"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "LOS (Loan Origination System)",
                                            desc: "End-to-end loan origination support, from application through approval. We streamline processes and integrate seamlessly with existing systems.",
                                            benefits: ["Application to approval", "System integration", "Process streamlining"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Process Automation",
                                            desc: "End-to-end workflow automation reducing manual effort by up to 70%, allowing your team to focus on high-value activities.",
                                            benefits: ["70% manual effort reduction", "Improved efficiency", "Cost savings"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Curative Services",
                                            desc: "Expert resolution of title defects and encumbrances, ensuring clean title transfer. Our specialists handle complex situations with precision.",
                                            benefits: ["Title defect resolution", "Expert handling", "Clean transfers"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                                </svg>
                                            )
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            id={createSlug(item.title)}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group scroll-mt-32"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                                {item.desc}
                                            </p>

                                            <div>
                                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Key Benefits</p>
                                                <ul className="space-y-2">
                                                    {item.benefits.map((benefit, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                ) : (
                    <motion.div
                        key="technology"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Blueprint of Technology Excellence Section */}
                        <section id="technology-section" className="py-24 px-6 md:px-16 bg-blue-50 min-h-[60vh] scroll-mt-24">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Blueprint of Technology Excellence
                                    </h2>
                                    <p className="text-gray-600 text-lg max-w-4xl">
                                        Swajay leverages its multi-industry expertise to deliver secure, scalable, and outcome-driven digital solutions
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Engineering Services",
                                            desc: "Custom, user-centric software that streamlines interaction and scaling.",
                                            services: ["Web & mobile application development", "Technology consulting", "Quality engineering"],
                                            link: "/case-studies?study=mortgage-lender-app#study-details",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "AI & Advanced Automation",
                                            desc: "Machine learning and generative AI to manage complexity and eliminate errors.",
                                            services: ["Agentic AI solutions", "Workflow automation", "RPA (Blue Prism, UiPath)"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Data & Business Intelligence",
                                            desc: "Unified, governable data platform for strategic decision-making.",
                                            services: ["Data modernization", "ETL engineering", "Analytics & visualization"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Secure Cloud & Integration",
                                            desc: "Compliant, flexible foundation connecting all systems seamlessly.",
                                            services: ["Cloud migration & optimization", "Infrastructure engineering", "Integration solutions"],
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                </svg>
                                            )
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            id={createSlug(item.title)}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => {
                                                if ((item as any).link) {
                                                    navigate((item as any).link);
                                                    window.scrollTo(710, 710);
                                                }
                                            }}
                                            className={`bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group scroll-mt-32 ${(item as any).link ? 'cursor-pointer hover:border-primary/50' : ''}`}
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                                {item.desc}
                                            </p>

                                            <ul className="space-y-2">
                                                {item.services.map((service, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                                        {service}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
