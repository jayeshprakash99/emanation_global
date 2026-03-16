import { useParams, Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowLeft, Calendar, Clock, User, Share2, Copy, Check } from "lucide-react";
import Layout from "../components/Layout";
import { useState } from "react";

const articles = [
    {
        title: "The Future of Multi-Cloud Architecture in 2026",
        category: "Cloud Strategy",
        date: "March 10, 2026",
        readTime: "8 min read",
        author: "John Smith",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
        slug: "future-of-multi-cloud-architecture",
        content: `
            <p>Multi-cloud architecture has become the standard for enterprise organizations looking to maximize flexibility, avoid vendor lock-in, and optimize costs. As we move through 2026, several key trends are shaping how businesses approach their multi-cloud strategies.</p>
            
            <h2>The Evolution of Multi-Cloud</h2>
            <p>Organizations are no longer simply spreading workloads across multiple cloud providers. Instead, they're strategically placing applications and data where they perform best, taking advantage of each provider's unique strengths.</p>
            
            <h2>Key Trends to Watch</h2>
            <ul>
                <li><strong>AI-Driven Orchestration:</strong> Machine learning is now being used to automatically optimize workload placement across clouds.</li>
                <li><strong>Edge Integration:</strong> Multi-cloud strategies are extending to edge computing for lower latency applications.</li>
                <li><strong>Unified Security:</strong> Zero-trust security models are being implemented across all cloud environments.</li>
                <li><strong>Cost Optimization:</strong> FinOps practices are maturing to provide real-time cost visibility across providers.</li>
            </ul>
            
            <h2>Implementation Best Practices</h2>
            <p>Successfully implementing a multi-cloud strategy requires careful planning and the right tools. Organizations should focus on standardizing their deployment pipelines, implementing consistent security policies, and establishing clear governance frameworks.</p>
            
            <h2>Conclusion</h2>
            <p>The future of multi-cloud is bright, with new technologies making it easier than ever to manage complex distributed architectures. Organizations that embrace these trends will be well-positioned for success in the digital economy.</p>
        `,
    },
    {
        title: "How AI is Revolutionizing DevOps Practices",
        category: "AI & DevOps",
        date: "March 5, 2026",
        readTime: "6 min read",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
        slug: "ai-revolutionizing-devops",
        content: `
            <p>Artificial Intelligence is transforming every aspect of DevOps, from code development to deployment and monitoring. This revolution is enabling teams to work faster, smarter, and more efficiently than ever before.</p>
            
            <h2>AI in Continuous Integration</h2>
            <p>AI-powered tools are now capable of predicting build failures before they happen, automatically suggesting code fixes, and optimizing test suites for faster feedback cycles.</p>
            
            <h2>Intelligent Monitoring and Observability</h2>
            <p>Machine learning algorithms are being used to detect anomalies in system behavior, predict potential issues, and automatically remediate common problems without human intervention.</p>
            
            <h2>The Future of AIOps</h2>
            <p>As AI capabilities continue to advance, we can expect to see even more sophisticated automation in DevOps workflows, leading to faster delivery times and more reliable systems.</p>
        `,
    },
    {
        title: "Zero Trust Security: A Complete Implementation Guide",
        category: "Security",
        date: "February 28, 2026",
        readTime: "10 min read",
        author: "Michael Brown",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
        slug: "zero-trust-security-guide",
        content: `
            <p>Zero Trust security has moved from buzzword to essential strategy for modern enterprises. This guide provides a comprehensive roadmap for implementing Zero Trust in your organization.</p>
            
            <h2>Understanding Zero Trust Principles</h2>
            <p>The core principle of Zero Trust is simple: never trust, always verify. Every access request must be authenticated, authorized, and encrypted, regardless of where it originates.</p>
            
            <h2>Implementation Steps</h2>
            <ul>
                <li><strong>Identity Verification:</strong> Implement strong multi-factor authentication for all users.</li>
                <li><strong>Micro-segmentation:</strong> Divide your network into small, isolated segments.</li>
                <li><strong>Least Privilege Access:</strong> Grant users only the minimum access they need.</li>
                <li><strong>Continuous Monitoring:</strong> Monitor all network traffic and user behavior.</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Implementing Zero Trust is a journey, not a destination. Start with your most critical assets and gradually expand your Zero Trust architecture across your entire organization.</p>
        `,
    },
    {
        title: "Kubernetes Best Practices for Enterprise Scale",
        category: "Infrastructure",
        date: "February 20, 2026",
        readTime: "7 min read",
        author: "Emily Davis",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
        slug: "kubernetes-best-practices",
        content: `
            <p>Running Kubernetes at enterprise scale requires careful planning and adherence to best practices. This article covers the essential strategies for maintaining reliable, scalable Kubernetes clusters.</p>
            
            <h2>Cluster Architecture</h2>
            <p>Design your cluster architecture with high availability in mind. Use multiple control plane nodes, distribute workloads across availability zones, and implement proper resource quotas.</p>
            
            <h2>Security Hardening</h2>
            <p>Secure your Kubernetes clusters by implementing network policies, using pod security standards, and regularly scanning for vulnerabilities.</p>
            
            <h2>Monitoring and Observability</h2>
            <p>Implement comprehensive monitoring using tools like Prometheus and Grafana. Set up alerts for critical metrics and maintain detailed logs for troubleshooting.</p>
        `,
    },
    {
        title: "Building Scalable Data Pipelines with Modern Tools",
        category: "Data Engineering",
        date: "February 15, 2026",
        readTime: "9 min read",
        author: "David Wilson",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=80",
        slug: "scalable-data-pipelines",
        content: `
            <p>Building robust data pipelines is essential for modern data-driven organizations. This guide explores the tools and techniques for creating scalable, reliable data infrastructure.</p>
            
            <h2>Modern Data Stack</h2>
            <p>The modern data stack includes tools for ingestion, transformation, storage, and analysis. Popular choices include Apache Kafka, dbt, Snowflake, and various visualization tools.</p>
            
            <h2>Best Practices</h2>
            <p>Follow best practices like implementing idempotent operations, using schema evolution strategies, and maintaining comprehensive data lineage documentation.</p>
        `,
    },
    {
        title: "The Rise of AI-Powered Chatbots in Customer Service",
        category: "AI",
        date: "February 10, 2026",
        readTime: "5 min read",
        author: "Lisa Anderson",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&auto=format&fit=crop&q=80",
        slug: "ai-chatbots-customer-service",
        content: `
            <p>AI-powered chatbots are revolutionizing customer service, providing instant support and improving customer satisfaction. Learn how to leverage this technology for your business.</p>
            
            <h2>Benefits of AI Chatbots</h2>
            <p>AI chatbots offer 24/7 availability, instant responses, and the ability to handle multiple conversations simultaneously. They can significantly reduce support costs while improving customer experience.</p>
            
            <h2>Implementation Considerations</h2>
            <p>When implementing AI chatbots, consider factors like natural language understanding capabilities, integration with existing systems, and the ability to escalate to human agents when needed.</p>
        `,
    },
];

