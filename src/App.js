import './App.css';
import './tools/styles/responsive.css';
import { React, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Services from './components/Services';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Curriculum_Vitae from './components/Curriculum_Vitae';
import Exploits from './components/Exploits';
import Profile from './components/Profile';
import Loading from './components/Loading';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Projets from './components/Projets';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [active, setActive] = useState(false);
  const [langueActive, setLangueActive] = useState(null);
  const [chargement, setChargement] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  //dark-mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === 'enabled';
    //body all
    const body = document.body;
    const div = document.querySelector('div');
    //navbar
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    //home
    if (isDarkMode) {
      body.classList.add('dark-mode');
      moon.style.display = "none";
      sun.style.display = "block";
      div.classList.add('dark-mode1');
      localStorage.setItem('darkMode','disabled');
    } else {
      body.classList.remove('dark-mode');
      moon.style.display = "block";
      sun.style.display = "none";
      div.classList.remove('dark-mode1');
      localStorage.setItem('darkMode','enabled');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const togg = () => {
    setActive(!active)
  }

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setChargement(true);
    const trsl = document.getElementById("trsl");
    trsl.style.display = "none";
    setTimeout(() => {
      i18n.changeLanguage(lng);
      setLangueActive(lng);
      setChargement(false);
    }, 1500);
  };
  const { t } = useTranslation();

  return (
    <>
      <div>
      {chargement && 
      <div className='loading'>
        <picture>
        <div className="progressLoad">
          <div className="progressLoad-value"></div>
        </div>
        </picture>
        </div>}
        <article className='nav-4 mt-5 dark1'>
          <i className='bi-translate fs-4' id='translate_icon' onClick={togg}></i>
          <section className='translate shadow-lg' id='trsl' style={{ display: active ? "block" : "none" }}>
            <article>
              <span>
                <p onClick={() => changeLanguage('en')}  style={{ color: langueActive === 'en' ? 'red' : '' }}>
                Anglais (US)</p>
              </span>
              <span>
                <p onClick={() => changeLanguage('fr')} style={{ color: langueActive === 'fr' ? 'red' : '' }}
          >Francais (FR)</p>
              </span>
            </article>
          </section>
          <i className='bi-moon-stars text-primary fs-4' id="moon" onClick={toggleDarkMode}></i>
          <i className='bi-sun fs-4' id="sun" onClick={toggleDarkMode}></i>
        </article>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<Curriculum_Vitae />} />
            <Route path="/exploits" element={<Exploits />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Loading" element={<Loading />} />
          </Routes>
        </HashRouter>
        {/* Scroll to top button */}
        {showButton && (
          <button className="scroll-to-top-button rounded-circle shadow-sm float-end" onClick={scrollToTop}>
            <i className='bi-chevron-up fs-5'></i>
          </button>
        )}

      </div>
    </>
  );
};

export default App;
