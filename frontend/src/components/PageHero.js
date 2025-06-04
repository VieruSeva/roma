import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export const PageHero = ({ title, description, breadcrumbs, bgImage }) => {
  return (
    <section className="page-hero relative overflow-hidden" style={{ minHeight: '400px' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: bgImage ? `url(${bgImage})` : 'linear-gradient(120deg, #f59e0b, #d97706)',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40 z-1"></div>
      <div className="absolute inset-0 bg-grain opacity-30 z-2 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center">
          {/* Breadcrumbs Navigation */}
          {breadcrumbs && (
            <motion.div 
              className="flex justify-center mb-8 text-white/80 text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <FaChevronRight className="mx-2 self-center text-xs text-white/50" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{crumb.name}</span>
                  ) : (
                    <Link 
                      to={crumb.path} 
                      className="hover:text-white transition-colors duration-300"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          )}
          
          {/* Page Title */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          
          {/* Page Description */}
          {description && (
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};
