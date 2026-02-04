import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

interface Solution {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    features: string[];
    benefits: {
        title: string;
        details: string;
    }[];
    flow?: string[];
    technologies?: string[];
}

const solutions: Solution[] = [
    {
        id: "mortgage-automation",
        title: "Mortgage Process Automation",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Streamline your mortgage operations with our end-to-end automation solutions. From document processing to loan origination, we help you reduce cycle times and improve accuracy.",
        features: [
            "Automated Document Classification & Extraction",
            "Intelligent Workflow Routing",
            "Real-time Status Tracking",
            "Seamless LOS Integration"
        ],
        benefits: [
            {
                title: "Efficiency",
                details: "Reduce processing time by up to 60%"
            },
            {
                title: "Accuracy",
                details: "Minimize manual errors and rework"
            },
            {
                title: "Scalability",
                details: "Handle volume spikes without adding headcount"
            }
        ],
        flow: [
            "Document Ingestion",
            "Data Extraction (OCR/AI)",
            "Validation & Rules Check",
            "System Update & Notification"
        ],
        technologies: [
            "Python", "TensorFlow", "React", "AWS Textract"
        ]
    },
    {
        id: "cloud-migration",
        title: "Cloud Migration & Modernization",
        category: "Cloud Services",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Accelerate your digital transformation by moving your legacy applications to the cloud. We ensure a secure, zero-downtime migration tailored to your business needs.",
        features: [
            "Assessment & Strategy Planning",
            "Lift & Shift / Re-platforming",
            "Cloud-Native Development",
            "DevOps & CI/CD Implementation"
        ],
        benefits: [
            {
                title: "Cost Savings",
                details: "Optimize infrastructure costs with pay-as-you-go models"
            },
            {
                title: "Agility",
                details: "Depoly faster and scale instantly"
            },
            {
                title: "Security",
                details: "Enhanced data protection and compliance"
            }
        ],
        technologies: [
            "AWS", "Azure", "Docker", "Kubernetes", "Terraform"
        ]
    },
    {
        id: "data-analytics",
        title: "Advanced Data Analytics",
        category: "Data & AI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Turn your data into actionable insights. Our analytics solutions help you understand customer behavior, optimize operations, and predict future trends.",
        features: [
            "Data Warehousing & Data Lakes",
            "Business Intelligence Dashboards",
            "Predictive Modeling",
            "Real-time Streaming Analytics"
        ],
        benefits: [
            {
                title: "Informed Decisions",
                details: "Data-driven strategies for growth"
            },
            {
                title: "Customer Insight",
                details: "360-degree view of your customers"
            },
            {
                title: "Operational Excellence",
                details: "Identify and eliminate inefficiencies"
            }
        ],
        technologies: [
            "Snowflake", "PowerBI", "Tableau", "Apache Spark"
        ]
    },
    {
        id: "cyber-security",
        title: "Enterprise Cyber Security",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Protect your business from evolving threats. We provide comprehensive security assessments, monitoring, and incident response services.",
        features: [
            "Vulnerability Assessments",
            "Identity & Access Management",
            "Threat Detection & Response",
            "Compliance Audits"
        ],
        benefits: [
            {
                title: "Risk Reduction",
                details: "Proactive defense against cyber attacks"
            },
            {
                title: "Compliance",
                details: "Meet industry standards (SOC2, HIPAA, GDPR)"
            },
            {
                title: "Trust",
                details: "Build customer confidence in your brand"
            }
        ],
        technologies: [
            "CrowdStrike", "Splunk", "Okta", "AWS Security Hub"
        ]
    }
];

const Solutions = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(solutions[0].id);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const solutionId = params.get('solution');
        if (solutionId && solutions.find(s => s.id === solutionId)) {
            setActiveTab(solutionId);
        }
    }, [location.search]);

    const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHero
                title="Our Solutions"
                subtitle="Innovative strategies and technologies engineered to solve your most complex business challenges."
                label="What We Deliver"
            />

            <section className="py-12 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation Tabs - Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {solutions.map((study) => (
                            <button
                                key={study.id}
                                onClick={() => setActiveTab(study.id)}
                                className={`group p-6 rounded-2xl transition-all duration-300 text-left border-2 relative overflow-hidden
                                    ${activeTab === study.id
                                        ? 'bg-white border-primary shadow-lg scale-[1.02] z-10'
                                        : 'bg-white border-transparent hover:border-gray-200 hover:shadow-md'
                                    }`}
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300
                                    ${activeTab === study.id ? 'bg-primary' : 'bg-transparent group-hover:bg-gray-200'}`}></div>

                                <span className={`text-xs font-bold uppercase tracking-wider mb-3 block
                                    ${activeTab === study.id ? 'text-primary' : 'text-gray-400'}`}>
                                    {study.category}
                                </span>
                                <h3 className={`font-bold text-lg leading-snug
                                    ${activeTab === study.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {study.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div id="solution-details" className="scroll-mt-32">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSolution.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                            >
                                <div className="grid lg:grid-cols-12 min-h-[500px]">
                                    {/* Sidebar (Left Column) - 4 cols */}
                                    <div className="lg:col-span-4 bg-gray-50 p-5 md:p-6 flex flex-col gap-5 border-r border-gray-100">
                                        <div className="rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-[4/3]">
                                            <img
                                                src={activeSolution.image}
                                                alt={activeSolution.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Technologies */}
                                        {activeSolution.technologies && (
                                            <div>
                                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeSolution.technologies.map((tech, idx) => (
                                                        <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Main Content (Right Column) - 8 cols */}
                                    <div className="lg:col-span-8 p-6 md:p-10 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-8">
                                            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                                                {activeSolution.category}
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                                                {activeSolution.title}
                                            </h2>
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                {activeSolution.description}
                                            </p>
                                        </div>

                                        {/* Benefits Grid */}
                                        <div className="mb-10">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                Key Benefits
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {activeSolution.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="p-4 rounded-xl border bg-gray-50 border-gray-100">
                                                        <div className="font-bold text-gray-900 mb-1">
                                                            {benefit.title}
                                                        </div>
                                                        <p className="text-xs font-medium text-gray-500 leading-snug">
                                                            {benefit.details}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features & Flow */}
                                        <div className="grid md:grid-cols-2 gap-12 mt-auto">
                                            <div className="prose prose-sm">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                    Key Features
                                                </h3>
                                                <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-blue-300">
                                                    {activeSolution.features.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {activeSolution.flow && (
                                                <div className="prose prose-sm">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                        <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                                        </span>
                                                        Process Flow
                                                    </h3>
                                                    <ul className="space-y-3 text-gray-600">
                                                        {activeSolution.flow.map((item, idx) => (
                                                            <li key={idx} className="flex gap-2 items-start">
                                                                <span className="text-purple-500 font-bold text-xs mt-1">{idx + 1}.</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
