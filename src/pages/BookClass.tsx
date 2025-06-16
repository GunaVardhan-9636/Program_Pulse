import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Video, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookClass: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });

  const availableDates = [
    { date: '2024-03-15', day: 'Friday', slots: 3 },
    { date: '2024-03-16', day: 'Saturday', slots: 5 },
    { date: '2024-03-18', day: 'Monday', slots: 4 },
    { date: '2024-03-19', day: 'Tuesday', slots: 2 },
    { date: '2024-03-20', day: 'Wednesday', slots: 6 }
  ];

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '2:00 PM - 3:00 PM',
    '4:00 PM - 5:00 PM',
    '6:00 PM - 7:00 PM',
    '8:00 PM - 9:00 PM'
  ];

  const topics = [
    {
      title: 'Introduction to Programming',
      description: 'Perfect for absolute beginners',
      duration: '60 mins',
      level: 'Beginner'
    },
    {
      title: 'Web Development Fundamentals',
      description: 'HTML, CSS, and JavaScript basics',
      duration: '60 mins',
      level: 'Beginner'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Core concepts for technical interviews',
      duration: '90 mins',
      level: 'Intermediate'
    },
    {
      title: 'System Design Basics',
      description: 'Scalable architecture principles',
      duration: '90 mins',
      level: 'Advanced'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Class booked successfully! You will receive a confirmation email shortly.');
  };

  return (
    <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              Book Your Free Live Class
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of students learning from industry experts. Choose your preferred topic, date, and time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Booking Form */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Select Your Class Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Topic Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Choose Topic
                </label>
                <div className="grid gap-3">
                  {topics.map((topic, index) => (
                    <motion.label
                      key={index}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedTopic === topic.title
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="topic"
                        value={topic.title}
                        checked={selectedTopic === topic.title}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {topic.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {topic.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                            {topic.level}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {topic.duration}
                          </p>
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Date
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableDates.map((dateOption) => (
                    <motion.label
                      key={dateOption.date}
                      className={`cursor-pointer p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                        selectedDate === dateOption.date
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <input
                        type="radio"
                        name="date"
                        value={dateOption.date}
                        checked={selectedDate === dateOption.date}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="sr-only"
                      />
                      <div className="text-sm font-medium text-gray-800 dark:text-white">
                        {dateOption.day}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {new Date(dateOption.date).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {dateOption.slots} slots available
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Time
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <motion.label
                        key={time}
                        className={`cursor-pointer p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={time}
                          checked={selectedTime === time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                          {time}
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Your Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  >
                    <option value="">Experience Level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Programming Knowledge</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={!selectedTopic || !selectedDate || !selectedTime}
              >
                Book Free Class
              </motion.button>
            </form>
          </motion.div>

          {/* Class Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* What to Expect */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Video className="text-blue-600" size={24} />
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  'Interactive live session with industry expert',
                  'Hands-on coding exercises and examples',
                  'Q&A session to clear your doubts',
                  'Career guidance and learning roadmap',
                  'Access to class recording for 7 days'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Class Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <Users className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800 dark:text-white">2000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Students Joined</div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <Clock className="text-purple-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-800 dark:text-white">60-90</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Minutes Duration</div>
              </div>
            </div>

            {/* Instructor Preview */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Meet Your Instructor
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Dr. Akash Devaraje
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ex-Google Technical Lead
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    15+ years experience
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our support team is here to assist you with booking or any questions.
              </p>
              <div className="flex gap-4">
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors duration-300">
                  Chat Support
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors duration-300">
                  Call Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookClass;