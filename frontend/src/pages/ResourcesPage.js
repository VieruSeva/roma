import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaDownload, FaSearch, FaFileAlt, FaBook, FaChartBar, FaBalanceScale } from 'react-icons/fa';
import main2 from "../images/main2.jpg";

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('publicatii');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Handle URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    if (sectionParam) {
      setActiveTab(sectionParam);
    }
  }, []);

  const pageInfo = {
    title: "Resurse și Publicații",
    description: "Acces la publicații, ghiduri, statistici și reglementări din domeniul industriei de panificație și morărit",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Resurse", path: "/resurse" }
    ]
  };

  // Resource categories
  const categories = [
    { id: 'publicatii', name: 'Publicații', icon: <FaFileAlt /> },
    { id: 'ghiduri', name: 'Ghiduri', icon: <FaBook /> },
    { id: 'statistici', name: 'Statistici', icon: <FaChartBar /> },
    { id: 'reglementari', name: 'Reglementări', icon: <FaBalanceScale /> }
  ];

  // Resource items with mock data
  const resourceItems = {
    publicatii: [
      {
        id: 1,
        title: "Evoluția industriei de panificație în România",
        description: "O analiză detaliată a dezvoltării sectorului de panificație în ultimii 20 de ani",
        type: "PDF",
        size: "2.4 MB",
        date: "12 Mai 2025",
        downloadUrl: "#"
      },
      {
        id: 2,
        title: "Raportul anual al industriei de morărit",
        description: "Analiză comprehensivă a pieței de morărit, tendințelor și proiecțiilor",
        type: "PDF",
        size: "3.8 MB",
        date: "5 Aprilie 2025",
        downloadUrl: "#"
      },
      {
        id: 3,
        title: "Calitatea grâului în România",
        description: "Studiu comparativ privind calitatea grâului utilizat în industria de panificație",
        type: "PDF",
        size: "1.7 MB",
        date: "20 Martie 2025",
        downloadUrl: "#"
      },
      {
        id: 4,
        title: "Tendințe moderne în panificație",
        description: "Inovații și tehnologii emergente în sectorul de panificație",
        type: "PDF",
        size: "4.2 MB",
        date: "15 Februarie 2025",
        downloadUrl: "#"
      }
    ],
    ghiduri: [
      {
        id: 5,
        title: "Ghid de bune practici în procesarea cerealelor",
        description: "Metodologii și tehnici recomandate pentru procesarea optimă a cerealelor",
        type: "PDF",
        size: "5.1 MB",
        date: "25 Mai 2025",
        downloadUrl: "#"
      },
      {
        id: 6,
        title: "Manual de siguranță alimentară pentru brutării",
        description: "Recomandări și proceduri pentru asigurarea siguranței produselor de panificație",
        type: "PDF",
        size: "3.6 MB",
        date: "12 Aprilie 2025",
        downloadUrl: "#"
      },
      {
        id: 7,
        title: "Tehnologii de conservare a produselor de panificație",
        description: "Metode și tehnici pentru prelungirea duratei de viață a produselor",
        type: "PDF",
        size: "2.9 MB",
        date: "8 Martie 2025",
        downloadUrl: "#"
      }
    ],
    statistici: [
      {
        id: 8,
        title: "Analiza consumului de produse de panificație în România",
        description: "Statistici detaliate privind consumul pe regiuni și categorii de produse",
        type: "Excel",
        size: "1.8 MB",
        date: "30 Mai 2025",
        downloadUrl: "#"
      },
      {
        id: 9,
        title: "Date statistice privind producția de grâu 2020-2025",
        description: "Evoluția producției de grâu în România în ultimii 5 ani",
        type: "Excel",
        size: "2.3 MB",
        date: "15 Aprilie 2025",
        downloadUrl: "#"
      },
      {
        id: 10,
        title: "Indicatori economici ai industriei de morărit",
        description: "Analiză financiară și economică a sectorului de morărit",
        type: "PDF",
        size: "3.1 MB",
        date: "5 Aprilie 2025",
        downloadUrl: "#"
      }
    ],
    reglementari: [
      {
        id: 11,
        title: "Legislația europeană privind produsele de panificație",
        description: "Compilație a reglementărilor UE aplicabile sectorului",
        type: "PDF",
        size: "4.2 MB",
        date: "28 Mai 2025",
        downloadUrl: "#"
      },
      {
        id: 12,
        title: "Norme sanitare pentru unitățile de panificație",
        description: "Standarde și cerințe sanitare pentru fabricile și brutăriile din România",
        type: "PDF",
        size: "3.5 MB",
        date: "10 Aprilie 2025",
        downloadUrl: "#"
      },
      {
        id: 13,
        title: "Standarde de calitate pentru făină și produse de panificație",
        description: "Specificații tehnice și standarde de calitate aplicabile în industrie",
        type: "PDF",
        size: "2.8 MB",
        date: "15 Martie 2025",
        downloadUrl: "#"
      },
      {
        id: 14,
        title: "Ghid de etichetare a produselor de panificație",
        description: "Cerințe legale și recomandări pentru etichetarea corectă a produselor",
        type: "PDF",
        size: "1.9 MB",
        date: "5 Februarie 2025",
        downloadUrl: "#"
      }
    ]
  };

  // Filter resources based on search query
  const filteredResources = searchQuery.trim() 
    ? resourceItems[activeTab].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : resourceItems[activeTab];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
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
      className="resources-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
        bgImage={main2}
      />
      
      {/* Search Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Caută în resurse..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 px-6 pr-12 rounded-full border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-all duration-300 shadow-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors duration-300">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Tabs */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium text-base transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Resources List */}
          <div className="max-w-6xl mx-auto">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariants}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">{resource.title}</h3>
                          <p className="text-gray-600 mb-4">{resource.description}</p>
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded font-medium">{resource.type}</span>
                            <span>{resource.size}</span>
                            <span>{resource.date}</span>
                          </div>
                        </div>
                        <a
                          href={resource.downloadUrl}
                          className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 shadow-md"
                          title="Descarcă"
                        >
                          <FaDownload />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">Nu a fost găsită nicio resursă pentru criteriile de căutare.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Ai nevoie de mai multe resurse?</h2>
            <p className="text-lg text-gray-600 mb-8">Contactează-ne pentru acces la resurse suplimentare sau pentru a solicita informații specifice.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold shadow-md hover:bg-primary-600 transition-colors duration-300"
              >
                Contactează-ne
              </Link>
              <Link 
                to="/membri?section=beneficii" 
                className="px-8 py-3 bg-white text-primary-600 border border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                Beneficii membri
              </Link>
            </div>
          </div>
        </div>
      </section>
      
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

export default ResourcesPage;
