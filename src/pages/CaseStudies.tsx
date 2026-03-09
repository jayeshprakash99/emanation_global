import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, TrendingDown, Zap, Clock } from "lucide-react";

const caseStudies = [
  {
    title: "FinTech Cloud Migration",
    client: "Leading Digital Banking Platform",
    challenge: "Legacy on-premise infrastructure was limiting scale and costing $2M+ annually in maintenance. The platform needed to support 10x user growth.",
    solution: "Migrated 200+ microservices to AWS with Kubernetes orchestration, implemented auto-scaling, and built CI/CD pipelines for continuous deployment.",
    technologies: ["AWS", "Kubernetes", "Terraform", "GitHub Actions", "PostgreSQL"],
    results: [
      { icon: TrendingDown, value: "40%", label: "Infrastructure cost reduction" },
      { icon: Zap, value: "3x", label: "Faster deployment speed" },
      { icon: Clock, value: "99.99%", label: "Uptime achieved" },
    ],
  },
  {
    title: "Healthcare AI Diagnostics",
    client: "National Healthcare Network",
    challenge: "Physicians spent 30% of their time on administrative tasks. Diagnostic accuracy varied across locations, and patient data was siloed across systems.",
    solution: "Built an AI-powered diagnostic support system with NLP for clinical notes, integrated with existing EHR systems, and deployed on HIPAA-compliant cloud infrastructure.",
    technologies: ["Google Cloud", "TensorFlow", "FHIR API", "Kubernetes", "BigQuery"],
    results: [
      { icon: Zap, value: "85%", label: "Diagnostic accuracy improvement" },
      { icon: TrendingDown, value: "60%", label: "Reduction in admin time" },
      { icon: Clock, value: "2M+", label: "Patient records unified" },
    ],
  },
  {
    title: "SaaS DevOps Transformation",
    client: "B2B SaaS Platform (Series C)",
    challenge: "Monthly release cycles were causing customer churn. Manual deployments led to frequent outages and the engineering team was spending 40% of time on ops.",
    solution: "Implemented GitOps-based CI/CD, Infrastructure as Code with Terraform, automated testing, and observability stack with Prometheus and Grafana.",
    technologies: ["GitLab CI", "Terraform", "ArgoCD", "Prometheus", "Grafana"],
    results: [
      { icon: Zap, value: "50x", label: "Deployment frequency increase" },
      { icon: TrendingDown, value: "95%", label: "Reduction in incidents" },
      { icon: Clock, value: "40%", label: "Engineering time reclaimed" },
    ],
  },
  {
    title: "Retail AI Personalization",
    client: "Global E-Commerce Brand",
    challenge: "Generic product recommendations were leading to low conversion rates. The existing recommendation engine couldn't handle real-time personalization at scale.",
    solution: "Developed a real-time AI recommendation engine using collaborative filtering and deep learning, deployed on a serverless architecture for cost efficiency.",
    technologies: ["AWS SageMaker", "Lambda", "DynamoDB", "OpenAI", "CloudFront"],
    results: [
      { icon: Zap, value: "35%", label: "Increase in conversion rate" },
      { icon: TrendingDown, value: "25%", label: "Reduction in cart abandonment" },
      { icon: Clock, value: "$12M", label: "Additional annual revenue" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Case Studies</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Real Results, <span className="gradient-text">Real Impact</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                See how we've helped enterprises transform their infrastructure and unlock the power of AI.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.title} delay={i * 0.1}>
                <div className="glass-card rounded-3xl p-8 md:p-12 hover-glow">
                  <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">{cs.client}</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">{cs.title}</h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">The Challenge</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">Our Solution</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {cs.results.map((r) => (
                      <div key={r.label} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">{r.value}</p>
                        <p className="text-muted-foreground text-xs mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-20 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground glow-blue transition-all duration-300 hover:opacity-90" style={{ background: "var(--gradient-blue-purple)" }}>
                Start Your Success Story <ArrowRight size={18} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
