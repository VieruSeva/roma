import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

// Import images
import expo1 from "../images/Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a.png";
import expo2 from "../images/Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a_2.png";
import ebaImage from "../images/eba.jpg";
import eta2025Image from "../images/eta2025.jpg";
import energy2025Video from "../images/energy2025.mp4";
import ipackImage from "../images/ipack.jpg";

const EventsPage = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);
  
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

  const toggleReadMore = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const pageInfo = {
    title: "Evenimente",
    description: "Descoperă evenimentele importante din industria de panificație și morărit",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Evenimente", path: "/evenimente" }
    ]
  };

  // Events data
  const events = [
    {
      id: 6,
      title: "ENERGY TRANSITION AGENDA - 4th edition / AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
      title_en: "ENERGY TRANSITION AGENDA - 4th edition",
      title_ro: "AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
      description: "Asociația Businessului European (EBA Moldova) are deosebita onoare și plăcere să Vă lanseze invitația la evenimentul Energy Transition Agenda 2025.",
      startDate: "15 Iunie 2025",
      endDate: "15 Iunie 2025",
      location: "Chișinău, Republica Moldova",
      image: eta2025Image,
      url: "https://eba-md.translate.goog/eng/news/energy-transition-agenda---4th-edition?_x_tr_sl=en&_x_tr_tl=ro&_x_tr_hl=ro&_x_tr_pto=sc",
      hasVideo: true,
      video: energy2025Video,
      bilingual: true,
      fullContent: "Asociația Businessului European (EBA Moldova) are deosebita onoare și plăcere să Vă lanseze invitația la evenimentul Energy Transition Agenda 2025. Evenimentul va avea loc în cea de-a 4-a ediție, fiind unul dintre cele mai mari și mai interesante evenimente din industria energetică din Republica Moldova, organizat de EBA Moldova. În fiecare an, acest eveniment reunește reprezentanți ai mediului de afaceri, instituții publice din domeniu, investitori interesați și experți pentru a împărtăși cele mai recente informații din sectorul energetic și al energiei regenerabile. În lumina ultimelor evenimente legate de sectorul energetic, precum și a necesității de a dezvolta industria energiei regenerabile în Republica Moldova, EBA Moldova susține și prioritizează în agenda sa politică subiectul securității energetice ca fiind unul de importanță majoră. Scopul evenimentului se focusează pe industria energetică și regenerabile, să prezinte status quo-ul, provocările actuale și acțiunile întreprinse, perspectivele regionale și oportunitățile de investiții. Subiectele abordate variază de la prezentarea evoluțiilor sectorului energetic în RM - până la identificarea necesităților și carentelor ce țin de implementarea și utilizarea resurselor regenerabile în Republica Moldova, precum și organizarea licitațiilor pentru construcția capacităților mari de energie regenerabilă, reducerea dependenței de importul de energie, decarbonizarea economiei și crearea de noi locuri de muncă și realizarea angajamentelor asumate ale Republicii Moldova în domeniul energetic astfel încât să asigurăm un dialog activ cu toți actorii implicați în proces: Securitatea energetică/piața energetică, Tranziția la sursele de energie regenerabile/licitațiile pentru sursele de energie regenerabile, Infrastructura de rețea/echilibrare/stocare. Audiența: mediul de afaceri, instituțiile publice din domeniu, investitorii interesați, experți din sectorul energetic și regenerabile, partenerii de dezvoltare și instituțiile internaționale, corpul diplomatic și mass media."
    },
    {
      id: 7,
      title: "Expoziția IPAC IMA – 27-30 mai 2025, Milano, Italia",
      description: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare, găzduind expoziția internațională IPAC IMA.",
      startDate: "27 Mai 2025",
      endDate: "30 Mai 2025",
      location: "Milano, Italia",
      image: ipackImage,
      url: "https://www.ipackima.com/about/la-fiera.html",
      fullContent: "În perioada 27-30 mai 2025, Milano, Italia, devine epicentrul industriei globale de procesare și ambalare, găzduind expoziția internațională IPAC IMA. Acest eveniment de renume reunește cele mai mari și inovatoare companii din întreaga lume, specializate în tehnologiile de procesare și ambalare de ultimă generație. IPAC IMA oferă o platformă unică pentru profesioniști, inovatori și investitori din industrie, facilitând schimbul de idei, prezentarea de produse noi și explorarea tendințelor viitorului. Participanții vor avea ocazia să descopere soluții avansate pentru eficientizarea proceselor, reducerea impactului asupra mediului și optimizarea ambalajelor pentru diverse sectoare, de la alimentație și farmaceutice până la bunuri de larg consum. Pe lângă expoziție, evenimentul include o serie de conferințe, ateliere și demonstrații practice susținute de lideri ai industriei. Aceste activități sunt concepute să inspire și să ofere perspective valoroase despre inovațiile tehnologice și strategiile de dezvoltare sustenabilă. IPAC IMA 2025 este mai mult decât o simplă expoziție – este un punct de întâlnire pentru cei care definesc și modelează viitorul procesării și ambalării."
    },
    {
      id: 1,
      title: "UNIDO și UE lansează un program de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri",
      description: "Un program complet de sprijin pentru dezvoltarea întreprinderilor mici și mijlocii din sectorul alimentar, oferind consultanță, training și acces la fonduri pentru modernizare.",
      startDate: "20 Mai 2025",
      endDate: "20 Mai 2026",
      location: "Chișinău, Republica Moldova",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      url: "https://euneighbourseast.eu/ro/opportunities/unido-si-ue-lanseaza-un-program-de-consolidare-a-capacitatilor-pentru-imm-uri-operatori-din-sectorul-alimentar-si-fermieri/",
      fullContent: "UNIDO și UE lansează un program amplu de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri. Acest program strategic se va desfășura pe parcursul unui an și va oferi sprijin tehnic, financiar și consultanță specializată pentru afacerile din domeniul agroalimentar. Participanții vor beneficia de acces la cele mai noi tehnologii și metode de producție, sesiuni de instruire pentru îmbunătățirea calității produselor și dezvoltarea de noi piețe de desfacere. De asemenea, programul include componente legate de sustenabilitate, reducerea amprentei de carbon și adaptarea la standardele europene de siguranță alimentară. Înscrierile pentru primele sesiuni de training încep de pe 1 aprilie 2025."
    },
    {
      id: 2,
      title: "Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a",
      description: "Cel mai important eveniment anual dedicat industriei agricole și alimentare din Republica Moldova, reunind producători, furnizori de echipamente și experți din domeniu.",
      startDate: "16 Octombrie 2025",
      endDate: "19 Octombrie 2025",
      location: "Chișinău, Republica Moldova",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      additionalImages: [expo2],
      url: "http://www.farmer.moldexpo.md/",
      fullContent: "Expoziţia-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a, reprezintă cel mai important eveniment anual dedicat industriei agricole și alimentare din Republica Moldova. Cu o tradiție de peste două decenii, evenimentul reunește peste 300 de expozanți din 15 țări și atrage aproximativ 20.000 de vizitatori profesioniști. Participanții vor avea oportunitatea de a descoperi cele mai noi echipamente, tehnologii și inovații în domeniul agriculturii, de a participa la demonstrații practice, seminarii și conferințe de specialitate. Secțiunile speciale includ: utilaje agricole, sisteme de irigații, soiuri de semințe, produse de protecție a plantelor, tehnologii de procesare a alimentelor, soluții de ambalare, precum și o zonă dedicată meșteșugurilor tradiționale. Înscrierile pentru expozanți sunt deschise până pe 1 septembrie 2025."
    },
    {
      id: 3,
      title: "ANTREPRENOR EXPO",
      description: "Expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ediția III-a",
      startDate: "20 Noiembrie 2025",
      endDate: "23 Noiembrie 2025",
      location: "Chișinău, Republica Moldova",
      image: expo2,
      url: "http://www.antreprenorexpo.moldexpo.md/",
      fullContent: "Expoziţie de dezvoltare și promovare a businessului mic și mijlociu din Republica Moldova, ediția III-a. Acest eveniment oferă o platformă unică pentru antreprenorii locali de a-și prezenta produsele și serviciile, de a stabili contacte de afaceri și de a accesa noi piețe. Pe durata evenimentului vor fi organizate workshop-uri practice, sesiuni de networking și conferințe tematice pe subiecte de interes pentru sectorul IMM-urilor. Participanții vor avea, de asemenea, oportunitatea de a interacționa cu reprezentanți ai instituțiilor financiare și ai programelor de finanțare disponibile pentru dezvoltarea afacerilor."
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
      className="events-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center font-heading">Evenimente Viitoare</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Participă la cele mai importante evenimente din industrie și rămâi conectat cu noutățile și tendințele
          </p>
          
          <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-60 md:h-full relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold py-2 px-4 uppercase tracking-wide">
                        Eveniment
                      </div>
                    </div>
                    
                    {/* Additional images for expanded view */}
                    {expandedEventId === event.id && event.additionalImages && event.additionalImages.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                        {event.additionalImages.map((img, imgIndex) => (
                          <div key={imgIndex} className="h-24 overflow-hidden rounded-lg">
                            <img 
                              src={img} 
                              alt={`${event.title} - ${imgIndex + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        <FaCalendarAlt className="mr-2" /> 
                        {event.startDate} - {event.endDate}
                      </span>
                      <span className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                        <FaMapMarkerAlt className="mr-2" /> 
                        {event.location}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 hover:text-primary-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {expandedEventId === event.id && event.hasVideo ? (
                          <div className="space-y-4">
                            <div>{event.fullContent}</div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Video Prezentare</h4>
                              <video 
                                controls 
                                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                                poster={event.image}
                              >
                                <source src={event.video} type="video/mp4" />
                                Browser-ul dvs. nu suportă video HTML5.
                              </video>
                            </div>
                          </div>
                        ) : (
                          expandedEventId === event.id ? event.fullContent : event.description
                        )}
                    </p>
                    
                    <div className="flex flex-wrap justify-end mt-auto">
                      <button
                        onClick={() => toggleReadMore(event.id)}
                        className="inline-flex items-center mr-2 px-4 py-2 bg-white border border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-50 transition-colors duration-300"
                      >
                        {expandedEventId === event.id ? 'Citește mai puțin' : 'Citește mai mult'}
                        <FaChevronRight className="ml-2 text-xs" />
                      </button>
                      
                      <a 
                        href={event.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                      >
                        Detalii
                        <FaExternalLinkAlt className="ml-2 text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center font-heading">Evenimente Trecute</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Revezi cele mai recente evenimente și conferințe organizate de asociația noastră
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/arhiva"
              className="px-6 py-3 bg-white border border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              Accesează arhiva evenimentelor
            </Link>
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

export default EventsPage;