import { FadeUp } from "../components/AnimationWrappers";
import { Mail } from "lucide-react";
import Layout from "../components/Layout";

const Contact = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-light-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Contact Us
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Let's <span className="gradient-text">Connect</span>
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Ready to transform your infrastructure? Get in touch with our team of experts.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <FadeUp>
                            <div className="text-center">
                                <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 mb-12">
                                    Have a question or want to discuss your project? We'd love to hear from you.
                                </p>

                                {/* Email Card */}
                                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-8">
                                    <div className="flex flex-col items-center gap-4">
                                        <div 
                                            className="w-16 h-16 rounded-xl flex items-center justify-center"
                                            style={{ background: 'rgba(81, 130, 131, 0.1)' }}
                                        >
                                            <Mail size={32} style={{ color: '#518283' }} />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-heading font-semibold text-gray-900 mb-2 text-lg">Email Us</h4>
                                            <a 
                                                href="mailto:business@emanationglobal.com" 
                                                className="text-xl font-medium hover:opacity-80 transition-colors"
                                                style={{ color: '#518283' }}
                                            >
                                                business@emanationglobal.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="p-8 rounded-2xl" style={{ background: 'rgba(154, 163, 101, 0.1)' }}>
                                    <h4 className="font-heading font-semibold text-gray-900 mb-3 text-lg">Office Hours</h4>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM (EST)<br />
                                        Weekend: By appointment only
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
