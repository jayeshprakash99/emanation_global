import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { Cloud, Server, GitBranch, Brain, Database, Shield, Bot, ArrowRight } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Architecture", desc: "Design and implement scalable, resilient, and cost-optimized cloud architectures on AWS, Azure, or Google Cloud. Our certified architects build platforms that grow with your business.", slug: "cloud-architecture", keywords: "cloud architecture consulting" },
  { icon: Server, title: "Cloud Migration", desc: "Seamlessly migrate your workloads to the cloud with minimal disruption. We handle assessment, planning, execution, and optimization for a smooth transition.", slug: "cloud-migration", keywords: "cloud migration services" },
  { icon: GitBranch, title: "DevOps & Automation", desc: "Accelerate your software delivery with CI/CD pipelines, Infrastructure as Code, and automated workflows that reduce time-to-market and improve reliability.", slug: "devops-automation", keywords: "devops consulting services" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Build custom ML models, computer vision systems, and NLP solutions that turn your data into actionable intelligence and competitive advantage.", slug: "ai-machine-learning", keywords: "ai machine learning consulting" },
  { icon: Database, title: "AI Data Engineering", desc: "Design and build robust data pipelines, lakes, and warehouses that power your analytics and AI initiatives at enterprise scale.", slug: "ai-data-engineering", keywords: "ai data engineering services" },
  { icon: Shield, title: "Cloud Security", desc: "Implement zero-trust security frameworks, compliance automation, and threat detection systems to protect your cloud infrastructure.", slug: "cloud-security", keywords: "cloud security services" },
  { icon: Bot, title: "AI Chatbots & Intelligent Automation", desc: "Deploy conversational AI assistants and intelligent process automation that enhance customer experience and streamline operations.", slug: "ai-chatbots", keywords: "ai chatbot development company" },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                End-to-End <span className="gradient-text">Cloud & AI</span> Solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From cloud architecture design to AI-powered intelligent automation, we provide the full spectrum of services to modernize your technology stack.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-6">
            {services.map((service, i) => (
              <FadeUp key={service.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 hover-glow block"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
