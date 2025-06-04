import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-primary-500 transition-all duration-300 bg-white hover:bg-primary-50 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title={currentLanguage === 'ro' ? 'Switch to English' : 'Comută la română'}
    >
      {/* Flag icons */}
      <div className="flex items-center space-x-1">
        {currentLanguage === 'ro' ? (
          <>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">RO</span>
            <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200">
              <div className="w-full h-1/3 bg-blue-600"></div>
              <div className="w-full h-1/3 bg-yellow-400"></div>
              <div className="w-full h-1/3 bg-red-600"></div>
            </div>
          </>
        ) : (
          <>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">EN</span>
            <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-200">
              <div className="w-full h-1/2 bg-red-600"></div>
              <div className="w-full h-1/2 bg-white"></div>
            </div>
          </>
        )}
      </div>
      
      {/* Switch indicator */}
      <div className="flex items-center">
        <svg 
          className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m0-4l-4-4" />
        </svg>
      </div>
    </motion.button>
  );
};
