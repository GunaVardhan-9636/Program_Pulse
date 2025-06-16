import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    countryCode: '+91'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-30">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-4">
                🚀 New Batch Starting March 2024
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Master the Art
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                of Coding with
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Program Pulse
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
            >
              From Basics to Breakthroughs
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/book-class">
                <motion.button
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} className="group-hover:animate-pulse" />
                  Book a Live Class
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/explore-programs">
                <motion.button
                  className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Programs
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Industry-vetted curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>1:1 Mentorship</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glassmorphism-card p-8 rounded-3xl">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Book a Live Class, For Free!
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <input
                    type="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </motion.div>

                <Link to="/book-class">
                  <motion.button
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Free
                  </motion.button>
                </Link>

                <motion.p
                  className="text-xs text-gray-500 dark:text-gray-400 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  By signing up, you agree to our Terms and Privacy Policy
                </motion.p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;