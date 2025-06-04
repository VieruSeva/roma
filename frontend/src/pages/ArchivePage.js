import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images from the src directory
import pasteAgroTvThumbnail from '../images/archive/paste-agrotv.jpg';      // Assuming this path is correct
import expoFoodDrinkThumbnail from '../images/archive/expo-food-drink.jpg';  // Assuming this path is correct
import odaFoodTechThumbnail from '../images/archive/oda-food-tech.jpg';        // Assuming this path is correct
import odaFoodTech2025Thumbnail from '../images/oda1.jpg'; // New ODA Food Technology 2025 thumbnail
import ibaGermaniaThumbnail from '../images/archive/iba-germania-thumbnail.jpg'; // ADDED: Placeholder for iba Germania
import forumBrutariThumbnail from '../photos/Arhivă/forumul brutarilor/IV-lea Forum al Brutarilor, Patisierilor și Morarilor din Republica 2.11 (1).jpg'; // Updated to use the specified image
import spartachiadaThumbnail from '../images/sport1.jpg'; // ADDED: Thumbnail for Spartachiada event
import fotbalThumbnail from '../images/fotbal1.jpg'; // ADDED: Thumbnail for Fotbal event
import basketballThumbnail from '../images/basketball1.jpg'; // ADDED: Thumbnail for Basketball event
import interviewVideo from '../images/Interview.mp4'; // Import the Interview.mp4 video
import shortsVideo from '../images/Shorts.mp4'; // Import the Shorts.mp4 video
// REMOVED: lucide-react imports for now to resolve module not found error.

// Functie ajutatoare pentru a determina iconita pe baza tipului de fisier sau link
const getIconForArchiveItem = (item) => {
  if (item.fileType?.toLowerCase().includes('video') || item.downloadLink?.includes('facebook.com/watch') || (item.downloadLink?.includes('facebook.com') && item.downloadLink?.includes('video'))) {
    return <span className="text-primary-500 mr-3 text-2xl">🎬</span>; // Placeholder for Video icon
  }
  if (item.fileType?.toLowerCase().includes('articol') || item.fileType?.toLowerCase().includes('postare') || (item.downloadLink?.includes('facebook.com/photo')) || item.fileType?.toLowerCase().includes('document')) {
    return <span className="text-primary-500 mr-3 text-2xl">🖼️</span>; // Placeholder for Image/Article icon
  }
  if (item.fileType?.toLowerCase().includes('galerie')) {
    return <span className="text-primary-500 mr-3 text-2xl">📷</span>; // Placeholder for Gallery icon
  }
  return <span className="text-primary-500 mr-3 text-2xl">📄</span>; // Placeholder for FileText icon
};


