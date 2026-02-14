import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


import PageHero from '../components/PageHero';
import partnerPhoto from '../assets/partner_photo.jpg';
import nagaraj from '../assets/Nagaraj Srinivasamurthy.jpg';
import muniraju from '../assets/image1.png';
import thirumalesh from '../assets/Thiru Photo.png';

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number; to: number; duration?: number; suffix?: string }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: duration, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, to, duration, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

const About = () => {
    return (
        <div className="min-h-screen bg-blue-50">
            {/* Custom Hero with Value Propositions Diagram */}
            <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#FAFAF9]">
                {/* Background Layers */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
                </div>

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-left">
                            <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                About Us
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                About Swajay
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed mb-8">
                                Decades of expertise, modern innovation, and a commitment to solving real business challenges
                            </p>
                        </div>

                        {/* Right Column: Value Propositions Circular Diagram */}
                        <div className="relative hidden lg:flex items-center justify-center py-12">
                            <div className="relative w-full max-w-md">
                                {/* Glow effect behind circle */}
                                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl"></div>

                                {/* SVG Circular Diagram with Clean Gaps */}
                                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-2xl">
                                    {/* Define gradient */}
                                    <defs>
                                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                                        </linearGradient>

                                        {/* Shadow filter */}
                                        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                                            <feOffset dx="0" dy="3" result="offsetblur" />
                                            <feComponentTransfer>
                                                <feFuncA type="linear" slope="0.25" />
                                            </feComponentTransfer>
                                            <feMerge>
                                                <feMergeNode />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Four quarter circles with gaps between them */}

                                    {/* Top Left Quarter - Industry Expertise */}
                                    <path
                                        d="M 200 200 L 200 48 A 152 152 0 0 0 48 200 L 196 200 Z"
                                        fill="url(#blueGrad)"
                                        filter="url(#dropShadow)"
                                    />

                                    {/* Top Right Quarter - Proven Outcomes */}
                                    <path
                                        d="M 204 200 L 204 48 A 152 152 0 0 1 352 200 L 204 200 Z"
                                        fill="url(#blueGrad)"
                                        filter="url(#dropShadow)"
                                    />

                                    {/* Bottom Left Quarter - Speed & Agility */}
                                    <path
                                        d="M 200 204 L 48 204 A 152 152 0 0 0 200 352 L 200 204 Z"
                                        fill="url(#blueGrad)"
                                        filter="url(#dropShadow)"
                                    />

                                    {/* Bottom Right Quarter - Trusted Partnership */}
                                    <path
                                        d="M 204 204 L 352 204 A 152 152 0 0 1 204 352 L 204 204 Z"
                                        fill="url(#blueGrad)"
                                        filter="url(#dropShadow)"
                                    />

                                    {/* Text Labels - Centered in Each Quarter */}

                                    {/* Top Left - Industry Expertise */}
                                    <text
                                        x="130" y="130"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Industry
                                    </text>
                                    <text
                                        x="130" y="155"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Expertise
                                    </text>

                                    {/* Top Right - Proven Outcomes */}
                                    <text
                                        x="270" y="130"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Proven
                                    </text>
                                    <text
                                        x="270" y="155"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Outcomes
                                    </text>

                                    {/* Bottom Left - Speed & Agility */}
                                    <text
                                        x="125" y="250"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Speed &
                                    </text>
                                    <text
                                        x="130" y="275"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Agility
                                    </text>

                                    {/* Bottom Right - Trusted Partnership */}
                                    <text
                                        x="270" y="250"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Trusted
                                    </text>
                                    <text
                                        x="270" y="275"
                                        fill="white"
                                        fontSize="20"
                                        fontWeight="700"
                                        textAnchor="middle"
                                        className="select-none"
                                    >
                                        Partnership
                                    </text>
                                </svg>

                                {/* Gentle floating animation */}
                                <style>{`
                                    @keyframes gentleFloat {
                                        0%, 100% { transform: translateY(0px); }
                                        50% { transform: translateY(-8px); }
                                    }
                                    .relative.w-full.max-w-md {
                                        animation: gentleFloat 6s ease-in-out infinite;
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-20 px-6 md:px-16 overflow-hidden bg-blue-50">
                <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Make advanced AI solutions useful and affordable—shipped quickly, run responsibly, and scaled with customers.
                        </p>
                        <ul className="space-y-3">
                            {['Speed without sacrifice', 'Affordability at scale', 'Responsible innovation'].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary border border-primary/5">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">
                                Mission-driven innovation focused on real business outcomes
                            </h3>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 transition-transform duration-700 group-hover:scale-150"></div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 px-6 md:px-16 bg-blue-50 overflow-hidden">
                <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg relative overflow-hidden group order-2 md:order-1"
                    >
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary border border-primary/5">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">
                                Enabling organizational excellence across industries
                            </h3>
                        </div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10 transition-transform duration-700 group-hover:scale-150"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            To deliver intelligent Automation and AI solutions that empower organizations in Mortgage, BFSI/Healthcare, Commerce, and Legal domains to achieve superior customer outcomes and operational excellence.
                        </p>
                        <ul className="space-y-3">
                            {['Industry-leading automation', 'Superior customer outcomes', 'Operational excellence'].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-20 px-6 md:px-16 text-gray-900 border-y border-gray-100">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: 100, suffix: "%", label: "Client Satisfaction" },
                        { number: 24, suffix: "/7", label: "Support" },
                        { number: 99, suffix: ".3%", label: "Quality" },
                        { number: 100, suffix: "%", label: "Regulatory Compliance" }
                    ].map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
                                <Counter from={0} to={stat.number} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 px-6 md:px-16 bg-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Our Team
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-primary font-medium text-lg"
                        >
                            Better outcomes, built together
                        </motion.p>
                    </div>

                    {/* Team Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 mb-16 text-center shadow-md"
                    >
                        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto space-y-6 text-lg">
                            <span className="block mb-6">
                                Our leadership team brings decades of hands-on experience across mortgage lending, servicing operations, and the broader BFSI landscape—including banking, financial services, and regulated enterprise environments. What sets us apart isn't tenure alone, but our ability to translate deep industry expertise into consistent, measurable outcomes.
                            </span>
                            <span className="block mb-6">
                                We are powered by a multidisciplinary team that blends strong domain knowledge with modern engineering. Mortgage and title specialists work alongside BFSI SMEs, AI practitioners, automation architects, and seasoned delivery leaders to solve complex business and operational challenges.
                            </span>
                            <span className="block mb-6">
                                Our delivery model is designed for speed, scale, and control. Modular, pod-based teams ramp up quickly, integrate seamlessly with core banking, lending, and enterprise platforms, and evolve with your technology and compliance ecosystem.
                            </span>
                            <span className="block">
                                Guiding our journey is a trusted network of industry advisors—former executives, technologists, and operators from across BFSI—who bring strategic perspective, challenge assumptions, and help us stay ahead of regulatory and market change.
                            </span>
                        </p>
                    </motion.div>


                    {/* Partners Grid */}
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-gray-900">Leadership</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 1, name: "Raju Gourishetty", role: "", image: muniraju },
                            { id: 2, name: "Nagaraj Srinivasamurthy", role: "", image: nagaraj },
                            { id: 3, name: "Muniraju S", role: "", image: partnerPhoto },
                            { id: 4, name: "Thirumalesh M V", role: "", image: thirumalesh },
                        ].map((partner) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: partner.id * 0.1 }}
                                className="group h-[400px] [perspective:1000px]"
                            >
                                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front Face */}
                                    <div className="absolute inset-0 h-full w-full bg-white rounded-2xl [backface-visibility:hidden] border border-gray-100 shadow-md">
                                        <div className="h-full w-full flex flex-col">
                                            <div className="flex-1 bg-gray-50 rounded-2xl relative overflow-hidden mb-4 m-2">
                                                {partner.image ? (
                                                    <img
                                                        src={partner.image}
                                                        alt={partner.name}
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                                        Partner Photo
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                                            </div>
                                            <div className="text-center pb-6">
                                                <h4 className="text-xl font-bold text-gray-900">{partner.name}</h4>
                                                <p className="text-primary font-medium">{partner.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute inset-0 h-full w-full bg-gray-50 rounded-2xl p-8 text-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center shadow-xl border border-gray-200">
                                        <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                                        <p className="text-primary text-sm mb-6">{partner.role}</p>

                                        <div className="space-y-4 w-full">
                                            <div className="group/link flex items-center justify-center gap-3 p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100 shadow-sm">
                                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm font-medium text-gray-600">partner{partner.id}@swajay.com</span>
                                            </div>

                                            <div className="group/link flex items-center justify-center gap-3 p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors cursor-pointer border border-gray-100 shadow-sm">
                                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                <span className="text-sm font-medium text-gray-600">LinkedIn Profile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
