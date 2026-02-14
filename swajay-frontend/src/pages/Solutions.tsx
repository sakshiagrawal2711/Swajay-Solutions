import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

interface Solution {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    challenges?: {
        title: string;
        items: string[];
    };
    keyFeatures: {
        title: string;
        description: string;
        icon: string;
    }[];
    benefits: {
        metric?: string;
        title: string;
        description: string;
    }[];
    whoWeServe?: string[];
    howItWorks?: {
        step: string;
        title: string;
        description: string;
    }[];
    highlights?: string[];
}

const solutions: Solution[] = [
    {
        id: "titlenexus-ai",
        title: "TitleNexus AI",
        subtitle: "Intelligent Property Intelligence & Title Automation Platform",
        category: "Property Intelligence",
        description: "TitleNexus AI is an advanced AI-driven property intelligence solution designed to automate the retrieval, validation, enrichment, and reporting of property-related data for title agencies, lenders, settlement providers, and real estate professionals. Built specifically for the mortgage and title industry, TitleNexus AI seamlessly integrates with ICE and other property data sources to extract critical property insights, compile standardized reports, and deliver accurate intelligence packages to title search agencies and settlement teams.",
        challenges: {
            title: "The Challenge We Solve",
            items: [
                "Manual retrieval from multiple sources creates bottlenecks and inefficiencies",
                "Varied formats and accuracy issues impact quality and consistency",
                "Delays in property intelligence slow down transactions",
                "Traditional property data research is labor-intensive, error-prone, and slow"
            ]
        },
        keyFeatures: [
            {
                title: "Automated Property Data Extraction",
                description: "Intelligently retrieves property data from ICE and other trusted real estate intelligence platforms. Advanced AI algorithms extract, validate, and structure property information into standardized formats required by clients.",
                icon: "database"
            },
            {
                title: "Intelligent Data Enrichment",
                description: "Automatically gathers additional property-related insights from multiple verified data sources to provide a comprehensive property intelligence report with complete accuracy.",
                icon: "sparkles"
            },
            {
                title: "Client-Specific Report Generation",
                description: "Creates customizable summary reports tailored to client requirements, ensuring consistency, compliance, and accuracy in title and settlement workflows.",
                icon: "document"
            },
            {
                title: "Workflow Automation & Faster Turnaround",
                description: "Accelerates title search processes and reduces processing time significantly by automating manual data research and report creation.",
                icon: "clock"
            }
        ],
        benefits: [
            {
                title: "Reduce Manual Effort",
                description: "Eliminate time-consuming data extraction and research tasks"
            },
            {
                title: "Improve Accuracy",
                description: "Ensure consistency and precision in title reports"
            },
            {
                title: "Accelerate Delivery",
                description: "Significantly faster property intelligence timelines"
            },
            {
                title: "Scale Operations",
                description: "Enhance productivity and operational scalability"
            },
            {
                title: "Ensure Compliance",
                description: "Improve audit readiness and regulatory compliance"
            },
            {
                title: "Lower Costs",
                description: "Reduce operational expenses and processing risks"
            }
        ],
        whoWeServe: [
            "Title Search Agencies - Automate property data research and report preparation while improving accuracy and turnaround time",
            "Mortgage Lenders & Servicers - Access reliable property intelligence to accelerate loan processing and underwriting workflows",
            "Settlement Service Providers - Streamline transaction workflows with standardized and verified property reports",
            "Real Estate Technology Providers - Enhance digital real estate platforms with automated property intelligence capabilities"
        ],
        howItWorks: [
            {
                step: "01",
                title: "Data Retrieval",
                description: "Retrieves property information from ICE and multiple data sources"
            },
            {
                step: "02",
                title: "AI Processing",
                description: "Uses AI models to extract, validate, and structure data"
            },
            {
                step: "03",
                title: "Data Enrichment",
                description: "Enriches data using additional verified real estate intelligence platforms"
            },
            {
                step: "04",
                title: "Report Generation",
                description: "Generates client-specific property summary reports"
            },
            {
                step: "05",
                title: "Delivery",
                description: "Delivers reports directly to title search and settlement agencies"
            }
        ],
        highlights: [
            "Purpose-Built for Mortgage & Title Industry",
            "AI-Driven Intelligence",
            "Flexible Reporting Framework",
            "Seamless Integration with industry-standard data sources"
        ]
    },
    {
        id: "titleops-ai",
        title: "TitleOps AI",
        subtitle: "Smart Orders. Intelligent Workforce. Faster Closings.",
        category: "Operations Management",
        description: "TitleOps AI is an AI-assisted order orchestration platform that automates order intake, intelligently assigns work to agents based on expertise, tracks workflow progress, ensures SLA compliance, and provides deep operational analytics. Designed specifically for title insurance agencies, legal firms, and title search service providers, the platform transforms manual, error-prone processes into streamlined, intelligent operations that scale with your business.",
        challenges: {
            title: "Industry Challenges We Solve",
            items: [
                "Orders received via emails require manual extraction and entry, creating risk of missed or delayed orders",
                "Orders assigned manually without visibility into agent skills and county expertise, resulting in uneven workload distribution",
                "Difficulty tracking turnaround times and limited visibility into order lifecycle increases risk of client dissatisfaction",
                "Inconsistent productivity tracking, lack of real-time operational insights, and manual KPI reporting hinder optimization"
            ]
        },
        keyFeatures: [
            {
                title: "AI-Powered Order Intake",
                description: "Automatically retrieves title search orders from email systems, extracts order details using AI-powered document parsing, and registers orders within the platform.",
                icon: "inbox"
            },
            {
                title: "Intelligent Workforce Allocation",
                description: "Assigns orders using agent skill mapping, county expertise, workload balancing, FIFO prioritization, and client SLA requirements.",
                icon: "users"
            },
            {
                title: "Real-Time Workflow Monitoring",
                description: "Tracks order lifecycle across each processing stage, captures time spent at each step, and provides escalation alerts for SLA risks.",
                icon: "activity"
            },
            {
                title: "Advanced Analytics & KPI Tracking",
                description: "Delivers SLA adherence tracking, agent productivity measurement, client analytics, and operational efficiency dashboards with capacity planning insights.",
                icon: "chart"
            }
        ],
        benefits: [
            {
                metric: "30-50%",
                title: "Reduction in Manual Effort",
                description: "Dramatic decrease in manual order handling through intelligent automation"
            },
            {
                metric: "95%+",
                title: "SLA Adherence",
                description: "Improved SLA compliance and client satisfaction through intelligent routing"
            },
            {
                metric: "40%",
                title: "Productivity Increase",
                description: "Higher workforce productivity through optimized allocation and transparency"
            },
            {
                metric: "3x",
                title: "Scalable Capacity",
                description: "Process more orders without proportional staffing growth"
            }
        ],
        whoWeServe: [
            "Title Insurance Agencies",
            "Title Search Service Providers",
            "Legal Firms Handling Property Transactions",
            "Mortgage Processing Companies",
            "Real Estate Settlement Service Providers"
        ],
        howItWorks: [
            {
                step: "01",
                title: "Intelligent Order Capture",
                description: "Automatically retrieves and extracts order details from emails using AI-powered parsing"
            },
            {
                step: "02",
                title: "Smart Order Assignment",
                description: "Routes orders based on agent skills, county expertise, workload, and SLA requirements"
            },
            {
                step: "03",
                title: "Workflow Tracking",
                description: "Monitors progress across processing stages with real-time operational visibility"
            },
            {
                step: "04",
                title: "Performance Intelligence",
                description: "Delivers comprehensive analytics on SLA adherence, productivity, and efficiency"
            }
        ],
        highlights: [
            "Purpose-Built for Title Search Industry",
            "AI-Driven Order Orchestration",
            "Skill and Jurisdiction-Based Workforce Mapping",
            "SLA-Aware Order Routing Engine",
            "End-to-End Workflow Intelligence"
        ]
    }
];

