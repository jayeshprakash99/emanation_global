import { useState } from "react";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", service: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "", service: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="gradient-text">Extraordinary</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Schedule a free consultation with our cloud and AI experts. We'll discuss your goals and create a roadmap for success.
              </p>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeUp>
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder="Your name"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder="you@company.com"
                        maxLength={255}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                      placeholder="Company name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                    >
                      <option value="">Select a service</option>
                      <option>Cloud Architecture</option>
                      <option>Cloud Migration</option>
                      <option>DevOps & Automation</option>
                      <option>AI & Machine Learning</option>
                      <option>AI Data Engineering</option>
                      <option>Cloud Security</option>
                      <option>AI Chatbots & Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us about your project..."
                      maxLength={2000}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 glow-blue disabled:opacity-50"
                    style={{ background: "var(--gradient-blue-purple)" }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              </FadeUp>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <FadeUp delay={0.1}>
                <div className="glass-card rounded-2xl p-8 hover-glow">
                  <Mail className="text-primary mb-4" size={24} />
                  <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">hello@emanationglobal.com</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="glass-card rounded-2xl p-8 hover-glow">
                  <Phone className="text-primary mb-4" size={24} />
                  <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm">+1 (415) 555-0199</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="glass-card rounded-2xl p-8 hover-glow">
                  <MapPin className="text-primary mb-4" size={24} />
                  <h3 className="font-heading font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">San Francisco, CA<br />United States</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
