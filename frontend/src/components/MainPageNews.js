import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaChevronRight, FaExternalLinkAlt, FaImage, FaFileAlt } from "react-icons/fa";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const MainPageNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [newsImages, setNewsImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentPreview, setDocumentPreview] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/news-ticker`);
        const data = await response.json();
        
        if (data.success && data.items.length > 0) {
          // Get first 6 news items for main page
          const newsOnly = data.items.filter(item => item.type === 'news').slice(0, 6);
          setNewsItems(newsOnly);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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

        const apiUrl = `${BACKEND_URL}/api/fetch-multiple-news-images`;
        
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

    if (newsItems.length > 0) {
      fetchNewsImages();
    }
  }, [newsItems]);

  // Handle toggle for "Read more"
  const toggleReadMore = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  // Handle document preview
  const openDocumentPreview = (documentUrl, documentName) => {
    setDocumentPreview({ url: documentUrl, name: documentName });
  };

  const closeDocumentPreview = () => {
    setDocumentPreview(null);
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

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Ultimele Noutăți</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Ultimele Noutăți</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
            Aflați cele mai recente știri și evenimente din industria agroalimentară
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, index) => (
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
                ) : item.url && newsImages[item.url]?.image_url ? (
                  <img 
                    src={newsImages[item.url].image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : item.id === 8 ? (
                  // Special image for the Ministry news
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-primary-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <FaImage className="text-primary-400 text-3xl mx-auto mb-2" />
                      <span className="text-primary-600 text-sm">Imagine indisponibilă</span>
                    </div>
                  </div>
                )}
                {/* Fallback div for error handling */}
                <div className="w-full h-full bg-gradient-to-r from-primary-100 to-blue-100 hidden items-center justify-center">
                  <div className="text-center">
                    <FaImage className="text-primary-400 text-3xl mx-auto mb-2" />
                    <span className="text-primary-600 text-sm">Imagine indisponibilă</span>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                  {item.category || 'Știri'}
                </div>
                
                {/* Official/Documents indicator */}
                {item.hasDocuments && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-full flex items-center">
                    <FaFileAlt className="mr-1" />
                    Documente
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-primary-400" />
                  <span>{item.date}</span>
                  <span className="mx-2">|</span>
                  <FaUser className="mr-2 text-primary-400" />
                  <span>ANIPM</span>
                  {item.url && item.url !== '#' && (
                    <>
                      <span className="mx-2">|</span>
                      <FaExternalLinkAlt className="mr-1 text-primary-400" />
                      <span className="text-primary-600 font-medium">Link extern</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-heading hover:text-primary-600 transition-colors duration-300">
                  {item.url && item.url !== '#' ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                      {item.title}
                    </a>
                  ) : (
                    <Link to={`/noutati/${item.id}`}>{item.title}</Link>
                  )}
                </h3>
                
                <div className="text-gray-600 mb-6">
                  {expandedItemId === item.id ? (
                    <div>
                      {item.id === 8 ? (
                        <p>
                          Ministerul Agriculturii și Industriei Alimentare a transmis un răspuns oficial 
                          în urma demersului scris de Asociația Națională a Industriei de Panificație din Moldova. 
                          Documentele oficiale și răspunsul oficial al ministerului sunt disponibile pentru consultare.
                        </p>
                      ) : (
                        <p>Pentru informații complete despre această situație, consultați sursa originală.</p>
                      )}
                    </div>
                  ) : (
                    <p>{item.title.length > 100 ? item.title.substring(0, 100) + '...' : item.title}</p>
                  )}
                </div>
                
                {/* Documents section for Ministry news */}
                {item.hasDocuments && expandedItemId === item.id && (
                  <div className="border-t pt-4 mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <FaFileAlt className="mr-2 text-primary-500" />
                      Documente disponibile (4)
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <button 
                        onClick={() => openDocumentPreview(`${BACKEND_URL}/api/download/minist1.pdf`, 'Răspuns oficial - Partea 1')}
                        className="flex items-center p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors duration-200 text-sm cursor-pointer"
                      >
                        <FaFileAlt className="text-blue-500 mr-2 text-xs" />
                        <span className="text-blue-700 font-medium">Răspuns oficial - Partea 1</span>
                        <FaExternalLinkAlt className="text-blue-400 text-xs ml-auto" />
                      </button>

                      <button 
                        onClick={() => openDocumentPreview(`${BACKEND_URL}/api/download/minist2.pdf`, 'Răspuns oficial - Partea 2')}
                        className="flex items-center p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors duration-200 text-sm cursor-pointer"
                      >
                        <FaFileAlt className="text-blue-500 mr-2 text-xs" />
                        <span className="text-blue-700 font-medium">Răspuns oficial - Partea 2</span>
                        <FaExternalLinkAlt className="text-blue-400 text-xs ml-auto" />
                      </button>

                      <button 
                        onClick={() => openDocumentPreview(`${BACKEND_URL}/api/download/minist3.docx`, 'Anexă - Document')}
                        className="flex items-center p-2 bg-green-50 rounded hover:bg-green-100 transition-colors duration-200 text-sm cursor-pointer"
                      >
                        <FaFileAlt className="text-green-500 mr-2 text-xs" />
                        <span className="text-green-700 font-medium">Anexă - Document</span>
                        <FaExternalLinkAlt className="text-green-400 text-xs ml-auto" />
                      </button>

                      <button 
                        onClick={() => openDocumentPreview(`${BACKEND_URL}/api/download/minist4.pdf`, 'Răspuns oficial - Partea 3')}
                        className="flex items-center p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors duration-200 text-sm cursor-pointer"
                      >
                        <FaFileAlt className="text-blue-500 mr-2 text-xs" />
                        <span className="text-blue-700 font-medium">Răspuns oficial - Partea 3</span>
                        <FaExternalLinkAlt className="text-blue-400 text-xs ml-auto" />
                      </button>
                    </div>
                  </div>
                )}
                
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
      </div>

      {/* Document Preview Modal */}
      {documentPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full h-5/6 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-blue-50 rounded-t-lg">
              <div className="flex items-center">
                <FaFileAlt className="text-blue-500 mr-3 text-lg" />
                <h3 className="text-lg font-semibold text-gray-800">{documentPreview.name}</h3>
                <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Previzualizare document oficial
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.open(documentPreview.url, '_blank')}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-1 text-xs" />
                  Descarcă
                </button>
                <button
                  onClick={closeDocumentPreview}
                  className="text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 p-4">
              <iframe
                src={documentPreview.url}
                className="w-full h-full border-0 rounded"
                title={documentPreview.name}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};