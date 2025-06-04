import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo1.png';
import { useTranslationWithContext } from '../utils/translations';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const { t } = useTranslationWithContext();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000); // Clear after 2 seconds
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedText(type);
        setTimeout(() => setCopiedText(''), 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy text: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-600/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary-600 to-amber-500 text-white shadow-2xl hover:shadow-primary-500/25 hover:scale-110 focus:outline-none transition-all duration-300"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </motion.button>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-8 group">
              <div className="relative">
                <img src={logo} alt="ANIPM Logo" className="h-40 transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-400">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span>{t('footer.connectedFuture')}</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Navigation - Updated to match header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent relative">
              {t('footer.quickNavigation')}
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-amber-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/membri" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.members')}
                </Link>
              </li>
              <li>
                <Link to="/noutati" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.news')}
                </Link>
              </li>
              <li>
                <Link to="/arhiva" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/parteneri" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.partners')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-amber-500 rounded-full"></div>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-amber-500/20 group-hover:from-primary-500/30 group-hover:to-amber-500/30 transition-all duration-300">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 ml-4 leading-relaxed">str. Uzinelor 19 or. Chișinău, Republica Moldova</span>
              </li>
              <li className="flex items-center group relative">
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-amber-500/20 group-hover:from-primary-500/30 group-hover:to-amber-500/30 transition-all duration-300">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <button 
                  onClick={() => copyToClipboard('076777790', 'phone')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 ml-4 font-medium cursor-pointer relative group/copy"
                  title="Click to copy phone number"
                >
                  076777790
                  <svg className="w-4 h-4 inline-block ml-2 opacity-60 group-hover/copy:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                {copiedText === 'phone' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="absolute left-full ml-4 px-3 py-1 bg-green-500 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10"
                  >
                    Phone copied! ✓
                  </motion.div>
                )}
              </li>
              <li className="flex items-center group relative">
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-amber-500/20 group-hover:from-primary-500/30 group-hover:to-amber-500/30 transition-all duration-300">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <button 
                  onClick={() => copyToClipboard('anipm@rodals.md', 'email')}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300 ml-4 font-medium cursor-pointer relative group/copy"
                  title="Click to copy email address"
                >
                  anipm@rodals.md
                  <svg className="w-4 h-4 inline-block ml-2 opacity-60 group-hover/copy:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                {copiedText === 'email' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="absolute left-full ml-4 px-3 py-1 bg-green-500 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10"
                  >
                    Email copied! ✓
                  </motion.div>
                )}
              </li>
              <li className="flex items-center group">
                <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-amber-500/20 group-hover:from-primary-500/30 group-hover:to-amber-500/30 transition-all duration-300">
                  <svg className="h-5 w-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 ml-4">Luni - Vineri: 9:00 - 17:00</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
                Locația Noastră
              </h4>
              <div className="rounded-xl overflow-hidden h-40 border border-gray-700/50 hover:border-primary-500/50 transition-colors duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.165242431245!2d28.857631776812574!3d47.006935571094475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c38f55f634f%3A0x3eb2bab4ba1efcc3!2sStrada%20Uzinelor%2019%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2sus!4v1710883044064!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ANIPM Office Location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent relative">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-amber-500 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Abonați-vă la newsletter-ul nostru pentru a primi noutăți despre evenimente, inițiative și oportunități în sectorul de panificație și morărit.
            </p>
            <form className="mb-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Adresa dvs. de email" 
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:bg-gray-700/80"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-amber-600 hover:from-primary-700 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Abonează-te
                </motion.button>
              </div>
            </form>
            <p className="text-xs text-gray-400 leading-relaxed">
              * Prin abonare, sunteți de acord cu <Link to="/termeni-conditii" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Termenii și Condițiile</Link> și <Link to="/politica-confidentialitate" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Politica de Confidențialitate</Link> noastre.
            </p>
          </motion.div>
        </div>

        {/* Modern Footer Bottom */}
        <motion.div 
          className="border-t border-gray-700/50 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
                &copy; {currentYear} Asociația Națională a Industriilor de Panificație și Morărit. 
              </p>
              <p className="text-gray-500 text-xs">
                Toate drepturile rezervate.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="/termeni-conditii" 
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-sm relative group"
              >
                <span>Termeni și Condiții</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link 
                to="/politica-confidentialitate" 
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-sm relative group"
              >
                <span>Politica de Confidențialitate</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <Link 
                to="/politica-cookies" 
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-sm relative group"
              >
                <span>Politica de Cookies</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
