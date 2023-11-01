import React, { Component } from 'react'
import image from "../tools/image/C879AF5.jpeg"
import { NavLink } from "react-router-dom";

export class Body_Profile extends Component {
  render() {
    return (
      <div>
        <main className='Profile'>
          <header className='Profile-head rounded-1 pt-2'>
            <section>
              <article>
                <picture className='Profile-img'>
                  <img src={image} alt="tojo" className='outlin mt-2 image-home shadow-sm p-2' />
                  <article className='mt-4 article-profile'>
                    <p className='fw-bold text-primary fs-5'>Tojo RASAMIMANANA</p>
                    <p className='fw-semibold fs-6'>Développeur front-end</p>
                  </article>

                  <article className='article-location'>
                    <p>
                      <strong className='text-primary'>Âge:&nbsp;</strong>
                      ___
                    </p>
                    <p>
                      <strong className='text-primary'>Statut:&nbsp;</strong>
                      Célibataire
                    </p>
                    <p>
                      <strong className='text-primary'>Localisation:&nbsp;</strong>
                      Antananarive
                    </p>
                  </article>
                  <NavLink to="/cv" style={{ textDecoration: 'none' }}><p className='mt-3 ms-1 text-center border-cv fw-semibold text-primary pt-1 pb-1 rounded-1  fs-6 pe-2'><i className='bi-cloud-arrow-down fs-5' id='i-link'>&nbsp;</i>Curriculum vitae</p>  </NavLink>
                </picture>
              </article>
            </section>
            <section className='Profile-content d-flex flex-column gap-0'>
              <article className=''>
                <p className='fw-semibold fs-5 text-primary content-profile'>Description<br /><p className='fs-6 text-gris fw-normal p-2 rounded-1'>je suis un Developpeur web autodidacte passionné par la création de sites web modernes et esthétiquement plaisants.<br />Mon parcours en tant qu' autodidacte témoigne de ma détermination à constamment améliorer mes compétences et à rester à la pointe des dernières technologies et tendances</p></p>
                <div className='footer-profile'>
                  <p className='fw-semibold fs-5 mt-4 text-primary'>Personnalité</p>
                  <div class="flex-wrapper">
                    <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="80, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-vector-pen" id='creative' viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                      </svg>
                      <p className='ms-4'>Créatif <span className='fw-bold text-primary'>+80</span></p>
                    </div>

                    <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="80, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-heart-fill" id='loyal' viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>
                      <p className='ms-4'>Fidèle  <span className='fw-bold text-info'>+70</span></p>
                    </div>

                    <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart warning">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="90, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-trophy-fill" id='competiteur' viewBox="0 0 16 16">
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                      </svg>
                      <p className='ms-0'>Compétiteur <span className='fw-bold text-warning'>+90</span></p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section>
              <article>
                <p className='fw-semibold fs-5 text-primary pb-5 content-profile'>
                  <span className='mb-1'>Motivation</span>
                  <div className='mt-1 d-flex flex-column gap-2'>
                    <article>
                      <text className='fs-6 text-gris fw-normal'>Passion pour la Créativité</text>
                      <div class="progress">
                        <div class="progress-value1"></div>
                      </div>
                    </article>

                    <article><text className='fs-6 text-gris fw-normal'>Apprentissage Permanent</text>
                      <div class="progress">
                        <div class="progress-value2"></div>
                      </div>
                    </article>

                    <article>
                      <text className='fs-6 text-gris fw-normal'>Satisfaction de la Réalisation</text>
                      <div class="progress">
                        <div class="progress-value3"></div>
                      </div>
                    </article>

                    <article>
                      <text className='fs-6 text-gris fw-normal'>Défis qui m'animent</text>
                      <div class="progress">
                        <div class="progress-value4"></div>
                      </div>
                    </article>
                  </div>
                </p>
                <div className='footer-profile'>
                  <p className='fw-semibold fs-5 mt-3 text-primary'>Passion</p>
                  <article className='d-flex flex-row gap-2 p-1'>
                    <span className='d-flex flex-row gap-3'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Boxe</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>MMA</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>Carricature</span></span>
                    <span></span>
                    <span className='d-flex flex-row gap-1'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Guitare</span></span>
                  </article>
                </div>
                <article>
                  <p className='fw-semibold d-flex flex-row mt-3 gap-4 fs-5 text-primary content-profile'>
                    <span className='mb-2 ms-1'>Suivez-moi</span>
                    <span className='d-flex flex-row gap-4'>
                      <i className="bi-facebook hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-linkedin hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-whatsapp hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-behance hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                    </span>
                  </p>
                </article>
              </article>
            </section>
          </header>
        </main>

        {/* PROFILE MOBILE */}
        <main className='Profile-mobile'>
        <header className='d-flex flex-column gap-2 rounded-1 pt-2'>
            <section>
              <article>
                <picture className='img-mobile shadow-sm p-3 d-flex flex-row justify-content-around pt-4 pb-5'>
                  <img src={image} alt="tojo" className='outlin mt-2 shadow-sm p-2 rounded-3 mt-3 rounded-circle' width={600} height={180}/>
                  <article className='mt-4 ms-4 article-profile'>
                    <p className='fw-bold text-primary fs-5'>Tojo RASAMIMANANA</p>
                    <p className='fw-semibold fs-6'>Développeur front-end</p>
                    <p className='bi-heart-fill w-75 p-2 rounded-1 ps-4 ms-2  mt-2 style-dark'>&nbsp;&nbsp;Celibataire</p>
                    <p className='bi-geo-fill w-75 p-2 rounded-1 ps-4 ms-2 style-dark'>&nbsp;&nbsp;De Antananarivo</p>
                  </article>
                </picture>
                <NavLink to="/cv" style={{ textDecoration: 'none' }}><p className='mt-3 ms-5 text-center border-cv fw-semibold text-primary pt-1 pb-1 rounded-1 w-75 fs-6'><i className='bi-cloud-arrow-down fs-5' id='i-link'>&nbsp;</i>Curriculum vitae</p>  </NavLink>
              </article>
            </section>
            <section className='Profile-content ps-4 d-flex flex-column gap-1'>
              <article className=''>
                <p className='fw-semibold fs-5 text-primary content-profile'>Description<br /><p className='fs-6 text-gris fw-normal p-2 rounded-1'>je suis un Developpeur web autodidacte passionné par la création de sites web modernes et esthétiquement plaisants.<br />Mon parcours en tant qu' autodidacte témoigne de ma détermination à constamment améliorer mes compétences et à rester à la pointe des dernières technologies et tendances</p></p>
                <div className='footer-profile'>
                  <p className='fw-semibold fs-5 mt-4 text-primary'>Personnalité</p>
                  <div class="flex-wrapper">
                    <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="80, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-vector-pen" id='creative' viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                      </svg>
                      <p className='ms-4'>Créatif <span className='fw-bold text-primary'>+80</span></p>
                    </div>

                    <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="80, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-heart-fill" id='loyal' viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>
                      <p className='ms-4'>Fidèle  <span className='fw-bold text-info'>+70</span></p>
                    </div>

                    <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart warning">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="90, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-trophy-fill" id='competiteur' viewBox="0 0 16 16">
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                      </svg>
                      <p className='ms-0'>Compétiteur <span className='fw-bold text-warning'>+90</span></p>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className='ps-4'>
              <article>
                <p className='fw-semibold fs-5 text-primary pb-5 content-profile'>
                  <span className='mb-1'>Motivation</span>
                  <div className='mt-1 d-flex flex-column gap-2'>
                    <article>
                      <text className='fs-6 text-gris fw-normal'>Passion pour la Créativité</text>
                      <div class="progress">
                        <div class="progress-value1"></div>
                      </div>
                    </article>

                    <article><text className='fs-6 text-gris fw-normal'>Apprentissage Permanent</text>
                      <div class="progress">
                        <div class="progress-value2"></div>
                      </div>
                    </article>

                    <article>
                      <text className='fs-6 text-gris fw-normal'>Satisfaction de la Réalisation</text>
                      <div class="progress">
                        <div class="progress-value3"></div>
                      </div>
                    </article>

                    <article>
                      <text className='fs-6 text-gris fw-normal'>Défis qui m'animent</text>
                      <div class="progress">
                        <div class="progress-value4"></div>
                      </div>
                    </article>
                  </div>
                </p>
                <div className='footer-profile'>
                  <p className='fw-semibold fs-5 mt-3 text-primary'>Passion</p>
                  <article className='d-flex flex-row gap-2 p-1'>
                    <span className='d-flex flex-row gap-3'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Boxe</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>MMA</span><span className='outlines ps-3 p-1 rounded-4 pe-3'>Carricature</span></span>
                    <span></span>
                    <span className='d-flex flex-row gap-1'><span className='outlines ps-3 p-1 rounded-4 pe-3'>Guitare</span></span>
                  </article>
                </div>
                <article>
                  <p className='fw-semibold d-flex flex-row mt-3 gap-4 fs-5 text-primary content-profile'>
                    <span className='mb-2 ms-1'>Suivez-moi</span>
                    <span className='d-flex flex-row gap-4'>
                      <i className="bi-facebook hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-linkedin hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-whatsapp hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                      <i className="bi-behance hover-follow h-75 ps-1 pe-1 rounded-1"></i>
                    </span>
                  </p>
                </article>
              </article>
            </section>
          </header>
        </main>
      </div>
    )
  }
}

export default Body_Profile
