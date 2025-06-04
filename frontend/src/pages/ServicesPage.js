import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from 'react-router-dom';
import { Services } from '../components/Services';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaSeedling, FaIndustry, FaBreadSlice, FaGlobeEurope, FaChartLine, FaUsers } from 'react-icons/fa';

const ServicesPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Extract category from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory(null);
    }
    
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [location]);

  const pageInfo = {
    title: "Serviciile Noastre",
    description: "Oferim o gamă completă de servicii adaptate nevoilor industriei agricole și de panificație din România",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Servicii", path: "/servicii" }
    ]
  };

  // Extended service details
  const serviceDetails = [
    {
      id: "materii-prime",
      title: "Materii prime", // Changed from "Producție Agricolă"
      icon: <FaSeedling className="text-5xl text-primary-500" />,
      description: "Oferim consultanță și asistență tehnică pentru fermierii și producătorii agricoli, ajutându-i să implementeze cele mai bune practici de cultivare a cerealelor. Serviciile noastre includ recomandări privind rotația culturilor, metodele de irigare eficiente și utilizarea optimă a îngrășămintelor.",
      features: [
        "Consultanță privind selecția soiurilor de cereale",
        "Optimizarea rotației culturilor",
        "Utilizarea eficientă a îngrășămintelor",
        "Implementarea tehnicilor de agricultură de precizie",
        "Monitorizarea calității solului"
      ],
      benefits: [
        "Creșterea productivității",
        "Reducerea impactului asupra mediului",
        "Îmbunătățirea calității producției",
        "Acces la cele mai recente inovații din domeniu"
      ]
    },
    {
      id: "industria-moraritului",
      title: "Industria Morăritului",
      icon: <FaIndustry className="text-5xl text-primary-600" />,
      description: "Sprijinim companiile din industria morăritului prin servicii de consultanță tehnică și asistență în implementarea tehnologiilor moderne pentru optimizarea proceselor de producție. Oferim analize de eficiență și recomandări pentru îmbunătățirea calității produselor finite.",
      features: [
        "Consultanță pentru optimizarea proceselor de măcinare",
        "Implementarea sistemelor automate de control al calității",
        "Evaluarea și îmbunătățirea liniilor de producție",
        "Dezvoltarea de rețete personalizate",
        "Evaluări de conformitate cu standardele industriei"
      ],
      benefits: [
        "Creșterea eficienței proceselor de producție",
        "Îmbunătățirea consistenței calității produselor",
        "Reducerea costurilor operaționale",
        "Adaptarea la cerințele în continuă schimbare ale pieței"
      ]
    },
    {
      id: "panificatie",
      title: "Panificație și Patiserie",
      icon: <FaBreadSlice className="text-5xl text-primary-700" />,
      description: "Asistăm producătorii din industria de panificație și patiserie cu servicii complete, de la dezvoltarea de rețete tradiționale la implementarea inovațiilor tehnologice. Oferim consultanță privind procesele de producție, controlul calității și conformarea la standardele sanitare.",
      features: [
        "Dezvoltarea și optimizarea rețetelor",
        "Implementarea tehnologiilor moderne de coacere",
        "Consultanță privind conservarea produselor",
        "Evaluări de calitate și analize senzoriale",
        "Asistență pentru obținerea certificărilor de calitate"
      ],
      benefits: [
        "Diversificarea gamei de produse",
        "Îmbunătățirea duratei de viață a produselor",
        "Creșterea satisfacției clienților",
        "Adaptarea la tendințele actuale ale pieței"
      ]
    },
    {
      id: "comert-export",
      title: "Comerț și Export",
      icon: <FaGlobeEurope className="text-5xl text-secondary-600" />,
      description: "Facilitările relații comerciale și sprijinim exportul produselor românești pe piața europeană și internațională. Oferim asistență pentru dezvoltarea strategiilor de export, identificarea piețelor potențiale și navigarea cerințelor de reglementare.",
      features: [
        "Identificarea oportunităților de export",
        "Asistență pentru accesarea piețelor internaționale",
        "Consultanță privind cerințele legale și documentația necesară",
        "Facilitarea contactelor comerciale",
        "Participarea la târguri și expoziții internaționale"
      ],
      benefits: [
        "Diversificarea piețelor de desfacere",
        "Creșterea vizibilității pe piețele internaționale",
        "Acces la rețeaua extinsă de parteneri comerciali",
        "Reducerea barierelor de intrare pe piețe noi"
      ]
    },
    {
      id: "analiza-statistici",
      title: "Analiză și Statistici",
      icon: <FaChartLine className="text-5xl text-green-600" />,
      description: "Oferim rapoarte detaliate și analize de piață pentru a susține deciziile strategice ale membrilor noștri. Evaluăm tendințele pieței, monitorizăm prețurile și furnizăm date esențiale pentru planificarea afacerilor și optimizarea proceselor decizionale.",
      features: [
        "Rapoarte lunare privind tendințele pieței",
        "Analize comparative ale prețurilor",
        "Studii privind comportamentul consumatorilor",
        "Prognoze economice specifice industriei",
        "Evaluări ale impactului schimbărilor legislative"
      ],
      benefits: [
        "Decizii de afaceri mai bine informate",
        "Anticiparea schimbărilor în piață",
        "Identificarea oportunităților de creștere",
        "Adaptarea strategiilor la condițiile economice actuale"
      ]
    },
    {
      id: "reprezentare",
      title: "Reprezentare", // Changed from "Reprezentare și Lobby"
      icon: <FaUsers className="text-5xl text-red-500" />,
      description: "Reprezentăm interesele membrilor noștri în relația cu autoritățile locale și europene. Monitorizăm schimbările legislative relevante, elaborăm poziții comune și participăm activ la procesele de consultare publică pentru a asigura un cadru legal favorabil industriei.",
      features: [
        "Monitorizarea și analiza propunerilor legislative",
        "Elaborarea pozițiilor și documentelor de poziție",
        "Reprezentarea în grupurile de lucru și comitete consultative",
        "Organizarea de întâlniri cu autoritățile reglementatoare",
        "Facilitarea dialogului cu instituțiile publice"
      ],
      benefits: [
        "Influențarea cadrului legislativ în favoarea industriei",
        "Acces la informații actualizate privind schimbările normative",
        "Voce colectivă mai puternică în relația cu autoritățile",
        "Protejarea intereselor comune ale membrilor"
      ]
    }
  ];

  // Find active service if there's a category in the URL
  const activeService = activeCategory ? serviceDetails.find(service => service.id === activeCategory) : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="services-page"
    >
      <PageHero 
        title={activeService ? activeService.title : pageInfo.title} 
        description={activeService ? activeService.description.substring(0, 100) + "..." : pageInfo.description}
        breadcrumbs={[
          ...pageInfo.breadcrumbs,
          ...(activeService ? [{ name: activeService.title, path: `/servicii?category=${activeService.id}` }] : [])
        ]}
      />
      
      {/* Category tabs */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/servicii" 
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                !activeCategory 
                  ? 'bg-primary-500 text-white shadow-md transform -translate-y-1' 
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:-translate-y-1'
              }`}
            >
              Toate Serviciile
            </Link>
            
            {serviceDetails.map((service, index) => (
              <Link 
                key={index} 
                to={`/servicii?category=${service.id}`}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === service.id
                    ? 'bg-primary-500 text-white shadow-md transform -translate-y-1' 
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:-translate-y-1'
                }`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {activeService ? (
        // Display detailed view of selected service
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      {activeService.icon}
                    </div>
                    <h2 className="text-3xl font-bold font-heading">{activeService.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {activeService.description}
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-500"
                  >
                    <h3 className="text-xl font-bold mb-4 font-heading">Ce Oferim</h3>
                    <ul className="space-y-3 text-gray-700">
                      {activeService.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                          className="flex items-start"
                        >
                          <svg className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-lg border-r-4 border-secondary-500"
                  >
                    <h3 className="text-xl font-bold mb-4 font-heading">Beneficii</h3>
                    <ul className="space-y-3 text-gray-700">
                      {activeService.benefits.map((benefit, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                          className="flex items-start"
                        >
                          <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-6 font-heading">Ești interesat de acest serviciu?</h3>
                  <p className="text-gray-700 mb-6">Contactează-ne pentru o consultație personalizată și află cum putem adapta acest serviciu la nevoile specifice ale afacerii tale.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors duration-300"
                    >
                      Contactează-ne
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/servicii"
                      className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      <FaArrowLeft className="mr-2" />
                      Toate serviciile
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="lg:w-1/3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24 border-t-4 border-primary-500">
                  <h3 className="text-xl font-bold mb-6 font-heading">Alte Servicii</h3>
                  
                  <div className="space-y-4">
                    {serviceDetails
                      .filter(service => service.id !== activeCategory)
                      .slice(0, 5)
                      .map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                          className="group"
                        >
                          <Link 
                            to={`/servicii?category=${service.id}`}
                            className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4 text-primary-500 group-hover:bg-primary-100 transition-colors duration-300">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h4>
                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{service.description.substring(0, 80)}...</p>
                            </div>
                          </Link>
                        </motion.div>
                      ))
                    }
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link
                      to="/contact"
                      className="inline-block px-6 py-3 bg-primary-50 text-primary-600 rounded-lg font-medium hover:bg-primary-100 transition-colors duration-300 w-full"
                    >
                      Solicită consultanță personalizată
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        // Display all services
        <Services isFullPage={true} />
      )}
      
      <div className="my-16 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la pagina principală
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
