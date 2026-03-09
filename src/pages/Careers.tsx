import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

const openings = [
  { title: "Senior Cloud Architect", location: "Remote / San Francisco", type: "Full-time", dept: "Engineering" },
  { title: "DevOps Engineer", location: "Remote / New York", type: "Full-time", dept: "Engineering" },
  { title: "ML Engineer", location: "Remote", type: "Full-time", dept: "AI & Data" },
  { title: "AI Solutions Consultant", location: "Remote / Austin", type: "Full-time", dept: "Consulting" },
  { title: "Cloud Security Engineer", location: "Remote", type: "Full-time", dept: "Security" },
  { title: "Technical Project Manager", location: "Remote / San Francisco", type: "Full-time", dept: "Operations" },
];

const perks = [
  "Fully remote-first culture",
  "Competitive salary & equity",
  "Health, dental & vision insurance",
  "Unlimited PTO",
  "Learning & conference budget",
  "Latest hardware & tools",
];

const Careers = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Careers</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Build the Future of <span className="gradient-text">Cloud & AI</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join a team of world-class engineers and consultants shaping the future of enterprise technology.
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="glass-card rounded-2xl p-8 md:p-10 mb-16">
              <h2 className="font-heading text-2xl font-bold mb-6">Why Emanation Global?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <h2 className="font-heading text-2xl font-bold mb-8">Open Positions</h2>
          </FadeUp>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <FadeUp key={job.title} delay={i * 0.06}>
                <div className="glass-card rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover-glow group">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">{job.dept}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all whitespace-nowrap">
                    Apply <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
