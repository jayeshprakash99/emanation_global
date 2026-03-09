import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { Building2, Heart, Layers, ShoppingCart, Truck, ArrowRight } from "lucide-react";

const industries = [
  { icon: Building2, title: "FinTech", desc: "Secure, compliant cloud infrastructure and AI-powered fraud detection for financial services. We help fintechs scale while meeting SOC2, PCI-DSS, and regulatory requirements.", highlights: ["Real-time fraud detection", "Regulatory compliance automation", "High-frequency trading infrastructure"] },
  { icon: Heart, title: "Healthcare", desc: "HIPAA-compliant cloud platforms and AI diagnostics solutions for healthcare organizations. Enabling telemedicine, patient analytics, and clinical decision support.", highlights: ["HIPAA-compliant infrastructure", "AI-powered diagnostics", "EHR system integration"] },
  { icon: Layers, title: "SaaS Platforms", desc: "Scalable multi-tenant architectures and DevOps automation for SaaS companies. We help platforms handle millions of users with zero downtime.", highlights: ["Multi-tenant architecture", "Auto-scaling infrastructure", "CI/CD pipeline automation"] },
  { icon: ShoppingCart, title: "Retail & E-Commerce", desc: "AI-driven personalization engines and cloud-native commerce platforms. Powering recommendations, inventory optimization, and omnichannel experiences.", highlights: ["AI recommendation engines", "Real-time inventory management", "Omnichannel platforms"] },
  { icon: Truck, title: "Logistics & Supply Chain", desc: "IoT-enabled supply chain visibility and AI route optimization. Building the intelligent logistics infrastructure of the future.", highlights: ["Route optimization AI", "IoT sensor integration", "Predictive demand forecasting"] },
];

const Industries = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Industries</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Industry-Specific <span className="gradient-text">Cloud & AI</span> Solutions
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We bring deep domain expertise to every industry we serve, delivering solutions tailored to your unique challenges and compliance requirements.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-8">
            {industries.map((ind, i) => (
              <FadeUp key={ind.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 md:p-10 hover-glow">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ind.icon className="text-primary" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading font-bold text-2xl text-foreground mb-3">{ind.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-5">{ind.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {ind.highlights.map((h) => (
                          <span key={h} className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-primary text-sm">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-20 rounded-3xl p-12 md:p-16 text-center" style={{ background: "var(--gradient-blue-purple)" }}>
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Don't See Your Industry?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Our expertise extends across all sectors. Let's discuss how we can tailor solutions for your specific needs.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
