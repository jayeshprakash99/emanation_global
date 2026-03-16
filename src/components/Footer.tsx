import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img 
                                src="/logo.png" 
                                alt="Emanation Global Logo" 
                                className="h-10 w-auto"
                            />
                            <span className="font-heading font-bold text-lg">
                                <span style={{ color: '#518283' }}>Emanation</span>
                                <span style={{ color: '#9AA365' }}> Global</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building intelligent infrastructure with Cloud & AI solutions for
                            enterprises worldwide.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Cloud Architecture", path: "/services/cloud-architecture" },
                                { label: "Cloud Migration", path: "/services/cloud-migration" },
                                { label: "DevOps & Automation", path: "/services/devops-automation" },
                                { label: "AI & Machine Learning", path: "/services/ai-machine-learning" },
                                { label: "Cloud Security", path: "/services/cloud-security" },
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-[#9AA365] transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About Us", path: "/about" },
                                { label: "Industries", path: "/industries" },
                                { label: "Insights", path: "/insights" },
                                { label: "Contact", path: "/contact" },
                            ].map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-[#9AA365] transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="mt-0.5 flex-shrink-0" style={{ color: '#518283' }} />
                                <a
                                    href="mailto:business@emanationglobal.com"
                                    className="text-gray-400 hover:text-[#9AA365] transition-colors text-sm"
                                >
                                    business@emanationglobal.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Emanation Global. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-[#9AA365] text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-500 hover:text-[#9AA365] text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* Built By */}
                <div className="border-t border-gray-800 mt-6 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        Built by{" "}
                        <a
                            href="https://webytesolutions.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9AA365] hover:text-[#518283] transition-colors font-medium"
                        >
                            Webyte Solutions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
