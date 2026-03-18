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
                    title: "Artificial Intelligence",
                    items: ["Intelligent Document Processing", "Agentic AI for Order Management", "RPA for Report Generation"]
                },
                {
                    title: "Mortgage Title Automation Strategy",
                    items: ["Target Operating Model"]
                }
            ],
        },
        { name: 'Case Studies', path: '/case-studies' },
        // {
        //     name: 'Solutions',
        //     path: '/solutions',
        //     megaMenu: true,
        //     columns: [
        //         {
        //             title: "AI-Powered Solutions",
        //             items: ["TitleNexus AI", "TitleOps AI"]
        //         }
        //     ]
        // },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleSubmenu = (e: React.MouseEvent, name: string) => {
        if (window.innerWidth < 1280) {
            e.preventDefault();
            setActiveSubmenu(activeSubmenu === name ? null : name);
        }
    };

    const getColumnPath = (title: string) => {
        const trimmedTitle = title.trim();
        if (trimmedTitle === "Mortgage Functional Capabilities") return "/services?tab=mortgage#mortgage-section";
        if (trimmedTitle === "Technology Excellence") return "/services?tab=technology#technology-section";
        if (trimmedTitle === "Artificial Intelligence") return "/ai?tab=ai#ai-section";
        if (trimmedTitle === "Mortgage Title Automation Strategy") return "/ai?tab=strategy#strategy-section";
        if (trimmedTitle === "AI-Powered Solutions") return "/solutions";
        return "#";
    };

    const getItemPath = (columnTitle: string, itemName: string) => {
        const basePath = getColumnPath(columnTitle);
        if (basePath === "#") return "#";
        // Remove any existing hash from basePath to avoid double hashes
        const basePathWithoutHash = basePath.split('#')[0];
        const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `${basePathWithoutHash}#${slug}`;
    };

    return (
        <nav className={`sticky w-full z-50 top-0 start-0 border-b transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/95 backdrop-blur-md border-gray-200 shadow-sm' : 'bg-[#0F172A] border-transparent'}`}>
            <div className="w-full flex items-center justify-between px-6 py-4">
                <NavLink
                    to="/"
                    className="flex items-center gap-4 relative z-50 shrink-0"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {/* Logo */}
                    <img
                        src="/Swajay Logo.png"
                        className="h-14 w-auto"
                        alt="Swajay Solutions Logo"
                    />

                    {/* Text Block */}
                    <div className="flex flex-col">
                        {/* Company Name */}
                        <span className="text-2xl font-semibold text-white leading-tight">
                            Swajay Solutions
                        </span>

                        {/* Tagline centered under name */}
                        <span className="text-sm text-white/80 text-center">
                            Collaboration | Innovation | Smart Solutions
                        </span>
                    </div>
                </NavLink>


                <div className="flex xl:order-2 space-x-2 xl:space-x-0 rtl:space-x-reverse relative z-50 shrink-0">
                    <NavLink to="/contact" className="hidden xl:block" onClick={() => window.scrollTo(0, 0)}>
                        <button type="button" className="text-white bg-primary hover:bg-blue-600 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-xs md:text-sm px-4 py-2 md:px-6 md:py-2.5 text-center cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform whitespace-nowrap">
                            Get Started
                        </button>
                    </NavLink>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg xl:hidden hover:bg-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 absolute xl:relative top-full left-0 bg-[#0F172A] xl:bg-transparent shadow-lg xl:shadow-none transition-all duration-300 p-4 xl:p-0 border-t border-white/10 xl:border-none ${isOpen ? 'max-h-[80vh] overflow-y-auto opacity-100 visible' : 'max-h-0 xl:max-h-none opacity-0 xl:opacity-100 invisible xl:visible overflow-hidden xl:overflow-visible'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 relative">
                        {links.map((link) => (
                            <li
                                key={link.name}
                                className="group relative border-b border-white/5 xl:border-none last:border-none"
                                onMouseEnter={() => {
                                    if (window.innerWidth >= 1280) {
                                        setActiveSubmenu(link.name);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.innerWidth >= 1280) {
                                        setActiveSubmenu(null);
                                    }
                                }}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <NavLink
                                        to={link.path}
                                        onClick={(e) => {
                                            if (link.megaMenu) {
                                                toggleSubmenu(e, link.name);
                                                if (window.innerWidth >= 1280) {
                                                    window.scrollTo(0, 0);
                                                    setActiveSubmenu(null);
                                                }
                                            } else {
                                                setIsOpen(false);
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                        className={({ isActive }) =>
                                            `relative block py-3 px-3 md:p-0 transition-colors duration-300 flex items-center justify-between w-full md:w-auto group-hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-white'}`
                                        }
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {/* Desktop Underline Effect */}
                                        <span className="hidden xl:block absolute left-0 bottom-0 w-full h-[3px] bg-primary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ease-in-out"></span>

                                        {/* Mobile Arrow */}
                                        {link.megaMenu && (
                                            <svg className={`w-4 h-4 ml-2 xl:hidden transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        )}
                                    </NavLink>
                                </div>

                                {/* Desktop Mega Menu */}
                                {link.megaMenu && (
                                    <>
                                        {/* Desktop View */}
                                        <div
                                            className={`hidden xl:block absolute left-0 top-full w-[700px] 2xl:w-[800px] bg-secondary border-t border-white/10 shadow-xl transition-all duration-300 transform -z-10 h-auto rounded-b-xl overflow-hidden -left-20 2xl:-left-40
                                                ${activeSubmenu === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                                        >
                                            <div className="p-8 grid grid-cols-12 gap-8">
                                                {link.columns?.map((col, idx) => (
                                                    <div key={idx} className="col-span-6">
                                                        <NavLink
                                                            to={getColumnPath(col.title)}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setActiveSubmenu(null);
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
                                                                    <NavLink
                                                                        to={getItemPath(col.title, item)}
                                                                        className="block text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                                                                        onClick={() => {
                                                                            setIsOpen(false);
                                                                            setActiveSubmenu(null);
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>

                                        {/* Mobile View (Accordion) */}
                                        <div className={`xl:hidden overflow-hidden transition-all duration-300 bg-white/5 ${activeSubmenu === link.name ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
                                            <div className="px-4 space-y-6">
                                                {link.columns?.map((col, idx) => (
                                                    <div key={idx}>
                                                        <NavLink
                                                            to={getColumnPath(col.title)}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                            }}
                                                        >
                                                            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2 ml-2 hover:text-primary transition-colors cursor-pointer">{col.title}</h3>
                                                        </NavLink>
                                                        <ul className="space-y-2 ml-4 border-l border-white/10 pl-4">
                                                            {col.items.map((item, itemIdx) => (
                                                                <li key={itemIdx}>
                                                                    <NavLink
                                                                        to={getItemPath(col.title, item)}
                                                                        className="block text-gray-300 hover:text-primary text-sm"
                                                                        onClick={() => {
                                                                            setIsOpen(false);
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </NavLink>
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
                        <li className="mt-4 xl:hidden pb-4">
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
