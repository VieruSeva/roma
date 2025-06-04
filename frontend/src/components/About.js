import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import flashImageFromFile from '../images/flash.jpg';

export const About = ({ isFullPage = false }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const objectives = [
    "Promovarea intereselor membrilor în industriile de panificație și morărit",
    "Dezvoltarea de standarde înalte de calitate",
    "Facilitarea accesului la finanțare și granturi",
    "Stimularea inovației și cercetării în domeniu",
    "Dezvoltarea de programe educaționale",
    "Reprezentarea în fața autorităților"
  ];

  return (
    <section id="despre-noi" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background parallax effect */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-50"></div>
        <div className="absolute inset-0 bg-grain"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10" data-aos="fade-right">
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={flashImageFromFile}
                  alt="About ANIPM" 
                  className="rounded-lg shadow-2xl"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl animate__animated animate__fadeInUp"
                >
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">2015</p>
                  <p className="text-gray-600">Fondată în Moldova</p>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-6 font-heading text-gray-800">Despre ANIPM</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mb-6"></div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) este o organizație neguvernamentală, apolitică și independentă, fondată în anul 2015 în Republica Moldova. ANIPM reprezintă interesele comune ale principalilor actori din industria de morărit, panificație și produse făinoase, reunind producători, furnizori de materii prime și auxiliare, constructori de utilaje, cercetători, proiectanți, depozitari, distribuitori și comercianți.
              </p>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Misiunea principală a asociației este de a susține și promova dezvoltarea unui sector modern, competitiv și sustenabil. Prin intermediul activităților sale, ANIPM își propune să reprezinte și să apere interesele profesionale, economice, sociale și morale ale membrilor săi în fața autorităților publice, a partenerilor internaționali și a altor organizații neguvernamentale.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-6 font-heading text-gray-800">Obiectivele Noastre</h3>
                <ul className="space-y-4">
                  {objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-highlight">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {!isFullPage && (
                <div className="mt-10">
                  <Link
                    to="/despre-noi"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors duration-300"
                  >
                    Află mai multe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {isFullPage && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Despre ANIPM</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descoperiți povestea noastră, misiunea și valorile care ne ghidează activitatea
              </p>
            </div>

            <div className="mb-16">
              <div className="prose max-w-none prose-lg prose-primary mx-auto bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) este o organizație neguvernamentală, apolitică și independentă, fondată în anul 2015 în Republica Moldova. ANIPM reprezintă interesele comune ale principalilor actori din industria de morărit, panificație și produse făinoase, reunind producători, furnizori de materii prime și auxiliare, constructori de utilaje, cercetători, proiectanți, depozitari, distribuitori și comercianți.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Misiunea principală a asociației este de a susține și promova dezvoltarea unui sector modern, competitiv și sustenabil. Prin intermediul activităților sale, ANIPM își propune să reprezinte și să apere interesele profesionale, economice, sociale și morale ale membrilor săi în fața autorităților publice, a partenerilor internaționali și a altor organizații neguvernamentale.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  ANIPM joacă un rol important în consolidarea colaborării dintre membrii săi, promovând schimbul de cunoștințe și experiențe, precum și identificarea soluțiilor eficiente pentru provocările din domeniu. Asociația sprijină inovația prin adoptarea noilor tehnologii, îmbunătățirea standardelor de calitate și implementarea practicilor moderne în procesul de producție. Fiind membru al Asociației, beneficiați de numeroase oportunități pentru accesarea granturilor și finanțărilor.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  De-a lungul timpului, ANIPM a devenit o platformă de dialog și cooperare, organizând evenimente, seminarii și conferințe care contribuie la conectarea membrilor săi cu tendințele internaționale din industrie.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Prin activitățile sale, asociația contribuie la promovarea produselor autohtone, la creșterea vizibilității acestora pe piața locală și internațională, precum și la stimularea unei dezvoltări durabile în industria de morărit și panificație. Asociația este dedicată menținerii unei relații strânse cu autoritățile și alte părți interesate, facilitând crearea unui mediu legislativ și economic favorabil.
                </p>
                
                <div className="my-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">ANIPM reunește actori importanți din industria națională, printre care:</h3>
                  <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Producători de morărit, panificație și produse făinoase;</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Furnizori de materii prime și auxiliare;</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Constructori de utilaje și echipamente specializate;</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Cercetători și proiectanți;</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Depozitari, distribuitori și comercianți.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Scopul principal este de a contribui la dezvoltarea industriei de morărit, panificație și produse făinoase din Republica Moldova, promovând inovația, colaborarea și standardele de calitate.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  ANIPM este o voce importantă pentru industria alimentară din Moldova, contribuind la modernizarea acesteia, promovarea produselor autohtone și adaptarea la cerințele pieței interne și internaționale.
                </p>
              </div>
            </div>

            <div className="relative md:w-1/2 mx-auto mb-20">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                src={flashImageFromFile}
                alt="About ANIPM" 
                className="rounded-lg shadow-2xl w-full"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl"
              >
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">2015</p>
                <p className="text-gray-600">Fondată în Moldova</p>
              </motion.div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg mb-20">
              <h3 className="text-3xl font-bold mb-6 font-heading text-center text-gray-800">Obiectivele Noastre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mr-4 shadow-highlight">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">{objective}</h4>
                      <p className="text-gray-600">Lucrăm zi de zi pentru a atinge acest obiectiv prin activitățile noastre.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
