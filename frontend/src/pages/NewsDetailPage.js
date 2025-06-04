import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useParams, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { PageHero } from '../components/PageHero';

// Import all images that might be needed
import ok3 from "../images/ok3.jpg";
import ok5 from "../images/ok5.jpg";
import ok7 from "../images/ok7.jpg";
import expo1 from "../images/Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a.png";
import expo2 from "../images/Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a_2.png";
import expo3 from "../images/Expoziţie internaţională specializată de maşini, echipamente şi tehnologii pentru complexul agroindustrial, ediţia a XXXXVI-a.png";

const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  
  // All news items combined from the News component
  const allNewsItems = [
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
      id: 1,
      title: "Perspective de recoltă pentru anul 2025",
      summary: "Estimările pentru anul 2025 arată o creștere semnificativă a producției de cereale, în special la cultura de grâu și porumb.",
      fullContent: "Estimările pentru anul 2025 arată o creștere semnificativă a producției de cereale, în special la cultura de grâu și porumb. Condițiile meteorologice favorabile din ultimele luni și investițiile în sisteme de irigații moderne au creat premisele unei recolte bogate. Experții din cadrul asociației noastre estimează o creștere cu până la 15% față de anul precedent, ceea ce va consolida poziția României ca unul dintre cei mai importanți exportatori de cereale din Europa de Est. Acest lucru va avea un impact pozitiv asupra întregului sector agroalimentar, asigurând materie primă de calitate pentru industria de panificație și procesare.",
      image: ok3,
      date: "12 ianuarie 2025",
      author: "Mihai Ionescu",
      category: "Analiză",
      delay: 0.1
    },
    {
      id: 2,
      title: "Colaborare cu experți europeni pentru modernizarea sectorului",
      summary: "Asociația a încheiat un parteneriat strategic cu experți din Franța și Germania pentru implementarea unor tehnologii avansate în producția de cereale.",
      fullContent: "Asociația a încheiat un parteneriat strategic cu experți din Franța și Germania pentru implementarea unor tehnologii avansate în producția de cereale. Acest parteneriat se va desfășura pe parcursul a 3 ani și va include programe de formare pentru fermieri, vizite de studiu la ferme de succes din vestul Europei și proiecte pilot pentru testarea noilor tehnologii în condițiile specifice din România. Colaborarea va facilita, de asemenea, accesul producătorilor români la cele mai recente cercetări și inovații în domeniul agriculturii sustenabile și va crea oportunități pentru exportul produselor de panificație românești pe piețele din Europa de Vest.",
      image: ok5,
      date: "28 decembrie 2024",
      author: "Elena Popescu",
      category: "Parteneriate",
      delay: 0.3
    },
    {
      id: 3,
      title: "Conferința anuală a producătorilor de panificație",
      summary: "În data de 15 februarie va avea loc cea de-a XII-a ediție a conferinței anuale a producătorilor din industria de panificație din România.",
      fullContent: "În data de 15 februarie va avea loc cea de-a XII-a ediție a conferinței anuale a producătorilor din industria de panificație din România. Evenimentul va reuni peste 500 de participanți din întreaga țară, inclusiv producători, furnizori de echipamente, reprezentanți ai autorităților și experți internaționali. Tema din acest an este 'Inovație și sustenabilitate în industria de panificație', cu accent pe reducerea amprentei de carbon a proceselor de producție și dezvoltarea unor produse care răspund noilor tendințe în preferințele consumatorilor. Conferința va include prezentări, dezbateri, ateliere practice și o expoziție de echipamente și tehnologii moderne.",
      image: ok7,
      date: "5 ianuarie 2025",
      author: "Adrian Munteanu",
      category: "Evenimente",
      delay: 0.5
    },
    {
      id: 4,
      title: "UNIDO și UE lansează un program de consolidare a capacităților pentru întreprinderile mici și mijlocii",
      summary: "Un program complet de sprijin pentru dezvoltarea întreprinderilor mici și mijlocii din sectorul alimentar și fermieri.",
      fullContent: "UNIDO și UE lansează un program amplu de consolidare a capacităților pentru întreprinderile mici și mijlocii, operatori din sectorul alimentar și fermieri. Acest program strategic se va desfășura pe parcursul unui an între 20 Mai 2025 - 20 Mai 2026 și va oferi sprijin tehnic, financiar și consultanță specializată pentru afacerile din domeniul agroalimentar. Participanții vor beneficia de acces la cele mai noi tehnologii și metode de producție, sesiuni de instruire pentru îmbunătățirea calității produselor și dezvoltarea de noi piețe de desfacere. De asemenea, programul include componente legate de sustenabilitate, reducerea amprentei de carbon și adaptarea la standardele europene de siguranță alimentară. Înscrierile pentru primele sesiuni de training încep de pe 1 aprilie 2025.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      date: "15 aprilie 2025",
      author: "UNIDO & Uniunea Europeană",
      category: "Evenimente",
      url: "https://euneighbourseast.eu/ro/opportunities/unido-si-ue-lanseaza-un-program-de-consolidare-a-capacitatilor-pentru-imm-uri-operatori-din-sectorul-alimentar-si-fermieri/",
      delay: 0.7
    },
    {
      id: 5,
      title: "Noi oportunități de export pentru producătorii români",
      summary: "Deschiderea unor noi piețe de export pentru producătorii români de produse de panificație în țările din Orientul Mijlociu.",
      fullContent: "Deschiderea unor noi piețe de export pentru producătorii români de produse de panificație în țările din Orientul Mijlociu reprezintă o oportunitate semnificativă pentru industria agroalimentară din România. În urma unui program de promovare inițiat de asociația noastră în colaborare cu Ministerul Agriculturii, producătorii români au participat la târguri internaționale și au organizat întâlniri B2B cu importatori din Arabia Saudită, Emiratele Arabe Unite și Qatar. Primele contracte au fost deja semnate, iar volumele de export sunt estimate să crească cu 20% în următorul an. Această diversificare a piețelor de desfacere va contribui la stabilitatea și creșterea sustenabilă a sectorului de panificație din România.",
      image: ok3,
      date: "20 ianuarie 2025",
      author: "Daniel Radu",
      category: "Oportunități",
      delay: 0.7
    },
    {
      id: 6,
      title: "Inovații în tehnologia de procesare a cerealelor",
      summary: "Prezentarea celor mai noi tehnologii de procesare a cerealelor și impactul acestora asupra calității produselor finite.",
      fullContent: "Prezentarea celor mai noi tehnologii de procesare a cerealelor și impactul acestora asupra calității produselor finite a fost tema unui seminar organizat recent de asociația noastră. Experți din industrie și reprezentanți ai companiilor producătoare de echipamente au prezentat cele mai recente inovații în domeniu, cum ar fi sistemele de măcinare de înaltă precizie, tehnologiile de fermentare controlată și soluțiile de automatizare a proceselor de producție. Aceste tehnologii permit producătorilor să îmbunătățească semnificativ calitatea produselor, să reducă consumul de energie și să minimizeze risipa de materii prime. De asemenea, adoptarea acestor tehnologii contribuie la creșterea competitivității producătorilor români pe piețele internaționale.",
      image: ok5,
      date: "15 ianuarie 2025",
      author: "Ana Marin",
      category: "Tehnologie",
      delay: 0.9
    },
    {
      id: 7,
      title: "Modificări legislative cu impact asupra industriei",
      summary: "Analiză detaliată a noilor modificări legislative și a impactului acestora asupra producătorilor din industria de panificație.",
      fullContent: "Analiză detaliată a noilor modificări legislative și a impactului acestora asupra producătorilor din industria de panificație. Departamentul juridic al asociației noastre a realizat un studiu aprofundat privind modificările aduse Codului Fiscal și legislației specifice industriei alimentare. Sunt analizate schimbările privind taxa pe valoarea adăugată pentru produsele de panificație, noile reglementări privind etichetarea produselor și modificările normelor de siguranță alimentară aliniate la directivele Uniunii Europene. Studiul include recomandări practice pentru adaptarea operațiunilor la noile cerințe legislative și estimări ale impactului financiar pentru diferite categorii de producători. Asociația va organiza o serie de webinarii pentru a explica în detaliu aceste modificări și pentru a răspunde întrebărilor membrilor.",
      image: ok7,
      date: "3 ianuarie 2025",
      author: "Cristian Stancu",
      category: "Legislație",
      delay: 1.1
    }
  ];

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Find the news item with the matching ID
    const newsItemId = parseInt(id);
    const foundNewsItem = allNewsItems.find(item => item.id === newsItemId);
    
    if (foundNewsItem) {
      setNewsItem(foundNewsItem);
    }
  }, [id]);

  const pageInfo = {
    title: newsItem?.title || "Noutate",
    description: newsItem?.summary || "Detalii despre noutate",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Noutăți", path: "/noutati" },
      { name: newsItem?.title || "Noutate", path: `/noutati/${id}` }
    ]
  };

  if (!newsItem) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50"
      >
        <PageHero
          title="Noutate negăsită"
          description="Ne pare rău, noutatea pe care o căutați nu a fost găsită."
          breadcrumbs={[
            { name: "Acasă", path: "/" },
            { name: "Noutăți", path: "/noutati" },
            { name: "Noutate negăsită", path: "#" }
          ]}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <Link 
            to="/noutati" 
            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Înapoi la noutăți
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <PageHero
        title={newsItem.title}
        description={newsItem.summary}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-card overflow-hidden">
            <div className="relative h-96">
              <img 
                src={newsItem.image} 
                alt={newsItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                {newsItem.category}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <FaCalendarAlt className="mr-2 text-primary-400" />
                <span>{newsItem.date}</span>
                <span className="mx-2">|</span>
                <FaUser className="mr-2 text-primary-400" />
                <span>{newsItem.author}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-6 font-heading text-gray-800">{newsItem.title}</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6 leading-relaxed">{newsItem.fullContent}</p>
                
                {newsItem.url && (
                  <div className="mt-8">
                    <a 
                      href={newsItem.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300"
                    >
                      Vizitează sursa originală
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-100">
              <Link 
                to="/noutati" 
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" />
                Înapoi la noutăți
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default NewsDetailPage;
