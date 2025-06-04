import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaSeedling, FaIndustry, FaBreadSlice, FaGlobeEurope, FaChartLine, FaUsers } from "react-icons/fa";

export const Services = ({ isFullPage = false }) => {
  const services = [
    {
      icon: <FaSeedling className="text-5xl text-primary-500" />,
      title: "Materii prime", // Changed from "Producție Agricolă"
      description: "Suport pentru fermieri și producători în implementarea celor mai bune practici de cultivare a cerealelor.",
      delay: 0.1,
      link: "/servicii?category=materii-prime" // Updated link
    },
    {
      icon: <FaIndustry className="text-5xl text-primary-600" />,
      title: "Industria Morăritului",
      description: "Consultanță și inovație în procesele de morărit și tehnici moderne de producție.",
      delay: 0.3,
      link: "/servicii?category=industria-moraritului"
    },
    {
      icon: <FaBreadSlice className="text-5xl text-primary-700" />,
      title: "Panificație și Patiserie",
      description: "Servicii complete pentru industria de panificație, de la rețete tradiționale la inovație.",
      delay: 0.5,
      link: "/servicii?category=panificatie"
    },
    {
      icon: <FaGlobeEurope className="text-5xl text-secondary-600" />,
      title: "Comerț și Export",
      description: "Facilitare a relațiilor comerciale și sprijin pentru exportul produselor românești pe piața europeană.",
      delay: 0.7,
      link: "/servicii?category=comert-export"
    },
    {
      icon: <FaChartLine className="text-5xl text-green-600" />,
      title: "Analiză și Statistici",
      description: "Rapoarte detaliate și analize de piață pentru a susține deciziile strategice ale membrilor noștri.",
      delay: 0.9,
      link: "/servicii?category=analiza-statistici"
    },
    {
      icon: <FaUsers className="text-5xl text-red-500" />,
      title: "Reprezentare", // Changed from "Reprezentare și Lobby"
      description: "Reprezentarea intereselor membrilor în relația cu autoritățile locale și europene.",
      delay: 1.1,
      link: "/servicii?category=reprezentare" // Updated link
    }
  ];

  // If it's the full page view, we can add more services or features
  if (isFullPage) {
    // Additional services could be added here if needed for the full page view
  }

  return (
    <section id="servicii" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-grain opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Serviciile Noastre</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
              Oferim o gamă completă de servicii adaptate nevoilor industriei agricole și de panificație din România
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: service.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              className="service-card bg-white p-8 rounded-xl shadow-xl border border-gray-100 group relative"
            >
              <div className="service-icon mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors duration-300 font-heading">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-auto">
                <Link 
                  to={service.link} 
                  className="text-primary-600 font-semibold flex items-center group-hover:text-primary-700 transition-colors duration-300"
                >
                  Află mai multe
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {isFullPage && (
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto p-8 bg-primary-50 rounded-2xl shadow-inner">
              <h3 className="text-2xl font-bold mb-4 font-heading text-gray-800">Servicii Personalizate</h3>
              <p className="text-gray-700 mb-6">
                În plus față de serviciile standard, oferim soluții personalizate adaptate nevoilor specifice ale fiecărui membru. Contactați-ne pentru a discuta despre cum vă putem ajuta afacerea.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors duration-300"
              >
                Solicită consultanță personalizată
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
