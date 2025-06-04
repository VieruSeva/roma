import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MainPageNews } from '../components/MainPageNews';
import { Contact } from '../components/Contact';
import { FaUsers, FaHistory, FaLandmark, FaStar } from 'react-icons/fa';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section');
  
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
    
    // Initialize AOS animation library with enhanced settings
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
    
    // If section is specified in URL, scroll to that section
    if (section === 'despre-noi') {
      setTimeout(() => {
        const aboutSection = document.getElementById('despre-noi');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [section]);

  return (
    <motion.div 
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* About section with isFullPage=true to show more content */}
      <About isFullPage={true} />
      
      {/* Additional content from AboutPage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaHistory className="text-4xl text-primary-500" />,
                title: "Istoria Noastră",
                description: "Fondată în anul 2015, asociația noastră are o istorie bogată în sprijinirea industriei panificației și morăritului moldovenești."
              },
              {
                icon: <FaUsers className="text-4xl text-primary-500" />,
                title: "Echipa Noastră",
                description: "Avem o echipă dedicată de profesioniști cu experiență în domeniul panificației și morăritului."
              },
              {
                icon: <FaLandmark className="text-4xl text-primary-500" />,
                title: "Valori Fundamentale",
                description: "Suntem ghidați de valori precum integritatea, calitatea și sustenabilitatea în tot ceea ce facem."
              },
              {
                icon: <FaStar className="text-4xl text-primary-500" />,
                title: "Realizări",
                description: "Am contribuit semnificativ la dezvoltarea și modernizarea industriei agricole din Moldova."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 text-primary-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <MainPageNews />
      <Contact />
    </motion.div>
  );
};

export default HomePage;