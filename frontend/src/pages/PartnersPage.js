import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GTSLogo from '../components/GTSLogo';

// Import partner logos
import basfLogo from '../images/basf.png';
import essedielleLogo from '../images/essedielle.png';
import grotexLogo from '../images/grotex.png';
import rumoLogo from '../images/rumo.png';
import pakmayaLogo from '../images/pakmaya.png';
import ireksLogo from '../images/ireks.png';
import foodtechLogo from '../images/foodtech.png';
import laviosaLogo from '../images/laviosa.png';

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState('tehnologii');
  const [previewModal, setPreviewModal] = useState({ isOpen: false, url: '', title: '' });

  // Modal handlers
  const openPreview = (url, title) => {
    setPreviewModal({ isOpen: true, url, title });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, url: '', title: '' });
  };

  const downloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = filename + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tabs = [
    {
      id: 'tehnologii',
      title: 'Tehnologii și Informații',
      icon: '🏭',
      color: 'primary'
    },
    {
      id: 'materii',
      title: 'Materii Prime',
      icon: '🌾',
      color: 'green'
    },
    {
      id: 'memorandum',
      title: 'Memorandum',
      icon: '📋',
      color: 'blue'
    }
  ];

  // Simplified data for the 3 main technology squares
  const mainTechnologySquares = [
    {
      id: 'lactate',
      title: "Produse Lactate",
      shortInfo: "Soluții specializate pentru industria lactatelor cu protecție produse, etichetare specializată și control temperatură.",
      icon: "🥛",
      category: "LACTATE",
      fullInfo: {
        title: "Produse Lactate",
        content: "Soluții specializate pentru industria lactatelor",
        features: ["Protecție produse", "Etichetare specializată", "Control temperatură"],
        category: "LACTATE",
        icon: "🥛",
        downloadFile: {
          name: "Ofertă Lactate RO",
          url: `${process.env.REACT_APP_BACKEND_URL}/api/download/oferta-lactate-ro.pdf`,
          icon: "🥛"
        }
      }
    },
    {
      id: 'bauturi',
      title: "Tehnologii Băuturi", 
      shortInfo: "Marcare și etichetare pentru industria băuturilor cu etichetare wraparound, marcare laser/inkjet și control calitate.",
      icon: "🍹",
      category: "BĂUTURI",
      fullInfo: {
        title: "Tehnologii Băuturi",
        content: "Marcare și etichetare pentru industria băuturilor",
        features: ["Etichetare wraparound", "Marcare laser/inkjet", "Control calitate"],
        category: "BĂUTURI",
        icon: "🍹",
        downloadFile: {
          name: "Industria Băuturilor",
          url: `${process.env.REACT_APP_BACKEND_URL}/api/download/industria-bauturilor.pdf`,
          icon: "🍹"
        }
      }
    },
    {
      id: 'oua',
      title: "Industria Ouălor",
      shortInfo: "Marcare și ambalare completă pentru ouă - până la 14,400 ouă/oră, marcare inkjet, aplicare etichete cutii.",
      icon: "🥚",
      category: "SOLUȚII SPECIALIZATE",
      fullInfo: {
        title: "Industria Ouălor",
        content: "Marcare și ambalare completă pentru ouă",
        features: ["Până la 14,400 ouă/oră", "Marcare inkjet", "Aplicare etichete cutii"],
        category: "SOLUȚII SPECIALIZATE", 
        icon: "🥚",
        downloadFile: {
          name: "Ofertă Carne și Ouă RO",
          url: `${process.env.REACT_APP_BACKEND_URL}/api/download/oferta-carne-si-oua-ro.pdf`,
          icon: "🥩"
        }
      }
    }
  ];

  // GTS Main Company Information
  const gtsCompanyData = {
    title: "GTS AUTOMATION",
    content: "Soluții și tehnologii sigure și de înaltă calitate, adaptate nevoilor și obiectivelor clienților noștri.",
    stats: [
      { label: "25.000+ soluții vândute", icon: "📊" },
      { label: "100+ parteneri", icon: "🤝" },
      { label: "15 ani de activitate, >140 angajați", icon: "⏰" },
      { label: "19 filiale", icon: "🏢" }
    ],
    coverage: "În România și internațional în Ungaria, Republica Moldova, Muntenegru, Serbia, Bosnia și Herțegovina, Kosovo",
    category: "EXPERIENȚĂ ȘI EXPERTIZĂ",
    isMainCompany: true,
    contactInfo: {
      phone: "+373 78 11 33 11",
      email: "office@gts.md",
      address: "mun. Chișinău, str. Uzinelor 19, MD-2023",
      website: "www.gts.md"
    }
  };

  // Partners data
  const rawMaterialsData = [
    {
      name: "FOODTECH",
      description: "Furnizor de ingrediente și soluții pentru industria alimentară",
      website: "https://macros.net.ua/en/",
      logo: foodtechLogo,
      category: "Ingrediente"
    },
    {
      name: "IREKS",
      description: "Ingrediente și aditivi pentru panificație și cofetărie",
      website: "https://www.ireks.com/en/",
      logo: ireksLogo,
      category: "Panificație"
    },
    {
      name: "Pakmaya",
      description: "Drojdie și ingrediente pentru produse de patiserie",
      website: "https://pakmaya.ro/",
      logo: pakmayaLogo,
      category: "Drojdie"
    },
    {
      name: "GROTEX",
      description: "Soluții și echipamente pentru industria alimentară",
      website: "https://grotex.com.pl/en/",
      logo: grotexLogo,
      category: "Echipamente"
    },
    {
      name: "Essedielle",
      description: "Soluții enologice și ingrediente pentru băuturi",
      website: "https://www.essedielleenologia.com/en/",
      logo: essedielleLogo,
      category: "Enologie"
    },
    {
      name: "BASF",
      description: "Chimicale și ingrediente pentru industria alimentară",
      website: "https://www.basf.com/global/en",
      logo: basfLogo,
      category: "Chimicale"
    },
    {
      name: "Laviosa",
      description: "Minerale și ingrediente naturale",
      website: "https://www.laviosa.com/",
      logo: laviosaLogo,
      category: "Minerale"
    },
    {
      name: "RUMO",
      description: "Soluții și ingrediente specializate pentru industria alimentară",
      website: "https://rumo.ua/ua/",
      logo: rumoLogo,
      category: "Ingrediente Speciale"
    }
  ];

  const memorandumData = [
    {
      title: "Cooperare Comercială și Economică Ucraina-Moldova 🇺🇦🇲🇩",
      content: "Continuăm să construim o cooperare comercială și economică între Ucraina și Moldova! La 23 ianuarie 2025, însărcinat cu afaceri al Ucrainei în Republica Moldova, Nataliia Sirenko, împreună cu președintele Asociației Ukrkondprom Oleksandr Baldyniuk, au avut o serie de întâlniri importante cu reprezentanții Camerei de Comerț și Industrie a Republicii Moldova, ai Asociației Brutarilor din Moldova și ai cercurilor de afaceri din țară.",
      sections: [
        "Întâlnire cu Camera de Comerț și Industrie - discuții despre cooperare și integrarea UE",
        "Dialog cu Asociația Brutarilor din Moldova - parteneriate în industria cofetăriei", 
        "Întâlnire cu reprezentant afaceri moldovenești - proiecte comune pentru piețele UE și Turcia",
        "Acorduri pentru schimb de propuneri și forum de afaceri pentru ambele țări"
      ],
      status: "Activ",
      partners: "Ucraina & Moldova",
      details: "Întâlnirea cu Președintele Camerei de Comerț și Industrie a Republicii Moldova, Sergiu Harea, a fost dedicată discuțiilor despre viitoarea cooperare, implementarea unor proiecte comune, precum și integrarea Ucrainei și Republicii Moldova în UE. O atenție deosebită a fost acordată implicării exportatorilor ucraineni în evenimentele expoziționale din Moldova. Astfel de evenimente deschid noi oportunități pentru afacerile ucrainene: extinderea contactelor, studierea pieței și stabilirea de parteneriate.",
      additionalInfo: "O discuție fructuoasă cu Asociația Brutarilor din Moldova, condusă de Serghei Roșca și Victoria Graur, sa concentrat pe dezvoltarea parteneriatelor în industria cofetăriei. S-au ajuns la acorduri privind schimbul de propuneri și organizarea unui forum de afaceri pentru potențialele contrapărți din ambele țări. Oleksandr Baldyniuk a sugerat să se ia în considerare posibilitatea semnării unui memorandum de cooperare între asociațiile de specialitate.",
      conclusion: "Întâlnirea cu un reprezentant al afacerilor moldovenești Crudu Ion a confirmat interesul profund al afacerilor moldovenești în cooperarea cu Ucraina. Domnul Crudu, care are mulți ani de experiență în lucrul cu Ucraina și acordarea de asistență umanitară regiunilor afectate, și-a exprimat disponibilitatea de a lucra la proiecte comune care să permită companiilor ucrainene și moldovenești să intre pe piețele UE și Turcia. Unirea eforturilor antreprenorilor ucraineni și moldoveni deschide noi perspective pentru ambele țări. Suntem recunoscători tuturor partenerilor pentru dialogul constructiv și dorința de cooperare reciproc avantajoasă! 🇺🇦🇲🇩 Împreună la noi realizări!",
      sourceUrl: "https://www.facebook.com/UAEmbMD/posts/pfbid02fUQAA5w6pSdpqHfthtpDUa1roo6XZiC7jUrZbgn4rXXi9GUPcFJqTzuUcmBJKDrZl"
    }
  ];

  const getTabColorClasses = (color, isActive) => {
    const colorClasses = {
      primary: isActive 
        ? 'bg-primary-500 text-white border-primary-500' 
        : 'bg-white text-primary-600 border-gray-200 hover:border-primary-300 hover:text-primary-700',
      green: isActive 
        ? 'bg-green-500 text-white border-green-500' 
        : 'bg-white text-green-600 border-gray-200 hover:border-green-300 hover:text-green-700',
      blue: isActive 
        ? 'bg-blue-500 text-white border-blue-500' 
        : 'bg-white text-blue-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
    };
    return colorClasses[color];
  };

  const renderTehnologii = () => (
    <div className="space-y-6">
      {/* GTS Main Company Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl p-8 text-white mb-8"
      >
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center p-2 mb-4 md:mb-0 md:mr-6 shadow-lg">
            <GTSLogo className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2 text-center md:text-left bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">{gtsCompanyData.title}</h2>
            <span className="text-primary-400 font-medium">{gtsCompanyData.category}</span>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">{gtsCompanyData.content}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {gtsCompanyData.stats.map((stat, statIndex) => (
            <div key={statIndex} className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-lg font-semibold text-white">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-white mb-2">Acoperire:</h4>
          <p className="text-gray-300">{gtsCompanyData.coverage}</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Contact:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p><strong>Tel:</strong> {gtsCompanyData.contactInfo.phone}</p>
              <p><strong>Email:</strong> {gtsCompanyData.contactInfo.email}</p>
            </div>
            <div>
              <p><strong>Adresă:</strong> {gtsCompanyData.contactInfo.address}</p>
              <p><strong>Website:</strong> {gtsCompanyData.contactInfo.website}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Three Main Technology Squares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mainTechnologySquares.map((square, index) => (
          <motion.div
            key={square.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 1) * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
          >
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{square.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{square.title}</h3>
              <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                {square.category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">{square.shortInfo}</p>
            
            {/* Preview and Download Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => openPreview(square.fullInfo.downloadFile.url, square.fullInfo.downloadFile.name)}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">👁️</span>
                Previzualizează documentul
              </button>
              
              <button
                onClick={() => downloadFile(square.fullInfo.downloadFile.url, square.fullInfo.downloadFile.name)}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">⬇️</span>
                Descarcă fișierul
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMaterii = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Materii Prime</h3>
        <p className="text-gray-700 leading-relaxed">
          „Aveți oportunitatea de a colabora cu liderii în furnizarea de materii prime pentru industria agroalimentară. 
          Alegând parteneri de încredere, vă asigurați calitatea excelentă a produselor, siguranța stocurilor și relații solide pe termen lung."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rawMaterialsData.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="text-center mb-6">
              <div className="h-32 w-full flex items-center justify-center mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 group-hover:shadow-md transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-h-24 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center h-24 w-32 bg-gray-200 rounded-lg text-gray-500 text-sm font-medium">
                  {partner.name}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{partner.name}</h4>
              <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full group-hover:bg-green-200 transition-colors duration-300">
                {partner.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-base mb-6 leading-relaxed text-center">
              {partner.description}
            </p>
            
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] transform"
            >
              <span className="mr-3 text-lg">🌐</span>
              Vizitează site-ul
              <span className="ml-3 text-lg">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMemorandum = () => (
    <div className="space-y-6">
      {/* Download Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Documente Memorandum</h3>
        <p className="text-gray-700 leading-relaxed text-center mb-6">
          Descărcați documentele oficiale de memorandum pentru a avea acces la informațiile complete și detaliate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/memorandum1.docx"
            download="memorandum1.docx"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">📄</span>
            Descarcă Memorandum 1
            <span className="ml-2">⬇️</span>
          </a>
          <a
            href="/memorandum2.docx"
            download="memorandum2.docx"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">📄</span>
            Descarcă Memorandum 2
            <span className="ml-2">⬇️</span>
          </a>
        </div>
      </div>
      
      {memorandumData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <div className="flex items-center mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Activ' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{item.partners}</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">{item.content}</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-800 mb-3">Puncte principale:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {item.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex items-start text-sm text-gray-600 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                  {section}
                </div>
              ))}
            </div>
          </div>
          
          {item.details && (
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Camera de Comerț și Industrie:</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{item.details}</p>
            </div>
          )}
          
          {item.additionalInfo && (
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Asociația Brutarilor din Moldova:</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{item.additionalInfo}</p>
            </div>
          )}
          
          {item.conclusion && (
            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Concluzii și perspective:</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{item.conclusion}</p>
            </div>
          )}
          
          {item.sourceUrl && (
            <div className="border-t pt-4 mt-4 text-center">
              <a 
                href={item.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="mr-2">🔗</span>
                Citește mai multe pe Facebook
                <span className="ml-2">→</span>
              </a>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tehnologii':
        return renderTehnologii();
      case 'materii':
        return renderMaterii();
      case 'memorandum':
        return renderMemorandum();
      default:
        return renderTehnologii();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Parteneri și Resurse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperiți resursele și informațiile esențiale pentru industria de panificație și morărit
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center mb-8 gap-4"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 flex items-center space-x-2 ${getTabColorClasses(tab.color, activeTab === tab.id)}`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-amber-400 bg-clip-text text-transparent">Aveți nevoie de informații suplimentare?</h2>
          <p className="text-gray-300 mb-6">
            Contactați-ne pentru detalii despre parteneriatele noastre și oportunitățile de colaborare
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-primary-600 to-amber-600 hover:from-primary-700 hover:to-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Contactați-ne
            </a>
            <a
              href="mailto:office@anipm.md"
              className="border-2 border-gray-600 hover:border-primary-400 text-gray-300 hover:text-primary-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
            >
              office@anipm.md
            </a>
          </div>
        </motion.div>

        {/* PDF Preview Modal */}
        <AnimatePresence>
          {previewModal.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={closePreview}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">{previewModal.title}</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => downloadFile(previewModal.url, previewModal.title)}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                    >
                      <span className="mr-2">⬇️</span>
                      Descarcă
                    </button>
                    <button
                      onClick={closePreview}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      ✕ Închide
                    </button>
                  </div>
                </div>
                
                {/* PDF Viewer */}
                <div className="flex-1 p-4">
                  <iframe
                    src={previewModal.url}
                    className="w-full h-full border border-gray-300 rounded-lg"
                    title={previewModal.title}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PartnersPage;