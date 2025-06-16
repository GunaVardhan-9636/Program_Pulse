import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Shield, CheckCircle, Lock, Calendar, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Payment: React.FC = () => {
  const location = useLocation();
  const program = location.state?.program;
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    phone: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'US'
  });

  const [installmentPlan, setInstallmentPlan] = useState('full');

  const installmentOptions = [
    {
      id: 'full',
      name: 'Pay in Full',
      discount: '10% OFF',
      amount: program ? Math.round(program.price * 0.9) : 269,
      description: 'One-time payment with maximum savings'
    },
    {
      id: '3months',
      name: '3 Monthly Payments',
      discount: '5% OFF',
      amount: program ? Math.round((program.price * 0.95) / 3) : 95,
      description: 'Split into 3 equal payments'
    },
    {
      id: '6months',
      name: '6 Monthly Payments',
      discount: 'No discount',
      amount: program ? Math.round(program.price / 6) : 50,
      description: 'Most flexible payment option'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    alert('Payment processed successfully! Welcome to Program Pulse!');
  };

  // Default program if none selected
  const defaultProgram = {
    title: 'Full Stack Web Development',
    price: 299,
    originalPrice: 399,
    duration: '11.5 Months',
    features: [
      'React & Redux Ecosystem',
      'Node.js & Express Backend',
      'MongoDB & PostgreSQL',
      'AWS Cloud Deployment',
      'Real-world Projects',
      'Job Placement Support'
    ]
  };

  const selectedProgram = program || defaultProgram;

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
            to="/explore-programs" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Programs
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Your Enrollment
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Secure your spot in our program with our flexible payment options and start your journey today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Payment Form */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Payment Method Selection */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Payment Method
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
                  { id: 'paypal', name: 'PayPal', icon: Shield },
                  { id: 'bank', name: 'Bank Transfer', icon: Lock }
                ].map((method) => (
                  <motion.label
                    key={method.id}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === method.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <method.icon className="mx-auto mb-2 text-gray-600 dark:text-gray-300" size={24} />
                      <div className="text-sm font-medium text-gray-800 dark:text-white">
                        {method.name}
                      </div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Installment Options */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Payment Plan
              </h2>
              
              <div className="space-y-4">
                {installmentOptions.map((option) => (
                  <motion.label
                    key={option.id}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 block ${
                      installmentPlan === option.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      type="radio"
                      name="installmentPlan"
                      value={option.id}
                      checked={installmentPlan === option.id}
                      onChange={(e) => setInstallmentPlan(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {option.name}
                          </h3>
                          {option.discount !== 'No discount' && (
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                              {option.discount}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {option.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">
                          ${option.amount}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {option.id === 'full' ? 'one-time' : 'per month'}
                        </div>
                      </div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            {paymentMethod === 'card' && (
              <motion.div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Card Information
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    value={formData.cardName}
                    onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                    required
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
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
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Lock size={20} />
                    Complete Payment
                  </motion.button>
                </form>
              </motion.div>
            )}
          </motion.div>

          {/* Order Summary */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Program Summary */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Program Summary
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {selectedProgram.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {selectedProgram.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      Live Classes
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300">Includes:</h5>
                  {selectedProgram.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Price Breakdown
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Program Fee</span>
                  <span className="text-gray-800 dark:text-white">${selectedProgram.originalPrice}</span>
                </div>
                
                {installmentPlan === 'full' && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Early Bird Discount (10%)</span>
                    <span>-${Math.round(selectedProgram.originalPrice * 0.1)}</span>
                  </div>
                )}
                
                {installmentPlan === '3months' && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount (5%)</span>
                    <span>-${Math.round(selectedProgram.originalPrice * 0.05)}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800 dark:text-white">
                    <span>
                      {installmentPlan === 'full' ? 'Total' : 'First Payment'}
                    </span>
                    <span>
                      ${installmentOptions.find(opt => opt.id === installmentPlan)?.amount}
                    </span>
                  </div>
                  {installmentPlan !== 'full' && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Remaining payments: ${installmentOptions.find(opt => opt.id === installmentPlan)?.amount} × {installmentPlan === '3months' ? '2' : '5'} months
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Shield size={20} />
                Secure Payment
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  256-bit SSL encryption
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  PCI DSS compliant
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  30-day money-back guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} />
                  24/7 customer support
                </li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Our support team is available 24/7 to assist with your enrollment.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-2 px-4 rounded-xl text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300">
                  Live Chat
                </button>
                <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
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

export default Payment;