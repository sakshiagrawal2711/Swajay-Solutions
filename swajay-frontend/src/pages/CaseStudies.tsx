import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";

interface CaseStudy {
    id: string;
    title: string;
    category: string;
    image: string;
    quote?: {
        text: string;
        author: string;
    };
    problem: string[];
    solution: {
        timeline?: string;
        discovery: string[];
        technical?: string;
    };
    execution?: string[];
    technologies?: string[];
    valueAdd: {
        metrics: {
            value: string;
            description: React.ReactNode;
            highlight?: boolean;
        }[];
        list?: string[];
    };
}

const caseStudies: CaseStudy[] = [
    {
        id: "automating-report-generation",
        title: "Automating Report Generation",
        category: "RPA Automation",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        quote: {
            text: "I have had nothing but great experiences working with the Team. The team has been a great partner, quick to take up projects, explore a multitude of potential solutions to highly complex needs, and deliver results quickly... I've really enjoyed working with this team and look forward to continuing our work together.",
            author: "Chief Operating Officer"
        },
        problem: [
            "Members from the Servicing group had to retrieve customer loan details from multiple sources and applications",
            "Enter the retrieved details, a pre-defined set of investor codes, and current date into a mainframe system for the report to get generated in AIP portal.",
            "Manually this entire process was time consuming as there were multiple systems involved, leading to additional cost and manual errors resulting in the generation of inaccurate reports."
        ],
        solution: {
            timeline: "2.5 Sprints including 0.5 Sprint design & 1 Sprint Implementation",
            discovery: [
                "Detailed Process Analysis identifying bottlenecks and opportunities for process refinements",
                "Collaborating with business team and IT teams to outline the automation solution",
                "Combination of BluePrism based RPA bot enabling a seamless experience"
            ]
        },
        execution: [
            "Login to the loan sphere application, traverse through the menu and select one of the pre-defined menu options",
            "MSP Explorer window opens where current date, Investor codes and certain other customer / loan details are entered and click submit.",
            "A report gets generated and sent to business team for further action.",
            "Built using Blue Prism and it integrates with Web as well as Mainframe application as part of automation process.",
            "Integrates with MS Outlook exchange to send out notifications."
        ],
        valueAdd: {
            metrics: [
                {
                    value: "90%",
                    description: <span>improvement in cycle time – reduced from <strong>120 mins</strong> to <strong>4 mins</strong></span>
                },
                {
                    value: "$80K to $100K",
                    description: "Annual Cost Saving Optimization on FTE"
                }
            ]
        }
    },
    {
        id: "ai-order-management",
        title: "AI Solution - Automating the entire order management workflow",
        category: "AI & Automation",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        quote: {
            text: "The AI solution completely transformed our order management. The accuracy and speed we've achieved are unprecedented, allowing our team to focus on strategic growth rather than manual entry.",
            author: "Director of Operations"
        },
        problem: [
            "The order management process starting from receipt of orders through mails and managing it through execution process was all manually done",
            "Challenges included – missing SLA’s, Accuracy in management, potential human errors, Time consumption"
        ],
        solution: {
            timeline: "2 weeks that completely automated the entire order management process",
            discovery: [
                "Detailed Process Analysis identifying bottlenecks and opportunities for process refinements",
                "Collaborating with business team and IT teams to outline the automation solution",
                "AI Based solution design and demo of MVP"
            ]
        },
        execution: [
            "All user persona’s and actions captured.",
            "Developed UI for various roles",
            "All rules were built integral to solutions and validated",
            "Edge case scenarios identified and solution enhanced to handle it",
            "Performance of solution for high loads tested to ensure minimum latency",
            "QC checks for automated order execution process and productionized the solution post achieving 100% accuracy.."
        ],
        valueAdd: {
            metrics: [
                {
                    value: "100%",
                    description: "adherence to client SLA’s"
                },
                {
                    value: "20%",
                    description: "Reduced Order Management time"
                },
                {
                    value: "20K USD",
                    description: "savings resulting from Cost optimization by eliminating manual intervention",
                    highlight: true
                }
            ]
        }
    },
    {
        id: "mortgage-lender-app",
        title: "Developed Web & Mobile application for a Seasoned Mortgage Lender",
        category: "App Development",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        problem: [
            "Mortgage applications process was lengthy, difficult to scale, maintain & update due to tightly coupled architecture",
            "Non user-friendly applications for Customer Interaction",
            "Frequent downtime of the applications resulting in business loss",
            "Existing applications were not Accessibility compliant (ADA, WCAG etc.,)"
        ],
        solution: {
            discovery: [
                "Defined a <strong>transformation approach</strong> to migrate <strong>Monolithic based application to Microservices application</strong>",
                "Enriched UI interface to enhance CX",
                "Migrated the services from <strong>on-premise to cloud</strong>",
                "Developed mobile application which is <strong>100% American Disability Act Compliant</strong>"
            ]
        },
        technologies: [
            "Java", "Springboot", "React JS", "AWS components & services", "REST API"
        ],
        valueAdd: {
            metrics: [
                {
                    value: "Zero downtime",
                    description: "since product got launched in Sep'22 with full load of 1.7M customers."
                },
                {
                    value: "30%",
                    description: "Reduced infra cost after cloud migration"
                },
                {
                    value: "60K/day",
                    description: "Increased user volumes due to increased API response time (<2 secs)"
                },
                {
                    value: "Reduced Calls",
                    description: "Drastically reduced calls to call-center because of the user-friendly application",
                    highlight: true
                }
            ]
        }
    },
    {
        id: "data-strategy-platform",
        title: "Define & Implement a Data Strategy & Platform for a Leading Mortgage Company",
        category: "Data & Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        quote: {
            text: "The ETL team has been a great partner. The Swajay team has been quick to take up projects, explore a multitude of potential solutions to highly complex needs, and deliver results quickly. Communication has been quick, efficient, and they have made themselves available for supplementary calls as needed to complete their work and gain additional clarity into the solutions we are solving for. I've really enjoyed working with the team and look forward to continuing our work together.",
            author: "Data Analysis Director"
        },
        problem: [
            "Unstructured mortgage data scattered across disparate systems leading to inefficient & inaccurate business insight generation",
            "Difficult to manage the high-volume data as they were located on-premise making cost expensive & time consuming for scaling up/down",
            "No technical/data strategy",
            "Adhoc & unstructured jobs"
        ],
        solution: {
            discovery: [
                "Created a unified data view & developed visualizations to help business infer the data better and make accurate decisions",
                "Migrated data from <strong>on-premise SQL server to Snowflake cloud</strong>",
                "<strong>Cumbersome SQL statements</strong> are converted to simple SSIS transformations",
                "<strong>Automated generation of complex reports</strong> based on cadence defined by business"
            ]
        },
        technologies: [
            "SSIS", "SSRS, PowerBI", "SQL, SSMS", "Snowflake"
        ],
        valueAdd: {
            metrics: [
                {
                    value: "Fresh Insights",
                    description: "Uncovered fresh business insights such as bankruptcy details, foreclosure details which helped management team to take appropriate & quick action",
                    highlight: true
                },
                {
                    value: "5%",
                    description: "Increase in sales with provision of area sales reporting"
                },
                {
                    value: "30%",
                    description: "of cost saving after moving data from On-Prem to Snowflake"
                },
                {
                    value: "94%",
                    description: "Increased the efficiency of report generation"
                }
            ]
        }
    }
];

