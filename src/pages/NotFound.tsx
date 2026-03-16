import { Link } from "react-router-dom";
import { FadeUp } from "../components/AnimationWrappers";
import { ArrowRight, Home } from "lucide-react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-white min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <FadeUp>
            <h1 className="font-heading text-8xl md:text-9xl font-bold mb-4 gradient-text">
              404
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #518283, #9AA365)' }}
              >
                <Home size={18} />
                Go Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold border-2 transition-all duration-300"
                style={{ borderColor: '#518283', color: '#518283' }}
              >
                Contact Support
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
