import { motion } from "framer-motion";

import PageHero from '../components/PageHero';

const AI = () => {
    return (
        <div className="min-h-screen bg-blue-50">
            <PageHero
                title="AI & Automation"
                subtitle="We apply specific AI solutions to mission-critical mortgage and title processes, transforming time-consuming tasks into compliant, automated workflows"
            />

            {/* Eliminating Manual Bottlenecks Section */}
            <section className="py-24 px-6 md:px-16 bg-blue-50">
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

            {/* Swajay's Approach Section */}
            <section className="py-24 px-6 md:px-16 bg-blue-50">
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
        </div>
    );
};
export default AI;
