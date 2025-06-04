import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { motion } from 'framer-motion';

// Import ODA images directly
import odaImage1 from '../images/oda1.jpg';
import odaImage2 from '../images/oda2.jpg';
import odaImage3 from '../images/oda3.jpg';
import odaImage4 from '../images/oda4.jpg';
import odaImage5 from '../images/oda5.jpg';
import odaImage6 from '../images/oda6.jpg';
import odaImage7 from '../images/oda7.jpg';
import odaImage8 from '../images/oda8.jpg';
import odaImage9 from '../images/oda9.jpg';
import odaImage10 from '../images/oda10.jpg';

const OdaFoodTechnologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const photos = [
    {
      id: 1,
      src: odaImage1,
      title: 'ODA la Food Technology 2025 - Prezentare',
      description: 'Alexandru Cebanu prezintă oportunitățile de dezvoltare oferite de stat cu sprijinul Uniunii Europene.'
    },
    {
      id: 2,
      src: odaImage2,
      title: 'ODA la Food Technology 2025 - Consultanță',
      description: 'Serviciul Consultanță ODA oferă informații despre programele de finanțare pentru antreprenori.'
    },
    {
      id: 3,
      src: odaImage3,
      title: 'ODA la Food Technology 2025 - Networking',
      description: 'Antreprenori în dialog cu reprezentanții ODA despre oportunități de dezvoltare.'
    },
    {
      id: 4,
      src: odaImage4,
      title: 'ODA la Food Technology 2025 - Standuri',
      description: 'Standurile ODA prezintă informații despre granturi și finanțări disponibile.'
    },
    {
      id: 5,
      src: odaImage5,
      title: 'ODA la Food Technology 2025 - Demonstrații',
      description: 'Soluții inovatoare pentru industria alimentară prezentate în cadrul conferinței.'
    },
    {
      id: 6,
      src: odaImage6,
      title: 'ODA la Food Technology 2025 - Echipamente',
      description: 'Echipamente de procesare moderne prezentate la expoziție.'
    },
    {
      id: 7,
      src: odaImage7,
      title: 'ODA la Food Technology 2025 - Participanți',
      description: 'Participanți din industria alimentară explorând noile tehnologii.'
    },
    {
      id: 8,
      src: odaImage8,
      title: 'ODA la Food Technology 2025 - IMM-uri',
      description: 'Întreprinderile mici și mijlocii află despre programele de modernizare.'
    },
    {
      id: 9,
      src: odaImage9,
      title: 'ODA la Food Technology 2025 - Export',
      description: 'Prezentare despre standardele internaționale și oportunitățile de export.'
    },
    {
      id: 10,
      src: odaImage10,
      title: 'ODA la Food Technology 2025 - Lanțuri valorice',
      description: 'Discuții despre integrarea în lanțurile valorice naționale și internaționale.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="ODA la Food Technology 2025"
        subtitle="Galerie de la evenimentul Food Technology 2025 cu participarea Organizației pentru Dezvoltarea Antreprenoriatului"
        backgroundImage="/images/archive-hero-bg.jpg" 
      />

      <section className="py-12 md:py-20 section-padding">
        <div className="container mx-auto px-4">
          {/* Tabs navigation */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
              <button 
                className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'about' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                onClick={() => handleTabChange('about')}
              >
                Despre eveniment
              </button>
              <button 
                className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'gallery' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                onClick={() => handleTabChange('gallery')}
              >
                Galerie foto
              </button>
              <button 
                className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'benefits' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                onClick={() => handleTabChange('benefits')}
              >
                Beneficii program
              </button>
            </div>
          </div>

          {/* About tab content */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">
                  𝐎𝐃𝐀, 𝐚𝐥𝐚̆𝐭𝐮𝐫𝐢 𝐝𝐞 𝐚𝐧𝐭𝐫𝐞𝐩𝐫𝐞𝐧𝐨𝐫𝐢 𝐥𝐚 𝐅𝐨𝐨𝐝 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝟐𝟎𝟐𝟓!
                </h2>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <p className="mb-4">
                      <strong>Alexandru Cebanu</strong>, Șef al Serviciului Consultanță ODA, a prezentat oportunitățile de dezvoltare oferite de stat cu sprijinul Uniunii Europene, al Băncii Mondiale și al altor parteneri internaționali.
                    </p>

                    <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 mb-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary-800">
                        În prim-plan: 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐮𝐥 𝐝𝐞 𝐜𝐫𝐞𝐬̦𝐭𝐞𝐫𝐞 𝐚 𝐜𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐯𝐢𝐭𝐚̆𝐭̦𝐢𝐢 𝐩𝐫𝐨𝐝𝐮𝐜𝐚̆𝐭𝐨𝐫𝐢𝐥𝐨𝐫 𝐥𝐨𝐜𝐚𝐥𝐢 𝐬̦𝐢 𝐢𝐧𝐭𝐞𝐠𝐫𝐚𝐫𝐞 𝐢̂𝐧 𝐥𝐚𝐧𝐭̦𝐮𝐫𝐢𝐥𝐞 𝐯𝐚𝐥𝐨𝐫𝐢𝐜𝐞
                      </h3>
                      <p className="text-primary-700">
                        Granturi de până la <strong className="text-2xl">𝟐 𝐦𝐢𝐥𝐢𝐨𝐚𝐧𝐞 𝐝𝐞 𝐥𝐞𝐢</strong> pentru IMM-urile care vor să se modernizeze, să respecte standardele internaționale și să ajungă la export.
                      </p>
                    </div>

                    <p className="mb-6">
                      Experții au prezentat în cadrul conferinței soluții inovatoare pentru industria alimentară – de la echipamente de procesare la demonstrații culinare live.
                    </p>

                    <blockquote className="bg-gray-50 p-6 rounded-lg border border-gray-200 italic text-gray-700 mb-6">
                      „𝐸𝑞𝑡𝑒 𝑖𝑚𝑝𝑜𝑟𝑡𝑎𝑛𝑡 𝑐𝑎 𝑖̂𝑛𝑡𝑟𝑒𝑝𝑟𝑖𝑛𝑑𝑒𝑟𝑖𝑙𝑒 𝑚𝑜𝑙𝑑𝑜𝑣𝑒𝑛𝑒𝑞̦𝑡𝑖 𝑞𝑎̆ 𝑎𝑖𝑏𝑎̆ 𝑎𝑣𝑎𝑛𝑡𝑎𝑗𝑒 𝑐𝑜𝑚𝑝𝑒𝑡𝑖𝑡𝑖𝑣𝑒 𝑡𝑒ℎ𝑛𝑜𝑙𝑜𝑔𝑖𝑐𝑒, 𝑢𝑚𝑎𝑛𝑒 𝑞𝑎𝑢 𝑑𝑒 𝑎𝑙𝑡 𝑔𝑒𝑛. 𝑃𝑟𝑖𝑛 𝑃𝑟𝑜𝑔𝑟𝑎𝑚𝑢𝑙 𝑑𝑒 𝑐𝑜𝑚𝑝𝑒𝑡𝑖𝑡𝑖𝑣𝑖𝑡𝑎𝑡𝑒 𝑞̦𝑖 𝑖𝑛𝑡𝑒𝑔𝑟𝑎𝑟𝑒 𝑖̂𝑛 𝑙𝑎𝑛𝑡̦𝑢𝑟𝑖 𝑣𝑎𝑙𝑜𝑟𝑖𝑐𝑒 𝑎 𝐼𝑀𝑀-𝑢𝑟𝑖𝑙𝑜𝑟 𝑑𝑖𝑛 𝑀𝑜𝑙𝑑𝑜𝑣𝑎, 𝑎𝑑𝑢𝑐𝑒𝑚 𝑖𝑛𝑣𝑒𝑞𝑡𝑖𝑡̦𝑖𝑖 𝑖̂𝑛 𝑐𝑢𝑛𝑜𝑞̦𝑡𝑖𝑛𝑡̦𝑒 𝑞̦𝑖 𝑡𝑒ℎ𝑛𝑜𝑙𝑜𝑔𝑖𝑖, 𝑎𝑞𝑡𝑓𝑒𝑙 𝑖̂𝑛𝑐𝑎̂𝑡 𝑞𝑎̆ 𝑎𝑗𝑢𝑡𝑎̆𝑚 𝑙𝑎 𝑑𝑒𝑧𝑣𝑜𝑙𝑡𝑎𝑟𝑒, 𝑖𝑎𝑟 𝑝𝑟𝑜𝑑𝑢𝑞𝑒𝑙𝑒 𝑞̦𝑖 𝑞𝑒𝑟𝑣𝑖𝑐𝑖𝑖𝑙𝑒 𝑚𝑜𝑙𝑑𝑜𝑣𝑒𝑛𝑒𝑞̦𝑡𝑖 𝑞𝑎̆ 𝑎𝑗𝑢𝑛𝑔𝑎̆ 𝑚𝑎𝑖 𝑢𝑞̦𝑜𝑟 𝑝𝑒 𝑛𝑜𝑖 𝑝𝑖𝑒𝑡̦𝑒, 𝑙𝑎 𝑛𝑜𝑖 𝑐𝑙𝑖𝑒𝑛𝑡̦𝑖"
                      <footer className="mt-4 text-right">
                        — <strong>Alexandru Cebanu</strong>, Șef Serviciul Consultanță ODA
                      </footer>
                    </blockquote>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                      <p className="text-green-800 font-medium">
                        Vă încurajăm să valorificați această oportunitate pentru a vă dezvolta afacerea și a deveni parte activă a lanțurilor valorice naționale și internaționale.
                      </p>
                    </div>

                    <p className="mb-4">
                      <strong>Pot aplica pentru cofinanțare</strong> întreprinderile mici și mijlocii orientate spre export sau care fac parte din lanțuri valorice internaționale.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                      <p className="text-blue-800 font-medium mb-4">
                        De asemenea programul beneficiază de asistența tehnică oferită de proiectul „Întreprinderi și Comune Puternice pentru Moldova", finanțat de Guvernele Germaniei și Elveției, implementat de GIZ Moldova.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery tab content */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-64 overflow-hidden cursor-pointer" onClick={() => openModal(photo)}>
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm">{photo.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Benefits tab content */}
          {activeTab === 'benefits' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Beneficii ale programului</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">✅</span>
                      <h3 className="text-xl font-bold text-green-800">80% Grant</h3>
                    </div>
                    <p className="text-green-700 font-medium">pentru servicii de dezvoltare a afacerii</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">✅</span>
                      <h3 className="text-xl font-bold text-blue-800">50% Grant</h3>
                    </div>
                    <p className="text-blue-700 font-medium">pentru echipamente de producere</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">
                    Aplicați acum!
                  </h3>
                  <p className="text-orange-700 text-center">
                    Dezvoltați-vă afacerea cu sprijinul Guvernului și al Proiectului „Competitivitatea Întreprinderilor Micro, Mici și Mijlocii" finanțat de Grupul Băncii Mondiale!
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <a 
              href="/arhiva" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-medium hover:bg-primary-100 transition-colors duration-300"
            >
              <span className="mr-2">←</span>
              Înapoi la Arhivă
            </a>
          </div>
        </div>
      </section>

      {/* Modal for image gallery */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdaFoodTechnologyPage;