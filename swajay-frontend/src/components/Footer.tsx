const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Brand & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            {/* Reusing the logo or a placeholder if size differs */}
                            <img src="/Swajay Logo.png" alt="Swajay Solutions" className="h-12" />
                            <div>
                                <h3 className="text-xl font-bold">Swajay</h3>
                                <p className="text-xs text-primary tracking-widest uppercase">Smart Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming enterprises through innovative technology solutions. Collaboration, Innovation, Smart Solutions.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Icons Placeholder */}
                            <a href="https://www.linkedin.com/company/swajaybusinesssolutions/" target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ">
                                <span className="sr-only">Website</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Engineering Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">AI & Advanced Automation</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Data & Business Intelligence</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Secure Cloud & Integration</a></li>
                        </ul>
                    </div>

                    {/* Column 3: USA Headquarters */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">USA Locations</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>19 Holly Cove Ln,<br />Dover, DE 19901,<br />United States</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>12863, Tradd St., Apt 2D<br />Carmel, IN 46032,<br />United States</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:info@swajaysolutions.com" className="hover:text-primary transition-colors">info@swajaysolutions.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: India Operations */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">India Locations</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>No 21, Binnamangala,<br />Indiranagar, Bengaluru,<br />Karnataka, 560038</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Summit A, Brigade Metropolis,<br />Garudachar Palya, Bengaluru,<br />Karnataka, 560048</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2026 Swajay Business Solutions, LLC. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
