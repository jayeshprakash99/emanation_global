import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { Cloud, Server, GitBranch, Brain, Database, Shield, Bot, ArrowRight, CheckCircle, ChevronRight, Play, Star } from "lucide-react";
import Layout from "../components/Layout";

const services = [
    {
        icon: Cloud,
        title: "Cloud Architecture",
        desc: "Design scalable, resilient cloud platforms tailored for enterprise workloads.",
        slug: "cloud-architecture",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
        icon: Server,
        title: "Cloud Migration",
        desc: "Seamless migration strategies that minimize risk and maximize performance.",
        slug: "cloud-migration",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
        icon: GitBranch,
        title: "DevOps & Automation",
        desc: "CI/CD pipelines, IaC, and automated workflows for rapid delivery.",
        slug: "devops-automation",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        desc: "Custom ML models and AI solutions that drive intelligent decision-making.",
        slug: "ai-machine-learning",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
        icon: Database,
        title: "AI Data Engineering",
        desc: "Build robust data pipelines and analytics platforms at scale.",
        slug: "ai-data-engineering",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    },
    {
        icon: Shield,
        title: "Cloud Security",
        desc: "Zero-trust security frameworks and compliance-ready architectures.",
        slug: "cloud-security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    },
    {
        icon: Bot,
        title: "AI Chatbots & Automation",
        desc: "Intelligent conversational AI and process automation solutions.",
        slug: "ai-chatbots",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    },
];

const partners = [
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
];

const stats = [
    { value: "40%", label: "Avg. Cost Reduction" },
    { value: "3x", label: "Faster Deployment" },
    { value: "99.99%", label: "Uptime Achieved" },
    { value: "200+", label: "Projects Delivered" },
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO, TechVentures",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        quote: "Emanation transformed our entire cloud infrastructure. The results exceeded all expectations.",
    },
    {
        name: "Marcus Johnson",
        role: "CEO, InnovateCorp",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        quote: "Their AI solutions helped us achieve 300% growth in operational efficiency.",
    },
    {
        name: "Elena Rodriguez",
        role: "Director, FutureScale",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        quote: "World-class team delivering world-class results. Highly recommended.",
    },
];

const caseStudies = [
    {
        title: "AI-Powered Analytics Platform",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
        result: "+450% ROI",
    },
    {
        title: "Global Cloud Migration",
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        result: "99.9% Uptime",
    },
    {
        title: "Enterprise Security Overhaul",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        result: "Zero Breaches",
    },
];

