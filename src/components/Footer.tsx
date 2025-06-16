import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Alumni', href: '#alumni' },
      { name: 'Faculty', href: '#faculty' },
      { name: 'Career Services', href: '#career-services' }
    ],
    'Resources': [
      { name: 'Blog', href: '#blog' },
      { name: 'Events', href: '#events' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Tutorials', href: '#tutorials' },
      { name: 'Webinars', href: '#webinars' }
    ],
    'Support': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Help Center', href: '#help' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Careers', href: '#careers' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Program
              </span>
              <span className="text-3xl font-bold text-white">
                Pulse
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              Empowering the next generation of developers with cutting-edge education and mentorship in programming and technology.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                {category}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              </h3>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 block py-1 hover:translate-x-2"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated with Program Pulse
              </h3>
              <p className="text-gray-300">
                Get the latest updates on new courses, industry insights, and career opportunities
              </p>
            </div>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              />
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-center md:text-left">
            &copy; 2024 Program Pulse. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400 fill-current" />
            </motion.div>
            <span>for developers worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;