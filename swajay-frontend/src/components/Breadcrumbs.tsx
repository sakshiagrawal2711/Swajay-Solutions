import { Link, useLocation } from 'react-router-dom';

const routeNameMap: { [key: string]: string } = {
    'about': 'About Us',
    'services': 'Services',
    'ai': 'AI & Automation',
    'contact': 'Contact Us',
    'case-studies': 'Case Studies',
    'blog': 'Blog'
};

const Breadcrumbs = ({ className = "" }: { className?: string }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className={`flex items-center text-sm font-medium mb-4 ${className}`} aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const name = routeNameMap[value.toLowerCase()] || value.replace(/-/g, ' ');

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-orange-500 mx-1 md:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                                {isLast ? (
                                    <span className="text-slate-900 font-bold capitalize">{name}</span>
                                ) : (
                                    <Link to={to} className="text-gray-500 hover:text-primary transition-colors capitalize">
                                        {name}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
