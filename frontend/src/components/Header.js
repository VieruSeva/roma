import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../images/logo1.png';
import { useTranslationWithContext } from '../utils/translations';

import NewsTicker from './NewsTicker';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslationWithContext();
  
  // Define the menu variants for animation
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Clear active submenu when location changes
  useEffect(() => {
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  }, [location]);

  // Define navigation menu with expanded categories - Reordered as requested
  const navItems = [
    { 
      title: t('navigation.home'), 
      path: "/",
      submenu: [] 
    },
    { 
      title: t('navigation.members'), 
      path: "/membri",
      submenu: [
        { name: t('navigation.benefits'), path: "/membri?section=beneficii" },
        { name: t('navigation.registration'), path: "/membri?section=inscriere" },
        { name: t('navigation.currentMembers'), path: "/membri?section=actuali" },
        { name: t('navigation.reviews'), path: "/membri?section=recenzii" }
      ]
    },
    { 
      title: t('navigation.news'), 
      path: "/noutati",
      submenu: [
        { name: t('navigation.events'), path: "/evenimente" },
        { name: t('navigation.latestNews'), path: "/ultimele-stiri" },
        { name: t('navigation.testingLabs'), path: "/laboratoare" },
        { name: t('navigation.legislation'), path: "/legislatie" },
        { name: t('navigation.fundingGrants'), path: "/finantari-si-granturi" }
      ]
    },
    { 
      title: t('navigation.gallery'), 
      path: "/arhiva",
      submenu: [] 
    },
    { 
      title: t('navigation.partners'), // New placeholder item
      path: "/parteneri",
      submenu: [] 
    },
    { 
      title: t('navigation.contact'), 
      path: "/contact",
      submenu: [] 
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isActiveSubmenu = (mainPath) => {
    return location.pathname.startsWith(mainPath);
  };

  // Function to navigate directly to the submenu item
  const handleSubmenuClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(path);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`header-main sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg py-2 bg-white/95 backdrop-blur-md' : 'py-0 bg-white'}`}>
      {/* News Ticker - Replacing the red line */}
      <NewsTicker />
      
      {/* Main Header with navigation */}
      <div className="header-container">
        <div className="header-top">
          {/* Logo on the left - much bigger */}
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/">
              <img src={logo} alt="ANIPM Logo" className="h-40 md:h-52" />
            </Link>
          </motion.div>
          
          {/* Centered Organization Text - Fixed centering */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="org-acronym text-6xl md:text-7xl lg:text-8xl font-bold" style={{ color: '#f59e0b' }}>ANIPM</h1>
              <p className="org-name text-3xl md:text-4xl lg:text-5xl text-gray-600 text-center whitespace-nowrap">
                Asociația Națională a Industriilor de Panificație și Morărit
              </p>
            </motion.div>
          </div>
          
          {/* Right side - Member button */}
          <div className="flex items-center space-x-4">
            {/* Member Button */}
            <motion.button 
              className="member-btn hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/membri?section=inscriere')}
            >
              {t('navigation.becomeMember')}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? 
                  <FaTimes className="text-2xl" /> : 
                  <FaBars className="text-2xl" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-container hidden md:block">
          <ul className="nav-menu">
            {navItems.map((navItem, index) => (
              <motion.li 
                key={index} 
                className={`nav-item ${isActive(navItem.path) || isActiveSubmenu(navItem.path) ? 'active' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                onHoverStart={() => setActiveSubmenu(index)}
                onHoverEnd={() => setActiveSubmenu(null)}
              >
                <Link 
                  to={navItem.path} 
                  className={`nav-link flex items-center ${isActive(navItem.path) || isActiveSubmenu(navItem.path) ? 'text-primary-600' : ''}`}
                >
                  {navItem.title}
                  {navItem.submenu.length > 0 && (
                    <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                {navItem.submenu.length > 0 && activeSubmenu === index && (
                  <motion.div 
                    className="dropdown"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      height: 'auto'
                    }}
                    exit={{ 
                      opacity: 0,
                      y: 20,
                      height: 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-2 grid grid-cols-1 gap-1">
                      {navItem.submenu.map((item, i) => (
                        <a 
                          key={`${index}-${i}`} 
                          href={item.path}
                          className="dropdown-item"
                          onClick={(e) => handleSubmenuClick(e, item.path)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu fixed inset-0 z-50 bg-white md:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-primary-600">ANIPM</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 p-2"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>
                
                {/* Mobile Search removed as requested */}
                
                <motion.ul 
                  className="flex-1 space-y-1 overflow-y-auto"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                >
                  {navItems.map((navItem, index) => (
                    <motion.li 
                      key={index}
                      variants={menuItemVariants}
                      className="border-b border-gray-100 pb-2"
                    >
                      <div className="flex justify-between items-center">
                        <Link 
                          to={navItem.path} 
                          className={`block text-lg py-2 px-4 rounded-lg ${isActive(navItem.path) ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
                          onClick={() => {
                            if (navItem.submenu.length === 0) {
                              setIsMenuOpen(false);
                            }
                          }}
                        >
                          {navItem.title}
                        </Link>
                        
                        {navItem.submenu.length > 0 && (
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                            className="p-2 text-gray-500"
                            aria-label="Toggle submenu"
                          >
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {navItem.submenu.length > 0 && (
                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-6 mt-2 space-y-2 overflow-hidden"
                            >
                              {navItem.submenu.map((item, i) => (
                                <a 
                                  key={i} 
                                  href={item.path}
                                  className="block text-gray-600 py-2 px-4 rounded-lg text-sm hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                                  onClick={(e) => handleSubmenuClick(e, item.path)}
                                >
                                  • {item.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile Member Button */}
                <motion.button 
                  variants={menuItemVariants}
                  className="w-full py-3 mt-6 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
                  onClick={() => {
                    navigate('/membri?section=inscriere');
                    setIsMenuOpen(false);
                  }}
                >
                  Fii Membru
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};