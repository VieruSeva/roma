import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaUsers, FaHistory, FaLandmark, FaStar } from 'react-icons/fa';
import main2 from "../images/main2.jpg";

const AboutPage = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const pageInfo = {
    title: "Despre Noi",
    description: "Aflați mai multe despre misiunea, valorile și istoria Asociației Naționale AgroRomânia",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Despre Noi", path: "/despre-noi" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
        bgImage={main2}
      />
      
      <About isFullPage={true} />
      
      {/* Additional Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaHistory className="text-4xl text-primary-500" />,
                title: "Istoria Noastră",
                description: "Fondată în anul 2000, asociația noastră are o istorie bogată în sprijinirea agriculturii românești."
              },
              {
                icon: <FaUsers className="text-4xl text-primary-500" />,
                title: "Echipa Noastră",
                description: "Avem o echipă dedicată de profesioniști cu experiență în domeniul agriculturii și panificației."
              },
              {
                icon: <FaLandmark className="text-4xl text-primary-500" />,
                title: "Valori Fundamentale",
                description: "Suntem ghidați de valori precum integritatea, calitatea și sustenabilitatea în tot ceea ce facem."
              },
              {
                icon: <FaStar className="text-4xl text-primary-500" />,
                title: "Realizări",
                description: "Am contribuit semnificativ la dezvoltarea și modernizarea industriei agricole din România."
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
      
      <div className="my-16 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la pagina principală
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutPage;
