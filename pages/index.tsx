import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]">
     

        {/* Gradient Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-black to-black pointer-events-none z-0" />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-orbitron text-gold mb-6 z-10 glow-text"
        >
          Smart Vision. <br /> Bold Innovation.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl z-10"
        >
          Empowering the future with intelligent, scalable technology built with
          purpose.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 z-10"
        >
          <Link href="/services" passHref legacyBehavior>
            <a className="bg-gold text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform">
              Explore Our Solutions
            </a>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
