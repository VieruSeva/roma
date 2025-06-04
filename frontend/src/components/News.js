import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaChevronRight, FaExternalLinkAlt, FaImage } from "react-icons/fa";
import ok3 from "../images/ok3.jpg";
import ok5 from "../images/ok5.jpg";
import ok7 from "../images/ok7.jpg";
import expo2 from "../images/Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a_2.png";
import expo3 from "../images/Expoziţie internaţională specializată de maşini, echipamente şi tehnologii pentru complexul agroindustrial, ediţia a XXXXVI-a.png";
import antreprenorExpo from "../images/ANTREPRENOR EXPO.png";
import ipackImage from "../images/ipack.jpg";


export const News = ({ isFullPage = false, activeCategory = 'Toate' }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [newsImages, setNewsImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);

  // Real news from external sources with generic descriptions
  const newsItems = [
    {
      id: 7,
      title: "Schema de ajutor de stat regional pentru investiții",
      summary: "Citește despre programul de ajutor de stat pentru investiții regionale pe site-ul oficial al MDED.",
      fullContent: "Pentru informații complete despre această schemă de ajutor de stat, vizitează site-ul oficial al Ministerului Dezvoltării Economice și Digitalizării unde poți afla toate detaliile.",
      image: "https://images.unsplash.com/photo-1551295022-de5522c94e08", // Professional regional development image
      date: "30 martie 2025",
      author: "MDED.gov.md",
      category: "Programe",
      url: "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
      isExternal: true,
      delay: 0.05
    },
    {
      id: 6,
      title: "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
      summary: "Citește despre situația exporturilor de făină din Moldova pe site-ul original.",
      fullContent: "Pentru informații complete despre această analiză economică, vizitează site-ul Agroexpert.md unde poți găsi toate detaliile despre exporturile și importurile de făină din Republica Moldova.",
      image: null,
      date: "29 martie 2025",
      author: "Agroexpert.md",
      category: "Piață",
      url: "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic",
      isExternal: true,
      delay: 0.1
    },
    {
      id: 1,
      title: "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
      summary: "Afla mai multe despre trendul pâinii cu maia pe site-ul original.",
      fullContent: "Pentru informații complete despre această tendință în panificație, vizitează site-ul Stiri.md unde poți citi articolul întreg.",
      image: null,
      date: "15 ianuarie 2025",
      author: "Stiri.md",
      category: "Panificație",
      url: "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/",
      isExternal: true,
      delay: 0.2
    },
    {
      id: 2,
      title: "În Transnistria se vor scumpi făina și pâinea",
      summary: "Citește despre modificările de prețuri pe site-ul original.",
      fullContent: "Pentru detalii complete despre această situație economică, vizitează site-ul Stiri.md unde poți afla mai multe informații.",
      image: null,
      date: "12 ianuarie 2025",
      author: "Stiri.md",
      category: "Piață",
      url: "https://stiri.md/article/economic/in-transnistria-se-vor-scumpi-faina-si-painea/",
      isExternal: true,
      delay: 0.3
    },
    {
      id: 3,
      title: "Ion Perju: Prețurile s-au majorat nejustificat, grâu în țară este",
      summary: "Află mai multe despre declarațiile oficiale pe site-ul original.",
      fullContent: "Pentru a citi declarația completă și contextul situației, vizitează site-ul Stiri.md.",
      image: null,
      date: "10 ianuarie 2025",
      author: "Stiri.md",
      category: "Piață",
      url: "https://stiri.md/article/economic/ion-perju-preturile-s-au-majorat-nejustificat-grau-in-tara-este/",
      isExternal: true,
      delay: 0.4
    },
    {
      id: 4,
      title: "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record",
      summary: "Citește analiza completă pe site-ul original.",
      fullContent: "Pentru a afla toate detaliile despre această analiză de business, vizitează site-ul Agora.md.",
      image: null,
      date: "21 februarie 2025",
      author: "Agora.md",
      category: "Business",
      url: "https://agora.md/2025/02/21/cel-mai-mare-producator-din-industria-de-panificatie-din-moldova-inregistreaza-un-profit-record",
      isExternal: true,
      delay: 0.5
    },
    {
      id: 5,
      title: "De ce brutarii din Chișinău coc din ce în ce mai puțină pâine",
      summary: "Afla mai multe despre această analiză pe site-ul original.",
      fullContent: "Pentru a citi analiza completă despre tendințele din industrie, vizitează site-ul Europa Liberă.",
      image: null,
      date: "15 decembrie 2024",
      author: "Europa Liberă",
      category: "Tendințe",
      url: "https://moldova.europalibera.org/a/27188328.html",
      isExternal: true,
      delay: 0.6
    }
  ];

  // Fetch real images from news sites using the backend API
  useEffect(() => {
    const fetchNewsImages = async () => {
      try {
        const urls = newsItems
          .filter(news => news.url && news.url !== '#')
          .map(news => news.url);
        
        if (urls.length === 0) {
          setLoadingImages(false);
          return;
        }

        const backendUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
        const apiUrl = `${backendUrl}/api/fetch-multiple-news-images`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(urls)
        });

        if (response.ok) {
          const results = await response.json();
          
          const imageMap = {};
          results.forEach(result => {
            if (result.image_url) {
              imageMap[result.url] = {
                image_url: result.image_url,
                title: result.title,
                description: result.description
              };
            }
          });
          
          setNewsImages(imageMap);
        }
      } catch (error) {
        console.error('Error fetching news images:', error);
      } finally {
        setLoadingImages(false);
      }
    };

    fetchNewsImages();
  }, []);

  // For the full page view, we'll add more news items
  const additionalNews = [
    {
      id: 6,
      title: "Expoziția IPAC IMA – 27-30 mai 2025, Milano, Italia",
      summary: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare.",
      fullContent: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare, găzduind expoziția internațională IPAC IMA. Acest eveniment de renume reunește cele mai mari și inovatoare companii din întreaga lume, specializate în tehnologiile de procesare și ambalare de ultimă generație. IPAC IMA oferă o platformă unică pentru profesioniști, inovatori și investitori din industrie, facilitând schimbul de idei, prezentarea de produse noi și explorarea tendințelor viitorului. Participanții vor avea ocazia să descopere soluții avansate pentru eficientizarea proceselor, reducerea impactului asupra mediului și optimizarea ambalajelor pentru diverse sectoare, de la alimentație și farmaceutice până la bunuri de larg consum. Pe lângă expoziție, evenimentul include o serie de conferințe, ateliere și demonstrații practice susținute de lideri ai industriei. Aceste activități sunt concepute să inspire și să ofere perspective valoroase despre inovațiile tehnologice și strategiile de dezvoltare sustenabilă. IPAC IMA 2025 este mai mult decât o simplă expoziție – este un punct de întâlnire pentru cei care definesc și modelează viitorul procesării și ambalării.",
      image: ipackImage,
      date: "27-30 mai 2025",
      author: "IPAC IMA",
      category: "Evenimente",
      url: "https://www.ipackima.com/ru/",
      delay: 0.1
    },
    {
      id: 9,
      title: "ANTREPRENOR EXPO",
      summary: "Expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ediția III-a",
      fullContent: "ANTREPRENOR EXPO reprezintă o expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ajunsă la ediția III-a. Acest eveniment important va reuni antreprenori, companii, investitori și experți în dezvoltarea afacerilor pentru a prezenta cele mai recente tendințe, inovații și oportunități în sectorul IMM-urilor. Participanții vor avea ocazia să descopere noi tehnologii, să stabilească parteneriate valoroase și să obțină informații despre programele de finanțare și dezvoltare disponibile. Vizitați website-ul oficial pentru mai multe detalii și înregistrare: http://www.antreprenorexpo.moldexpo.md/",
      image: antreprenorExpo,
      date: "20.11.2025 - 23.11.2025",
      author: "Comitetul de Organizare",
      category: "Evenimente",
      url: "http://www.antreprenorexpo.moldexpo.md/",
      delay: 0.2
    },
    {
      id: 8,
      title: "Expoziţie internaţională specializată de maşini, echipamente şi tehnologii pentru complexul agroindustrial, ediţia a XXXXVI-a",
      summary: "Vă invităm să participaţi la cea de-a XXXXVI-a ediţie a expoziţiei internaţionale specializate de maşini, echipamente şi tehnologii pentru complexul agroindustrial.",
      fullContent: "Expoziţia internaţională specializată de maşini, echipamente şi tehnologii pentru complexul agroindustrial, ajunsă la ediţia a XXXXVI-a, reprezintă un eveniment major în calendarul evenimentelor agroindustriale. Expoziţia reuneşte lideri din industrie, producători de echipamente agricole, dezvoltatori de tehnologii inovatoare şi specialişti din domeniul agroindustrial pentru a prezenta cele mai recente soluţii şi inovaţii. Participanţii vor avea oportunitatea de a explora o gamă largă de maşini agricole moderne, sisteme automatizate pentru ferme, tehnologii de precizie pentru agricultură şi soluţii digitale pentru optimizarea proceselor din lanţul valoric agricol. Evenimentul include şi o serie de conferinţe şi workshopuri cu tematici axate pe sustenabilitate, eficienţă şi inovaţie în sectorul agroindustrial, unde experţi recunoscuţi vor împărtăşi din experienţa lor şi vor discuta despre tendinţele şi provocările actuale.",
      image: expo3,
      date: "12-15 noiembrie 2025",
      author: "Comitetul de Organizare",
      category: "Evenimente",
      delay: 0.1
    },
    {
      id: 7,
      title: "Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a",
      summary: "Participaţi la cea de-a XXVII-a ediţie a expoziţiei-târg internaţionale specializate de produse, utilaje şi tehnologii agricole, ce va avea loc între 16-19 octombrie 2025.",
      fullContent: "Expoziţia-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ajunsă la ediţia a XXVII-a, va avea loc în perioada 16-19 octombrie 2025. Acest eveniment important pentru sectorul agricol va reuni producători, furnizori, experţi şi fermieri din întreaga regiune, oferind o platformă ideală pentru schimbul de experienţă, prezentarea celor mai noi tehnologii şi stabilirea de parteneriate de afaceri. Vizitatorii vor avea ocazia să descopere cele mai recente inovaţii în domeniul agriculturii, să participe la demonstraţii practice şi să ia parte la seminarii tematice organizate de specialişti recunoscuţi. Expoziţia va găzdui, de asemenea, concursuri pentru cele mai bune produse agricole tradiţionale şi va oferi un spaţiu dedicat meşteşugurilor tradiţionale legate de agricultură. Vă aşteptăm să descoperiţi viitorul agriculturii într-un cadru profesional şi dinamic!",
      image: expo2,
      date: "16-19 octombrie 2025",
      author: "Departamentul de Organizare Evenimente",
      category: "Evenimente",
      delay: 0.1
    },
    {
      id: 10,
      title: "UNIDO și UE lansează un program de consolidare a capacităților pentru întreprinderile mici și mijlocii",
      summary: "Un program complet de sprijin pentru dezvoltarea întreprinderilor mici și mijlocii din sectorul alimentar și fermieri.",
      fullContent: "UNIDO și UE lansează un program amplu de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri. Acest program strategic se va desfășura pe parcursul unui an între 20 Mai 2025 - 20 Mai 2026 și va oferi sprijin tehnic, financiar și consultanță specializată pentru afacerile din domeniul agroalimentar. Participanții vor beneficia de acces la cele mai noi tehnologii și metode de producție, sesiuni de instruire pentru îmbunătățirea calității produselor și dezvoltarea de noi piețe de desfacere. De asemenea, programul include componente legate de sustenabilitate, reducerea amprentei de carbon și adaptarea la standardele europene de siguranță alimentară. Înscrierile pentru primele sesiuni de training încep de pe 1 aprilie 2025.",
      image: ipackImage,
      date: "15 aprilie 2025",
      author: "UNIDO & Uniunea Europeană",
      category: "Evenimente",
      url: "https://euneighbourseast.eu/ro/opportunities/unido-si-ue-lanseaza-un-program-de-consolidare-a-capacitatilor-pentru-imm-uri-operatori-din-sectorul-alimentar-si-fermieri/",
      delay: 0.7
    },
    {
      id: 11,
      title: "Noi oportunități de export pentru producătorii moldoveni",
      summary: "Deschiderea unor noi piețe de export pentru producătorii moldoveni de produse de panificație.",
      fullContent: "Deschiderea unor noi piețe de export pentru producătorii moldoveni de produse de panificație reprezintă o oportunitate semnificativă pentru industria agroalimentară din Moldova. În urma unui program de promovare inițiat de asociația noastră în colaborare cu Ministerul Agriculturii, producătorii moldoveni au participat la târguri internaționale și au organizat întâlniri B2B cu importatori din diferite țări. Primele contracte au fost deja semnate, iar volumele de export sunt estimate să crească în următorul an. Această diversificare a piețelor de desfacere va contribui la stabilitatea și creșterea sustenabilă a sectorului de panificație din Moldova.",
      image: ok3,
      date: "20 ianuarie 2025",
      author: "ANIMP",
      category: "Oportunități",
      delay: 0.7
    },
    {
      id: 12,
      title: "Inovații în tehnologia de procesare a cerealelor",
      summary: "Prezentarea celor mai noi tehnologii de procesare a cerealelor și impactul acestora asupra calității produselor finite.",
      fullContent: "Prezentarea celor mai noi tehnologii de procesare a cerealelor și impactul acestora asupra calității produselor finite a fost tema unui seminar organizat recent de asociația noastră. Experți din industrie și reprezentanți ai companiilor producătoare de echipamente au prezentat cele mai recente inovații în domeniu, cum ar fi sistemele de măcinare de înaltă precizie, tehnologiile de fermentare controlată și soluțiile de automatizare a proceselor de producție. Aceste tehnologii permit producătorilor să îmbunătățească semnificativ calitatea produselor, să reducă consumul de energie și să minimizeze risipa de materii prime. De asemenea, adoptarea acestor tehnologii contribuie la creșterea competitivității producătorilor moldoveni pe piețele internaționale.",
      image: ok5,
      date: "15 ianuarie 2025",
      author: "ANIMP",
      category: "Tehnologie",
      delay: 0.9
    },
    {
      id: 13,
      title: "Modificări legislative cu impact asupra industriei",
      summary: "Analiză detaliată a noilor modificări legislative și a impactului acestora asupra producătorilor din industria de panificație.",
      fullContent: "Analiză detaliată a noilor modificări legislative și a impactului acestora asupra producătorilor din industria de panificație. Departamentul juridic al asociației noastre a realizat un studiu aprofundat privind modificările aduse Codului Fiscal și legislației specifice industriei alimentare. Sunt analizate schimbările privind taxa pe valoarea adăugată pentru produsele de panificație, noile reglementări privind etichetarea produselor și modificările normelor de siguranță alimentară aliniate la directivele Uniunii Europene. Studiul include recomandări practice pentru adaptarea operațiunilor la noile cerințe legislative și estimări ale impactului financiar pentru diferite categorii de producători. Asociația va organiza o serie de webinarii pentru a explica în detaliu aceste modificări și pentru a răspunde întrebărilor membrilor.",
      image: ok7,
      date: "3 ianuarie 2025",
      author: "ANIMP",
      category: "Legislație",
      delay: 1.1
    }
  ];

  // Combine arrays for the full page view
  const allNews = isFullPage ? [...newsItems, ...additionalNews] : newsItems;
  
  // Filter news based on active category
  const filteredNews = activeCategory === 'Toate' 
    ? allNews 
    : allNews.filter(item => item.category === activeCategory);
    
  // Handle toggle for "Read more"
  const toggleReadMore = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

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
    <section id="noutati" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Ultimele Noutăți</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
              Aflați cele mai recente știri și evenimente din industria agroalimentară
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="news-card bg-white rounded-xl shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover transform hover:-translate-y-2"
            >
              <div className="news-image relative overflow-hidden" style={{ height: "200px" }}>
                {loadingImages ? (
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                    <FaImage className="text-gray-400 text-3xl" />
                  </div>
                ) : item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : newsImages[item.url]?.image_url ? (
                  <img 
                    src={newsImages[item.url].image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <FaImage className="text-primary-400 text-3xl mx-auto mb-2" />
                      <span className="text-primary-600 text-sm">Imagine de pe {item.author}</span>
                    </div>
                  </div>
                )}
                {/* Fallback div for error handling */}
                {newsImages[item.url]?.image_url && (
                  <div className="w-full h-full bg-gradient-to-r from-primary-100 to-blue-100 hidden items-center justify-center">
                    <div className="text-center">
                      <FaImage className="text-primary-400 text-3xl mx-auto mb-2" />
                      <span className="text-primary-600 text-sm">Imagine de pe {item.author}</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                  {item.category}
                </div>
                {/* Source indicator for external news */}
                {item.isExternal && newsImages[item.url]?.image_url && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                    <span>Sursă: {item.author}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-primary-400" />
                  <span>{item.date}</span>
                  <span className="mx-2">|</span>
                  <FaUser className="mr-2 text-primary-400" />
                  <span>{item.author}</span>
                  {item.isExternal && (
                    <>
                      <span className="mx-2">|</span>
                      <FaExternalLinkAlt className="mr-1 text-primary-400" />
                      <span className="text-primary-600 font-medium">Link extern</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-heading hover:text-primary-600 transition-colors duration-300">
                  {item.isExternal ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={`/noutati/${item.id}`}>{item.title}</Link>
                  )}
                </h3>
                
                <div className="text-gray-600 mb-6">
                  {expandedItemId === item.id ? item.fullContent : item.summary}
                </div>
                
                <button 
                  onClick={() => toggleReadMore(item.id)}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                >
                  {expandedItemId === item.id ? 'Citește mai puțin' : 'Citește mai mult'}
                  <FaChevronRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!isFullPage && (
          <div className="text-center mt-12">
            <Link 
              to="/noutati" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
            >
              Vezi toate noutățile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};