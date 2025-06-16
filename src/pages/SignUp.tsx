import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, CheckCircle, User, Mail, Phone, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    experience: '',
    interests: [] as string[],
    agreeTerms: false,
    agreeMarketing: false
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const experienceLevels = [
    'Complete Beginner',
    'Some Programming Knowledge',
    'Intermediate Developer',
    'Advanced Developer',
    'Professional Developer'
  ];

  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'DevOps',
    'Cybersecurity',
    'Game Development',
    'Blockchain'
  ];

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password });
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleInterestToggle = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions!');
      return;
    }
    // Handle signup
    alert('Account created successfully! Welcome to Program Pulse!');
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              Join Program Pulse
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create your account and start your journey to becoming a skilled developer with our expert-led programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sign Up Form */}
          <motion.div
            className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <User size={20} />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Mail size={20} />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Lock size={20} />
                  Security
                </h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  {formData.password && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Password Strength:</span>
                        <span className={`font-medium ${passwordStrength <= 2 ? 'text-red-500' : passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'}`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Experience Level
                </h3>
                
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                  required
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Areas of Interest (Select all that apply)
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((interest) => (
                    <motion.label
                      key={interest}
                      className={`cursor-pointer p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="sr-only"
                      />
                      <div className="text-sm font-medium text-gray-800 dark:text-white">
                        {interest}
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    I agree to the <Link to="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link> and <Link to="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>
                  </span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeMarketing}
                    onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    I would like to receive updates about new courses and special offers
                  </span>
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
              </motion.button>

              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Benefits Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Welcome Benefits */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Welcome Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  'Free trial class access',
                  'Personalized learning path',
                  'Career counseling session',
                  'Access to community forums',
                  'Monthly coding challenges'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Join Our Success Story</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$85K</div>
                  <div className="text-sm opacity-90">Average Starting Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2000+</div>
                  <div className="text-sm opacity-90">Successful Graduates</div>
                </div>
              </div>
            </div>

            {/* Security Assurance */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                Your Data is Safe
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">256-bit SSL encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">GDPR compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">No spam guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">Easy account deletion</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;