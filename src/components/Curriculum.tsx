import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Curriculum: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const navigate = useNavigate();

  const levels = [
    {
      id: 'beginner',
      icon: '🌱',
      title: 'Beginner',
      duration: '11.5 Months',
      description: 'Perfect for those starting their coding journey with comprehensive fundamentals',
      features: [
        'Programming Fundamentals',
        'Web Development Basics',
        'Data Structures & Algorithms',
        'Version Control (Git)',
        'Basic Database Concepts'
      ],
      price: '$299',
      popular: false,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'intermediate',
      icon: '⚡',
      title: 'Intermediate',
      duration: '11.5 Months',
      description: 'For developers ready to level up with advanced concepts and frameworks',
      features: [
        'Advanced Programming Concepts',
        'System Design Basics',
        'Backend Development',
        'API Development & Integration',
        'Cloud Computing Fundamentals'
      ],
      price: '$399',
      popular: true,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'advanced',
      icon: '🚀',
      title: 'Advanced',
      duration: '9.5 Months',
      description: 'Master advanced concepts and become a senior-level developer',
      features: [
        'Distributed Systems',
        'Cloud Architecture',
        'AI/ML Integration',
        'Performance Optimization',
        'Leadership & Team Management'
      ],
      price: '$499',
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const handleDownload = () => {
    if (!selectedLevel) {
      alert('Please select a learning path first');
      return;
    }
    // Simulate download
    alert(`Downloading ${levels.find(l => l.id === selectedLevel)?.title} curriculum...`);
  };

  const handleSelectPlan = (level: any) => {
    const program = {
      title: `${level.title} Program`,
      price: parseInt(level.price.replace('$', '')),
      originalPrice: parseInt(level.price.replace('$', '')) + 100,
      duration: level.duration,
      features: level.features
    };
    navigate('/payment', { state: { program } });
  };

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

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
              Choose Your Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the program that best matches your experience level and career goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              className={`relative cursor-pointer group ${selectedLevel === level.id ? 'ring-4 ring-blue-500' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedLevel(level.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {level.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 transition-all duration-500 ${
                selectedLevel === level.id 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600'
              } group-hover:shadow-2xl`}>
                
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {level.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {level.title}
                  </h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {level.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {level.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                      {level.price}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      /month (12-month plan)
                    </div>
                  </div>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(level);
                    }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      selectedLevel === level.id
                        ? `bg-gradient-to-r ${level.gradient} text-white shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedLevel === level.id ? 'Selected - Proceed to Payment' : 'Select Plan'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleDownload}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Detailed Curriculum
          </motion.button>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Get comprehensive syllabus, project details, and career roadmap
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;