import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaCheckCircle, FaUsers, FaUserPlus, FaQuoteRight, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

const MembersPage = () => {
  const [activeTab, setActiveTab] = useState('beneficii');
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Handle URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    if (sectionParam) {
      setActiveTab(sectionParam);
    }
  }, []);

  const pageInfo = {
    title: "Program de Membri",
    description: "Alătură-te celei mai importante comunități din industria de panificație și morărit din Republica Moldova",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Membri", path: "/membri" }
    ]
  };

  // Member categories
  const categories = [
    { id: 'beneficii', name: 'Beneficii' },
    { id: 'inscriere', name: 'Înscriere' },
    { id: 'actuali', name: 'Membri Actuali' },
    { id: 'recenzii', name: 'Recenzii' } // Changed from "Testimoniale" to "Recenzii"
  ];

  // Benefits data updated with new content
  const benefits = [
    {
      title: "Acces la finanțare și granturi",
      description: "Sprijin pentru identificarea oportunităților de finanțare, posibilitatea accesării fondurilor naționale și internaționale."
    },
    {
      title: "Consultanță specializată",
      description: "Împărtășirea experienței: Membrii ANIPM au oportunitatea de a colabora și de a face schimb de cunoștințe și bune practici."
    },
    {
      title: "Networking și parteneriate",
      description: "Posibilitatea de a colabora cu alți membri, parteneri locali și internaționali, facilitând dezvoltarea proiectelor comune."
    },
    {
      title: "Promovare și vizibilitate",
      description: "Promovarea produselor și serviciilor membrilor prin intermediul evenimentelor, conferințelor și platformelor asociației."
    },
    {
      title: "Acces la inovație",
      description: "Sprijin pentru adoptarea noilor tehnologii, practicilor moderne și standardelor internaționale de calitate."
    },
    {
      title: "Formare profesională",
      description: "Participarea la seminare, cursuri și ateliere de instruire pentru dezvoltarea competențelor angajaților."
    },
    {
      title: "Reprezentare în fața autorităților",
      description: "Apărarea intereselor membrilor în dialogul cu instituțiile guvernamentale și neguvernamentale."
    },
    {
      title: "Informații actualizate",
      description: "Acces la analize de piață, reglementări și tendințe din industrie, esențiale pentru luarea deciziilor strategice."
    }
  ];

  // Current members with their logos and websites
  const members = [
    {
      name: "RODALS SRL",
      logo: require("../images/Rodals SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://rodals.md/",
      category: "Companie Membru"
    },
    {
      name: "CONACUL CONTESEI SRL",
      logo: require("../images/CONACUL CONTESEI SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/LaContessa2018/?locale=ro_RO",
      category: "Companie Membru"
    },
    {
      name: "RICOMARIO SRL",
      logo: require("../images/RICOMARIO SRL.png"),
      hasLogo: true,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "CRIST - VALG SRL",
      logo: require("../images/CRIST - VALG SRL.png"),
      hasLogo: true,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "PRODUSE CU TRADITIE SRL",
      logo: require("../images/PRODUSE CU TRADITIE SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/CuTraditii/",
      category: "Companie Membru"
    },
    {
      name: "HEGEMON GRUP SRL",
      logo: require("../images/HEGEMON GRUP SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.brutaria-cuptoras.md/",
      category: "Companie Membru"
    },
    {
      name: "IUGINTERTRANS S.A.",
      logo: require("../images/IUGINTERTRANS S.A..png"),
      hasLogo: true,
      hasLink: true,
      link: "https://milina.md/ro/",
      category: "Companie Membru"
    },
    {
      name: "SAVIT-SIM SRL",
      logo: require("../images/SAVIT-SIM SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/savitsim1996",
      category: "Companie Membru"
    },
    {
      name: "MĂCINĂTORUL SRL",
      logo: require("../images/MĂCINĂTORUL SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://macinatorul.com/",
      category: "Companie Membru"
    },
    {
      name: "ECO-GRAIN ELEVATOR SRL",
      logo: require("../images/ECO-GRAIN ELEVATOR SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/ecograinelevator",
      category: "Companie Membru"
    },
    {
      name: "BUDNEA RODICA Î.I.",
      logo: require("../images/BUDNEA RODICA Î.I..png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/profile.php?id=100088436980271",
      category: "Companie Membru"
    },
    {
      name: "BRODEȚCHI SRL",
      logo: require("../images/BRODEȚCHI SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://www.facebook.com/Brodetchi",
      category: "Companie Membru"
    },
    {
      name: "GLINCOR - COM S.R.L.",
      logo: require("../images/GLINCOR-COM-SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://brutariaglincor.md/",
      category: "Companie Membru"
    },
    {
      name: "Cahul Pan SRL",
      logo: require("../images/Cahul Pan SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://cahulpan.com/",
      category: "Companie Membru"
    },
    {
      name: "Oleineac SRL",
      logo: require("../images/Oleineac SRL.png"),
      hasLogo: true,
      hasLink: true,
      link: "https://oleineac.md/",
      category: "Companie Membru"
    },
    // Companies without logos or websites
    {
      name: "AGROCERPROD SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "PRICOP IGOR OLEG GȚ",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "FRANDALEX-AGRO SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "SOLGON - I SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "IUNALIS-AGRO SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "RICONDUCT SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    },
    {
      name: "Generalchim SRL",
      hasLogo: false,
      hasLink: false,
      category: "Companie Membru"
    }
  ];

  // Testimonials (now called Reviews)
  const testimonials = [
    {
      id: 1,
      text: "Apartenența la ANIPM ne-a oferit oportunități extraordinare de creștere și dezvoltare. Rețeaua de contacte și accesul la informații actualizate despre piață au fost esențiale pentru succesul nostru.",
      author: "Maria Șeremet",
      position: "Administrator Conacul Contesei SRL"
    },
    {
      id: 2,
      text: "De multe ori, când încercam să depun dosarul pentru finanțări și granturi, nu reușeam deoarece era obligatoriu să fii membru al unei asociații. Certificatul de membru ANIPM mi-a oferit numeroase oportunități, iar datorită lui am câștigat mai multe proiecte și am reușit să-mi dezvolt afacerea.",
      author: "Ion Morari",
      position: "Director Brutărie"
    },
    {
      id: 3,
      text: "Fiind parte din ANIPM, am găsit parteneri de încredere și informații utile, care ne-au ajutat să creștem și să ne dezvoltăm.",
      author: "Andrei Batîr",
      position: "Director Glincor SRL"
    }
  ];

  // Documents required for membership
  const requiredDocuments = [
    "Cererea de înscriere completată și semnată",
    "Extrasul din Registrul Comerțului al companiei",
    "Contractul companiei"
  ];

  // Registration steps
  const registrationSteps = [
    {
      title: "1. Completează formularul de înscriere",
      description: "Primul pas constă în completarea unui formular online cu informațiile despre companie"
    },
    {
      title: "2. Trimite documentele necesare",
      description: "După completarea formularului, vei primi instrucțiuni pentru a trimite documentele necesare evaluării"
    },
    {
      title: "3. Evaluarea candidaturii",
      description: "Consiliul director analizează aplicația ta în termen de 14 zile lucrătoare"
    },
    {
      title: "4. Aprobarea și plata cotizației",
      description: "După aprobarea candidaturii, vei primi instrucțiuni pentru plata cotizației anuale"
    },
    {
      title: "5. Primirea pachetului de bun venit",
      description: "La finalizarea înscrierii, vei primi pachetul de bun venit și acces la toate beneficiile"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navigateToFormPage = () => {
    navigate('/formular-inscriere');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="members-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      {/* Navigation Tabs */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      {activeTab === 'beneficii' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Beneficiile Membrilor</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Fiind membru al Asociației Naționale a Industriilor de Panificație și Morărit (ANIPM), aveți acces la o gamă largă de beneficii, care contribuie la dezvoltarea și succesul afacerii dumneavoastră
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary-200"
                >
                  <div className="mb-4 text-primary-500">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Registration Section */}
      {activeTab === 'inscriere' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Procedura de Înscriere</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Procesul de înscriere este simplu și transparent. Urmează pașii de mai jos pentru a deveni membru ANIPM
            </p>
            
            {/* Required Documents */}
            <div className="max-w-3xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-center">Lista de documente pentru a deveni membru</h3>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">Toate documentele trebuie trimise în format digital (PDF) la adresa <a href="mailto:anipm@rodals.md" className="text-primary-600 hover:underline">anipm@rodals.md</a></p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {registrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex mb-8 relative"
                >
                  {index < registrationSteps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-primary-100"></div>
                  )}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full mr-6 z-10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">Pregătit să te alături?</h3>
              <button 
                onClick={navigateToFormPage}
                className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold shadow-md hover:bg-primary-600 transition-colors duration-300 text-lg"
              >
                Completează Formularul de Înscriere
              </button>
              <p className="text-gray-500 mt-4">Pentru asistență, contactează-ne la <a href="mailto:anipm@rodals.md" className="text-primary-600 hover:underline">anipm@rodals.md</a></p>
            </div>
          </div>
        </section>
      )}
      
      {/* Current Members Section */}
      {activeTab === 'actuali' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Membrii Noștri</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              ANIPM reunește companiile de top din industria de panificație și morărit din Republica Moldova
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-8">
                    {member.hasLogo ? (
                      <div className="text-center mb-6">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center mx-auto mb-4 ring-2 ring-gray-100 group-hover:ring-primary-200 transition-all duration-300">
                          <img 
                            src={member.logo} 
                            alt={member.name} 
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                          {member.name}
                        </h3>
                      </div>
                    ) : (
                      <div className="text-center mb-6">
                        <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mx-auto mb-4 ring-2 ring-primary-200 group-hover:ring-primary-300 transition-all duration-300">
                          <FaUsers className="text-6xl text-primary-400 group-hover:text-primary-500 transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                          {member.name}
                        </h3>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-primary-500 font-medium text-sm bg-primary-50 px-3 py-1 rounded-full">
                        {member.category}
                      </span>
                      {member.hasLink && (
                        <a 
                          href={member.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300 text-sm font-medium hover:bg-primary-50 px-3 py-1 rounded-full"
                        >
                          Vizitează 
                          <FaExternalLinkAlt className="ml-2 text-xs" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Suntem mândri de comunitatea noastră de membri care contribuie la dezvoltarea industriei.
              </p>
            </div>
          </div>
        </section>
      )}
      
      {/* Reviews Section (formerly Testimonials) */}
      {activeTab === 'recenzii' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Recenzii ale Membrilor Noștri</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Descoperă experiențele și beneficiile reale ale membrilor ANIPM
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-8 hover:shadow-lg transition-shadow duration-300 relative"
                >
                  <FaQuoteLeft className="absolute top-6 left-6 text-primary-200 text-4xl opacity-40" />
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 relative z-10">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mr-4 border-2 border-primary-200">
                        <FaQuoteRight className="text-primary-500 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                  <FaQuoteRight className="absolute bottom-6 right-6 text-primary-200 text-4xl opacity-40" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Vrei să devii membru ANIPM?</h2>
            <p className="text-lg text-gray-600 mb-8">Alătură-te comunității noastre și beneficiază de toate avantajele oferite membrilor.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('inscriere')} 
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold shadow-md hover:bg-primary-600 transition-colors duration-300"
              >
                <FaUserPlus className="inline-block mr-2" />
                Vreau să mă înscriu
              </button>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-primary-600 border border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                Am întrebări
              </Link>
            </div>
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

export default MembersPage;