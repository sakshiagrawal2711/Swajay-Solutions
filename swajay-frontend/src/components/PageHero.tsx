import React from 'react';


interface PageHeroProps {
    title: string;
    subtitle: string;
    label?: string;
    image?: string;
    className?: string;
    children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, label, image, className = "", children }) => {
    return (
        <section className={`relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#FAFAF9] ${className}`}>

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
                        {label && (
                            <span className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                {label}
                            </span>
                        )}

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            {title}
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed mb-8">
                            {subtitle}
                        </p>


                    </div>

                    {/* Right Column: Visual or Children */}
                    <div className="relative hidden lg:block">
                        {children ? (
                            children
                        ) : image ? (
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <img src={image} alt={title} className="w-full h-auto" />
                            </div>
                        ) : (
                            // Default Abstract Graphic if no image provided
                            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 shadow-xl overflow-hidden flex items-center justify-center group">
                                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                {/* Abstract Shapes */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute top-12 left-12 right-12 bottom-12 border-2 border-dashed border-primary/10 rounded-xl"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-bold text-2xl opacity-20">
                                    {label || "Swajay"}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
