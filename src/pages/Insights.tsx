import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Layout from "../components/Layout";

const articles = [
    {
        title: "The Future of Multi-Cloud Architecture in 2026",
        category: "Cloud Strategy",
        date: "March 10, 2026",
        readTime: "8 min read",
        author: "John Smith",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        slug: "future-of-multi-cloud-architecture",
        excerpt: "Explore how multi-cloud strategies are evolving and what enterprises need to know to stay competitive.",
    },
    {
        title: "How AI is Revolutionizing DevOps Practices",
        category: "AI & DevOps",
        date: "March 5, 2026",
        readTime: "6 min read",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
        slug: "ai-revolutionizing-devops",
        excerpt: "Discover how artificial intelligence is transforming the way teams approach DevOps and automation.",
    },
    {
        title: "Zero Trust Security: A Complete Implementation Guide",
        category: "Security",
        date: "February 28, 2026",
        readTime: "10 min read",
        author: "Michael Brown",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
        slug: "zero-trust-security-guide",
        excerpt: "A comprehensive guide to implementing zero trust security architecture in your organization.",
    },
    {
        title: "Kubernetes Best Practices for Enterprise Scale",
        category: "Infrastructure",
        date: "February 20, 2026",
        readTime: "7 min read",
        author: "Emily Davis",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80",
        slug: "kubernetes-best-practices",
        excerpt: "Learn the best practices for running Kubernetes at enterprise scale with high availability.",
    },
    {
        title: "Building Scalable Data Pipelines with Modern Tools",
        category: "Data Engineering",
        date: "February 15, 2026",
        readTime: "9 min read",
        author: "David Wilson",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=80",
        slug: "scalable-data-pipelines",
        excerpt: "A deep dive into building robust and scalable data pipelines using modern data engineering tools.",
    },
    {
        title: "The Rise of AI-Powered Chatbots in Customer Service",
        category: "AI",
        date: "February 10, 2026",
        readTime: "5 min read",
        author: "Lisa Anderson",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
        slug: "ai-chatbots-customer-service",
        excerpt: "How AI chatbots are transforming customer service and improving user experience.",
    },
];

const categories = ["All", "Cloud Strategy", "AI & DevOps", "Security", "Infrastructure", "Data Engineering", "AI"];

const Insights = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-light-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#518283' }}>
                                Insights & Resources
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                                Latest <span className="gradient-text">Articles</span> & Trends
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Stay updated with the latest insights on cloud computing, AI, DevOps, and digital transformation.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <FadeUp>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        index === 0
                                            ? "text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                    style={index === 0 ? { background: 'linear-gradient(135deg, #518283, #9AA365)' } : {}}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
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
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3 group-hover:text-[#518283] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-sm text-gray-500">
                                                <User size={14} />
                                                {article.author}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#518283' }}>
                                                Read More <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding bg-teal-section">
                <div className="container-custom">
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-white/80 mb-8">
                                Get the latest insights on cloud, AI, and digital transformation delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                                />
                                <button 
                                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                                    style={{ background: '#9AA365', color: 'white' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </Layout>
    );
};

export default Insights;
