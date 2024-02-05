import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import image from "../tools/image/text2.jpg";
import react from "../tools/image/react.png"

export class Body_Apropos extends Component {
  render() {
    return (
      <div>
        <main className='Apropos'>
          <div className='header-apropos'>
            <header className='shadow-sm p-5'>
              <section>
                <article className='article-text'>
                  <sub className='bi-info-circle fw-semibold text-gris fs-6'>&nbsp;À propos</sub>
                  <hr className='w-25' />
                  <p className='h1 mt-3 fw-bold text-success'>
                    Passion, créativité et design</p>
                  <p className='text-gris fw-semibold mt-1 ms-1 p-2'>là où la créativité rencontre la technologie. je suis un developpeur passionnée en conception web et en design graphique, dédiée à donner vie à vos visions numériques.</p>
                  <NavLink to="/profile" style={{ textDecoration: "none" }}><button className='btn btn-success d-flex flex-row gap-1 fw-semibold pt-1 mt-2'><span className='bi-person-circle fs-5'>&nbsp;<span className="fs-6">Voir mon profile</span></span></button></NavLink>
                </article>
                <article className='d-flex justify-content-center align-items-center'>
                  <picture className='apropos-image bg-none p-1 rounded-1'>
                    <img src={image} alt="333" className='image2' />
                  </picture>
                </article>
              </section>
            </header>
          </div>
          <div className='main-apropos d-flex flex-column p-3'>
            <div>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon7 ps-3 pe-3 text-center position-absolute ms-4'>
                  <i className="bi bi-hand-thumbs-up text-primary fs-1"></i>
                </article>
                <article className='d-flex flex-column align-items-center text-center'>
                  <p className='text-uppercase fw-bold h3 text-primary mt-4 pt-4'>AGILITÉ</p>
                  <p className='text-gris p-1 w-75 pb-3 fw-semibold'>Découvrez comment mon agilité me permet de rester en tête de la course et d'atteindre l'excellence dans tout ce que j'entreprend.</p>

                </article>
              </section>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon8 ps-3 pe-3 text-center position-absolute ms-4'>
                  <i className="bi bi-lightning text-warning fs-1"></i>
                </article>
                <article className='d-flex flex-column align-items-center'>
                  <p className='text-uppercase fw-bold h3 text-warning mt-4 pt-4'>RAPIDITÉ</p>
                  <p className='text-gris w-75 p-1 fw-semibold text-center'>Avec ma méthodologie agile éprouvée, je suis prêts à relever tous les défis et à livrer des résultats exceptionnels dans les délais les plus courts.</p>

                </article>
              </section>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon9 ps-3 pe-3 text-center position-absolute ms-4'><i className="bi bi-emoji-sunglasses text-info fs-1"></i></article>
                <article className='d-flex flex-column align-items-center text-center'>
                  <p className='text-uppercase fw-bold h3 text-info mt-4 pt-4'>professionnalisme</p>
                  <p className='text-gris w-75 p-1 fw-semibold'>Explorez mon site pour en apprendre d'avantage sur mon engagement envers l'excellence professionnelle et comment je peux répondre à vos besoins.</p>

                </article>
              </section>
            </div>
          </div>
          <div className='footer-apropos rounded-1 shadow-sm mt-3 pb-5'>
            <section className='pt-3 ps-5'>
              <p className='fw-semibold fs-4 text-center p_right mt-2'>Mes compétences</p>
              <div className='div-left mt-4 pb-4'>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg fill="#ff0000" opacity="1.0" width="70" height="70" viewBox="0 0 22 28"><path d="M17.656 9.328l.25-2.734H4.093l.734 8.344h9.562l-.344 3.563-3.078.828-3.063-.828-.203-2.188H4.967l.344 4.344 5.656 1.563h.063v-.016l5.609-1.547.781-8.5H7.357l-.234-2.828h10.531zM0 2h22l-2 22.469L10.969 27 2 24.469z" /></svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>HTML</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg fill="#0d6efd" id="css" opacity="1.0" width="70" height="70" viewBox="0 0 512 512">
                      <path
                        d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z" />
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>CSS</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0,0,256,256">
                      <g fill="#ffc107" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M45.274,2.325c-0.19,-0.207 -0.457,-0.325 -0.738,-0.325h-39.072c-0.281,0 -0.548,0.118 -0.738,0.325c-0.19,0.207 -0.283,0.485 -0.258,0.764l3.52,39.427c0.037,0.412 0.324,0.759 0.722,0.873l16.01,4.573c0.089,0.025 0.182,0.038 0.274,0.038c0.092,0 0.185,-0.013 0.274,-0.038l16.024,-4.573c0.398,-0.114 0.685,-0.461 0.722,-0.873l3.518,-39.427c0.025,-0.279 -0.069,-0.557 -0.258,-0.764zM12,29.004l7,1.942v-19.946h4v26l-11,-3.051zM38.054,22l-1.054,12.25l-10,2.75v-4.601l6.75,-1.855l0.25,-3.75l-7,1.206v-17h12l-0.345,4h-7.655v8z"></path></g></g>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-4'>JavaScript</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" fill="#6610f2" class="bi bi-bootstrap-fill mt-2" viewBox="0 0 16 16">
                      <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                      <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-1'>Bootstrap</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>Next JS</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <img src={react} alt="react" className='react-img' />
                  </picture>
                  <p className='h6 mt-3 ms-3'>REACT JS</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>VS CODE</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>Github</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0,0,256,256" style={{ background: "#22ea82", padding: "0.3em", borderRadius: "0.5em" }}>
                      <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path><path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path><path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path><path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path><path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path><path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path></g></g>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>ChatGPT</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1 langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#FF5722" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path><path fill="#1C0802" d="M9,9v30h30V9H9z M23.691,31l-0.762-2.91h-3.916L18.252,31h-3.037l4.443-14.219h2.627L26.758,31H23.691z M30.85,31h-2.773V20.434h2.773V31z M30.552,18.754c-0.271,0.28-0.636,0.42-1.099,0.42s-0.828-0.14-1.099-0.42s-0.405-0.632-0.405-1.055c0-0.43,0.137-0.781,0.41-1.055s0.639-0.41,1.094-0.41s0.82,0.137,1.094,0.41s0.41,0.625,0.41,1.055C30.957,18.122,30.822,18.474,30.552,18.754z"></path><path fill="#1C0802" d="M19.639 25.697L22.295 25.697 20.967 20.629z"></path>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>Illustrator</p>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Body_Apropos