const Index = () => {
    return (
        <Layout>
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80"
                        alt="Futuristic Technology"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
                </div>

                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(hsl(190 95% 50% / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(190 95% 50% / 0.1) 1px, transparent 1px)`,
                            backgroundSize: "100px 100px",
                        }}
                    ></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        ></div>
                    ))}
                </div>

                <div className="container-custom relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-8">
                                — Cloud & AI Infrastructure Experts —
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                                Build Intelligent Infrastructure with{" "}
                                <span className="gradient-text">Cloud & AI</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                Emanation Global helps companies design scalable cloud platforms,
                                automate operations with DevOps, and unlock the power of
                                AI-driven systems.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 glow-blue"
                                    style={{ background: "var(--gradient-blue-purple)" }}
                                >
                                    Schedule a Consultation
                                    <ArrowRight size={18} />
                                </Link>
                                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                                    <Play size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                    Watch Demo
                                </button>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Hero Image Showcase */}
                    <FadeUp delay={0.4}>
                        <div className="mt-16 relative">
                            <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                                    alt="Dashboard Analytics"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -left-4 top-1/4 glass-card rounded-xl p-4 hidden lg:block animate-pulse">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle className="text-green-500" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">99.99% Uptime</p>
                                        <p className="text-xs text-muted-foreground">Last 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-4 top-1/3 glass-card rounded-xl p-4 hidden lg:block animate-pulse" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Brain className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">AI Powered</p>
                                        <p className="text-xs text-muted-foreground">Smart Analytics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 border-y border-border/30 bg-card/30">
                <div className="container-custom">
                    <FadeUp>
                        <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-widest mb-10">
                            Powered by Industry-Leading Technology
                        </p>
                    </FadeUp>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                        {partners.map((p, i) => (
                            <FadeUp key={p.name} delay={i * 0.05}>
                                <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                                    <span className="font-heading font-semibold text-muted-foreground text-lg md:text-xl hover:text-foreground transition-colors duration-300">
                                        {p.name}
                                    </span>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats with Background */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
                        alt="Technology Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-background/80"></div>
                </div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <FadeUp key={s.label} delay={i * 0.1}>
                                <div className="glass-card rounded-2xl p-8 text-center hover-glow">
                                    <p className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                                        {s.value}
                                    </p>
                                    <p className="text-muted-foreground text-sm">{s.label}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services with Images */}
            <section className="section-padding bg-card/20">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                                Our Services
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                End-to-End Cloud & AI Solutions
                            </h2>
                            <p className="text-muted-foreground">
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
                                    className="group glass-card rounded-2xl overflow-hidden hover-glow block h-full"
                                >
                                    {/* Service Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                                <service.icon className="text-primary" size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Service Content */}
                                    <div className="p-6">
                                        <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn More <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80"
                        alt="AI Technology"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-2xl">
                        <FadeUp>
                            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                                Why Emanation Global
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Your Trusted Partner for{" "}
                                <span className="gradient-text">Digital Transformation</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                We combine deep technical expertise with strategic thinking to
                                help enterprises navigate the complexities of cloud
                                infrastructure and AI adoption.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <div className="space-y-4 mb-8">
                                {[
                                    "Certified cloud architects across AWS, Azure & GCP",
                                    "End-to-end delivery from strategy to implementation",
                                    "Proven track record with Fortune 500 enterprises",
                                    "24/7 managed services and dedicated support",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle
                                            className="text-primary mt-0.5 flex-shrink-0"
                                            size={20}
                                        />
                                        <span className="text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            >
                                Learn More About Us <ArrowRight size={18} />
                            </Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                                Case Studies
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                Proven <span className="gradient-text">Results</span>
                            </h2>
                            <p className="text-muted-foreground">
                                Real success stories from industry leaders who transformed their
                                business with us.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <FadeUp key={index} delay={index * 0.1}>
                                <Link
                                    to="/case-studies"
                                    className="group relative overflow-hidden rounded-2xl aspect-[4/5] glass-card block"
                                >
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                                    {/* Result Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                                        <span className="text-primary font-bold text-sm">
                                            {study.result}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-primary text-sm uppercase tracking-wider mb-2 block">
                                            {study.category}
                                        </span>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {study.title}
                                        </h3>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.3}>
                        <div className="text-center mt-12">
                            <Link
                                to="/case-studies"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                            >
                                View All Case Studies
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-card/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

                <div className="container-custom relative z-10">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                                Testimonials
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                Client <span className="gradient-text">Success</span> Stories
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <FadeUp key={index} delay={index * 0.1}>
                                <div className="glass-card rounded-2xl p-8 hover-glow h-full flex flex-col">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-primary text-primary"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-8 leading-relaxed italic flex-grow">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                                        />
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="Team Collaboration"
                                    className="rounded-2xl w-full"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent"></div>
                                {/* Floating Card */}
                                <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <CheckCircle className="text-green-500" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold">200+ Projects</p>
                                            <p className="text-sm text-muted-foreground">
                                                Successfully Delivered
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div>
                                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                                    Our Process
                                </p>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
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
                                    ].map((item) => (
                                        <div
                                            key={item.step}
                                            className="flex gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                                        >
                                            <span className="font-heading font-bold text-primary text-2xl">
                                                {item.step}
                                            </span>
                                            <div>
                                                <h4 className="font-heading font-semibold text-foreground mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-muted-foreground text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* CTA with Background Image */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&q=80"
                        alt="Technology Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
                </div>

                <div className="container-custom relative z-10">
                    <FadeUp>
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                                Ready to Transform Your Infrastructure?
                            </h2>
                            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                                Book a free cloud strategy session with our experts and discover
                                how to accelerate your digital transformation.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    Book a Free Strategy Session
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all duration-300"
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
