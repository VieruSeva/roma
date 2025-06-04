import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import "animate.css";

// Particle Animation Component for Hero Section
const ParticleAnimation = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const container = particlesRef.current;
      container.innerHTML = '';
      
      const particleCount = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Set styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        // Append to container
        container.appendChild(particle);
        
        // Animate using GSAP
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        });
      }
    };
    
    createParticles();
    
    // Recreate on resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return <div ref={particlesRef} className="absolute inset-0 z-0"></div>;
};

// Background Video Component (uses real video file)
const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = (e) => {
    console.log('Video failed to load:', e);
    console.log('Video error details:', e.target.error);
    setVideoError(true);
    setVideoLoaded(false);
  };

  const handleCanPlay = () => {
    console.log('Video can start playing');
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay failed:', err);
      });
    }
  };

  return (
    <div className="video-background">
      {/* Video element with improved error handling */}
      <video 
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="video-element"
        onLoadedData={handleVideoLoad}
        onCanPlay={handleCanPlay}
        onError={handleVideoError}
        style={{ display: videoError ? 'none' : 'block' }}
      >
        <source src="/siteik/images/Main_background.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      
      {/* Fallback background if video fails */}
      {videoError && (
        <div className="video-fallback" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.8
        }}>
        </div>
      )}
      
      <div className="video-overlay"></div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="acasă" className="hero-section">
      {/* Background Video - maintaining parallax structure */}
      <BackgroundVideo />

      {/* Particle animation */}
      <ParticleAnimation />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
            <span className="animate__animated animate__fadeInDown inline-block bg-gradient-to-r from-primary-400 via-primary-600 to-secondary-600 bg-clip-text text-transparent">ANIPM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s font-accent">
            Promovăm excelența și inovația în panificație și morărit în Republica Moldova.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center items-center"
        >
          <Link
            to="/contact" 
            className="btn-secondary animate__animated animate__fadeIn animate__delay-3s"
          >
            Contactează-ne
          </Link>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate__animated animate__fadeInUp animate__delay-3s">
        <a href="#servicii" className="text-white scroll-down">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
