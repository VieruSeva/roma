import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { FaUsers, FaSeedling, FaChartLine, FaGlobeEurope } from "react-icons/fa";

// CountUp Component for animated counting
const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    const animateCounter = () => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepTime = Math.floor(duration / steps);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      
      return () => {
        clearInterval(timer);
      };
    };
    
    return () => {
      observer.disconnect();
    };
  }, [target]);
  
  return (
    <span ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Statistics = () => {
  const stats = [
    { number: 250, suffix: "+", text: "Membri Activi", icon: <FaUsers /> },
    { number: 15000, suffix: "+", text: "Tone de Cereale Procesate Anual", icon: <FaSeedling /> },
    { number: 12, suffix: "%", text: "Din PIB-ul Agricultural", icon: <FaChartLine /> },
    { number: 30, suffix: "+", text: "Județe Reprezentate", icon: <FaGlobeEurope /> }
  ];

  return (
    <section id="statistici" className="py-20 bg-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-grain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Asociația în Cifre</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
            Rezultatele noastre vorbesc despre impactul pe care îl avem în industria agroalimentară din România
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="stat-card bg-white rounded-xl shadow-card p-8 text-center group hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-300 group-hover:scale-110 transform">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 mb-2 font-heading">
                <span className="inline-block animate__animated animate__fadeIn">
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </span>
              </h3>
              
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Wave SVG divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
