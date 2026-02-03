import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface PageHeroProps {
    title: string;
    subtitle: string;
    className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, className = "" }) => {
    return (
        <section className={`relative w-full pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-warm-white text-center ${className}`}>

            {/* Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Image Background Removed for Gradient */}

                {/* Subtle Moving Glows - Adjusted for Light Theme */}
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse mix-blend-multiply"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-multiply"></div>
            </div>

            {/* Noise Texture - Darker noise for light bg */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply z-0 pointer-events-none"></div>

            {/* Grid Overlay - Dark grid for light bg */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] z-0 pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <Breadcrumbs className="justify-center mb-6" />

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default PageHero;
