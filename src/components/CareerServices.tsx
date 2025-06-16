import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Briefcase, Users, TrendingUp, Network } from 'lucide-react';

const CareerServices: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Resume Building',
      description: 'Get expert guidance on crafting your perfect resume with ATS-friendly formatting and industry-specific keywords.',
      features: ['Professional templates', 'ATS optimization', 'Industry keywords', 'Personal branding'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation',
      description: 'Practice with mock interviews and expert feedback to ace your technical and behavioral interviews.',
      features: ['Mock interviews', 'Technical assessments', 'Behavioral coaching', 'Feedback sessions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Job Placement',
      description: 'Access to our network of 500+ hiring partners and exclusive job opportunities in top tech companies.',
      features: ['Exclusive job postings', 'Direct referrals', 'Company connections', 'Placement guarantee'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Career Coaching',
      description: '1:1 sessions with industry professionals to guide your career path and strategic decisions.',
      features: ['Personal mentorship', 'Career planning', 'Goal setting', 'Industry insights'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Skill Enhancement',
      description: 'Upskill with advanced coding workshops and certifications to stay ahead in the tech industry.',
      features: ['Advanced workshops', 'Industry certifications', 'Trending technologies', 'Hands-on projects'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'Industry Networking',
      description: 'Access coding events and connect with top professionals to grow your network and opportunities.',
      features: ['Networking events', 'Industry meetups', 'Alumni connections', 'Professional community'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const stats = [
    { number: '95%', label: 'Job Placement Rate', description: 'within 6 months' },
    { number: '$85K', label: 'Average Salary', description: 'for fresh graduates' },
    { number: '500+', label: 'Hiring Partners', description: 'across the globe' },
    { number: '24/7', label: 'Career Support', description: 'throughout your journey' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="career-services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive career support to help you land your dream job and accelerate your tech career
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105">
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 group-hover:shadow-xl transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-800 dark:text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-cyan-500/80"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Accelerate Your Career?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of successful graduates who transformed their careers with our comprehensive support system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Career Consultation
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Success Stories
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerServices;