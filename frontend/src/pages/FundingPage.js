import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

// Import the required images
import finantariGranturiImg from '../images/Finanșări și granturi.png';
import ifadImg from '../images/Unitatea Consolidată pentru Implementarea Programelor IFAD.png';
import odaImg from '../images/Organizația pentru Dezvoltarea Antreprenoriatului.png';

const FundingPage = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const pageInfo = {
    title: "Finanțări și Granturi",
    description: "Oportunități de finanțare și granturi pentru dezvoltarea afacerilor",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Noutăți", path: "/noutati" },
      { name: "Finanțări și Granturi", path: "/finantari-si-granturi" }
    ]
  };

  // Funding opportunities data with updated logo images
  const fundingOpportunities = [
    {
      id: 1,
      title: "Agenția de Intervenție și Plăți pentru Agricultură (AIPA)",
      description: "AIPA este o instituție publică care gestionează resursele fondului de subvenționare a producătorilor agricoli și alte fonduri destinate susținerii și dezvoltării spațiului rural. Agenția oferă diverse programe de finanțare pentru agricultori și producători din domeniul agro-alimentar.",
      website: "https://aipa.gov.md/ro",
      logo: finantariGranturiImg,
      categories: ["Agricultură", "Dezvoltare rurală"],
      delay: 0.1
    },
    {
      id: 2,
      title: "Unitatea Consolidată pentru Implementarea Programelor IFAD",
      description: "Unitatea implementează în Moldova proiecte finanțate de Fondul Internațional pentru Dezvoltare Agricolă (IFAD). Programele IFAD oferă suport financiar sub formă de granturi pentru tinerii antreprenori din spațiul rural, grupuri de producători, și alte inițiative ce contribuie la dezvoltarea sectorului agricol.",
      website: "https://www.ucipifad.md/granturi/",
      logo: ifadImg,
      categories: ["Tineri antreprenori", "Grupuri de producători"],
      delay: 0.3
    },
    {
      id: 3,
      title: "Organizația pentru Dezvoltarea Antreprenoriatului",
      description: "ODA facilitează accesul antreprenorilor la resurse financiare prin intermediul Programului de Atragere a Remitențelor în Economie (PARE 1+1), Programului pentru Femei în Afaceri (PFA), și alte inițiative de dezvoltare a afacerilor mici și mijlocii din Republica Moldova.",
      website: "https://oda.md",
      logo: odaImg,
      categories: ["IMM", "Femei în afaceri", "Diaspora"],
      delay: 0.5
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="funding-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 font-heading">Oportunități de Finanțare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descoperă sursele de finanțare disponibile pentru dezvoltarea afacerii tale în sectorul agro-alimentar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fundingOpportunities.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className="mb-4 h-24 flex items-center justify-center">
                      <img 
                        src={item.logo} 
                        alt={item.title} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex-grow">
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {item.categories.map((category, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                    <a 
                      href={item.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                    >
                      Vizitează site-ul oficial
                      <FaExternalLinkAlt className="ml-2 text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-8/12 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Asistență pentru Accesarea Finanțărilor</h3>
                <p className="text-gray-700">
                  Asociația noastră oferă consultanță gratuită membrilor pentru identificarea și accesarea oportunităților de finanțare potrivite pentru afacerea dumneavoastră.
                </p>
              </div>
              <div className="md:w-4/12 text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  Solicită consultanță
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          

        </div>
      </section>
      
      <div className="my-16 text-center">
        <Link 
          to="/noutati" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la noutăți
        </Link>
      </div>
    </motion.div>
  );
};

export default FundingPage;