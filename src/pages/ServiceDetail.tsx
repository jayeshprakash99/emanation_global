import { useParams, Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";

const servicesData: Record<string, { title: string; desc: string; features: string[]; image: string }> = {
    "cloud-architecture": {
        title: "Cloud Architecture",
        desc: "Design scalable, resilient cloud platforms tailored for enterprise workloads.",
        features: ["Multi-cloud Strategy", "Microservices Architecture", "Serverless Solutions", "High Availability Design", "Cost Optimization", "Performance Tuning"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=80",
    },
    "cloud-migration": {
        title: "Cloud Migration",
        desc: "Seamless migration strategies that minimize risk and maximize performance.",
        features: ["Assessment & Planning", "Zero-downtime Migration", "Data Migration", "Post-migration Optimization", "Legacy Modernization", "Hybrid Cloud Setup"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    },
    "devops-automation": {
        title: "DevOps & Automation",
        desc: "CI/CD pipelines, IaC, and automated workflows for rapid delivery.",
        features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "GitOps Workflows", "Automated Testing"],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
    },
    "ai-machine-learning": {
        title: "AI & Machine Learning",
        desc: "Custom ML models and AI solutions that drive intelligent decision-making.",
        features: ["Custom ML Models", "Predictive Analytics", "Computer Vision", "Natural Language Processing", "MLOps", "AI Strategy Consulting"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    },
    "ai-data-engineering": {
        title: "AI Data Engineering",
        desc: "Build robust data pipelines and analytics platforms at scale.",
        features: ["Data Pipeline Design", "Real-time Analytics", "Data Lake Architecture", "ETL Optimization", "Data Governance", "Big Data Solutions"],
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=80",
    },
    "cloud-security": {
        title: "Cloud Security",
        desc: "Zero-trust security frameworks and compliance-ready architectures.",
        features: ["Zero Trust Architecture", "Compliance & Governance", "Threat Detection", "Identity Management", "Security Audits", "Incident Response"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    },
    "ai-chatbots": {
        title: "AI Chatbots & Automation",
        desc: "Intelligent conversational AI and process automation solutions.",
        features: ["Conversational AI", "Process Automation", "Customer Service Bots", "Integration Services", "Voice Assistants", "Workflow Automation"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop&q=80",
    },
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = slug ? servicesData[slug] : null;

    if (!service) {
        return (
            <Layout>
                <section className="pt-32 pb-20 bg-white min-h-[70vh] flex items-center">
                    <div className="container-custom text-center">
                        <h1 className="font-heading text-4xl font-bold mb-6 text-gray-900">Service Not Found</h1>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                        >
                            View All Services
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="container-custom">
                    <FadeUp>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:gap-3 transition-all"
                            style={{ color: '#518283' }}
                        >
                            <ArrowLeft size={16} />
                            Back to Services
                        </Link>
                    </FadeUp>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeUp delay={0.1}>
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Our Services
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                {service.title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                                style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                            >
                                Get Started
                                <ArrowRight size={18} />
                            </Link>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="rounded-2xl w-full shadow-xl"
                            />
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-teal-light-section">
                <div className="container-custom">
                    <FadeUp>
                        <h2 className="font-heading text-3xl font-bold mb-12 text-gray-900 text-center">
                            What's Included
                        </h2>
                    </FadeUp>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <FadeUp key={feature} delay={index * 0.1}>
                                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#518283]/30 hover:shadow-lg transition-all">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle size={24} style={{ color: '#518283' }} className="flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-teal-section">
                <div className="container-custom text-center">
                    <FadeUp>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                            Let's discuss how our {service.title.toLowerCase()} services can help your business.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-white gap-2 px-8 py-4 rounded-xl font-heading font-semibold"
                        >
                            Contact Us
                            <ArrowRight size={18} />
                        </Link>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
