import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

const AI = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'ai' | 'strategy'>('ai');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tab = params.get('tab');
        if (tab === 'strategy') {
            setActiveTab('strategy');
        } else {
            setActiveTab('ai');
        }
    }, [location.search]);

    const createSlug = (text: string) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                // Special case for simple section IDs
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }, [location.hash, activeTab]);

    return (
        <div className="min-h-screen bg-blue-50 relative">
            {/* Custom Hero with Diamond Pyramid Diagram */}
            <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#FAFAF9]">
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
                                Future Tech
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                AI & Automation
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed mb-8">
                                We apply specific AI solutions to mission-critical mortgage and title processes, transforming time-consuming tasks into compliant, automated workflows
                            </p>
                        </div>

                        {/* Right Column: Three Diamond Pyramid Diagram */}
                        <div className="relative hidden lg:flex items-center justify-center">
                            <div className="relative w-full max-w-md py-8">
                                {/* SVG Diamond Pyramid - Tighter spacing */}
                                <svg viewBox="0 0 400 350" className="w-full h-auto drop-shadow-2xl">
                                    <defs>
                                        {/* Gradients for each diamond */}
                                        <linearGradient id="diamond1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="diamond2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="diamond3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                                        </linearGradient>

                                        {/* Shadow filter */}
                                        <filter id="diamondShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                                            <feOffset dx="0" dy="6" result="offsetblur" />
                                            <feComponentTransfer>
                                                <feFuncA type="linear" slope="0.4" />
                                            </feComponentTransfer>
                                            <feMerge>
                                                <feMergeNode />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Top Left Diamond - Business Objectives */}
                                    <g filter="url(#diamondShadow)">
                                        <path
                                            d="M 120 110 L 170 60 L 220 110 L 170 160 Z"
                                            fill="url(#diamond1)"
                                            className="hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </g>

                                    {/* Top Right Diamond - Task Automation */}
                                    <g filter="url(#diamondShadow)">
                                        <path
                                            d="M 240 110 L 290 60 L 340 110 L 290 160 Z"
                                            fill="url(#diamond2)"
                                            className="hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </g>

                                    {/* Bottom Center Diamond - Process Automation */}
                                    <g filter="url(#diamondShadow)">
                                        <path
                                            d="M 180 210 L 230 160 L 280 210 L 230 260 Z"
                                            fill="url(#diamond3)"
                                            className="hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </g>
                                </svg>

                                {/* Text Labels positioned above and below */}
                                {/* Top Left Label - Business Objectives */}
                                <div className="absolute top-0 left-8 max-w-[150px]">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Business Objectives</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Understand clients, markets, and goals.</p>
                                </div>

                                {/* Top Right Label - Task Automation */}
                                <div className="absolute top-0 right-8 max-w-[150px] text-right">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Task Automation</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Extract, validate, update data, and report.</p>
                                </div>

                                {/* Bottom Center Label - Process Automation */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-[180px] text-center">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Process Automation</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Automate intake through delivery workflows.</p>
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
                            setActiveTab('ai');
                            navigate('/ai?tab=ai', { replace: true });
                        }}
                        className={`flex-1 py-3 md:py-4 px-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'ai' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Artificial Intelligence
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('strategy');
                            navigate('/ai?tab=strategy', { replace: true });
                        }}
                        className={`flex-1 py-3 md:py-4 px-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'strategy' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Mortgage Title Automation Strategy
                    </button>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {activeTab === 'ai' ? (
                    <motion.div
                        key="ai"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Eliminating Manual Bottlenecks Section */}
                        <section id="ai-section" className="py-24 px-6 md:px-16 bg-blue-50 min-h-[60vh] scroll-mt-24">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                    >
                                        Eliminating Manual Bottlenecks
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-gray-600 text-lg"
                                    >
                                        Real-world AI implementations delivering measurable business impact
                                    </motion.p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Intelligent Document Processing",
                                            desc: "AI-powered extraction and validation across all title documents (deeds, mortgages, releases) with greater speed and accuracy.",
                                            impact: "90%+ accuracy with 70% faster processing",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Agentic AI for Order Management",
                                            desc: "Fully automated order management workflow achieving 100% adherence to client SLAs and reducing order management time.",
                                            impact: "20% reduction in order management time, 100% SLA adherence",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "RPA for Report Generation",
                                            desc: "BluePrism-based bot retrieving loan details and generating reports, resulting in 90% improvement in cycle time.",
                                            impact: "90% improvement in cycle time (120 mins → 4 mins)",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Custom Application Development",
                                            desc: "Microservices-based web and mobile applications with zero downtime deployments and optimized infrastructure costs.",
                                            impact: "30% reduced infrastructure cost, zero downtime",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Data Strategy & Cloud Migration",
                                            desc: "Migrated on-premise data to Snowflake Cloud, achieving significant cost savings and improved reporting efficiency.",
                                            impact: "30% cost savings, 94% increased report generation efficiency",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            title: "Business Intelligence",
                                            desc: "Unified data view and visualizations uncovering fresh business insights for quick management action.",
                                            impact: "Real-time analytics and actionable insights",
                                            icon: (
                                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
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
                                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                                                {item.desc}
                                            </p>

                                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Measurable Impact</p>
                                                <p className="text-sm font-medium text-gray-700">{item.impact}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Outcomes & Plan Section */}
                        <section className="py-24 px-6 md:px-16 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-20 text-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                    >
                                        Outcomes & Plan (POC → MVP)
                                    </motion.h2>
                                    <p className="text-gray-600 text-lg font-bold">
                                        Prove it, then scale
                                    </p>
                                </div>

                                <div className="relative">
                                    {/* Connectivity Line (Desktop) */}
                                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-300 to-blue-500 z-0"></div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                                        {[
                                            {
                                                title: "2 to 4 Weeks POC",
                                                desc: "Focus on one high-impact flow to demonstrate feasibility, establish clear success criteria, and determine a Go/No-Go decision.",
                                                icon: (
                                                    <svg className="w-10 h-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "4 to 8 Weeks MVP",
                                                desc: "Launch a working solution with real users and your data to achieve measurable results (quicker document prep, reduced support load).",
                                                icon: (
                                                    <svg className="w-10 h-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                title: "Expand: Bi-weekly Releases",
                                                desc: "Continuous expansion of features and integration with your systems, ensuring value delivery every two weeks.",
                                                icon: (
                                                    <svg className="w-10 h-10 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                )
                                            }
                                        ].map((step, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.2 }}
                                                className="flex flex-col items-center text-center"
                                            >
                                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center mb-8 shadow-xl relative z-10 mx-auto">
                                                    <div className="w-20 h-20 rounded-full border-2 border-gray-100 flex items-center justify-center">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                ) : (
                    <motion.div
                        key="strategy"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Target Operating Model Section */}
                        <section id="strategy-section" className="py-24 px-6 md:px-16 bg-white scroll-mt-24">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16 text-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                    >
                                        Target Operating Model
                                    </motion.h2>
                                    <p className="text-gray-600 text-lg">
                                        End-to-end automation architecture driving efficiency and compliance
                                    </p>
                                </div>

                                {/* Process Flow */}
                                <div className="mb-20">
                                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 relative">
                                        {[
                                            { label: "Intake Automation", color: "bg-red-500" },
                                            { label: "AI Assisted Title Search", color: "bg-green-500" },
                                            { label: "Automation for Title Examination", color: "bg-purple-600" },
                                            { label: "Curative Automation", color: "bg-cyan-500" },
                                            { label: "Settlement & Closing Support Automation", color: "bg-orange-500" },
                                            { label: "Digital Delivery", color: "bg-red-700" },
                                        ].map((step, idx, arr) => (
                                            <div key={idx} className="flex items-center w-full md:w-auto flex-1 last:flex-none">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className={`${step.color} text-white p-4 rounded-lg text-xs md:text-sm font-bold text-center shadow-lg w-full md:w-auto md:min-w-[120px] h-20 md:h-24 flex items-center justify-center z-10 relative`}
                                                >
                                                    {step.label}
                                                </motion.div>
                                                {idx < arr.length - 1 && (
                                                    <div className="hidden md:flex flex-1 items-center justify-center mx-2 text-gray-300">
                                                        <svg className="w-6 h-6 transform -rotate-90 md:rotate-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {/* Mobile Arrow */}
                                                {idx < arr.length - 1 && (
                                                    <div className="md:hidden w-full flex justify-center py-2 text-gray-300">
                                                        <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Automation & AI Overlay */}
                                <div className="mb-20">
                                    <h3 className="text-center font-bold text-gray-500 tracking-widest uppercase mb-6 text-sm">Automation & AI Overlay</h3>
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 relative z-10">
                                            {[
                                                { name: "RPA", icon: "🤖" },
                                                { name: "Intelligent OCR, NLP", icon: "📄" },
                                                { name: "AI/ML Decision Engine", icon: "🧠" },
                                                { name: "Workflow Orchestration", icon: "🔄" },
                                                { name: "API Integrations", icon: "🔗" },
                                                { name: "Audit & Compliance", icon: "🔒" },
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 font-bold text-gray-700 bg-white/50 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm border border-white/50">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="text-sm md:text-base">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Big Overlay Arrow Effect (Stylized) */}
                                    <div className="w-full h-4 bg-gray-100 mt-2 relative rounded-full overflow-hidden">
                                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50 animate-pulse"></div>
                                    </div>
                                </div>

                                {/* ROI Metrics */}
                                <div>
                                    <div className="inline-block bg-black text-white px-4 py-2 font-bold text-lg mb-8 uppercase tracking-wider transform -skew-x-12">
                                        ROI - Metrics:
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            { text: "50-70% reduction in manual effort", type: "down" },
                                            { text: "30-50% faster turnaround", type: "up" },
                                            { text: "Errors < 2%", type: "down" },
                                            { text: "20-40% operating cost reduction", type: "down" },
                                            { text: "Higher lender retention due to SLA consistency", type: "up" },
                                        ].map((metric, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                                            >
                                                <div className={`p-3 rounded-full shrink-0 ${metric.type === 'up' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                                    {metric.type === 'up' ? (
                                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="font-bold text-gray-800 text-lg leading-tight">
                                                    {metric.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Swajay's Approach Section */}
                        <section className="py-24 px-6 md:px-16 bg-blue-50 min-h-[60vh]">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-16 text-center">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                    >
                                        Swajay's Approach
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-gray-600 text-lg max-w-4xl mx-auto"
                                    >
                                        Accelerators + Squads: Building faster and smarter through specialized teams, proven methodologies, and outcome-driven collaboration
                                    </motion.p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        {
                                            title: "Outcome-First",
                                            desc: "Define success upfront for one high-impact use case, prioritizing features that directly move the business needle.",
                                            highlight: "Guaranteed ROI: Focus on measurable results like reduced cost, faster processing time, or zero defects."
                                        },
                                        {
                                            title: "Lean Co-Build Squad",
                                            desc: "Dedicated specialists with deep mortgage business and technology expertise work in sync with your team.",
                                            highlight: "Speed & Agility: Weekly demos and transparent decision-making keep momentum high."
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white p-10 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                                {item.desc}
                                            </p>
                                            <p className="text-primary font-medium text-base">
                                                {item.highlight}
                                            </p>
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
export default AI;
