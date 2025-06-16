import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Brain, Award, Briefcase, Network } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description: 'Industry-vetted curriculum designed by experts with hands-on projects and real-world applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Live Classes',
      description: 'Learn from industry experts with real experience through interactive live sessions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Enhanced learning with AI-driven insights, personalized recommendations, and adaptive pathways.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Award,
      title: '1:1 Mentorship',
      description: 'Personal guidance from industry veterans with dedicated mentoring sessions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Comprehensive career assistance via dedicated recruitment team and alumni network.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'Aspirational Peer Group',
      description: 'Join a community of 2,000+ motivated students and successful alumni worldwide.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

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
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-gray-800/50 dark:to-blue-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="text-gray-800 dark:text-white"> Program Pulse?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience world-class education with cutting-edge technology and personalized mentorship
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:via-cyan-500/5 group-hover:to-purple-600/5 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '2000+', label: 'Students' },
            { number: '95%', label: 'Job Placement' },
            { number: '50+', label: 'Industry Partners' },
            { number: '4.9/5', label: 'Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;