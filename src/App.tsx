import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookClass from './pages/BookClass';
import ExplorePrograms from './pages/ExplorePrograms';
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <motion.div 
      className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="animated-background"></div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-class" element={<BookClass />} />
          <Route path="/explore-programs" element={<ExplorePrograms />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;