const InsightDetail = () => {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;
        const title = article?.title || "Emanation Global Insight";

        // Check if Web Share API is available
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Check out this article: ${title}`,
                    url: url,
                });
            } catch (error) {
                // User cancelled or error occurred, fall back to copy
                copyToClipboard(url);
            }
        } else {
            // Fall back to copying to clipboard
            copyToClipboard(url);
        }
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    if (!article) {
        return (
            <Layout>
                <section className="pt-32 pb-16">
                    <div className="container-custom text-center">
                        <h1 className="font-heading text-4xl font-bold mb-4">Article Not Found</h1>
                        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                        <Link
                            to="/insights"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                        >
                            <ArrowLeft size={18} />
                            Back to Insights
                        </Link>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero */}
            <section className="pt-32 pb-8">
                <div className="container-custom">
                    <FadeUp>
                        <Link
                            to="/insights"
                            className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:gap-3 transition-all"
                            style={{ color: '#518283' }}
                        >
                            <ArrowLeft size={16} />
                            Back to Insights
                        </Link>
                    </FadeUp>

                    <FadeUp delay={0.1}>
                        <span 
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                            style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                        >
                            {article.category}
                        </span>
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 max-w-4xl">
                            {article.title}
                        </h1>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                            <span className="flex items-center gap-2">
                                <User size={16} />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {article.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                {article.readTime}
                            </span>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Featured Image */}
            <section className="pb-8">
                <div className="container-custom">
                    <FadeUp delay={0.3}>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding pt-8">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Main Content */}
                        <FadeUp delay={0.4}>
                            <div className="h-full">
                                <div 
                                    className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#518283] prose-strong:text-gray-900"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                            </div>
                        </FadeUp>

                        {/* Sidebar */}
                        <FadeUp delay={0.5}>
                            <div className="h-full flex flex-col">
                                <div className="sticky top-24">
                                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-semibold text-gray-900 mb-4">Share this article</h4>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleShare}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 transition-all duration-300 ${
                                                    copied 
                                                        ? 'bg-green-50 border-green-300 text-green-600' 
                                                        : 'hover:bg-[#518283] hover:text-white hover:border-[#518283]'
                                                }`}
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check size={18} />
                                                        <span className="text-sm font-medium">Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Share2 size={18} />
                                                        <span className="text-sm font-medium">Share</span>
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(window.location.href)}
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-[#518283] hover:text-white hover:border-[#518283] transition-all duration-300"
                                            >
                                                <Copy size={18} />
                                                <span className="text-sm font-medium">Copy Link</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-light-section rounded-2xl p-6 mb-6">
                                        <h4 className="font-heading font-semibold text-gray-900 mb-2">Need Expert Help?</h4>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Our team can help you implement these strategies.
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
                                            style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>

                                    {/* Related Articles */}
                                    <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                        <h4 className="font-heading font-semibold text-gray-900 mb-4">Related Articles</h4>
                                        <div className="space-y-4">
                                            {articles
                                                .filter((a) => a.slug !== article.slug)
                                                .slice(0, 3)
                                                .map((relatedArticle, index) => (
                                                    <Link
                                                        key={index}
                                                        to={`/insights/${relatedArticle.slug}`}
                                                        className="block group"
                                                    >
                                                        <p className="text-sm font-medium text-gray-900 group-hover:text-[#518283] transition-colors">
                                                            {relatedArticle.title}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">{relatedArticle.date}</p>
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default InsightDetail;