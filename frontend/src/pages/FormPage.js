import React, { useEffect } from 'react';
import { PageHero } from '../components/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';

const FormPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  // Form files for membership
  const formFiles = [
    {
      id: 1,
      title: 'Cerere de Aderare',
      description: 'Formular pentru cerere de aderare la asociație (BLANC CERERE ADERARE).',
      downloadLink: '/files/cerere-inscriere-persoana-juridica.docx',
      fileType: 'DOCX'
    },
    {
      id: 2,
      title: 'Contract de Aderare Membru',
      description: 'Formular pentru contractul de aderare membru al asociației.',
      downloadLink: '/files/cerere-inscriere-persoana-fizica.docx',
      fileType: 'DOCX'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-hidden"
    >
      <PageHero
        title="Formular de Înscriere"
        subtitle="Descărcați și completați formularele necesare pentru a deveni membru ANIPM."
        backgroundImage="/images/archive-hero-bg.jpg" 
      />

      <section className="py-12 md:py-20 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-heading">Formulare de Înscriere</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Pentru a deveni membru al Asociației Naționale a Industriilor de Panificație și Morărit, 
              vă rugăm să descărcați, completați și să trimiteți formularele de mai jos la adresa: 
              <a href="mailto:anipm@rodals.md" className="text-primary-600 hover:underline"> anipm@rodals.md</a>
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold mb-4">Instrucțiuni pentru completare:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Descărcați formularele corespunzătoare tipului de membru (persoană juridică sau fizică).</li>
                <li>Completați toate câmpurile obligatorii din formulare.</li>
                <li>Semnați documentele (semnătură electronică sau scanată).</li>
                <li>Atașați documentele suplimentare solicitate.</li>
                <li>Trimiteți toate documentele într-un singur email la adresa anipm@rodals.md.</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {formFiles.map((file, index) => (
              <motion.div
                key={file.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{file.title}</h3>
                  <p className="text-gray-600 mb-6">{file.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Format: {file.fileType}</span>
                    <a 
                      href={file.downloadLink} 
                      download
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FaDownload className="mr-2" />
                      Descarcă
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-8">
              După completarea și trimiterea formularelor, echipa noastră va analiza cererea dumneavoastră și vă va contacta în cel mai scurt timp posibil.
              Pentru orice întrebări suplimentare, vă rugăm să ne contactați la <a href="mailto:anipm@rodals.md" className="text-primary-600 hover:underline">anipm@rodals.md</a> sau la numărul de telefon <a href="tel:076777790" className="text-primary-600 hover:underline">076777790</a>.
            </p>
            <Link 
              to="/membri?section=inscriere" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-medium hover:bg-primary-100 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Înapoi la Pagina de Membri
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FormPage;