const CaseStudies = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(caseStudies[0].id);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const studyId = params.get('study');
        if (studyId && caseStudies.find(cs => cs.id === studyId)) {
            setActiveTab(studyId);
        }
    }, [location.search]);

    const activeCaseStudy = caseStudies.find(cs => cs.id === activeTab) || caseStudies[0];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHero
                title="Case Studies"
                subtitle="Real-world examples of how we help businesses transform and succeed through technology and innovation."
            />

            <section className="py-12 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Navigation Tabs - Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {caseStudies.map((study) => (
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
                    <div id="study-details" className="scroll-mt-32">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCaseStudy.id}
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
                                                src={activeCaseStudy.image}
                                                alt={activeCaseStudy.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Technologies - Moved to Sidebar for quick context */}
                                        {activeCaseStudy.technologies && (
                                            <div>
                                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Studied Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {activeCaseStudy.technologies.map((tech, idx) => (
                                                        <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Quote */}
                                        {activeCaseStudy.quote && (
                                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative">
                                                <div className="absolute -top-3 -left-2 text-primary text-5xl opacity-20 font-serif leading-none">"</div>
                                                <p className="italic text-gray-600 text-sm leading-relaxed relative z-10 mb-3">
                                                    {activeCaseStudy.quote.text}
                                                </p>
                                                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                                        {activeCaseStudy.quote.author.charAt(0)}
                                                    </div>
                                                    <div className="text-xs font-bold text-gray-900">
                                                        {activeCaseStudy.quote.author}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Main Content (Right Column) - 8 cols */}
                                    <div className="lg:col-span-8 p-6 md:p-10 flex flex-col">
                                        {/* Header */}
                                        <div className="mb-8">
                                            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                                                {activeCaseStudy.category}
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                                                {activeCaseStudy.title}
                                            </h2>
                                        </div>

                                        {/* Impact / Key Results (Moved to Top) */}
                                        <div className="mb-10">
                                            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                Measurable Impact
                                            </h3>
                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                                {activeCaseStudy.valueAdd.metrics.map((metric, idx) => (
                                                    <div key={idx} className={`p-4 rounded-xl border ${metric.highlight ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'}`}>
                                                        <div className={`text-2xl font-black mb-1 ${metric.highlight ? 'text-green-600' : 'text-slate-800'}`}>
                                                            {metric.value}
                                                        </div>
                                                        <p className="text-xs font-medium text-gray-500 leading-snug">
                                                            {metric.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Challenge & Solution Grid */}
                                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                                            <div className="prose prose-sm">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                    </span>
                                                    The Challenge
                                                </h3>
                                                <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-red-300">
                                                    {activeCaseStudy.problem.map((item, idx) => (
                                                        <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace("on-premise to cloud", "<strong>on-premise to cloud</strong>").replace("Microservices application", "<strong>Microservices application</strong>") }}></li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="prose prose-sm">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                                    </span>
                                                    The Solution
                                                </h3>
                                                <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-blue-300">
                                                    {activeCaseStudy.solution.discovery.map((item, idx) => (
                                                        <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace("BluePrism", "<span class='text-primary font-bold'>BluePrism</span>") }}></li>
                                                    ))}
                                                </ul>
                                                {activeCaseStudy.solution.timeline && (
                                                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-md">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        {activeCaseStudy.solution.timeline}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Execution */}
                                        {activeCaseStudy.execution && (
                                            <div className="mt-auto bg-slate-50 rounded-2xl p-8 border border-gray-100">
                                                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                                    Execution Strategy
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                                    {activeCaseStudy.execution.map((item, idx) => (
                                                        <div key={idx} className="flex gap-3 items-start">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                                                            <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace("persona’s", "personas") }}></p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
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

export default CaseStudies;
