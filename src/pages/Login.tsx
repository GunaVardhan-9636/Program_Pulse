import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    alert('Login successful! Welcome back to Program Pulse!');
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
              Welcome Back
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sign in to your Program Pulse account and continue your learning journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Login Form */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Sign In to Your Account
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 pl-12 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
                
                <Link 
                  to="#" 
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-300">Google</span>
                </motion.button>
                
                <motion.button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Facebook</span>
                </motion.button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Welcome Back Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Welcome Back!</h3>
              <p className="text-lg opacity-90 mb-6">
                Continue your learning journey and unlock your potential with our expert-led programs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Access your personalized dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Continue where you left off</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Connect with your mentors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Track your progress</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Courses Available</div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <Lock size={20} className="text-green-500" />
                Secure Login
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Your account is protected with industry-standard security measures.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Two-factor authentication available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Encrypted data transmission</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Regular security updates</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;