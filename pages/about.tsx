import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen px-6 py-16 max-w-5xl mx-auto text-gray-300 overflow-hidden">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-black to-black z-0 pointer-events-none" />

        {/* Heading */}
        <motion.h2
          className="text-4xl font-orbitron text-gold mb-10 text-center z-10 glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="mb-8 text-lg relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          At <strong>SVB Innovations Pvt. Ltd.</strong>, we are not just building technology — we’re building the future. Rooted in our belief of{' '}
          <span className="text-gold font-semibold glow-text">Smart Vision Bold</span>, our mission is to create intelligent systems that are scalable, ethical, and purpose-driven.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Mission */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-2xl text-white font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To engineer digital systems that align intelligence with purpose — empowering people, platforms, and possibilities through innovation.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-2xl text-white font-semibold mb-2">Our Philosophy</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong className="text-gold glow-text">Smart</strong> – Intelligently designed systems with ethics & precision.
              </li>
              <li>
                <strong className="text-gold glow-text">Vision</strong> – Bold, future-focused strategies with clarity.
              </li>
              <li>
                <strong className="text-gold glow-text">Build</strong> – Practical, scalable engineering that delivers real value.
              </li>
            </ul>
          </motion.div>

          {/* Why SVB */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-2xl text-white font-semibold mb-2">Why Choose SVB?</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Tech + Purpose in Harmony</li>
              <li>Visionary Strategy with Execution Power</li>
              <li>Future-Ready Systems</li>
              <li>Scalable, Ethical AI Solutions</li>
              <li>India-Rooted, Globally Driven</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
