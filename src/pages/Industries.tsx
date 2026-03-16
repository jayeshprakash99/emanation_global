import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, Building2, Heart, ShoppingCart, Factory, Plane, GraduationCap, Landmark, Zap } from "lucide-react";
import Layout from "../components/Layout";

const industries = [
    {
        icon: Building2,
        title: "Financial Services",
        desc: "Secure, compliant cloud infrastructure for banks, fintech, and insurance companies. We deliver solutions that meet stringent regulatory requirements while enabling innovation.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80",
        features: ["PCI-DSS Compliance", "Real-time Analytics", "Fraud Detection AI", "Secure Trading Platforms"],
    },
    {
        icon: Heart,
        title: "Healthcare",
        desc: "HIPAA-compliant platforms for healthcare providers, enabling secure data management, telemedicine solutions, and AI-powered diagnostics.",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&auto=format&fit=crop&q=80",
        features: ["HIPAA Compliance", "EHR Integration", "Telemedicine Platforms", "Medical AI/ML"],
    },
    {
        icon: ShoppingCart,
        title: "Retail & E-commerce",
        desc: "Scalable platforms that handle peak traffic, personalized recommendations, and seamless omnichannel experiences.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
        features: ["Auto-scaling Infrastructure", "Recommendation Engines", "Inventory Management", "Customer Analytics"],
    },
    {
        icon: Factory,
        title: "Manufacturing",
        desc: "IoT-enabled smart factories with predictive maintenance, supply chain optimization, and real-time production analytics.",
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&auto=format&fit=crop&q=80",
        features: ["IoT Integration", "Predictive Maintenance", "Supply Chain AI", "Quality Control Systems"],
    },
    {
        icon: Plane,
        title: "Travel & Hospitality",
        desc: "Cloud solutions for booking systems, customer experience platforms, and operational efficiency in the travel industry.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
        features: ["Booking Platforms", "Dynamic Pricing", "Customer Experience", "Operations Management"],
    },
    {
        icon: GraduationCap,
        title: "Education",
        desc: "Digital learning platforms, student information systems, and AI-powered educational tools for modern institutions.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80",
        features: ["LMS Platforms", "Virtual Classrooms", "Student Analytics", "Content Delivery"],
    },
    {
        icon: Building2,
        title: "Real Estate",
        desc: "PropTech solutions for property management and tenant experiences. Enable virtual tours and AI-driven market analysis.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
        stats: "35% faster sales",
    },
    {
        icon: Zap,
        title: "Energy & Utilities",
        desc: "Smart grid solutions and predictive analytics for resource optimization. Enable sustainable energy management with AI.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
        stats: "20% energy savings",
    },
];

const Industries = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#9AA365]/5 to-transparent"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <FadeUp>
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#9AA365' }}>
                                Industries
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Industry-Specific{" "}
                                <span className="gradient-text">Solutions</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                Deep expertise across sectors, delivering tailored cloud and AI solutions 
                                that address unique industry challenges.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding bg-olive-light-section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <FadeUp key={industry.title} delay={index * 0.08}>
                                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#518283]/30 hover:shadow-xl hover:shadow-[#518283]/10 transition-all duration-300">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                            <div className="flex items-center gap-3">
                                                <div 
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm"
                                                >
                                                    <industry.icon size={24} className="text-white" />
                                                </div>
                                                <h3 className="font-heading font-semibold text-xl text-white">
                                                    {industry.title}
                                                </h3>
                                            </div>
                                            <span 
                                                className="px-3 py-1 rounded-full text-xs font-semibold"
                                                style={{ background: 'rgba(154, 163, 101, 0.9)', color: 'white' }}
                                            >
                                                {industry.stats}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {industry.desc}
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                                            style={{ color: '#518283' }}
                                        >
                                            Learn More <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-teal-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Don't See Your Industry?
                            </h2>
                            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                                We work across all sectors. Let's discuss how we can create a custom solution for your unique needs.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-white gap-2 px-8 py-4 rounded-xl font-heading font-semibold"
                            >
                                Contact Us
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
};

export default Industries;
