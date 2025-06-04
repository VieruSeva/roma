import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

// Import basketball images directly
import basketball1 from '../images/basketball1.jpg';
import basketball2 from '../images/basketball2.jpg';
import basketball3 from '../images/basketball3.jpg';
import basketball4 from '../images/basketball4.jpg';
import basketball5 from '../images/basketball5.jpg';
import basketball6 from '../images/basketball6.jpg';
import basketball7 from '../images/basketball7.jpg';

const BasketballPage = () => {
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
      src: basketball1,
      title: 'Membri ANIPM la meciul de baschet',
      description: 'Membrii ANIPM participând activ la meciul amical de baschet din 11 februarie 2023.'
    },
    {
      id: 2,
      src: basketball2,
      title: 'Spiritul de echipă în baschet',
      description: 'Momentele de colaborare și strategii de echipă în timpul meciului de baschet.'
    },
    {
      id: 3,
      src: basketball3,
      title: 'Acțiuni spectaculoase pe teren',
      description: 'Acțiuni dinamice și momente intense din timpul meciului amical.'
    },
    {
      id: 4,
      src: basketball4,
      title: 'Competiția prietenoasă',
      description: 'Atmosfera competitivă dar prietenoasă a meciului de baschet ANIPM.'
    },
    {
      id: 5,
      src: basketball5,
      title: 'Jocul de echipă',
      description: 'Colaborarea perfectă între membrii echipei în timpul jocului.'
    },
    {
      id: 6,
      src: basketball6,
      title: 'Strategii și tactici',
      description: 'Planificarea și coordonarea tactică a echipelor în timpul meciului.'
    },
    {
      id: 7,
      src: basketball7,
      title: 'Finalul meciului',
      description: 'Momentele de încheiere ale meciului amical de baschet al ANIPM.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="Un meci amical de baschet a reunit membrii ANIPM"
        description="Eveniment sportiv organizat pe 11 februarie 2023 - promovând spiritul de echipă și colaborarea"
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Un meci amical de baschet a reunit membrii ANIPM</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Membrii ANIPM s-au întâlnit pe 11.02.2023 într-un mediu prietenos, participând activ la un meci formidabil de baschet. Aceștia au format echipe și au jucat un meci amical pe teren, promovând spiritul de echipă și colaborarea. Evenimentul a fost un prilej excelent pentru schimbul de idei și experiențe profesionale într-o atmosferă relaxantă, întărind legăturile și generând noi inițiative de colaborare.
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Obiectivele evenimentului</h4>
                    <p className="mb-4 text-gray-700">
                      Meciul amical de baschet a avut ca scop principal consolidarea relațiilor dintre membrii asociației într-un cadru sportiv și recreativ. Printre obiectivele urmărite s-au numărat:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                      <li>Promovarea spiritului de echipă și colaborării;</li>
                      <li>Dezvoltarea relațiilor interpersonale într-un mediu relaxant;</li>
                      <li>Încurajarea unui stil de viață activ și sănătos;</li>
                      <li>Crearea unui cadru propice pentru schimbul de experiențe profesionale.</li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Atmosfera și spiritul competitiv</h4>
                    <p className="mb-4 text-gray-700">
                      Pe parcursul întregului meci, atmosfera a fost una de sărbătoare, marcată de fair-play și respect reciproc. Competiția prietenoasă a permis tuturor participanților să se bucure de momentele petrecute împreună, demonstrând că sportul este un excelent mijloc de apropiere și comunicare.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Impactul asupra comunității ANIPM</h4>
                    <p className="mb-4 text-gray-700">
                      Acest eveniment sportiv a avut un impact pozitiv semnificativ asupra coheziunii echipei ANIPM. Participanții au avut ocazia să se cunoască mai bine în afara mediului profesional, ceea ce a contribuit la îmbunătățirea colaborării și comunicării în activitățile ulterioare ale asociației.
                    </p>
                  </div>

                  <div className="mb-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <h4 className="text-xl font-semibold mb-4 text-primary-700">Concluzie</h4>
                    <p className="text-gray-800 font-medium">
                      Meciul amical de baschet din 11 februarie 2023 va rămâne în memoria tuturor participanților ca un moment special de unitate și prietenie. Evenimentul a demonstrat că investiția în relațiile umane și în activitățile recreative contribuie semnificativ la succesul și coeziunea unei organizații profesionale precum ANIPM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery tab content */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="w-full overflow-hidden cursor-pointer" onClick={() => openModal(photo)}>
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
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

export default BasketballPage;