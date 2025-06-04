import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaSearch } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grain opacity-30"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          {/* Error code */}
          <motion.h1 
            className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          
          {/* Error message */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 mt-4 text-gray-800 font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pagina nu a fost găsită
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ne pare rău, pagina pe care o căutați nu există sau a fost mutată. Vă rugăm să verificați adresa URL sau utilizați una dintre opțiunile de mai jos:
          </motion.p>
          
          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              <FaHome className="mr-2" />
              Pagina principală
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border border-primary-200 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              <FaEnvelope className="mr-2" />
              Contactează-ne
            </Link>
          </motion.div>
          
          {/* Search form */}
          <motion.div
            className="mt-12 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <input 
                type="text" 
                placeholder="Caută pe site..." 
                className="w-full py-4 px-6 pr-12 rounded-full border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-all duration-300 shadow-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors duration-300">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
