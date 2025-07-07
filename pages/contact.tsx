import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen px-6 py-16 max-w-5xl mx-auto text-gray-300 overflow-hidden" style={{backgroundImage  : 'url(/bg.png)', backgroundSize: 'cover'}}>
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-black to-black z-0 pointer-events-none" />

        {/* Heading */}
        <motion.h2
          className="text-4xl font-orbitron text-gold mb-10 text-center z-10 glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="bg-black/70 backdrop-blur-lg p-8 rounded-xl space-y-6 shadow-lg border border-gold/10 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block mb-2 text-sm text-gold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-black text-white border border-gray-700 rounded focus:outline-none focus:border-gold"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-black text-white border border-gray-700 rounded focus:outline-none focus:border-gold"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gold" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 bg-black text-white border border-gray-700 rounded focus:outline-none focus:border-gold"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gold text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-yellow-400/60 hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </motion.form>

        {/* Alt Contact Info */}
        <div className="mt-12 text-sm text-center text-gray-500 z-10 relative">
          You can also reach us at: <br />
          <span className="text-white font-medium">contact@svbinnovations.com</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
