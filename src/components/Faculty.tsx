import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

const Faculty: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  const faculty = [
    {
      name: 'Dr. Akash Devaraje',
      position: 'Ex-Google Technical Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Machine Learning', 'System Design', 'Cloud Architecture'],
      experience: '15+ years',
      description: 'An accomplished tech leader with over 15 years of experience in building scalable systems and mentoring developers. Specializes in distributed systems and machine learning applications.',
      achievements: [
        'Led engineering teams at Google and Microsoft',
        'Published 25+ research papers on ML algorithms',
        'Mentored 200+ engineers throughout career',
        'Expert in large-scale system architecture'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Akshatha Prabhu',
      position: 'AI Research Scientist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Deep Learning', 'Computer Vision', 'Natural Language Processing'],
      experience: '12+ years',
      description: 'Leading AI researcher with expertise in deep learning and computer vision. Former research scientist at OpenAI with extensive experience in cutting-edge AI applications.',
      achievements: [
        'PhD in Computer Science from Stanford',
        'Published 40+ papers in top-tier conferences',
        'Led AI research teams at OpenAI and DeepMind',
        'Expert in neural network architectures'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Bipin Nair',
      position: 'Senior Software Architect',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Cloud Architecture', 'DevOps', 'Microservices'],
      experience: '18+ years',
      description: 'Veteran software architect with deep expertise in cloud technologies and distributed systems. Has designed and implemented systems serving millions of users.',
      achievements: [
        'Architected systems for Fortune 500 companies',
        'AWS and Azure certified solutions architect',
        'Speaker at 50+ international conferences',
        'Author of "Modern Cloud Architecture" book'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Kavita Rao',
      position: 'Professor of Computer Science',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Artificial Intelligence', 'Data Science', 'Algorithms'],
      experience: '20+ years',
      description: 'Distinguished professor and researcher with extensive experience in AI and data science. Has trained thousands of students and contributed significantly to academic research.',
      achievements: [
        'Professor at top-tier universities for 20+ years',
        'Supervised over 100 PhD and Masters students',
        'Recipient of multiple teaching excellence awards',
        'Expert in algorithmic problem solving'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Akshay Sudharshan',
      position: 'Operations Analyst',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Process Optimization', 'Workflow Automation', 'Data Analytics'],
      experience: '8+ years',
      description: 'Operations expert specializing in process optimization and workflow automation. Helps students understand the operational aspects of technology companies.',
      achievements: [
        'Optimized operations for multiple startups',
        'Expert in lean methodologies and agile practices',
        'Specialized in data-driven decision making',
        'Certified in Six Sigma and project management'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Pallavi M.S.',
      position: 'Senior Data Analyst',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Big Data', 'Database Management', 'Data Visualization'],
      experience: '14+ years',
      description: 'Senior data professional with extensive experience in big data technologies and database systems. Expert in turning complex data into actionable insights.',
      achievements: [
        'Led data teams at multiple Fortune 500 companies',
        'Expert in Hadoop, Spark, and modern data stacks',
        'Specialist in real-time data processing',
        'Mentor to 150+ data professionals'
      ],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
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
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
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
              Learn from the Best
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            World-class faculty with industry experience from top tech companies and prestigious universities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedFaculty(member)}
            >
              <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-105">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay with social links */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex justify-center gap-3">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon = platform === 'linkedin' ? Linkedin : platform === 'github' ? Github : Twitter;
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon size={16} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                    {member.position}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{member.expertise.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {member.experience} experience
                    </span>
                    <motion.div
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all duration-300"
                    >
                      <span>View Profile</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Faculty Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-white/30 transition-colors duration-300 z-10"
                >
                  <X size={20} />
                </button>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <img
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500/20"
                    />
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      {selectedFaculty.position}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-6">
                      {Object.entries(selectedFaculty.social).map(([platform, url]) => {
                        const Icon = platform === 'linkedin' ? Linkedin : platform === 'github' ? Github : Twitter;
                        return (
                          <a
                            key={platform}
                            href={url}
                            className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                          >
                            <Icon size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.expertise.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">About</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedFaculty.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {selectedFaculty.achievements.map((achievement: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Faculty;