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
                  <hr className='w-25'/>
                  <p className='h1 mt-3 fw-bold text-success'>
                  Passion, créativité et design</p>
                  <p className='text-gris fw-semibold mt-1 ms-1 p-2'>là où la créativité rencontre la technologie. je suis un developpeur passionnée en conception web et en design graphique, dédiée à donner vie à vos visions numériques.</p>
                  <NavLink to="/profile" style={{textDecoration:"none"}}><button className='btn btn-success d-flex flex-row gap-1 fw-semibold pt-1 mt-2'><span className='bi-person-circle fs-5'>&nbsp;<span className="fs-6">Voir mon profile</span></span></button></NavLink>
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
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
</svg>
                  </picture>
                  <p className='h6 mt-3 ms-1'>Bootstrap</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
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
                      <linearGradient id="oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1" x1="13.315" x2="38.005" y1="514.906" y2="481.377" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#9231be"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZa_dJjTWMogzFzg_gr1)" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"></path><linearGradient id="oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2" x1="25.502" x2="37.131" y1="508.764" y2="428.99" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#oOTIjsOjTqJdvfy5S4iCZb_dJjTWMogzFzg_gr2)" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"></path>
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
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
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
