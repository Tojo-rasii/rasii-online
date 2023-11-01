import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [active, setActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const list = document.getElementById("list");
    const close = document.getElementById("close");
    //home
    if (isDarkMode) {
      list.style.display = "none";
      close.style.display = "block";
    } else {
      list.style.display = "block";
      close.style.display = "none";
    }
  }, [isDarkMode]);
  const togg = () => {
    setActive(!active)
    setIsDarkMode(prevMode => !prevMode);
  }

  //Traduction
  const { t } = useTranslation();

  return (
    <div>
      <div className='nav_pc' id='nav_pc'>
        <header id='nav' className='navbar fixed-top shadow-sm d-flex flex-row justify-content-between p-2 pe-5'>
          <NavLink to="/" style={{ textDecoration: 'none' }}><div className='logo pt-1'>
            <p className='para-T h2 fw-bold fs-3'><span className=' fs-2'>T</span><span className='text-danger mt-1 position-absolute'>R.</span></p>
          </div></NavLink>
          <nav>
            <section className='nav-section d-flex flex-row gap-4 mt-3 fs-6'>
              <NavLink to="/" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p>{t("home")}</p>
              </article></NavLink>
              <NavLink to="/Services" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "nav-active" : "")}><article>
                <p >{t("service")}</p>
              </article></NavLink>

              <NavLink to="/apropos" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "nav-active1" : "")}><article className='nav-about'>
                <p >{t("about")}</p>
              </article></NavLink>

              <NavLink to="/contact" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "nav-active2" : "")}><article className='nav-4'>
                <button className='button btn btn-danger fw-semibold shadow-sm'>Contact</button>
              </article></NavLink>

            </section>
            {/* <div style={{ display: active ? "block" : "none" }}>
              <p className='p-light bi-sun position-absolute mt-1 text-warning fs-4 rounded-1 bg-light shadow-lg ps-3 pe-4 pb-2' onClick={() => {

              }}>&nbsp;<span className='fs-6 fw-semibold text-dark'>Light</span></p>
              <p className='p-dark bi-moon position-absolute text-info fs-4 rounded-1 bg-light shadow-lg ps-3 pe-4 pb-2' onClick={() => {

              }}>&nbsp;<span className='fs-6 fw-semibold text-dark' onClick={togg} >Dark</span></p>
            </div> */}
          </nav>
        </header>
      </div>
      {/* Navbar-mobile */}
      <div className='nav_mobile'>
        <header id='nav' className='navbar fixed-top shadow-sm d-flex flex-row justify-content-between p-2 pe-5'>
          <NavLink to="/" style={{ textDecoration: 'none' }}><div className='logo pt-1'>
            <p className='para-T h2 fw-bold fs-3'><span className=' fs-2'>T</span><span className='text-danger mt-1 position-absolute'>R.</span></p>
          </div></NavLink>
          <nav>
            <i className='bi-list' id="list" onClick={togg}></i>
            <i className='bi-x fs-1' id="close" onClick={togg}></i>
          </nav>
          <section className='mobile_list shadow-lg' style={{ display: active ? "block" : "none" }}>
            <article>
              <NavLink to="/" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "mobile-active" : "")}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='me-1' width="28" height="28" viewBox="0,0,256,256">
                    <g transform="translate(44.8,44.8) scale(0.65,0.65)"><g fill="none" fill-rule="nonzero" stroke="#007bff" stroke-width="16" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M128,314.68459c-103.10305,0 -186.68459,-83.58154 -186.68459,-186.68459v0c0,-103.10305 83.58154,-186.68459 186.68459,-186.68459v0c103.10305,0 186.68459,83.58154 186.68459,186.68459v0c0,103.10305 -83.58154,186.68459 -186.68459,186.68459z" id="shape"></path></g><g fill="#007bff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" id='fill'><g transform="translate(-1.6,-16) scale(5.33333,5.33333)"><path d="M39.5,43h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-9c0,-1.105 -0.895,-2 -2,-2h-4c-1.105,0 -2,0.895 -2,2v9c0,1.381 -1.119,2.5 -2.5,2.5h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-19.087c0,-2.299 1.054,-4.471 2.859,-5.893l14.212,-11.199c0.545,-0.428 1.313,-0.428 1.857,0l14.214,11.199c1.805,1.422 2.858,3.593 2.858,5.891v19.089c0,1.381 -1.119,2.5 -2.5,2.5z"></path></g></g></g>
                  </svg>&nbsp;Accueil</p>
              </NavLink>
            </article>
            <article>
              <NavLink to="/services" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "mobile-active" : "")}>
                <p><i class="bi bi-briefcase-fill i-services me-1"></i>&nbsp;Services</p>
              </NavLink>
              </article>
              <article>
              <NavLink to="/apropos" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "mobile-active" : "")}>
                <p><svg xmlns="http://www.w3.org/2000/svg" className='me-1 i-info' x="0px" y="0px" width="29" height="29" viewBox="0 0 128 128">
<path d="M 64 6 C 32 6 6 32 6 64 C 6 96 32 122 64 122 C 96 122 122 96 122 64 C 122 32 96 6 64 6 z M 64 12 C 92.7 12 116 35.3 116 64 C 116 92.7 92.7 116 64 116 C 35.3 116 12 92.7 12 64 C 12 35.3 35.3 12 64 12 z M 64 30 A 9 9 0 0 0 64 48 A 9 9 0 0 0 64 30 z M 64 59 C 59 59 55 63 55 68 L 55 92 C 55 97 59 101 64 101 C 69 101 73 97 73 92 L 73 68 C 73 63 69 59 64 59 z"></path>
</svg>&nbsp;À propos</p>
              </NavLink>
              </article>
              <article>
              <NavLink to="/contact" style={{ textDecoration: 'none' }} className={(nav) => (nav.isActive ? "mobile-active" : "")}><p>
                <i className='bi-telephone-fill i-contact me-1'></i>
                &nbsp;Contact</p></NavLink>
            </article>
          </section>
        </header>
      </div>
    </div>
  )
}

export default Navbar
