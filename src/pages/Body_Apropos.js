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
              <section className='d-flex flex-row gap-5'>
                <article className='w-50 mt-4 me-3'>
                  <sub className='bi-info-circle fw-semibold text-gris fs-6'>&nbsp;A propos</sub>
                  <hr className='w-25'/>
                  <p className='h1 mt-3 fw-bold text-success'>
                  Passion, créativité et design</p>
                  <p className='text-gris fw-semibold mt-1 ms-1 p-2'>là où la créativité rencontre la technologie. je suis un developpeur passionnée en conception web et en design graphique, dédiée à donner vie à vos visions numériques.</p>
                  <NavLink to="/profile" style={{textDecoration:"none"}}><button className='btn btn-success d-flex flex-row gap-1 fw-semibold pt-1 mt-2'><span className='bi-person-circle fs-5'>&nbsp;<span className="fs-6">Voir mon profile</span></span></button></NavLink>
                </article>
                <article className='d-flex justify-content-center align-items-center'>
                  <picture className='apropos-image bg-none shadow-sm p-1 rounded-1'>
                    <img src={image} alt="333" className='image2' />
                  </picture>
                </article>
              </section>
            </header>
          </div>
          <div className='main-apropos d-flex flex-column p-3'>
            <div className='d-flex flex-row gap-4'>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon7 ps-3 pe-3 text-center position-absolute ms-4'>
                  <i className="bi bi-hand-thumbs-up text-primary fs-1"></i>
                </article>
                <article className='d-flex flex-column align-items-center text-center'>
                  <p className='text-uppercase fw-bold h3 text-primary mt-4 pt-4'>agilite</p>
                  <p className='text-gris w-75 p-1 fw-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, minima.</p>

                </article>
              </section>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon8 ps-3 pe-3 text-center position-absolute ms-4'>
                  <i className="bi bi-lightning text-warning fs-1"></i>
                </article>
                <article className='d-flex flex-column align-items-center text-center'>
                  <p className='text-uppercase fw-bold h3 text-warning mt-4 pt-4'>rapidite</p>
                  <p className='text-gris w-75 p-1 fw-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, minima.</p>

                </article>
              </section>
              <section className='d-flex flex-column p-2 rounded-1 outs'>
                <article className='icon9 ps-3 pe-3 text-center position-absolute ms-4'><i className="bi bi-emoji-sunglasses text-info fs-1"></i></article>
                <article className='d-flex flex-column align-items-center text-center'>
                  <p className='text-uppercase fw-bold h3 text-info mt-4 pt-4'>professionnalisme</p>
                  <p className='text-gris w-75 p-1 fw-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, minima.</p>

                </article>
              </section>
            </div>
          </div>
          <div className='footer-apropos rounded-1 shadow-sm mt-3 pb-5'>
            <section className='pt-3 ps-5'>
              <p className='fw-semibold fs-4 text-center p_right mt-2'>Mes competences</p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z"></path>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>Sass</p>
                </article>
                <article className='d-flex flex-column text-center pt-2 pb-1  langage-bg rounded-1'>
                  <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                      <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                    </svg>
                  </picture>
                  <p className='h6 mt-3 ms-3'>Tailwind css</p>
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
                  <p className='h6 mt-3 ms-3'>VITE JS</p>
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
                  <p className='h6 mt-3 ms-3'>FIGMA</p>
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
