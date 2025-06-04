import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaQuestion, FaStar } from 'react-icons/fa';

const ContactPage = () => {
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
    title: "Contactează-ne",
    description: "Suntem aici pentru a răspunde întrebărilor și solicitărilor dumneavoastră",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Contact", path: "/contact" }
    ]
  };

  // FAQ data
  const faqs = [
    {
      question: "Cum pot deveni membru al asociației?",
      answer: "Pentru a deveni membru al asociației, completați formularul de contact de pe această pagină sau trimiteți un email la contact@agroromania.ro. Echipa noastră vă va contacta cu informații despre procesul de aderare și taxele asociate."
    },
    {
      question: "Care sunt beneficiile de a fi membru?",
      answer: "Membrii asociației beneficiază de reprezentare în relația cu autoritățile, acces la studii și rapoarte de piață, participare la evenimente și târguri, oportunități de networking și acces la programe de formare profesională."
    },
    {
      question: "Organizați evenimente sau conferințe?",
      answer: "Da, organizăm regular evenimente, conferințe și workshop-uri pentru membri și parteneri. Consultați secțiunea de Noutăți pentru informații despre evenimentele viitoare sau contactați-ne pentru detalii."
    },
    {
      question: "Oferiți consultanță pentru proiecte europene?",
      answer: "Asociația noastră oferă membrilor consultanță pentru accesarea fondurilor europene și implementarea proiectelor. Contactați-ne pentru a discuta despre nevoile specifice ale afacerii dumneavoastră."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <Contact isFullPage={true} />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 font-heading">Întrebări Frecvente</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Răspunsuri la cele mai comune întrebări despre asociația noastră
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full mr-4">
                      <FaQuestion className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-heading">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
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

export default ContactPage;
