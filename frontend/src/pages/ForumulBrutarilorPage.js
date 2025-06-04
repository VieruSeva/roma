import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { motion } from 'framer-motion';

// Import images directly
import forumImage1 from '../images/forum-brutarilor/forum-brutari-1.jpg';
import forumImage2 from '../images/forum-brutarilor/forum-brutari-2.jpg';
import forumImage3 from '../images/forum-brutarilor/forum-brutari-3.jpg';
import forumImage4 from '../images/forum-brutarilor/forum-brutari-4.jpg';
// Import the video directly
import forumVideo from '../photos/Arhivă/forumul brutarilor/IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica 2.11.2015.mp4';

const ForumulBrutarilorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const photos = [
    {
      id: 1,
      src: forumImage1,
      title: 'Forumul Brutarilor - Prezentări',
      description: 'Prezentări de specialitate în cadrul celui de-al IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica Moldova.'
    },
    {
      id: 2,
      src: forumImage2,
      title: 'Forumul Brutarilor - Demonstrații',
      description: 'Demonstrații practice și discuții între participanții la forum.'
    },
    {
      id: 3,
      src: forumImage3,
      title: 'Forumul Brutarilor - Participanți',
      description: 'Participanți la eveniment discutând despre noile tendințe în industria de panificație.'
    },
    {
      id: 4,
      src: forumImage4,
      title: 'Forumul Brutarilor - Eveniment',
      description: 'Aspect din timpul desfășurării celui de-al IV-lea Forum al Brutarilor, Patisierilor și Morarilor.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="Forumul Brutarilor"
        subtitle="Galerie de la cel de-al IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica Moldova"
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
                className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'video' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                onClick={() => handleTabChange('video')}
              >
                Video
              </button>
              <button 
                className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${activeTab === 'program' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                onClick={() => handleTabChange('program')}
              >
                Program
              </button>
            </div>
          </div>

          {/* About tab content */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Despre Forumul Brutarilor</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Invitație</h3>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <p className="mb-4 italic text-gray-700">Uniunea Pesoanelor Juridice</p>
                      <p className="mb-4 italic text-gray-700">"Asociația Națională a Industriilor de Panificație și Morărit"</p>
                      <p className="mb-4 italic text-gray-700">Tel: 022/ 422500, fax: 022/ 422040, Mob.: 069115500. E-mail: gutuleac@rodals.md</p>
                      <p className="mb-4 italic text-gray-700">Nr. 012/ 10.11.2015</p>
                      <p className="mb-4">Stimate D-le Tiberius,</p>
                      <p className="mb-4">Prin prezenta, Compania RODALS, împreună cu Asociația Națională a Industriilor de Panificație și Morărit, Vă invită să luați parte la cel de-al IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica Moldova. Forumul va avea loc în data de 12.11.2015, în cadrul Centrului Tehnologic de Probe și Degustări "RODALS" din Peresecina, Orhei.</p>
                      <p className="mb-4">În cadrul Forumului vor fi prezentate noile tendințe ale pieței produselor de panificație și patiserie și, vor avea loc demonstrații practice, master - classuri. Într-un mediu prietenos și degajat, vor fi oferite consultații profesioniste din partea celor mai erudiți specialiști din domeniu, cât și soluții și sfaturi concrete.</p>
                      <p className="mb-4">La forum vor fi prezentate produse de panificație ale companiei IREKS Gmbh., - cel mai mare producător de amelioratori și amestecuri pentru panificație și patiserie.</p>
                      <p className="mb-4">Vă mai informăm că, la forum vor participa: reprezentantul Ministerului Agriculturii și Industriei Alimentare al R.M., Președintele Asociației Naționale a Industriilor de Panificație din Ucraina, Vice-președintele Uniunii Brutarilor din Rusia, delegați ai companiilor de talie internațională: PAKMAYA, IREKS, DIOSNA, FRITSCH, MIWE, SIGMA, MONDIAL FORNI, reprezentanți ai companiilor din domeniu din țară.</p>
                      <p className="mb-4">Vă așteptăm cu drag!</p>
                      <p className="mt-8">Cu respect,</p>
                      <p>Președintele Asociației Națională a Industriilor de Panificație și Morărit</p>
                      <p className="font-semibold">Guțuleac Veaceslav</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p>Forumul Brutarilor reprezintă un eveniment important pentru industria de panificație și morărit din Republica Moldova, unde profesioniștii din domeniu se întâlnesc pentru a discuta despre cele mai noi tendințe, a prezenta produse inovatoare și a crea oportunități de networking.</p>
                    <p className="mt-4">La ediția a IV-a a Forumului au participat specialiști de renume din Republica Moldova, Ucraina și Rusia, reprezentanți ai ministerelor și ai companiilor internaționale din industrie.</p>
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
                  <div className="w-full overflow-hidden">
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

          {/* Video tab content */}
          {activeTab === 'video' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Înregistrare video de la Forum</h2>
                <div className="w-full mb-6">
                  <video 
                    className="w-full rounded-lg" 
                    controls
                    poster={forumImage1}
                  >
                    <source src={forumVideo} type="video/mp4" />
                    Browserul dvs. nu suportă tag-ul video.
                  </video>
                </div>
                <p className="text-gray-600 text-center">Înregistrare video de la cel de-al IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica Moldova, desfășurat în data de 12.11.2015.</p>
              </div>
            </div>
          )}

          {/* Program tab content */}
          {activeTab === 'program' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-heading text-center">Programul Forumului</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-center">Расписание семинара</h3>
                    <table className="min-w-full border-collapse">
                      <tbody>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">09:00 – 09:30</td>
                          <td className="py-2">Выезд участников в с. Пересечино</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">09:30 – 10:00</td>
                          <td className="py-2">Регистрация участников</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">10:00 – 10:15</td>
                          <td className="py-2">Приветственное слово от председателя Ассоциации Хлебопеков и Мукомолов Республики Молдова Гуцуляк Вячеслав Васильевич</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">10:15 – 10:45</td>
                          <td className="py-2">Приветственное слово от Вице-президента по связям с регионами и международному сотрудничеству Российского Союза Пекарей – Краус Сергей Викторович. Доклад «Состояние и перспективы развития хлебопекарного рынка России»</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">10:45 – 11:15</td>
                          <td className="py-2">Доклад «Креативные маркетинговые концепции европейских пекарен. Основные тренды развития» Пономаренко Сергей Васильевич – компания ИРЕКС Германия</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">11:15 – 11:30</td>
                          <td className="py-2">Кофе-брейк</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">11:30 – 12:30</td>
                          <td className="py-2">Презентация хлебобулочной продукции ИРЕКС</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">12:30 – 13:00</td>
                          <td className="py-2">Презентация фирмы FRITSCH – Eugen Dell, Wuckelt Dieter</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">13:00 – 14:00</td>
                          <td className="py-2">Обед в ресторане «La Contessa»</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">14:00 – 14:30</td>
                          <td className="py-2">Презентация фирмы PAKMAYA – Bogdan Potolinca. Доклад «Хлебопекарные премиксы и их влияние на здоровое питание»</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">14:30 – 15:00</td>
                          <td className="py-2">Презентация фирмы SIGMA – Nebo Urosevic</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 align-top whitespace-nowrap font-medium">15:00 – 16:00</td>
                          <td className="py-2">Вопросы от участников</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
    </div>
  );
};

export default ForumulBrutarilorPage;