import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { Cloud, Server, GitBranch, Brain, Database, Shield, Bot, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";

const services = [
    {
        icon: Cloud,
        title: "Cloud Architecture",
        desc: "Design scalable, resilient cloud platforms tailored for enterprise workloads.",
        slug: "cloud-architecture",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: Server,
        title: "Cloud Migration",
        desc: "Seamless migration strategies that minimize risk and maximize performance.",
        slug: "cloud-migration",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: GitBranch,
        title: "DevOps & Automation",
        desc: "CI/CD pipelines, IaC, and automated workflows for rapid delivery.",
        slug: "devops-automation",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        desc: "Custom ML models and AI solutions that drive intelligent decision-making.",
        slug: "ai-machine-learning",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: Database,
        title: "AI Data Engineering",
        desc: "Build robust data pipelines and analytics platforms at scale.",
        slug: "ai-data-engineering",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: Shield,
        title: "Cloud Security",
        desc: "Zero-trust security frameworks and compliance-ready architectures.",
        slug: "cloud-security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    },
    {
        icon: Bot,
        title: "AI Chatbots & Automation",
        desc: "Intelligent conversational AI and process automation solutions.",
        slug: "ai-chatbots",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop&q=80",
    },
];

const partners = [
    { name: "AWS" },
    { name: "Microsoft Azure" },
    { name: "Google Cloud" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "OpenAI" },
    { name: "TensorFlow" },
];

const stats = [
    { value: "40%", label: "Avg. Cost Reduction" },
    { value: "3x", label: "Faster Deployment" },
    { value: "99.99%", label: "Uptime Achieved" },
    { value: "200+", label: "Projects Delivered" },
];

const insights = [
    {
        title: "The Future of Multi-Cloud Architecture in 2026",
        category: "Cloud Strategy",
        date: "March 10, 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        slug: "future-of-multi-cloud-architecture",
    },
    {
        title: "How AI is Revolutionizing DevOps Practices",
        category: "AI & DevOps",
        date: "March 5, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
        slug: "ai-revolutionizing-devops",
    },
    {
        title: "Zero Trust Security: A Complete Implementation Guide",
        category: "Security",
        date: "February 28, 2026",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
        slug: "zero-trust-security-guide",
    },
];

const Index = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#518283]/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#9AA365]/5 to-transparent"></div>
                </div>

                <div className="container-custom relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: '#518283' }}>
                                — Cloud & AI Experts —
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
                                Build Intelligent Infrastructure with{" "}
                                <span className="gradient-text whitespace-nowrap">Cloud & AI</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                Emanation Global helps companies design scalable cloud platforms,
                                automate operations with DevOps, and unlock the power of
                                AI-driven systems.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="flex items-center justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                                    style={{ background: 'linear-gradient(135deg, #518283, #9AA365)', boxShadow: '0 10px 30px rgba(81, 130, 131, 0.3)' }}
                                >
                                    Schedule a Consultation
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Hero Image - HD */}
                    <FadeUp delay={0.4}>
                        <div className="mt-16 relative">
                            <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&auto=format&fit=crop&q=80"
                                    alt="Dashboard Analytics"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-4 hidden lg:block border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(81, 130, 131, 0.1)' }}>
                                        <CheckCircle size={20} style={{ color: '#518283' }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">99.99% Uptime</p>
                                        <p className="text-xs text-gray-500">Last 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-4 top-1/3 bg-white rounded-xl p-4 hidden lg:block border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(154, 163, 101, 0.1)' }}>
                                        <Brain size={20} style={{ color: '#9AA365' }} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">AI Powered</p>
                                        <p className="text-xs text-gray-500">Smart Analytics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Partners - Teal Light Section */}
            <section className="py-16 bg-teal-light-section border-y border-[#518283]/10">
                <div className="container-custom">
                    <FadeUp>
                        <p className="text-center text-gray-600 text-sm font-medium uppercase tracking-widest mb-10">
                            Powered by Industry-Leading Technology
                        </p>
                    </FadeUp>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                        {partners.map((p, i) => (
                            <FadeUp key={p.name} delay={i * 0.05}>
                                <span className="font-heading font-semibold text-gray-500 text-lg md:text-xl hover:text-[#518283] transition-colors duration-300 cursor-default">
                                    {p.name}
                                </span>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats - Teal Section */}
            <section className="section-padding bg-teal-section">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <FadeUp key={s.label} delay={i * 0.1}>
                                <div className="card-on-dark rounded-2xl p-8 text-center">
                                    <p className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                                        {s.value}
                                    </p>
                                    <p className="text-white/70 text-sm">{s.label}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - White Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Our Services
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                End-to-End Cloud & AI Solutions
                            </h2>
                            <p className="text-gray-600">
                                From infrastructure design to intelligent automation, we deliver
                                the full spectrum of cloud and AI services.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <FadeUp key={service.slug} delay={i * 0.08}>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#518283]/30 hover:shadow-xl hover:shadow-[#518283]/10 transition-all duration-300 block h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                                                style={{ background: 'rgba(81, 130, 131, 0.1)' }}
                                            >
                                                <service.icon size={24} style={{ color: '#518283' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 group-hover:text-[#518283] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#518283' }}>
                                            Learn More <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us - Olive Light Section */}
            <section className="section-padding bg-olive-light-section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&auto=format&fit=crop&q=80"
                                    alt="AI Technology"
                                    className="rounded-2xl w-full shadow-xl"
                                />
                                <div 
                                    className="absolute -bottom-6 -right-6 rounded-2xl p-6 hidden md:block"
                                    style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                                >
                                    <p className="text-white font-heading font-bold text-2xl">10+</p>
                                    <p className="text-white/80 text-sm">Years Experience</p>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#9AA365' }}>
                                    Why Emanation Global
                                </p>
                                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                                    Your Trusted Partner for{" "}
                                    <span className="gradient-text">Digital Transformation</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    We combine deep technical expertise with strategic thinking to
                                    help enterprises navigate the complexities of cloud
                                    infrastructure and AI adoption.
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Certified cloud architects across AWS, Azure & GCP",
                                        "End-to-end delivery from strategy to implementation",
                                        "Proven track record with Fortune 500 enterprises",
                                        "24/7 managed services and dedicated support",
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle
                                                className="mt-0.5 flex-shrink-0"
                                                size={20}
                                                style={{ color: '#9AA365' }}
                                            />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                                    style={{ color: '#518283' }}
                                >
                                    Learn More About Us <ArrowRight size={18} />
                                </Link>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Process - Teal Light Section */}
            <section className="section-padding bg-teal-light-section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                                    alt="Team Collaboration"
                                    className="rounded-2xl w-full shadow-xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 hidden md:block shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div 
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ background: 'rgba(154, 163, 101, 0.15)' }}
                                        >
                                            <CheckCircle size={24} style={{ color: '#9AA365' }} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">200+ Projects</p>
                                            <p className="text-sm text-gray-500">Successfully Delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                    Our Process
                                </p>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                                    How We <span className="gradient-text">Deliver</span> Results
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: "01",
                                            title: "Discovery & Strategy",
                                            desc: "Deep analysis of your current infrastructure and business goals.",
                                        },
                                        {
                                            step: "02",
                                            title: "Architecture & Design",
                                            desc: "Blueprint a scalable, secure, and cost-optimized solution.",
                                        },
                                        {
                                            step: "03",
                                            title: "Implementation",
                                            desc: "Agile delivery with CI/CD, automation, and best practices.",
                                        },
                                        {
                                            step: "04",
                                            title: "Optimize & Scale",
                                            desc: "Continuous monitoring, optimization, and support.",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={item.step}
                                            className="flex gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-all border border-transparent hover:border-[#518283]/20"
                                        >
                                            <span 
                                                className="font-heading font-bold text-2xl"
                                                style={{ color: index % 2 === 0 ? '#518283' : '#9AA365' }}
                                            >
                                                {item.step}
                                            </span>
                                            <div>
                                                <h4 className="font-heading font-semibold text-gray-900 mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Insights
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Latest Articles & Resources
                            </h2>
                            <p className="text-gray-600">
                                Stay updated with the latest trends in cloud computing, AI, and digital transformation.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-3 gap-8">
                        {insights.map((article, index) => (
                            <FadeUp key={index} delay={index * 0.1}>
                                <Link
                                    to={`/insights/${article.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#518283]/30 hover:shadow-xl hover:shadow-[#518283]/10 transition-all duration-300 block h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span 
                                                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                                style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                                            >
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 group-hover:text-[#518283] transition-colors">
                                            {article.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#518283' }}>
                                            Read More <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.3}>
                        <div className="text-center mt-12">
                            <Link
                                to="/insights"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold border-2 transition-all duration-300 hover:gap-3"
                                style={{ borderColor: '#518283', color: '#518283' }}
                            >
                                View All Insights
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CTA - Olive Section */}
            <section className="section-padding bg-olive-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                Ready to Transform Your Infrastructure?
                            </h2>
                            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                                Book a free cloud strategy session with our experts and discover
                                how to accelerate your digital transformation.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="btn-white gap-2 px-8 py-4 rounded-xl font-heading font-semibold"
                                >
                                    Book a Free Strategy Session
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/services"
                                    className="btn-outline-white gap-2 px-8 py-4 rounded-xl font-heading font-semibold"
                                >
                                    Explore Services
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
