import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

// Import football images directly
import fotbal1 from '../images/fotbal1.jpg';
import fotbal2 from '../images/fotbal2.jpg';

const FotbalPage = () => {
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
      src: fotbal1,
      title: 'Membri ANIPM pe terenul de fotbal',
      description: 'Membrii Asociației Naționale din Industria Morăritului și Panificației (ANIMP) participând la meciul amical de fotbal din 19 mai 2018.'
    },
    {
      id: 2,
      src: fotbal2,
      title: 'Spiritul de echipă și colaborare',
      description: 'Momentele intense de pe teren, atmosfera animată de râsete, încurajări și discuții prietenoase din cadrul evenimentului sportiv.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="Membri ANIPM ăși arată măestria pe terenul de fotbal"
        description="Eveniment sportiv amical organizat pe 19 mai 2018 - demonstrând că munca susținută în echipă este cheia succesului"
        bgImage="/images/archive-hero-bg.jpg" 
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
            </div>
          </div>

          {/* About tab content */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Membri ANIPM ăși arată măestria pe terenul de fodbal</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Pe 19 mai 2018, membrii Asociației Naționale din Industria Morăritului și Panificației (ANIMP) au schimbat costumele de birou cu echipamentele de fotbal pentru un meci amical plin de voie bună un eveniment care a adus bucurie și entuziasm în rândul participanților. Această întâlnire nu a fost doar despre competiție, ci și despre prietenie, colaborare și relaxare într-un cadru diferit de cel profesional.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Spiritul de echipă și unitate</h4>
                    <p className="mb-4 text-gray-700">
                      Evenimentul a oferit ocazia perfectă de a consolida relațiile dintre colegii din industrie, promovând spiritul de echipă și unitatea. Pe lângă momentele intense de pe teren, atmosfera a fost animată de râsete, încurajări și discuții prietenoase, toate contribuind la crearea unor amintiri de neuitat.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Socializare și dezvoltare relațională</h4>
                    <p className="mb-4 text-gray-700">
                      După meci, participanții s-au bucurat de un moment de socializare la o masă comună, unde au împărtășit povești, idei și planuri de viitor, întărind legătura dintre profesioniștii din domeniul morăritului și panificației.
                    </p>
                  </div>

                  <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Lecția succesului</h4>
                    <p className="text-gray-800 font-medium">
                      Acest eveniment a demonstrat încă o dată că munca susținută în echipă este cheia succesului, fie pe terenul de fotbal, fie în activitățile profesionale. O zi minunată care a inspirat pe toți să continue să lucreze împreună, atât pentru dezvoltarea personală, cât și pentru progresul industriei.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery tab content */}
          {activeTab === 'gallery' && (
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
          )}

          <div className="mt-12 text-center">
            <Link 
              to="/arhiva" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-medium hover:bg-primary-100 transition-colors duration-300"
            >
              <span className="mr-2">←</span>
              Înapoi la Arhivă
            </Link>
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

export default FotbalPage;