// Sample data for archive items - replace with your actual data source
const archiveItemsData = [
  {
    id: 12, // Combined ODA entry with multiple buttons
    title: 'ODA, alături de antreprenori la Food Technology',
    description: 'Organizația pentru Dezvoltarea Antreprenoriatului (ODA) alături de antreprenori la evenimentele Food Technology din 2024 și 2025.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2025-01-15',
    downloadLink: '/arhiva/oda-food-technology-2025',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: odaFoodTech2025Thumbnail,
    isSpecialSection: true,
    isMultiButton: true,
    buttons: [
      {
        text: 'Vezi Galeria',
        link: '/arhiva/oda-food-technology-2025',
        icon: '📷',
        type: 'gallery'
      },
      {
        text: 'Vezi postul pe Facebook',
        link: 'https://www.facebook.com/photo/?fbid=1119842166837586&set=pcb.1119842280170908&locale=ro_RO',
        icon: '🖼️',
        type: 'facebook'
      }
    ]
  },
  {
    id: 13, // New ID for Basketball ANIPM
    title: 'Un meci amical de baschet a reunit membrii ANIPM',
    description: 'Membrii ANIPM s-au întâlnit pe 11.02.2023 într-un mediu prietenos, participând activ la un meci formidabil de baschet. Aceștia au format echipe și au jucat un meci amical pe teren, promovând spiritul de echipă și colaborarea.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2023-02-11',
    downloadLink: '/arhiva/baschet',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: basketballThumbnail,
    isSpecialSection: true
  },
  {
    id: 9, // New ID for Forumul Brutarilor
    title: 'Forumul Brutarilor',
    description: 'Galerie de fotografii de la evenimentele organizate în cadrul Forumului Brutarilor din Republica Moldova.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2024-05-20', 
    downloadLink: '/arhiva/forumul-brutarilor',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: forumBrutariThumbnail,
    isSpecialSection: true
  },
  {
    id: 10, // New ID for Spartachiada
    title: 'Spartachiada ANIPM - 19 mai 2018',
    description: 'Eveniment sportiv și recreativ organizat de ANIPM unde membrii asociației s-au reunit pentru competiții de volei, fotbal, jocuri de echipă interactive și activități pentru copii și familii.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2018-05-19',
    downloadLink: '/arhiva/spartachiada',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: spartachiadaThumbnail,
    isSpecialSection: true
  },
  {
    id: 11, // New ID for Fotbal ANIPM
    title: 'Membri ANIPM ăși arată măestria pe terenul de fotbal',
    description: 'Pe 19 mai 2018, membrii ANIPM au schimbat costumele de birou cu echipamentele de fotbal pentru un meci amical plin de voie bună, demonstrând că munca susținută în echipă este cheia succesului.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2018-05-19',
    downloadLink: '/arhiva/fotbal',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: fotbalThumbnail,
    isSpecialSection: true
  },
  {
    id: 8, // New ID for iba Germania
    title: 'Inovații în panificație după participarea la târgul "iba" din Düsseldorf',
    description: 'Membrii ANIPM aduc inovații în industria de panificație și cofetărie din Republica Moldova, în urma participării la prestigiosul târg mondial "iba" din Düsseldorf, Germania, desfășurat între 18-22 mai 2025.',
    fileType: 'Galerie Foto',
    fileSize: 'N/A',
    dateAdded: '2025-05-23',
    downloadLink: '/arhiva/iba-germania',
    sourceLink: null,
    requiresDownload: false,
    thumbnailSrc: ibaGermaniaThumbnail, 
  },
  {
    id: 5, 
    title: 'Tradiții și modernitate în perioada sărbătorilor de Paște AgroTV Moldova',
    description: 'Material video despre tradițiile și modernitatea în perioada sărbătorilor de Paște, prezentat de AgroTV Moldova.',
    fileType: 'Video (Facebook)',
    fileSize: 'N/A',
    dateAdded: '2024-04-20', 
    downloadLink: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=533597403147302', 
    sourceLink: 'https://www.facebook.com/watch/live/?ref=watch_permalink&v=533597403147302', 
    requiresDownload: true, 
    thumbnailSrc: pasteAgroTvThumbnail, 
  },
  {
    id: 6, 
    title: 'Expoziția Food&Drink MoldExpo', 
    description: 'Material video despre Expoziția Food&Drink MoldExpo.', 
    fileType: 'Video (Facebook)',
    fileSize: 'N/A',
    dateAdded: '2024-05-15', 
    downloadLink: 'https://www.facebook.com/nataalbotofficial/videos/614556858266106', 
    sourceLink: 'https://www.facebook.com/nataalbotofficial/videos/614556858266106',
    requiresDownload: true,
    thumbnailSrc: expoFoodDrinkThumbnail, 
  },

];

