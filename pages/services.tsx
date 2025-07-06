import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI & Machine Learning',
    description:
      'From NLP to computer vision — we build intelligent systems that evolve with your data and business.',
  },
  {
    title: 'Custom Web & App Development',
    description:
      'Scalable, secure, and modern apps built using the latest tech stacks to empower your digital vision.',
  },
  {
    title: 'System Design & Architecture',
    description:
      'Enterprise-grade architecture that’s robust, maintainable, and built for scale.',
  },
  {
    title: 'Automation & Integration',
    description:
      'Connecting platforms and automating workflows to reduce friction and increase efficiency.',
  },
];

export default function Services() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen px-6 py-16 max-w-6xl mx-auto text-gray-300 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-black to-black z-0 pointer-events-none" />

        {/* Title */}
        <motion.h2
          className="text-4xl font-orbitron text-gold mb-12 text-center z-10 glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 z-10 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/70 backdrop-blur-lg border border-gold/10 hover:border-gold rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gold font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
