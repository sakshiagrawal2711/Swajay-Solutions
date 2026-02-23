import { motion } from "framer-motion";

const CoreValues = () => {
    const values = [
        {
            title: "Outcome with Agility & Speed",
            description: "Rapid delivery without compromising quality or compliance.",
            impact: "Rapid delivery",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
        },
        {
            title: "Reuse Before Reinvent",
            description: "Leverage proven accelerators and methodologies for faster implementation.",
            impact: "Faster implementation",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
            ),
        },
        {
            title: "Information & Data Privacy by Default",
            description: "Security and compliance built into every solution from the ground up.",
            impact: "Security & Compliance",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-blue-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col text-left"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                                {item.description}
                            </p>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Core Value</p>
                                <p className="text-sm font-medium text-gray-700">{item.impact}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
