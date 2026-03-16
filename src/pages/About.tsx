import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, CheckCircle, Users, Target, Award, Globe } from "lucide-react";
import Layout from "../components/Layout";

const values = [
    {
        icon: Target,
        title: "Innovation First",
        desc: "We embrace cutting-edge technologies to deliver forward-thinking solutions.",
    },
    {
        icon: Users,
        title: "Client Partnership",
        desc: "Your success is our success. We build lasting relationships based on trust.",
    },
    {
        icon: Award,
        title: "Excellence",
        desc: "We maintain the highest standards in every project we undertake.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Serving enterprises worldwide with local expertise and global capabilities.",
    },
];

const About = () => {
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
                                About Us
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Pioneering the Future of{" "}
                                <span className="gradient-text whitespace-nowrap">Cloud & AI</span>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                For over a decade, Emanation Global has been at the forefront of digital 
                                transformation, helping enterprises harness the power of cloud computing 
                                and artificial intelligence.
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-teal-light-section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeUp>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80"
                                    alt="Modern Office"
                                    className="rounded-2xl w-full shadow-xl"
                                />
                                <div 
                                    className="absolute -bottom-6 -right-6 rounded-2xl p-6 hidden md:block"
                                    style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                                >
                                    <p className="text-white font-heading font-bold text-2xl">10+</p>
                                    <p className="text-white/80 text-sm">Years of Excellence</p>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#9AA365' }}>
                                    Our Mission
                                </p>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                    Empowering Enterprises Through Technology
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    We believe that every organization deserves access to world-class 
                                    technology solutions. Our mission is to democratize cloud and AI 
                                    capabilities, making them accessible, scalable, and impactful.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Transform complex challenges into elegant solutions",
                                        "Build long-term partnerships based on trust and results",
                                        "Stay ahead of technology trends to deliver innovation",
                                        "Create measurable business value for every client",
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle
                                                className="mt-0.5 flex-shrink-0"
                                                size={20}
                                                style={{ color: '#518283' }}
                                            />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Our Values
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                What <span className="gradient-text">Drives</span> Us
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <FadeUp key={value.title} delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-[#518283]/30 hover:shadow-xl hover:shadow-[#518283]/10 transition-all duration-300 h-full">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                        style={{ background: index % 2 === 0 ? 'rgba(81, 130, 131, 0.1)' : 'rgba(154, 163, 101, 0.1)' }}
                                    >
                                        <value.icon size={28} style={{ color: index % 2 === 0 ? '#518283' : '#9AA365' }} />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.desc}
                                    </p>
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
                                Ready to Work Together?
                            </h2>
                            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                                Let's discuss how we can help transform your business with cloud and AI solutions.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-white gap-2 px-8 py-4 rounded-xl font-heading font-semibold"
                            >
                                Get in Touch
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
};

export default About;
