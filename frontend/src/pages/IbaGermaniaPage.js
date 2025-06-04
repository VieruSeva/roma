import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { motion } from 'framer-motion';

// Import existing images
import ibaMain from '../images/iba.png';
import ibaSpeakers from '../images/iba_speakers.png';
import ibaStroika from '../images/iba_stroika.png';

// Import new images provided by user
import dusselImage from '../images/dussel.jpg';
import dusselForumImage from '../images/dussel_forum.jpg';
import iba2Image from '../images/iba2.jpg';
import iba3Image from '../images/iba3.jpg';

// Import video
import dusselVideo from '../images/dussel_video.mp4';

const IbaGermaniaPage = () => {
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const photos = [
    {
      id: 1,
      src: ibaMain,
      title: 'Târgul mondial "iba" din Düsseldorf',
      description: 'Imagine de la prestigiosul târg mondial dedicat industriei de panificație și cofetărie.'
    },
    {
      id: 2,
      src: ibaSpeakers,
      title: 'Delegația ANIMP la iba 2025',
      description: 'Membrii Asociației Industriei de Panificație și Morărit (ANIMP) în cadrul evenimentului.'
    },
    {
      id: 3,
      src: ibaStroika,
      title: 'Inovații în panificație',
      description: 'Echipamente și tehnologii moderne prezentate la târgul "iba" din Düsseldorf.'
    },
    {
      id: 4,
      src: dusselImage,
      title: 'Düsseldorf - Centrul inovației în panificație',
      description: 'Imagini din Düsseldorf în timpul târgului mondial iba dedicat industriei de panificație.'
    },
    {
      id: 5,
      src: dusselForumImage,
      title: 'Forum și discussii la iba Düsseldorf',
      description: 'Momente de la forumurile și discuțiile profesionale din cadrul târgului iba din Düsseldorf.'
    },
    {
      id: 6,
      src: iba2Image,
      title: 'Expoziție și demonstrații la iba 2025',
      description: 'Tehnologii avansate și echipamente inovatoare prezentate în cadrul târgului mondial de panificație.'
    },
    {
      id: 7,
      src: iba3Image,
      title: 'Networking și colaborări internaționale',
      description: 'Momente de networking și stabilire de parteneriate în cadrul evenimentului iba din Düsseldorf.'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-hidden"
    >
      <PageHero
        title="Inovații în panificație după participarea la târgul iba din Düsseldorf"
        subtitle="Membrii ANIMP aduc inovații în industria de panificație și cofetărie din Republica Moldova"
        backgroundImage="/images/archive-hero-bg.jpg" 
      />

      <section className="py-12 md:py-20 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Târgul mondial „iba" din Düsseldorf
            </h2>
            
            {/* Tab Navigation */}
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
                  className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'video' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={() => handleTabChange('video')}
                >
                  Video
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {activeTab === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4 text-lg leading-relaxed">
                      <strong>Membrii ANIMP aduc inovații în industria de panificație și cofetărie din Republica Moldova, după participarea la târgul mondial „iba" din Düsseldorf</strong>
                    </p>
                    
                    <p className="mb-4">
                      În perioada 18-22 mai 2025, Președintele Asociației Industriei de Panificație și Morărit (ANIMP), Veaceslav Guțuleac, împreună cu echipa sa și alți membri ai asociației, au participat la iba 2025, cel mai mare și prestigios târg mondial dedicat industriei de panificație și cofetărie, desfășurat la Düsseldorf, Germania.
                    </p>
                    
                    <p className="mb-4">
                      Evenimentul a reunit peste 1.500 de participanți, companii de top din întreaga lume, care au prezentat cele mai noi echipamente, tehnologii și inovații din domeniu. Delegația ANIMP a fost impresionată de amploarea târgului și de soluțiile inovatoare expuse, care au demonstrat tendințele globale pentru eficientizarea proceselor de producție, reducerea impactului asupra mediului și creșterea calității produselor.
                    </p>

                    <div className="my-8">
                      <blockquote className="p-6 bg-primary-50 rounded-lg border-l-4 border-primary-500 italic">
                        <p className="text-gray-800 text-lg">„Experiența acumulată în cadrul acestui eveniment este unică. Am descoperit tehnologii revoluționare și idei care ne vor ajuta să modernizăm industria de panificație din Moldova. Suntem hotărâți să implementăm aceste soluții inovatoare pe piața noastră, oferind astfel consumatorilor produse de calitate superioară."</p>
                        <footer className="mt-4 text-right font-semibold">— Veaceslav Guțuleac, Președintele ANIMP</footer>
                      </blockquote>
                    </div>
                    
                    <p className="mb-4">
                      Participarea la acest târg a reprezentat, de asemenea, o oportunitate de networking și schimb de experiență cu alți profesioniști din domeniu. Membrii ANIMP au discutat despre posibile parteneriate și colaborări care ar putea aduce beneficii semnificative industriei locale.
                    </p>
                    
                    <p className="mb-8">
                      Prin implicarea activă la evenimente de o asemenea anvergură, ANIMP își reconfirmă angajamentul de a susține dezvoltarea industriei de panificație și cofetărie din Republica Moldova, promovând inovația și adaptarea la cele mai noi tendințe internaționale.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                      >
                        <div className="w-full overflow-hidden cursor-pointer" onClick={() => openModal(photo)}>
                          <img 
                            src={photo.src} 
                            alt={photo.title} 
                            className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{photo.title}</h3>
                          <p className="text-gray-600">{photo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'video' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Video de la târgul iba Düsseldorf
                    </h3>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <video
                        controls
                        className="w-full max-w-3xl mx-auto rounded-lg"
                        style={{ maxHeight: '500px' }}
                      >
                        <source src={dusselVideo} type="video/mp4" />
                        Browser-ul dvs. nu suportă redarea video.
                      </video>
                      <p className="mt-4 text-gray-600">
                        Imagini și momente speciale de la participarea delegației ANIMP la târgul mondial iba din Düsseldorf
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

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
    </motion.div>
  );
};

export default IbaGermaniaPage;