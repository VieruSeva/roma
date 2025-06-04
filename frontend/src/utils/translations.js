import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  ro: {
    // Navigation
    navigation: {
      home: "Acasă",
      members: "Membri",
      news: "Noutăți", 
      gallery: "Galerie",
      partners: "Parteneri",
      contact: "Contact",
      becomeMember: "Fii Membru",
      benefits: "Beneficii",
      registration: "Înscriere",
      currentMembers: "Membri Actuali",
      reviews: "Recenzii",
      events: "Evenimente",
      latestNews: "Ultimele Știri",
      testingLabs: "Laboratoare de Testare",
      legislation: "Legislație",
      fundingGrants: "Finanțări și Granturi"
    },

    // Loading
    loading: "Se încarcă...",

    // Hero Section
    hero: {
      title: "ANIPM",
      subtitle: "Promovăm excelența și inovația în panificație și morărit în Republica Moldova.",
      contactUs: "Contactează-ne"
    },

    // About Section
    about: {
      title: "Despre ANIPM",
      learnMore: "Află mai multe",
      founded: "Fondată în Moldova",
      ourStory: "Descoperiți povestea noastră, misiunea și valorile care ne ghidează activitatea",
      description1: "Asociația Națională a Industriilor de Panificație și Morărit (ANIPM) este o organizație neguvernamentală, apolitică și independentă, fondată în anul 2015 în Republica Moldova. ANIPM reprezintă interesele comune ale principalilor actori din industria de morărit, panificație și produse făinoase, reunind producători, furnizori de materii prime și auxiliare, constructori de utilaje, cercetători, proiectanți, depozitari, distribuitori și comercianți.",
      description2: "Misiunea principală a asociației este de a susține și promova dezvoltarea unui sector modern, competitiv și sustenabil. Prin intermediul activităților sale, ANIPM își propune să reprezinte și să apere interesele profesionale, economice, sociale și morale ale membrilor săi în fața autorităților publice, a partenerilor internaționali și a altor organizații neguvernamentale.",
      description3: "ANIPM joacă un rol important în consolidarea colaborării dintre membrii săi, promovând schimbul de cunoștințe și experiențe, precum și identificarea soluțiilor eficiente pentru provocările din domeniu. Asociația sprijină inovația prin adoptarea noilor tehnologii, îmbunătățirea standardelor de calitate și implementarea practicilor moderne în procesul de producție. Fiind membru al Asociației, beneficiați de numeroase oportunități pentru accesarea granturilor și finanțărilor.",
      description4: "De-a lungul timpului, ANIPM a devenit o platformă de dialog și cooperare, organizând evenimente, seminarii și conferințe care contribuie la conectarea membrilor săi cu tendințele internaționale din industrie.",
      description5: "Prin activitățile sale, asociația contribuie la promovarea produselor autohtone, la creșterea vizibilității acestora pe piața locală și internațională, precum și la stimularea unei dezvoltări durabile în industria de morărit și panificație. Asociația este dedicată menținerii unei relații strânse cu autoritățile și alte părți interesate, facilitând crearea unui mediu legislativ și economic favorabil.",
      membersTitle: "ANIPM reunește actori importanți din industria națională, printre care:",
      member1: "Producători de morărit, panificație și produse făinoase;",
      member2: "Furnizori de materii prime și auxiliare;",
      member3: "Constructori de utilaje și echipamente specializate;",
      member4: "Cercetători și proiectanți;",
      member5: "Depozitari, distribuitori și comercianți.",
      conclusion1: "Scopul principal este de a contribui la dezvoltarea industriei de morărit, panificație și produse făinoase din Republica Moldova, promovând inovația, colaborarea și standardele de calitate.",
      conclusion2: "ANIPM este o voce importantă pentru industria alimentară din Moldova, contribuind la modernizarea acesteia, promovarea produselor autohtone și adaptarea la cerințele pieței interne și internaționale.",
      objectivesTitle: "Obiectivele Noastre",
      objective1: "Promovarea intereselor membrilor în industriile de panificație și morărit",
      objective2: "Dezvoltarea de standarde înalte de calitate",
      objective3: "Facilitarea accesului la finanțare și granturi",
      objective4: "Stimularea inovației și cercetării în domeniu",
      objective5: "Dezvoltarea de programe educaționale",
      objective6: "Reprezentarea în fața autorităților",
      objectiveDescription: "Lucrăm zi de zi pentru a atinge acest obiectiv prin activitățile noastre."
    },

    // HomePage additional content
    homepage: {
      ourHistory: "Istoria Noastră",
      historyDescription: "Fondată în anul 2015, asociația noastră are o istorie bogată în sprijinirea industriei panificației și morăritului moldovenești.",
      ourTeam: "Echipa Noastră", 
      teamDescription: "Avem o echipă dedicată de profesioniști cu experiență în domeniul panificației și morăritului.",
      fundamentalValues: "Valori Fundamentale",
      valuesDescription: "Suntem ghidați de valori precum integritatea, calitatea și sustenabilitatea în tot ceea ce facem.",
      achievements: "Realizări",
      achievementsDescription: "Am contribuit semnificativ la dezvoltarea și modernizarea industriei agricole din Moldova."
    },

    // Footer
    footer: {
      description: "Asociația Națională a Industriilor de Panificație și Morărit din Republica Moldova. Susținem și promovăm dezvoltarea unui sector modern, competitiv și sustenabil.",
      connectedFuture: "Conectați pentru viitor",
      quickNavigation: "Navigare Rapidă",
      contactTitle: "Contact",
      ourLocation: "Locația Noastră",
      workingHours: "Luni - Vineri: 9:00 - 17:00",
      newsletter: "Newsletter",
      newsletterDescription: "Abonați-vă la newsletter-ul nostru pentru a primi noutăți despre evenimente, inițiative și oportunități în sectorul de panificație și morărit.",
      emailPlaceholder: "Adresa dvs. de email",
      subscribe: "Abonează-te",
      subscribeDisclaimer: "* Prin abonare, sunteți de acord cu",
      termsConditions: "Termenii și Condițiile",
      privacyPolicy: "Politica de Confidențialitate",
      and: "și",
      noastre: "noastre.",
      allRightsReserved: "Toate drepturile rezervate.",
      cookiesPolicy: "Politica de Cookies",
      phoneCopied: "Phone copied! ✓",
      emailCopied: "Email copied! ✓",
      scrollToTop: "Scroll to top"
    }
  },

  en: {
    // Navigation  
    navigation: {
      home: "Home",
      members: "Members",
      news: "News",
      gallery: "Gallery", 
      partners: "Partners",
      contact: "Contact",
      becomeMember: "Become Member",
      benefits: "Benefits",
      registration: "Registration",
      currentMembers: "Current Members",
      reviews: "Reviews",
      events: "Events",
      latestNews: "Latest News",
      testingLabs: "Testing Laboratories",
      legislation: "Legislation",
      fundingGrants: "Funding & Grants"
    },

    // Loading
    loading: "Loading...",

    // Hero Section
    hero: {
      title: "ANIPM",
      subtitle: "We promote excellence and innovation in baking and milling in the Republic of Moldova.",
      contactUs: "Contact Us"
    },

    // About Section
    about: {
      title: "About ANIPM",
      learnMore: "Learn More",
      founded: "Founded in Moldova",
      ourStory: "Discover our story, mission and values that guide our activities",
      description1: "The National Association of Baking and Milling Industries (ANIPM) is a non-governmental, apolitical and independent organization, founded in 2015 in the Republic of Moldova. ANIPM represents the common interests of the main actors in the milling, baking and flour products industry, bringing together producers, suppliers of raw materials and auxiliaries, equipment manufacturers, researchers, designers, warehouses, distributors and traders.",
      description2: "The main mission of the association is to support and promote the development of a modern, competitive and sustainable sector. Through its activities, ANIPM aims to represent and defend the professional, economic, social and moral interests of its members before public authorities, international partners and other non-governmental organizations.",
      description3: "ANIPM plays an important role in strengthening collaboration between its members, promoting the exchange of knowledge and experience, as well as identifying efficient solutions to challenges in the field. The Association supports innovation through the adoption of new technologies, improvement of quality standards and implementation of modern practices in the production process. Being a member of the Association, you benefit from numerous opportunities to access grants and funding.",
      description4: "Over time, ANIPM has become a platform for dialogue and cooperation, organizing events, seminars and conferences that contribute to connecting its members with international trends in the industry.",
      description5: "Through its activities, the association contributes to the promotion of local products, increasing their visibility on the local and international market, as well as stimulating sustainable development in the milling and baking industry. The Association is dedicated to maintaining a close relationship with authorities and other interested parties, facilitating the creation of a favorable legislative and economic environment.",
      membersTitle: "ANIPM brings together important actors from the national industry, including:",
      member1: "Producers of milling, baking and flour products;",
      member2: "Suppliers of raw materials and auxiliaries;", 
      member3: "Manufacturers of specialized equipment and machinery;",
      member4: "Researchers and designers;",
      member5: "Warehouses, distributors and traders.",
      conclusion1: "The main purpose is to contribute to the development of the milling, baking and flour products industry in the Republic of Moldova, promoting innovation, collaboration and quality standards.",
      conclusion2: "ANIPM is an important voice for the food industry in Moldova, contributing to its modernization, promotion of local products and adaptation to the requirements of the domestic and international market.",
      objectivesTitle: "Our Objectives",
      objective1: "Promoting the interests of members in the baking and milling industries",
      objective2: "Development of high quality standards",
      objective3: "Facilitating access to financing and grants",
      objective4: "Stimulating innovation and research in the field",
      objective5: "Development of educational programs",
      objective6: "Representation before authorities",
      objectiveDescription: "We work every day to achieve this objective through our activities."
    },

    // HomePage additional content
    homepage: {
      ourHistory: "Our History",
      historyDescription: "Founded in 2015, our association has a rich history in supporting the Moldovan baking and milling industry.",
      ourTeam: "Our Team",
      teamDescription: "We have a dedicated team of professionals with experience in the field of baking and milling.",
      fundamentalValues: "Fundamental Values",
      valuesDescription: "We are guided by values such as integrity, quality and sustainability in everything we do.",
      achievements: "Achievements", 
      achievementsDescription: "We have contributed significantly to the development and modernization of the agricultural industry in Moldova."
    },

    // Footer
    footer: {
      description: "The National Association of Baking and Milling Industries of the Republic of Moldova. We support and promote the development of a modern, competitive and sustainable sector.",
      connectedFuture: "Connected for the future",
      quickNavigation: "Quick Navigation",
      contactTitle: "Contact",
      ourLocation: "Our Location",
      workingHours: "Monday - Friday: 9:00 - 17:00",
      newsletter: "Newsletter",
      newsletterDescription: "Subscribe to our newsletter to receive news about events, initiatives and opportunities in the baking and milling sector.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      subscribeDisclaimer: "* By subscribing, you agree to our",
      termsConditions: "Terms and Conditions",
      privacyPolicy: "Privacy Policy",
      and: "and",
      noastre: ".",
      allRightsReserved: "All rights reserved.",
      cookiesPolicy: "Cookies Policy",
      phoneCopied: "Phone copied! ✓",
      emailCopied: "Email copied! ✓", 
      scrollToTop: "Scroll to top"
    }
  }
};

export const useTranslation = () => {
  const { currentLanguage } = React.useContext(React.createContext());
  
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to Romanian if key not found
        translation = translations.ro;
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return { t };
};

// Hook that works with LanguageContext
export const useTranslationWithContext = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage || 'ro'];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to Romanian if key not found
        translation = translations.ro;
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return { t };
};

export default translations;
