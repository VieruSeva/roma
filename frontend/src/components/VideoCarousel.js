import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const VideoCarousel = ({ title, description, videos }) => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const videoRefs = useRef([]);

  // Add to refs array
  const addToRefs = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  // Initialize GSAP animation for gradient background
  useEffect(() => {
    const gradient = document.querySelector('.video-gradient-bg');
    if (gradient) {
      gsap.to(gradient, {
        backgroundPosition: '100% 50%',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  // Handle scrolling through the carousel
  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="video-gradient-bg absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-200 bg-[size:200%_200%]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        
        <div className="relative group">
          {/* Navigation arrows */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0 lg:-translate-x-6 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-lg text-primary-600 hover:text-primary-700 transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100"
            onClick={() => handleScroll('left')}
            aria-label="Previous video"
          >
            <FaArrowLeft className="text-xl" />
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-0 lg:translate-x-6 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full shadow-lg text-primary-600 hover:text-primary-700 transition-all duration-300 focus:outline-none opacity-0 group-hover:opacity-100"
            onClick={() => handleScroll('right')}
            aria-label="Next video"
          >
            <FaArrowRight className="text-xl" />
          </motion.button>
          
          {/* Videos container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                ref={addToRefs}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="min-w-full md:min-w-[80%] lg:min-w-[60%] snap-center flex-shrink-0"
              >
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 backdrop-blur-sm bg-white bg-opacity-50">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster={video.thumbnail}
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Video title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-white text-xl font-semibold">{video.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{video.description}</p>
                    {video.tags && (
                      <div className="flex flex-wrap gap-2">
                        {video.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
