import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            megaMenu: true,
            columns: [
                {
                    title: "Mortgage Functional Capabilities",
                    items: ["Document Processing", "Title Search", "Compliance & Quality", "LOS (Loan Origination System)", "Process Automation", "Curative Services"]
                },
                {
                    title: "Technology Excellence",
                    items: ["Engineering Services", "AI & Advanced Automation", "Data & Business Intelligence", "Secure Cloud & Integration"]
                }
            ]
        },
        {
            name: 'AI & Automation',
            path: '/ai',
            megaMenu: true,
            columns: [
                {
                    title: "Artificial Intelligence           ",
                    items: ["Machine Learning", "Deep Learning", "NLP Solutions", "Computer Vision"]
                },
                {
                    title: "Mortgage Title Automation Strategy",
                    items: ["Customer Support Bots", "Process Automation", "Personal Assistants", "Data Analysis Agents"]
                }
            ],
        },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Solutions', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleSubmenu = (e: React.MouseEvent, name: string) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            setActiveSubmenu(activeSubmenu === name ? null : name);
        }
    };

    return (
        <nav className={`sticky w-full z-50 top-0 start-0 border-b transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/95 backdrop-blur-md border-gray-200 shadow-sm' : 'bg-[#0F172A] border-transparent'}`}>
            <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4 gap-4">
                <NavLink to="/" className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse relative z-50 shrink-0">
                    <img src="/Swajay Logo.png" className="h-8 md:h-10" alt="Swajay Solutions Logo" />
                    <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-white">Swajay Solutions</span>
                </NavLink>
                <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse relative z-50 shrink-0">
                    <NavLink to="/contact" className="hidden md:block" onClick={() => window.scrollTo(0, 0)}>
                        <button type="button" className="text-white bg-primary hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-bold rounded-lg text-xs md:text-sm px-4 py-2 md:px-6 md:py-2.5 text-center cursor-pointer transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 whitespace-nowrap">
                            Get Started
                        </button>
                    </NavLink>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'absolute top-full left-0 bg-secondary border-b border-t border-white/10 shadow-2xl p-4 block' : 'hidden'} md:static md:bg-transparent md:border-none md:shadow-none md:p-0`} id="navbar-sticky">
                    <ul className="flex flex-col font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.name} className="group relative border-b border-white/5 md:border-none last:border-none">
                                <div className="flex items-center justify-between w-full">
                                    <NavLink
                                        to={link.path}
                                        onClick={(e) => {
                                            if (link.megaMenu) {
                                                toggleSubmenu(e, link.name);
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={({ isActive }) =>
                                            `relative block py-3 px-3 md:p-0 transition-colors duration-300 flex items-center justify-between w-full md:w-auto group-hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-white'}`
                                        }
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {/* Desktop Underline Effect */}
                                        <span className="hidden md:block absolute left-0 bottom-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ease-in-out"></span>

                                        {/* Mobile Arrow */}
                                        {link.megaMenu && (
                                            <svg className={`w-4 h-4 ml-2 md:hidden transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        )}
                                    </NavLink>
                                </div>

                                {/* Desktop Mega Menu */}
                                {link.megaMenu && (
                                    <>
                                        {/* Desktop View */}
                                        <div className="hidden md:block absolute left-0 top-full w-[600px] lg:w-[800px] bg-secondary border-t border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 h-auto rounded-b-xl overflow-hidden -left-20 lg:-left-40">
                                            <div className="p-8 grid grid-cols-12 gap-8">
                                                {link.columns?.map((col, idx) => (
                                                    <div key={idx} className="col-span-4">
                                                        <NavLink
                                                            to={col.title === "Mortgage Functional Capabilities" ? "/services?tab=mortgage" : "/services?tab=technology"}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                // Force reload if already on the page to trigger useEffect or just let NavLink handle it
                                                            }}
                                                            className="block"
                                                        >
                                                            <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4 border-b border-white/10 pb-2 hover:text-primary transition-colors cursor-pointer">
                                                                {col.title}
                                                            </h3>
                                                        </NavLink>
                                                        <ul className="space-y-3">
                                                            {col.items.map((item, itemIdx) => (
                                                                <li key={itemIdx}>
                                                                    <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                                                                        {item}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                                {link.featured && (
                                                    <div className="col-span-4 bg-white/5 rounded-xl p-6 border border-white/10 ml-4">
                                                        <h3 className="text-white font-bold text-lg mb-2">FEATURED</h3>
                                                        <div className="h-px w-12 bg-primary mb-4"></div>
                                                        <h4 className="text-lg text-white font-semibold mb-2">{link.featured.title}</h4>
                                                        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                                                            {link.featured.text}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile View (Accordion) */}
                                        <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white/5 ${activeSubmenu === link.name ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
                                            <div className="px-4 space-y-6">
                                                {link.columns?.map((col, idx) => (
                                                    <div key={idx}>
                                                        <h3 className="text-xs font-bold text-gray-500 uppercase mb-2 ml-2">{col.title}</h3>
                                                        <ul className="space-y-2 ml-4 border-l border-white/10 pl-4">
                                                            {col.items.map((item, itemIdx) => (
                                                                <li key={itemIdx}>
                                                                    <a href="#" className="block text-gray-300 hover:text-primary text-sm">
                                                                        {item}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                        {/* Mobile Only CTA Button */}
                        <li className="mt-4 md:hidden pb-4">
                            <NavLink to="/contact" className="block w-full" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                                <button type="button" className="w-full text-white bg-gradient-to-r from-primary to-accent hover:from-highlight hover:to-primary font-bold rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 shadow-md">
                                    Request a Demo
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
