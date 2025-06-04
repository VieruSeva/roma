import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaPhone, FaMapMarkerAlt, FaFlask, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LabsPage = () => {
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

  // State to track if showing all labs or just featured ones
  const [showAllLabs, setShowAllLabs] = useState(false);
  
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  const pageInfo = {
    title: "Laboratoare",
    description: "Laboratoare de testare a produselor alimentare din Moldova",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Noutăți", path: "/noutati" },
      { name: "Laboratoare", path: "/laboratoare" }
    ]
  };

  // Labs data
  const allLabs = [
    {
      id: 1,
      name: "Centrul National Sanatatea Animalelor, Plantelor si Siguranta Alimentelor IP",
      location: "Chișinău, Moldova",
      description: "Furnizor de:\n• Laboratoare de testari biologice\n• Servicii de control pentru produse alimentare\n• Servicii de testare a produselor alimentare...",
      address: "str. Murelor, 3, MD2051 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37322742311",
      isFeatured: true
    },
    {
      id: 2,
      name: "SGS Moldova SA",
      location: "Chișinău, Moldova",
      description: "Inspecție, certificare, expertiză, verificare, monitorizare, control calitate și cantitatea mărfurilor. Certificare conformitate, reglementare tehnică (RT). Consultanță și instruire, evaluare și testare de laborator. Certificarea GLOBALGAP.\nFurnizor de:\n• Organisme de asigurare a calitatii\n• Organisme specializate in calitate totala\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Mihai Eminescu, 7, MD2009 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+373228383",
      isFeatured: true
    },
    {
      id: 3,
      name: "Agentia Nationala pentru Sanatate Publica IP",
      location: "Chișinău, Moldova",
      description: "Elaborarea proiectelor, documentelor legislative și normative, Programelor Naționale în sănătate publică. Activitate științifică. Activitatea organizator-metodică pentru serviciul de supraveghere de Stat a sănătății publice. Autorizarea sanitară a obiectelor și certificarea igienică a produselor alimentare.\nFurnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Gheorghe Asachi, 67 A, MD2028 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37322574501",
      isFeatured: true
    },
    {
      id: 4,
      name: "Topcontrol SRL",
      location: "Chișinău, Moldova",
      description: "Servicii independente de inspectie cantitativa si calitativa, monitorizare, verificare, expertiza si certificare a marfurilor agricole, alimentare, minerale, petroliere, destinate exportului/importului. Servicii de testari de laborator a calitatii marfurilor conform standardelor Internationale.\nFurnizor de:\n• Laboratoare de testari fizice\n• Laboratoare de testari biologice\n• Laboratoare de testari in domeniul microbiologiei...",
      address: "str. Calea Trușenilor, 27, MD2071 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37369730009",
      isFeatured: false
    },
    {
      id: 5,
      name: "Inspectie - Certificare - Calitate SRL SC",
      location: "Chișinău, Moldova",
      description: "Certificare produselor: produse alimentare, jucării, produse textile, încălțăminte, produse din mase plastice, indicătoare rutiere.\nFurnizor de:\n• Organisme de evaluare si certificare\n• Servicii de testari si analize pentru industria textila\n• Servicii de testare a produselor alimentare",
      address: "str. Sarmizegetusa, 92, of. 412 et. 4, MD2032 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37322507075",
      isFeatured: false
    },
    {
      id: 6,
      name: "Laboratorul central de testare a bauturilor alcoolice, (nealcoolice si produselor conservate IP)",
      location: "Chișinău, Moldova",
      description: "Certificarea, inspectarea, expertiza calității produselor alimentare. Eliberarea certificatelor de conformitate SNC al Moldovei și Gosstandardului Rusiei (GOST R) la conserve, fructe și legume proaspete.\nFurnizor de:\n• Servicii de control pentru cereale in vrac\n• Servicii de control pentru produse alimentare\n• Servicii de testare a produselor alimentare...",
      address: "str. Grenoble, 128 U, MD2072 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37322285959",
      isFeatured: false
    },
    {
      id: 7,
      name: "Directia Teritoriala pentru Siguranta Alimentelor Falesti cu Raza de Acoperire si a r. Glodeni (Agentia Nationala pentru Siguranta Alimentelor)",
      location: "Fălești, Moldova",
      description: "Furnizor de:\n• Servicii de diagnosticare pentru agricultura\n• Servicii de testare pentru hrana animalelor\n• Servicii de control pentru cereale in vrac...",
      address: "str-la Decebal, 6, MD5902 Fălești, Raionul Fălești, Moldova",
      phone: "+37325924434",
      isFeatured: false
    },
    {
      id: 8,
      name: "Agentia Nationala pentru Siguranta Alimentelor (ANSA)",
      location: "Chișinău, Moldova",
      description: "Furnizor de:\n• Administratia protectiei mediului si a resurselor naturale\n• Autoritati de reglementare\n• Servicii de testare pentru hrana animalelor...",
      address: "str. M. Kogălniceanu, 63, MD2009 Chișinău, Municipiul Chișinău, Moldova",
      phone: "+37322264660",
      isFeatured: false
    },
    {
      id: 9,
      name: "Laboratorul de Incercari a Produselor Alimentare Donduseni (Centrul National Sanatatea Animalelor, Plantelor si Siguranta Alimentelor IP)",
      location: "Dondușeni, Moldova",
      description: "Furnizor de:\n• Laboratoare de testari biologice\n• Servicii de testare a produselor alimentare",
      address: "str. Bogdan Petriceicu Hașdeu, 13, MD5102 Dondușeni, Raionul Dondușeni, Moldova",
      phone: "+37325122075",
      isFeatured: false
    },
    {
      id: 10,
      name: "Centrul de sanatate publica Chisinau - Ialoveni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ialoveni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Alexandru cel Bun, 19, MD6801 Ialoveni, Raionul Ialoveni, Moldova",
      phone: "+37326821678",
      isFeatured: false
    },
    {
      id: 11,
      name: "Centrul de sănătate publică Orhei - Soldanesti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Șoldănești, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Păcii, 13, MD7201 Șoldănești, Raionul Șoldănești, Moldova",
      phone: "+37327225241",
      isFeatured: false
    },
    {
      id: 12,
      name: "Centrul de sanatate publica Edinet (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Edineț, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. A. Pușkin, 16, MD4601 Edineț, Raionul Edineț, Moldova",
      phone: "+37324622351",
      isFeatured: false
    },
    {
      id: 13,
      name: "Centrul de sanatate publica Cahul - Cantemir (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Cantemir, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Nicolae Testemițanu, 3, MD7301 Cantemir, Raionul Cantemir, Moldova",
      phone: "+37327322556",
      isFeatured: false
    },
    {
      id: 14,
      name: "Centrul de sanatate publica Chisinau (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Chișinău, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "Chișinău, Municipiul Chișinău, Moldova",
      phone: "N/A",
      isFeatured: false
    },
    {
      id: 15,
      name: "Centrul de sanatate publica Hincesti - Basarabeasca (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Basarabeasca, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. 40 let Pobedî, 2, MD6702 Basarabeasca, Raionul Basarabeasca, Moldova",
      phone: "+37329722521",
      isFeatured: false
    },
    {
      id: 16,
      name: "Centrul de sanatate publica Comrat - Vulcanesti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Vulcănești, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str-la Vasili Ceapaev, 2, MD5301 Vulcănești, UTA Gagauzia, Moldova",
      phone: "+37329336628",
      isFeatured: false
    },
    {
      id: 17,
      name: "Centru de sanatate publica Balti - Singerei (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Sîngerei, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Nicolae Testemițanu, 13, MD6201 Sîngerei, Raionul Sîngerei, Moldova",
      phone: "+37326223398",
      isFeatured: false
    },
    {
      id: 18,
      name: "Centrul de sanatate publica Balti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Bălți, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Ivan Franko, 46, MD3112 Bălți, Municipiul Bălți, Moldova",
      phone: "+37323173215",
      isFeatured: false
    },
    {
      id: 19,
      name: "Centrul de sanatate publica Chisinau - Criuleni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Criuleni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "bd. Biruinței, 1, MD4801 Criuleni, Raionul Criuleni, Moldova",
      phone: "+37324822445",
      isFeatured: false
    },
    {
      id: 20,
      name: "Centrul de sanatate publica Soroca - Floresti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Florești, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "bd. Victoriei, 64 A, MD5001 Florești, Raionul Florești, Moldova",
      phone: "+37325020079",
      isFeatured: false
    },
    {
      id: 21,
      name: "Centrul de sanatate publica Cahul - Taraclia (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Taraclia, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Mira, 1, MD7402 Taraclia, Raionul Taraclia, Moldova",
      phone: "+37329423970",
      isFeatured: false
    },
    {
      id: 22,
      name: "Centrul de sanatate publica Ungheni - Calarasi (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Călărași, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "Călărași, Raionul Călărași, Moldova",
      phone: "N/A",
      isFeatured: false
    },
    {
      id: 23,
      name: "Centrul de sanatate publica Ungheni - Nisporeni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Nisporeni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Chișinăului, 1, MD6401 Nisporeni, Raionul Nisporeni, Moldova",
      phone: "+37326423949",
      isFeatured: false
    },
    {
      id: 24,
      name: "Centrul de sanatate publica Cahul (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Cahul, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "bd. Republicii, 20, MD3909 Cahul, Raionul Cahul, Moldova",
      phone: "+37329922466",
      isFeatured: false
    },
    {
      id: 25,
      name: "Centrul de sanatate publica Balti - Glodeni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Glodeni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Suveranității, 29, MD4901 Glodeni, Raionul Glodeni, Moldova",
      phone: "+37324924974",
      isFeatured: false
    },
    {
      id: 26,
      name: "Centrul de sanatate publica Comrat - Ceadir-Lunga (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ceadîr-Lunga, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Miciurin, 2/3, MD6103 Ceadîr-Lunga, UTA Gagauzia, Moldova",
      phone: "+37329123982",
      isFeatured: false
    },
    {
      id: 27,
      name: "Centrul de sanatate publica Soroca - Drochia (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Drochia, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Serghei Lazo, 9, MD5201 Drochia, Raionul Drochia, Moldova",
      phone: "+37325223094",
      isFeatured: false
    },
    {
      id: 28,
      name: "Centrul de sanatate publica Soroca (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Soroca, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Alexandru cel Bun, 42, MD3006 Soroca, Raionul Soroca, Moldova",
      phone: "+37323023264",
      isFeatured: false
    },
    {
      id: 29,
      name: "Centrul de sanatate publica Balti - Riscani (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Râșcani, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Taras Șevcenko, 2, MD5601 Râșcani, Raionul Râșcani, Moldova",
      phone: "+37325628788",
      isFeatured: false
    },
    {
      id: 30,
      name: "Centrul de sanatate publica Orhei - Rezina (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Rezina, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Alexei Șciusev, 2 A, MD5403 Rezina, Raionul Rezina, Moldova",
      phone: "+37325424694",
      isFeatured: false
    },
    {
      id: 31,
      name: "Centrul de sanatate publica Hincesti - Leova (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Leova, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Unirii, 39, MD6301 Leova, Raionul Leova, Moldova",
      phone: "+37326322052",
      isFeatured: false
    },
    {
      id: 32,
      name: "Centrul de sanatate publica Edinet - Briceni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Briceni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Mihai Eminescu, 56/1, MD4701 Briceni, Raionul Briceni, Moldova",
      phone: "+37324723140",
      isFeatured: false
    },
    {
      id: 33,
      name: "Centrul de sanatate publica Comrat (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Comrat, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Pobedî, 26, MD3800 Comrat, UTA Gagauzia, Moldova",
      phone: "+37329822353",
      isFeatured: false
    },
    {
      id: 34,
      name: "Centrul de sanatate publica Chisinau - Straseni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Strășeni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Ștefan cel Mare, 107, MD3702 Strășeni, Raionul Strășeni, Moldova",
      phone: "+37323722150",
      isFeatured: false
    },
    {
      id: 35,
      name: "Centrul de sanatate publica Hincesti - Cimislia (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Cimișlia, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Cetatea Albă, 27, MD4101 Cimișlia, Raionul Cimișlia, Moldova",
      phone: "+37324122494",
      isFeatured: false
    },
    {
      id: 36,
      name: "Centrul de sanatate publica Orhei - Telenesti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Telenești, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Eugen Coca, 4, MD5801 Telenești, Raionul Telenești, Moldova",
      phone: "+37325822278",
      isFeatured: false
    },
    {
      id: 37,
      name: "Centrul de sanatate publica Edinet - Ocnita (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ocnița, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Sănătății, 18, MD7101 Ocnița, Raionul Ocnița, Moldova",
      phone: "+37327122282",
      isFeatured: false
    },
    {
      id: 38,
      name: "Centrul de sanatate publica Causeni - Anenii Noi (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Anenii Noi, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Alexandr Suvorov, 34, MD6501 Anenii Noi, Raionul Anenii Noi, Moldova",
      phone: "+37326522472",
      isFeatured: false
    },
    {
      id: 39,
      name: "Centrul de sanatate publica Edinet - Donduseni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Dondușeni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Păcii, 5, MD5100 Dondușeni, Raionul Dondușeni, Moldova",
      phone: "+37325122359",
      isFeatured: false
    },
    {
      id: 40,
      name: "Centrul de sanatate publica Ungheni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ungheni, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. A. Cosmescu, 5, MD3600 Ungheni, Raionul Ungheni, Moldova",
      phone: "+37323622456",
      isFeatured: false
    },
    {
      id: 41,
      name: "Centrul de sanatate publica Orhei (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Orhei, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Constantin Negruzzi, 78, MD3502 Orhei, Raionul Orhei, Moldova",
      phone: "+37323525333",
      isFeatured: false
    },
    {
      id: 42,
      name: "Centrul de sanatate publica Causeni - Stefan Voda (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ștefan Vodă, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Nicolae Testemiţanu, 1, MD4201 Ștefan Vodă, Raionul Ștefan Vodă, Moldova",
      phone: "+37324223857",
      isFeatured: false
    },
    {
      id: 43,
      name: "Centrul de sanatate publica Causeni (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Ștefan Vodă, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Nicolae Testemiţanu, 1, MD4201 Ștefan Vodă, Raionul Ștefan Vodă, Moldova",
      phone: "+37324223857",
      isFeatured: false
    },
    {
      id: 44,
      name: "Centrul de sanatate publica Hincesti (Agentia Nationala pentru Sanatate Publica IP)",
      location: "Hîncești, Moldova",
      description: "Furnizor de:\n• Servicii de analiza a apelor\n• Servicii de asigurare a calitatii pentru sectorul comercial si industrial\n• Servicii de control al calitatii bunurilor de consum...",
      address: "str. Toma Ciorbă, 2, MD3401 Hîncești, Raionul Hîncești, Moldova",
      phone: "+37326924167",
      isFeatured: false
    }
  ];

  // Filter labs based on search query
  const filteredLabs = allLabs.filter(lab => 
    lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lab.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lab.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine which labs to display based on showAllLabs flag
  const displayedLabs = showAllLabs 
    ? filteredLabs 
    : filteredLabs.filter(lab => lab.isFeatured);

  // Handler for "Vezi toate laboratoarele" button
  const handleShowAllLabs = () => {
    setShowAllLabs(true);
    // Scroll back to the top of the labs section after showing all labs
    setTimeout(() => {
      const labsSection = document.querySelector('.labs-section');
      if (labsSection) {
        labsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="labs-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
      />
      
      <section className="py-16 bg-white labs-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Caută laboratoare după nume, locație sau servicii..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {displayedLabs.map((lab, index) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                      <FaFlask className="text-primary-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{lab.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{lab.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-700 whitespace-pre-line">
                      {lab.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaMapMarkerAlt className="mr-2 text-primary-500" />
                      <span className="text-sm">{lab.address}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaPhone className="mr-2 text-primary-500" />
                      <span className="text-sm">{lab.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {!showAllLabs && filteredLabs.length > 3 && (
            <div className="text-center">
              <button
                onClick={handleShowAllLabs}
                className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
              >
                Vezi toate laboratoarele
                <FaChevronDown className="ml-2" />
              </button>
            </div>
          )}
          
          {showAllLabs && (
            <div className="text-center">
              <button
                onClick={() => setShowAllLabs(false)}
                className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
              >
                Arată doar laboratoarele principale
                <FaChevronUp className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>
      
      <div className="my-16 text-center">
        <Link 
          to="/noutati" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la noutăți
        </Link>
      </div>
    </motion.div>
  );
};

export default LabsPage;