const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
        database: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        sparkles: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        document: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        clock: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        inbox: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
        ),
        users: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        activity: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        chart: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    };
    return icons[iconName] || icons.database;
};

const Solutions = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>("titlenexus-ai");

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash && solutions.find(s => s.id === hash)) {
            setActiveTab(hash);
        }
    }, [location.hash]);

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById('solution-details');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [activeTab, location.hash]);

    const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

    return (
        <div className="min-h-screen bg-blue-50">
            <PageHero
                title="AI-Powered Solutions"
                subtitle="Transform your title and mortgage operations with intelligent automation platforms designed specifically for the real estate industry"
                label="Our Solutions"
            />

            <section className="py-12 md:py-20 px-4 sm:px-6 relative z-10">
                <div className="container mx-auto max-w-7xl">
                    {/* Solution Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
                        {solutions.map((solution) => (
                            <button
                                key={solution.id}
                                onClick={() => setActiveTab(solution.id)}
                                className={`group p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 text-left border-2 relative overflow-hidden
                                    ${activeTab === solution.id
                                        ? 'bg-white border-primary shadow-xl scale-[1.02] z-10'
                                        : 'bg-white border-transparent hover:border-gray-200 hover:shadow-lg'
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-2 h-full transition-colors duration-300
                                    ${activeTab === solution.id ? 'bg-primary' : 'bg-transparent group-hover:bg-gray-200'}`}></div>

                                <span className={`text-xs font-bold uppercase tracking-wider mb-3 block
                                    ${activeTab === solution.id ? 'text-primary' : 'text-gray-400'}`}>
                                    {solution.category}
                                </span>
                                <h3 className={`font-bold text-xl md:text-2xl leading-snug mb-2
                                    ${activeTab === solution.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {solution.title}
                                </h3>
                                <p className={`text-sm md:text-base font-medium
                                    ${activeTab === solution.id ? 'text-gray-600' : 'text-gray-500'}`}>
                                    {solution.subtitle}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div id="solution-details" className="scroll-mt-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSolution.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Overview Section */}
                                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-gray-100">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                                                {activeSolution.category}
                                            </span>
                                            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                                                {activeSolution.title}
                                            </h2>
                                            <p className="text-lg md:text-xl text-primary font-semibold mb-4">
                                                {activeSolution.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                        {activeSolution.description}
                                    </p>
                                </div>

                                {/* Challenges Section */}
                                {activeSolution.challenges && (
                                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-lg p-6 md:p-10 mb-8 border border-red-100">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                            {activeSolution.challenges.title}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeSolution.challenges.items.map((challenge, idx) => (
                                                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-200 shadow-sm">
                                                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{challenge}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Key Features */}
                                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-gray-100">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {activeSolution.keyFeatures.map((feature, idx) => (
                                            <div key={idx} className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                                                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    <div className="text-primary">
                                                        {getIcon(feature.icon)}
                                                    </div>
                                                </div>
                                                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{feature.title}</h4>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits Section */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-green-100">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        {activeSolution.benefits[0].metric ? "ROI & Impact" : "Business Benefits"}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {activeSolution.benefits.map((benefit, idx) => (
                                            <div key={idx} className="bg-white p-6 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                {benefit.metric && (
                                                    <div className="text-4xl md:text-5xl font-black text-green-600 mb-3">
                                                        {benefit.metric}
                                                    </div>
                                                )}
                                                <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{benefit.title}</h4>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* How It Works */}
                                {activeSolution.howItWorks && (
                                    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-gray-100">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                            How It Works
                                        </h3>
                                        <div className="space-y-4">
                                            {activeSolution.howItWorks.map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-4 md:gap-6 group">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                            {step.step}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 pt-2">
                                                        <h4 className="font-bold text-gray-900 mb-1 text-base md:text-lg">{step.title}</h4>
                                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Who We Serve */}
                                {activeSolution.whoWeServe && (
                                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl p-6 md:p-10 mb-8 border border-indigo-100">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            Who We Serve
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeSolution.whoWeServe.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Highlights */}
                                {activeSolution.highlights && (
                                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-xl p-6 md:p-10 border border-amber-100">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            Key Highlights
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {activeSolution.highlights.map((highlight, idx) => (
                                                <div key={idx} className="bg-white px-5 py-3 rounded-xl border border-amber-200 shadow-sm">
                                                    <span className="text-sm md:text-base font-semibold text-gray-800">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
