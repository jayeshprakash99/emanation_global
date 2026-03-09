import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-sm">E</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Emanation<span className="gradient-text"> Global</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building intelligent infrastructure with cloud computing, DevOps automation, and artificial intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Cloud Architecture", "Cloud Migration", "DevOps & Automation", "AI & Machine Learning", "AI Data Engineering", "Cloud Security", "AI Chatbots"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", path: "/about" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Insights", path: "/insights" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-muted-foreground text-sm mb-4">Ready to transform your infrastructure?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg font-medium text-sm text-primary-foreground transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--gradient-blue-purple)" }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Emanation Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