const ArchivePage = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  // Handle click action (for both images and buttons)
  const handleItemClick = (item, clickSource = 'unknown') => {
    console.log(`${clickSource} clicked:`, item); // Debug log
    
    if (item.isSpecialSection) {
      // Navigate to gallery section using React Router
      console.log("Special section clicked, navigating to:", item.downloadLink);
      navigate(item.downloadLink);
    } else if (item.sourceLink && item.requiresDownload === true && item.fileType?.toLowerCase().includes('video') && (item.id === 5 || item.id === 6)) {
      // Open video modal for local videos (same logic as button)
      console.log("Video clicked, opening modal");
      const videoToPlay = item.id === 5 ? interviewVideo : shortsVideo;
      openVideoModal(videoToPlay);
    } else if (item.downloadLink?.includes('facebook.com/photo') || item.downloadLink?.includes('facebook.com/events')) {
      // Open Facebook post in new tab
      console.log("Facebook post clicked, opening:", item.downloadLink);
      window.open(item.downloadLink, '_blank', 'noopener,noreferrer');
    } else if (item.id === 8) {
      // Special case for iba Germania (same as button logic)
      console.log("IBA Germania clicked, navigating to:", item.downloadLink);
      navigate(item.downloadLink);
    } else if (item.downloadLink) {
      // Open download link or external content
      console.log("Download link clicked, opening:", item.downloadLink);
      window.open(item.downloadLink, '_blank', 'noopener,noreferrer');
    } else {
      console.log("No action defined for this item:", item);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openVideoModal = (videoSrc) => {
    console.log("Opening video modal with source:", videoSrc); // Debug log
    console.log("Video sources available:", { interviewVideo, shortsVideo }); // Debug log for available video sources
    setActiveVideo(videoSrc);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    // Add a small delay before setting activeVideo to null to avoid flickering
    setTimeout(() => {
      setActiveVideo(null);
    }, 300);
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
        title="Galerie"
        subtitle="Colecție de materiale multimedia, galerii foto și resurse utile pentru industria de panificație și morărit."
        backgroundImage="/images/archive-hero-bg.jpg" 
      />

      <section className="py-12 md:py-20 section-padding">
        <div className="container mx-auto px-4">
          {archiveItemsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archiveItemsData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="card-modern bg-white rounded-xl shadow-lg flex flex-col justify-between overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    {item.thumbnailSrc && (
                      <div className="w-full h-48 mb-4 overflow-hidden group relative">
                        <img 
                          src={item.thumbnailSrc} 
                          alt={`Thumbnail for ${item.title}`} 
                          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-75" 
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/D1D5DB/1F2937?text=Imagine+indisponibilă"; }}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                            <div className="text-3xl mb-2">
                              {item.isSpecialSection ? '📷' : 
                               item.id === 8 ? '📷' :
                               item.fileType?.toLowerCase().includes('video') ? '🎬' : 
                               item.downloadLink?.includes('facebook.com/photo') ? '🖼️' : '⬇️'}
                            </div>
                            <p className="text-sm font-semibold">
                              {item.isSpecialSection ? 'Vezi Galeria' :
                               item.id === 8 ? 'Vezi Galeria' :
                               item.fileType?.toLowerCase().includes('video') ? 'Vizionează Video' :
                               item.downloadLink?.includes('facebook.com/photo') ? 'Vezi Postarea' : 'Descarcă'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-6 pt-0">
                        <div className="flex items-center mb-3">
                        {getIconForArchiveItem(item)}
                        <h3 className="text-xl font-bold text-gray-800 font-heading">
                            {item.title}
                        </h3>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">
                        {item.description}
                        </p>
                        <div className="text-xs text-gray-500 mb-4 space-y-1">
                        <p><strong>Tip:</strong> {item.fileType}</p>
                        {item.fileSize && <p><strong>Mărime:</strong> {item.fileSize}</p>}
                        <p><strong>Dată:</strong> {item.dateAdded}</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 mt-auto">
                    {item.isMultiButton ? (
                      <div className="space-y-2">
                        {item.buttons.map((button, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (button.type === 'gallery') {
                                navigate(button.link);
                              } else if (button.type === 'facebook') {
                                window.open(button.link, '_blank', 'noopener,noreferrer');
                              }
                            }}
                            className="btn-primary w-full inline-flex items-center justify-center text-sm"
                          >
                            <span className="mr-2">{button.icon}</span>
                            {button.text}
                          </button>
                        ))}
                      </div>
                    ) : item.isSpecialSection ? (
                      <button
                        onClick={() => handleItemClick(item, 'button')}
                        className="btn-primary w-full inline-flex items-center justify-center text-sm"
                      >
                        <span className="mr-2">📷</span>
                        Vezi Galeria
                      </button>
                    ) : item.sourceLink && item.requiresDownload === true && item.fileType?.toLowerCase().includes('video') ? (
                        <div className="mt-auto"> 
                            {(item.id === 5 || item.id === 6) && (
                                <button
                                    onClick={() => handleItemClick(item, 'button')}
                                    className="btn-primary bg-blue-600 hover:bg-blue-700 w-full inline-flex items-center justify-center text-white text-base font-semibold py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Vizioneaza pe site
                                </button>
                            )}
                        </div>
                    ) : item.downloadLink?.includes('facebook.com/photo') || item.downloadLink?.includes('facebook.com/events') ? (
                        <button
                            onClick={() => handleItemClick(item, 'button')}
                            className="btn-primary w-full inline-flex items-center justify-center text-sm" 
                        >
                            <span className="mr-2">🖼️</span>
                            Vezi Postarea
                        </button>
                    ) : item.id === 8 ? ( 
                        <button
                            onClick={() => handleItemClick(item, 'button')}
                            className="btn-primary w-full inline-flex items-center justify-center text-sm" 
                        >
                            <span className="mr-2">🖼️</span>
                            Vezi Galeria
                        </button>
                    ) : (
                        <button
                            onClick={() => handleItemClick(item, 'button')}
                            className="btn-primary w-full inline-flex items-center justify-center text-sm" 
                        >
                            <span className="mr-2">⬇️</span>
                            Descarcă
                        </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-4xl mb-4 block mx-auto text-gray-400">📄</span>
              <p className="text-xl text-gray-500">
                Momentan nu sunt documente în arhivă.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Vizionare Video</h3>
              <button 
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {activeVideo && (
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay
                  className="w-full"
                  style={{ maxHeight: 'calc(90vh - 120px)' }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ArchivePage;