import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] pb-0 pt-20 md:pt-0">

            {/* Professional Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Image Background Removed for Gradient */}

                {/* Subtle Moving Glows */}
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-screen"></div>
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-0 pointer-events-none"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-10">

                {/* Main Text Content */}
                <div className="max-w-5xl space-y-8 animate-fade-in-up">

                    {/* Badge / Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-200 tracking-wide uppercase shadow-black drop-shadow-md">Next Gen AI Solutions</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight leading-[1] text-white drop-shadow-2xl">
                        Innovate with <br />
                        <div className="relative inline-block mt-2">
                            <span className="absolute inset-0 bg-gradient-to-r from-[#00ffd5] via-primary to-[#0077ff] blur-2xl opacity-30 animate-pulse"></span>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-primary to-[#0077ff] filter drop-shadow-lg animate-[gradient-xy_8s_ease_infinite] bg-[length:200%_auto]">
                                Swajay Solutions
                            </span>
                        </div>
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg">
                        Empowering your business with cutting-edge AI and seamless digital solutions. <br className="hidden md:block" /> We turn your vision into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                            <button className="group relative px-6 py-3 bg-primary text-white font-bold text-base rounded-lg hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                            <button className="px-6 py-3 bg-transparent border border-white/30 text-white font-bold text-base rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
