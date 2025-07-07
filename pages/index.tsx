import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/bg-video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional: Overlay for darkening video */}
  <div className="absolute inset-0 bg-black/60 z-0" />

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

  {/* CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.4, duration: 0.8 }}
    className="mt-10 z-10 space-y-4"
  >
    <Link href="/services" passHref legacyBehavior>
      <a className="bg-gold text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform">
        Explore Our Solutions
      </a>
    </Link>
    <br />
    <Link href="/contact" passHref legacyBehavior>
      <a className="bg-gold text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform">
        Contact Us
      </a>
    </Link>
    <br />
    <Link href="/about" passHref legacyBehavior>
      <a className="bg-gold text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform">
        Learn More
      </a>
    </Link>
    <br />
    <Link href="/team" passHref legacyBehavior>
      <a className="bg-gold text-black px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform">
        View Our Team
      </a>
    </Link>
  </motion.div>
</main>
      <Footer />
    </div>
  );
}