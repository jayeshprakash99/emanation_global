import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { Cloud, Server, GitBranch, Brain, Database, Shield, Bot, ArrowRight, Code, Cpu } from "lucide-react";
import Layout from "../components/Layout";

const services = [
    {
        icon: Cloud,
        title: "Cloud Architecture",
        desc: "Design scalable, resilient cloud platforms tailored for enterprise workloads. We create architectures that grow with your business.",
        slug: "cloud-architecture",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=80",
        features: ["Multi-cloud Strategy", "Microservices Architecture", "Serverless Solutions", "High Availability Design"],
    },
    {
        icon: Server,
        title: "Cloud Migration",
        desc: "Seamless migration strategies that minimize risk and maximize performance. Move to the cloud with confidence.",
        slug: "cloud-migration",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
        features: ["Assessment & Planning", "Zero-downtime Migration", "Data Migration", "Post-migration Optimization"],
    },
    {
        icon: GitBranch,
        title: "DevOps & Automation",
        desc: "CI/CD pipelines, IaC, and automated workflows for rapid delivery. Accelerate your software delivery lifecycle.",
        slug: "devops-automation",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
        features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        desc: "Custom ML models and AI solutions that drive intelligent decision-making across your organization.",
        slug: "ai-machine-learning",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
        features: ["Custom ML Models", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
    },
    {
        icon: Database,
        title: "AI Data Engineering",
        desc: "Build robust data pipelines and analytics platforms at scale. Transform raw data into actionable insights.",
        slug: "ai-data-engineering",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=80",
        features: ["Data Pipeline Design", "Real-time Analytics", "Data Lake Architecture", "ETL Optimization"],
    },
    {
        icon: Shield,
        title: "Cloud Security",
        desc: "Zero-trust security frameworks and compliance-ready architectures. Protect your assets in the cloud.",
        slug: "cloud-security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
        features: ["Zero Trust Architecture", "Compliance & Governance", "Threat Detection", "Identity Management"],
    },
    {
        icon: Bot,
        title: "AI Chatbots & Automation",
        desc: "Intelligent conversational AI and process automation solutions that enhance customer experience.",
        slug: "ai-chatbots",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop&q=80",
        features: ["Conversational AI", "Process Automation", "Customer Service Bots", "Integration Services"],
    },
    {
        icon: Code,
        title: "Custom Development",
        desc: "Bespoke software solutions built with modern technologies to solve your unique business challenges.",
        slug: "custom-development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
        features: ["Full-stack Development", "API Development", "Legacy Modernization", "Cloud-native Apps"],
    },
    {
        icon: Cpu,
        title: "Edge Computing",
        desc: "Deploy computing power closer to your data sources for faster processing and reduced latency.",
        slug: "edge-computing",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
        features: ["IoT Solutions", "Edge Analytics", "Low-latency Processing", "Distributed Systems"],
    },
];

const Services = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#518283]/5 to-transparent"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <FadeUp>
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Our Services
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Comprehensive{" "}
                                <span className="gradient-text">Cloud & AI</span> Solutions
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                From strategy to implementation, we offer end-to-end services designed 
                                to accelerate your digital transformation journey.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-teal-light-section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <FadeUp key={service.slug} delay={index * 0.08}>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#518283]/30 hover:shadow-xl hover:shadow-[#518283]/10 transition-all duration-300 flex flex-col md:flex-row h-full"
                                >
                                    <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 md:block hidden"></div>
                                    </div>
                                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                                        <div 
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ background: index % 2 === 0 ? 'rgba(81, 130, 131, 0.1)' : 'rgba(154, 163, 101, 0.1)' }}
                                        >
                                            <service.icon size={24} style={{ color: index % 2 === 0 ? '#518283' : '#9AA365' }} />
                                        </div>
                                        <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 group-hover:text-[#518283] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                            {service.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.features.slice(0, 3).map((feature) => (
                                                <span 
                                                    key={feature} 
                                                    className="text-xs px-3 py-1 rounded-full"
                                                    style={{ background: 'rgba(81, 130, 131, 0.1)', color: '#518283' }}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: '#518283' }}>
                                            Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-gradient-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
                                How We Work
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
                                Our Approach
                            </h2>
                            <p className="text-white/70">
                                A proven methodology that ensures successful delivery every time.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discover", desc: "Understand your business needs and technical requirements." },
                            { step: "02", title: "Design", desc: "Architect solutions that align with your goals." },
                            { step: "03", title: "Deliver", desc: "Implement with agile methodology and best practices." },
                            { step: "04", title: "Optimize", desc: "Continuously improve and scale your solutions." },
                        ].map((item, index) => (
                            <FadeUp key={item.step} delay={index * 0.1}>
                                <div className="card-on-dark rounded-2xl p-6 text-center">
                                    <p className="font-heading font-bold text-4xl text-white/30 mb-4">
                                        {item.step}
                                    </p>
                                    <h3 className="font-heading font-semibold text-xl text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                                alt="Team Discussion"
                                className="rounded-2xl w-full shadow-xl"
                            />
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                    Let's Talk
                                </p>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                    Not Sure Which Service You Need?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Our experts can help you identify the right solutions for your business. 
                                    Schedule a free consultation to discuss your requirements.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                                    style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                                >
                                    Schedule Free Consultation
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Services;
