import Layout from "../components/Layout";
import { FadeUp } from "../components/AnimationWrappers";
import { CheckCircle, Users, Target, Award, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Innovation First", desc: "We stay at the forefront of cloud and AI technology to deliver cutting-edge solutions." },
  { icon: Users, title: "Client Partnership", desc: "We build long-term relationships, acting as an extension of your team." },
  { icon: Award, title: "Excellence", desc: "Every solution is engineered for performance, security, and scalability." },
  { icon: Globe, title: "Global Reach", desc: "Serving enterprises worldwide with localized expertise and 24/7 support." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Engineering the Future of <span className="gradient-text">Cloud & AI</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Emanation Global is a premier cloud and AI consulting firm helping enterprises modernize their technology infrastructure, automate operations, and build intelligent systems that drive business growth.
              </p>
            </FadeUp>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeUp>
              <div className="glass-card rounded-3xl p-10">
                <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To empower organizations with scalable, intelligent technology solutions that accelerate innovation and create lasting competitive advantage in an AI-driven world.
                </p>
                <div className="space-y-3">
                  {["500+ cloud migrations completed", "100+ enterprise AI deployments", "Partnerships with top cloud providers", "Global team of certified architects"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={18} />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="glass-card rounded-3xl p-10">
                <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted technology partner for enterprises navigating cloud transformation and AI adoption. We envision a future where every organization can harness the full potential of intelligent infrastructure to solve complex challenges and create extraordinary value.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 text-center">Our Values</p>
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">What Drives Us</h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 hover-glow text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
