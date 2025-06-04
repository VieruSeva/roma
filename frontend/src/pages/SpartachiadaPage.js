import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';

// Import sport images directly
import sport1 from '../images/sport1.jpg';
import sport2 from '../images/sport2.jpg';
import sport3 from '../images/sport3.jpg';
import sport4 from '../images/sport4.jpg';
import sport5 from '../images/sport5.jpg';
import sport6 from '../images/sport6.jpg';
import sport7 from '../images/sport7.jpg';

const SpartachiadaPage = () => {
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
      src: sport1,
      title: 'Spartachiada ANIPM - Competiții sportive',
      description: 'Competiții de volei organizate în cadrul Spartachiadei ANIPM din 19 mai 2018.'
    },
    {
      id: 2,
      src: sport2,
      title: 'Spartachiada ANIPM - Jocuri de echipă',
      description: 'Participanții se întrebuințează în jocuri de echipă interactive și activități sportive.'
    },
    {
      id: 3,
      src: sport3,
      title: 'Spartachiada ANIPM - Activități recreative',
      description: 'Activități recreative și de echipă menite să promoveze colaborarea și spiritul sportiv.'
    },
    {
      id: 4,
      src: sport4,
      title: 'Spartachiada ANIPM - Competiții de fotbal',
      description: 'Competiții de fotbal desfășurate în cadrul evenimentului sportiv al asociației.'
    },
    {
      id: 5,
      src: sport5,
      title: 'Spartachiada ANIPM - Participanți',
      description: 'Membrii ANIPM participând activ la evenimentele sportive și recreative.'
    },
    {
      id: 6,
      src: sport6,
      title: 'Spartachiada ANIPM - Activități pentru familii',
      description: 'Activități speciale organizate pentru copii și familiile participanților.'
    },
    {
      id: 7,
      src: sport7,
      title: 'Spartachiada ANIPM - Atmosfera de sărbătoare',
      description: 'Atmosfera festivă și prietenoasă a evenimentului sportiv al ANIPM.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="Spartachiada ANIPM"
        subtitle="Eveniment sportiv și recreativ organizat de Asociația Națională de Panificație și Morărit - 19 mai 2018"
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
            </div>
          </div>

          {/* About tab content */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Comunicat de Presă</h2>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4 text-center">Spartachiada ANIPM – 19 mai 2018</h3>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Pe data de 19 mai 2018, membrii Asociației Naționale de Panificație și Morărit (ANIPM) s-au reunit pentru a celebra un eveniment unic și plin de energie – Spartachiada. Acest eveniment a avut loc în aer liber, într-un cadru relaxant și prietenos, unde spiritul de echipă, voia bună și dorința de a colabora au fost la loc de cinste.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Activități sportive și recreative</h4>
                    <p className="mb-4 text-gray-700">
                      Programul evenimentului a inclus o varietate de jocuri sportive și activități recreative, menite să promoveze un stil de viață activ și să întărească relațiile dintre participanți. Printre activitățile derulate s-au numărat:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                      <li>Competiții de volei și fotbal;</li>
                      <li>Jocuri de echipă interactive;</li>
                      <li>Activități pentru copii și familii.</li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Consolidarea relațiilor parteneriale</h4>
                    <p className="mb-4 text-gray-700">
                      Spartachiada nu a fost doar despre competiție, ci și despre schimbul de experiență și dialog constructiv. Participanții au profitat de ocazie pentru a discuta provocările și oportunitățile din industria panificației și morăritului, stabilind noi obiective comune pentru viitor.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Impactul evenimentului</h4>
                    <p className="mb-4 text-gray-700">
                      Acest eveniment s-a dovedit a fi o platformă excelentă pentru consolidarea relațiilor de parteneriat, promovarea cooperării și identificarea de noi modalități de colaborare. Energia pozitivă și entuziasmul participanților au demonstrat importanța acestor inițiative pentru dezvoltarea unei comunități profesionale unite.
                    </p>
                  </div>

                  <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Concluzie</h4>
                    <p className="text-gray-800 font-medium">
                      Spartachiada din 19 mai 2018 va rămâne în amintirea tuturor participanților ca un eveniment remarcabil, care a reunit membrii ANIPM într-o atmosferă de prietenie, sportivitate și colaborare. Continuăm să ne inspirăm din această experiență pentru a dezvolta relațiile parteneriale și a atinge noi culmi în industria noastră.
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

export default SpartachiadaPage;