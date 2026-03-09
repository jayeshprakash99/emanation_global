import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "The Complete Cloud Migration Checklist for 2025",
    excerpt: "A step-by-step guide to planning and executing a successful cloud migration, from assessment to optimization.",
    category: "Cloud Migration",
    date: "Mar 5, 2026",
    slug: "cloud-migration-checklist",
  },
  {
    title: "Future of AI Infrastructure: Trends Shaping Enterprise AI",
    excerpt: "Explore the key trends in AI infrastructure, from MLOps platforms to edge AI and the rise of foundation models.",
    category: "AI & ML",
    date: "Feb 20, 2026",
    slug: "future-ai-infrastructure",
  },
  {
    title: "DevOps Automation Best Practices for Enterprise Teams",
    excerpt: "How leading engineering teams are implementing DevOps automation to achieve 100x deployment frequency.",
    category: "DevOps",
    date: "Feb 10, 2026",
    slug: "devops-automation-best-practices",
  },
  {
    title: "AI Chatbots for Customer Support: A Complete Guide",
    excerpt: "How AI-powered chatbots are transforming customer support with 24/7 availability and personalized interactions.",
    category: "AI Chatbots",
    date: "Jan 28, 2026",
    slug: "ai-chatbots-customer-support",
  },
  {
    title: "Cloud Security Frameworks: Building a Zero-Trust Architecture",
    excerpt: "A comprehensive guide to implementing zero-trust security in cloud environments for enterprise organizations.",
    category: "Cloud Security",
    date: "Jan 15, 2026",
    slug: "cloud-security-frameworks",
  },
];

const Insights = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Insights</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Latest in <span className="gradient-text">Cloud & AI</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Expert insights, best practices, and thought leadership from our team of cloud and AI specialists.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.08}>
                <article className="glass-card rounded-2xl overflow-hidden hover-glow group h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-primary/20">{post.category.charAt(0)}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{post.category}</span>
                    <h2 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
