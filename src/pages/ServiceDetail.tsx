import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { Cloud, Server, GitBranch, Brain, Database, Shield, Bot, ArrowRight, CheckCircle, Zap, BarChart3, Layers } from "lucide-react";

const serviceData: Record<string, {
  icon: any; title: string; headline: string; overview: string;
  benefits: string[]; capabilities: string[]; process: { step: string; title: string; desc: string }[];
  techStack: string[]; industries: string[]; faqs: { q: string; a: string }[];
}> = {
  "cloud-architecture": {
    icon: Cloud, title: "Cloud Architecture", headline: "Design Scalable Cloud Platforms Built for Growth",
    overview: "Our cloud architecture consulting services help enterprises design and implement scalable, resilient, and cost-optimized cloud platforms on AWS, Azure, or Google Cloud.",
    benefits: ["Reduce infrastructure costs by up to 40%", "Achieve 99.99% uptime with resilient architectures", "Scale seamlessly to handle millions of users", "Accelerate time-to-market for new features"],
    capabilities: ["Multi-cloud & hybrid cloud design", "Microservices architecture", "Serverless computing platforms", "Container orchestration with Kubernetes", "Infrastructure as Code (Terraform, CloudFormation)"],
    process: [
      { step: "01", title: "Assessment", desc: "Deep analysis of current infrastructure and requirements." },
      { step: "02", title: "Design", desc: "Blueprint architecture with security, scalability, and cost optimization." },
      { step: "03", title: "Build", desc: "Implement using IaC and CI/CD best practices." },
      { step: "04", title: "Optimize", desc: "Continuous monitoring and performance tuning." },
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
    industries: ["FinTech", "Healthcare", "SaaS", "Retail", "Logistics"],
    faqs: [
      { q: "What cloud platforms do you support?", a: "We architect solutions on AWS, Microsoft Azure, and Google Cloud Platform, including multi-cloud and hybrid deployments." },
      { q: "How long does a cloud architecture project take?", a: "Typical projects range from 4-12 weeks depending on complexity, from initial assessment to production deployment." },
      { q: "Do you provide ongoing support?", a: "Yes, we offer 24/7 managed services and dedicated support for all architectures we design and deploy." },
    ],
  },
  "cloud-migration": {
    icon: Server, title: "Cloud Migration", headline: "Seamless Cloud Migration with Zero Downtime",
    overview: "Our cloud migration services help enterprises move workloads to the cloud with minimal risk and maximum performance. We handle the complete lifecycle from assessment to optimization.",
    benefits: ["Zero-downtime migration strategies", "30-50% reduction in infrastructure costs", "Improved application performance", "Enhanced disaster recovery capabilities"],
    capabilities: ["Lift-and-shift migrations", "Application re-platforming", "Database migration & modernization", "Hybrid cloud integration", "Legacy system transformation"],
    process: [
      { step: "01", title: "Discovery", desc: "Inventory and assess all workloads for cloud readiness." },
      { step: "02", title: "Planning", desc: "Create detailed migration roadmap with risk mitigation." },
      { step: "03", title: "Migration", desc: "Execute phased migration with automated tooling." },
      { step: "04", title: "Optimization", desc: "Right-size resources and optimize for cost and performance." },
    ],
    techStack: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Terraform", "Ansible"],
    industries: ["FinTech", "Healthcare", "SaaS", "Retail", "Logistics"],
    faqs: [
      { q: "Will there be downtime during migration?", a: "We specialize in zero-downtime migrations using blue-green deployment strategies and gradual traffic shifting." },
      { q: "How do you handle data migration?", a: "We use automated replication tools with validation checks to ensure data integrity throughout the migration process." },
    ],
  },
  "devops-automation": {
    icon: GitBranch, title: "DevOps & Automation", headline: "Accelerate Delivery with DevOps Excellence",
    overview: "Transform your software delivery pipeline with CI/CD automation, Infrastructure as Code, and DevOps best practices that reduce deployment time and improve reliability.",
    benefits: ["3x faster deployment frequency", "90% reduction in deployment failures", "Automated security and compliance checks", "Improved developer productivity"],
    capabilities: ["CI/CD pipeline design", "Infrastructure as Code", "GitOps workflows", "Monitoring & observability", "Incident response automation"],
    process: [
      { step: "01", title: "Assess", desc: "Evaluate current DevOps maturity and identify gaps." },
      { step: "02", title: "Design", desc: "Architect automated pipelines and workflows." },
      { step: "03", title: "Implement", desc: "Build and deploy CI/CD, IaC, and monitoring." },
      { step: "04", title: "Evolve", desc: "Continuously improve processes and tooling." },
    ],
    techStack: ["GitHub Actions", "GitLab CI", "Jenkins", "Terraform", "Kubernetes", "ArgoCD", "Prometheus"],
    industries: ["FinTech", "SaaS", "Healthcare", "Retail"],
    faqs: [
      { q: "What CI/CD tools do you work with?", a: "We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, and cloud-native solutions like AWS CodePipeline." },
    ],
  },
  "ai-machine-learning": {
    icon: Brain, title: "AI & Machine Learning", headline: "Unlock Intelligent Decision-Making with AI",
    overview: "Build custom machine learning models and AI solutions that turn your data into actionable intelligence, automate complex processes, and create competitive advantage.",
    benefits: ["Data-driven decision making at scale", "Automated pattern recognition and prediction", "Reduced manual processing by up to 80%", "New revenue streams from AI-powered products"],
    capabilities: ["Custom ML model development", "Natural Language Processing", "Computer Vision", "Predictive analytics", "MLOps & model deployment"],
    process: [
      { step: "01", title: "Data Assessment", desc: "Evaluate data quality, availability, and AI readiness." },
      { step: "02", title: "Model Development", desc: "Build and train custom models for your use case." },
      { step: "03", title: "Deployment", desc: "Production deployment with MLOps pipelines." },
      { step: "04", title: "Monitor", desc: "Continuous model monitoring and retraining." },
    ],
    techStack: ["TensorFlow", "PyTorch", "OpenAI", "AWS SageMaker", "Azure ML", "Vertex AI"],
    industries: ["FinTech", "Healthcare", "SaaS", "Retail", "Logistics"],
    faqs: [
      { q: "Do we need a large dataset to get started?", a: "Not necessarily. We can work with smaller datasets using transfer learning and pre-trained models to deliver results quickly." },
    ],
  },
  "ai-data-engineering": {
    icon: Database, title: "AI Data Engineering", headline: "Build Robust Data Pipelines at Scale",
    overview: "Design and implement enterprise-grade data pipelines, data lakes, and analytics platforms that power your AI and business intelligence initiatives.",
    benefits: ["Real-time data processing capabilities", "Unified data platform across the organization", "Self-service analytics for business teams", "AI-ready data infrastructure"],
    capabilities: ["Data lake & warehouse design", "ETL/ELT pipeline development", "Real-time streaming platforms", "Data governance & quality", "Analytics & BI platforms"],
    process: [
      { step: "01", title: "Audit", desc: "Assess current data landscape and requirements." },
      { step: "02", title: "Architect", desc: "Design scalable data platform architecture." },
      { step: "03", title: "Build", desc: "Implement pipelines and data infrastructure." },
      { step: "04", title: "Govern", desc: "Establish data quality and governance frameworks." },
    ],
    techStack: ["Apache Spark", "Kafka", "Snowflake", "dbt", "Airflow", "AWS Glue"],
    industries: ["FinTech", "Healthcare", "Retail", "Logistics"],
    faqs: [
      { q: "Can you integrate with our existing data tools?", a: "Yes, we design solutions that integrate with your existing data ecosystem while modernizing where needed." },
    ],
  },
  "cloud-security": {
    icon: Shield, title: "Cloud Security", headline: "Protect Your Cloud Infrastructure",
    overview: "Implement comprehensive cloud security with zero-trust frameworks, compliance automation, and advanced threat detection to protect your critical assets and data.",
    benefits: ["Zero-trust security architecture", "Automated compliance (SOC2, HIPAA, PCI)", "Real-time threat detection & response", "Reduced security incident response time by 70%"],
    capabilities: ["Zero-trust architecture design", "Identity & access management", "Security monitoring & SIEM", "Compliance automation", "Penetration testing & audits"],
    process: [
      { step: "01", title: "Assessment", desc: "Comprehensive security audit and risk analysis." },
      { step: "02", title: "Design", desc: "Architect zero-trust security framework." },
      { step: "03", title: "Implement", desc: "Deploy security controls and monitoring." },
      { step: "04", title: "Monitor", desc: "Continuous threat detection and response." },
    ],
    techStack: ["AWS Security Hub", "Azure Sentinel", "HashiCorp Vault", "Prisma Cloud", "CrowdStrike"],
    industries: ["FinTech", "Healthcare", "SaaS", "Retail"],
    faqs: [
      { q: "Do you help with compliance certifications?", a: "Yes, we help organizations achieve and maintain SOC2, HIPAA, PCI-DSS, and other compliance certifications." },
    ],
  },
  "ai-chatbots": {
    icon: Bot, title: "AI Chatbots & Intelligent Automation", headline: "Deploy Intelligent Conversational AI",
    overview: "Build and deploy AI-powered chatbots and intelligent automation solutions that enhance customer experience, streamline operations, and reduce costs.",
    benefits: ["24/7 automated customer support", "60% reduction in support ticket volume", "Personalized user experiences at scale", "Seamless integration with existing systems"],
    capabilities: ["Custom chatbot development", "Conversational AI platforms", "Process automation (RPA)", "Sentiment analysis", "Multi-channel deployment"],
    process: [
      { step: "01", title: "Define", desc: "Identify automation opportunities and use cases." },
      { step: "02", title: "Design", desc: "Design conversation flows and AI logic." },
      { step: "03", title: "Build", desc: "Develop and train the AI system." },
      { step: "04", title: "Launch", desc: "Deploy, monitor, and continuously improve." },
    ],
    techStack: ["OpenAI", "LangChain", "Dialogflow", "Azure Bot Service", "Rasa"],
    industries: ["FinTech", "Healthcare", "SaaS", "Retail"],
    faqs: [
      { q: "Can chatbots integrate with our CRM?", a: "Yes, we build integrations with Salesforce, HubSpot, Zendesk, and other CRM/support platforms." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeUp>
            <Link to="/services" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={28} />
              </div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest">{service.title}</p>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 max-w-3xl">{service.headline}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{service.overview}</p>
          </FadeUp>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card/20">
        <div className="container-custom">
          <FadeUp>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">Business Benefits</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <FadeUp key={b} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-6 flex items-start gap-3 hover-glow">
                  <Zap className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground">{b}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeUp>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Technical Capabilities</h2>
                <div className="space-y-3">
                  {service.capabilities.map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      <span className="text-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((p) => (
                    <div key={p.step} className="flex gap-4">
                      <span className="font-heading font-bold text-primary/40 text-xl">{p.step}</span>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">{p.title}</h4>
                        <p className="text-muted-foreground text-sm">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Tech Stack & Industries */}
      <section className="py-16 bg-card/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeUp>
              <h3 className="font-heading text-xl font-bold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-lg glass-card text-sm text-foreground font-medium">{t}</span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="font-heading text-xl font-bold mb-4">Industries Served</h3>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((ind) => (
                  <span key={ind} className="px-4 py-2 rounded-lg glass-card text-sm text-foreground font-medium">{ind}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FadeUp>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">Frequently Asked Questions</h2>
          </FadeUp>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-6">
                  <h4 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeUp>
            <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: "var(--gradient-blue-purple)" }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                Talk to our {service.title.toLowerCase()} experts and discover how we can help transform your business.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                Talk to an Expert <ArrowRight size={18} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
