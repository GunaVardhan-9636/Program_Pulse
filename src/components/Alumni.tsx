import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const Alumni: React.FC = () => {
  const alumni = [
    {
      name: 'Rajesh Gupta',
      position: 'Staff Engineer',
      company: 'Google',
      batch: '2022',
      location: 'Mountain View, CA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Program Pulse transformed my career. The structured approach and mentorship helped me land my dream job at Google.',
      linkedin: '#'
    },
    {
      name: 'Sarah Johnson',
      position: 'Software Engineer',
      company: 'Microsoft',
      batch: '2023',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The hands-on projects and real-world applications prepared me perfectly for the tech industry challenges.',
      linkedin: '#'
    },
    {
      name: 'Amit Sharma',
      position: 'Senior Developer',
      company: 'Amazon',
      batch: '2022',
      location: 'Bangalore, India',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The curriculum is incredibly comprehensive. I gained both technical skills and industry insights.',
      linkedin: '#'
    },
    {
      name: 'Emily Chen',
      position: 'Engineering Manager',
      company: 'Meta',
      batch: '2021',
      location: 'Menlo Park, CA',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Not just coding skills, but leadership and system design concepts that helped me grow into management.',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      position: 'Tech Lead',
      company: 'Netflix',
      batch: '2023',
      location: 'Los Gatos, CA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The career services team was exceptional. They helped me negotiate a 40% salary increase.',
      linkedin: '#'
    },
    {
      name: 'Priya Patel',
      position: 'Principal Developer',
      company: 'Oracle',
      batch: '2022',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The mentorship program connected me with industry veterans who guided my career path.',
      linkedin: '#'
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
    <section id="alumni" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      
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
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of graduates who transformed their careers with Program Pulse
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-105">
                
                {/* Header with Image and Basic Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white dark:ring-gray-700 group-hover:ring-blue-500/50 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {person.position}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {person.company}
                      </span>
                      <span>•</span>
                      <span>Batch {person.batch}</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin size={14} />
                  {person.location}
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{person.testimonial}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={person.linkedin}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Connect
                  </motion.a>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join our alumni network and land your dream job in tech
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;