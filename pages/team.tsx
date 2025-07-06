import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Shravan M S',
    title: 'Co-Founder | Product & Innovation Architect',
    quote: 'Innovation is not magic — it’s intentional engineering.',
  },
  {
    name: 'Vinod M',
    title: 'Co-Founder | AI Engineer & Vision Strategist',
    quote: 'Vision without intelligence is noise. I build with purpose.',
  },
  {
    name: 'Babu M',
    title: 'Co-Founder | Systems Lead & Tech Operations',
    quote: 'Smart systems don’t just work — they endure.',
  },
];

export default function Team() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen px-6 py-16 max-w-6xl mx-auto text-gray-300 overflow-hidden">
        {/* Glowing Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-black to-black z-0 pointer-events-none" />

        {/* Title */}
        <motion.h2
          className="text-4xl font-orbitron text-gold mb-12 text-center z-10 glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet the Founders
        </motion.h2>

        {/* Team Cards */}
        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-black/70 backdrop-blur-lg border border-gold/10 hover:border-gold rounded-xl p-6 text-center shadow-lg hover:shadow-yellow-400/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-gold glow-text font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{member.title}</p>
              <blockquote className="italic text-sm text-gray-300">“{member.quote}”</blockquote>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
