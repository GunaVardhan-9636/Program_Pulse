import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ExplorePrograms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Programs', count: 12 },
    { id: 'web', name: 'Web Development', count: 4 },
    { id: 'mobile', name: 'Mobile Development', count: 3 },
    { id: 'data', name: 'Data Science', count: 3 },
    { id: 'ai', name: 'AI/ML', count: 2 }
  ];

  const programs = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'web',
      level: 'Beginner to Advanced',
      duration: '11.5 Months',
      students: '2,500+',
      rating: 4.9,
      price: 299,
      originalPrice: 399,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master modern web development with React, Node.js, and cloud deployment.',
      features: [
        'React & Redux Ecosystem',
        'Node.js & Express Backend',
        'MongoDB & PostgreSQL',
        'AWS Cloud Deployment',
        'Real-world Projects',
        'Job Placement Support'
      ],
      popular: true
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      category: 'data',
      level: 'Intermediate',
      duration: '10 Months',
      students: '1,800+',
      rating: 4.8,
      price: 349,
      originalPrice: 449,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Transform data into insights with Python, machine learning, and visualization.',
      features: [
        'Python & R Programming',
        'Machine Learning Algorithms',
        'Data Visualization',
        'Statistical Analysis',
        'Big Data Technologies',
        'Industry Projects'
      ]
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'mobile',
      level: 'Beginner to Advanced',
      duration: '9 Months',
      students: '1,200+',
      rating: 4.7,
      price: 279,
      originalPrice: 379,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Build native and cross-platform mobile apps for iOS and Android.',
      features: [
        'React Native Development',
        'iOS Swift Programming',
        'Android Kotlin',
        'App Store Deployment',
        'UI/UX Design Principles',
        'Performance Optimization'
      ]
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      category: 'ai',
      level: 'Advanced',
      duration: '12 Months',
      students: '900+',
      rating: 4.9,
      price: 399,
      originalPrice: 499,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Deep dive into artificial intelligence and machine learning technologies.',
      features: [
        'Deep Learning & Neural Networks',
        'Computer Vision',
        'Natural Language Processing',
        'TensorFlow & PyTorch',
        'MLOps & Model Deployment',
        'Research Projects'
      ]
    },
    {
      id: 5,
      title: 'DevOps & Cloud Engineering',
      category: 'web',
      level: 'Intermediate to Advanced',
      duration: '8 Months',
      students: '1,500+',
      rating: 4.8,
      price: 329,
      originalPrice: 429,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Master cloud infrastructure, automation, and deployment strategies.',
      features: [
        'AWS/Azure/GCP Platforms',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Best Practices'
      ]
    },
    {
      id: 6,
      title: 'Cybersecurity Specialist',
      category: 'web',
      level: 'Intermediate',
      duration: '10 Months',
      students: '800+',
      rating: 4.7,
      price: 359,
      originalPrice: 459,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Protect digital assets with comprehensive cybersecurity training.',
      features: [
        'Ethical Hacking',
        'Network Security',
        'Incident Response',
        'Risk Assessment',
        'Compliance & Governance',
        'Hands-on Labs'
      ]
    }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const handleSelectPlan = (program: any) => {
    navigate('/payment', { state: { program } });
  };

  return (
    <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Explore Our Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-focused programs designed to accelerate your tech career.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {program.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} />
                    Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {program.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {program.students}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {program.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {program.features.length > 3 && (
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      +{program.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800 dark:text-white">
                        ${program.price}
                      </span>
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                        ${program.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      /month (12-month plan)
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      Save ${program.originalPrice - program.price}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Limited time offer
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={() => handleSelectPlan(program)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Select Plan
                    <ArrowRight size={16} />
                  </motion.button>
                  
                  <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-3 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Still Not Sure Which Program to Choose?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a free consultation with our career counselors to find the perfect program for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-class"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-block"
              >
                Book Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Compare Programs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorePrograms;