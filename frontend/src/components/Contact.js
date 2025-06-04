import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Contact = ({ isFullPage = false }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [nameRef, nameInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormSubmitted(true);
      setFormLoading(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setFormError(true);
      setFormLoading(false);
    }
  };

  return (
    <section id="contact" className={`${isFullPage ? 'pt-12 pb-20' : 'py-20'} bg-gray-50 relative overflow-hidden`}>
      {!isFullPage && (
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
      )}

      <div className="container mx-auto px-4 relative z-20">
        {!isFullPage && (
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold font-heading text-gray-800 mb-4"
            >
              Contactați-ne
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Suntem aici pentru a răspunde la întrebările dumneavoastră și pentru a vă oferi asistența de care aveți nevoie
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.div
              ref={nameRef}
              initial={{ opacity: 0, x: -30 }}
              animate={nameInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold font-heading text-gray-800 mb-6">Informații de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-primary-100 p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Telefon</h4>
                    <p className="text-gray-600"><a href="tel:076777790" className="hover:text-primary-600">076777790</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-primary-100 p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600"><a href="mailto:anipm@rodals.md" className="hover:text-primary-600">anipm@rodals.md</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-primary-100 p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Adresă</h4>
                    <p className="text-gray-600">str. Uzinelor 19 or. Chișinău, Republica Moldova</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-primary-100 p-3 mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Program</h4>
                    <p className="text-gray-600">Luni - Vineri: 9:00 - 17:00</p>
                    <p className="text-gray-600">Sâmbătă - Duminică: Închis</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-heading text-gray-800 mb-6">Formular de Contact</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-green-700 font-medium">Mesajul a fost trimis cu succes!</p>
                      <p className="text-green-600 mt-1">Vă mulțumim pentru contactarea noastră. Vă vom răspunde în cel mai scurt timp posibil.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-red-700 font-medium">A apărut o eroare la trimiterea formularului.</p>
                          <p className="text-red-600 mt-1">Vă rugăm să încercați din nou sau să ne contactați prin telefon sau email.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nume</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="Numele dvs." 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="Email-ul dvs." 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      placeholder="Numărul dvs. de telefon" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesaj</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formState.message}
                      onChange={handleChange}
                      rows="4" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                      placeholder="Scrieți mesajul dvs. aici..." 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow transition-colors duration-300 flex justify-center items-center ${formLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={formLoading}
                  >
                    {formLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Se trimite...
                      </>
                    ) : 'Trimite Mesajul'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <h3 className="text-2xl font-bold font-heading text-gray-800 mb-6">Locația Noastră</h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-[600px] mb-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.165242431245!2d28.857631776812574!3d47.006935571094475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c38f55f634f%3A0x3eb2bab4ba1efcc3!2sStrada%20Uzinelor%2019%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2sus!4v1710883044064!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ANIPM Office Location"
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm italic">
              Asociația noastră se află pe str. Uzinelor 19, or. Chișinău, Republica Moldova. Vă așteptăm cu drag la sediul nostru pentru a discuta posibilitățile de colaborare!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
