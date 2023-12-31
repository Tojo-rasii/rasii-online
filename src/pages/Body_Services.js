import React, { Component } from 'react'
import service from '../tools/image/service.png'

export class Body_Services extends Component {
  render() {
    return (
      <div className='Head-Services'>
        <div className='d-flex flex-row justify-content-between'>
        <main id='mobile-services'>
          <picture>
            <p id='para-strock'>SERVICES</p>
            <img src={service} alt="service" className='img-service' style={{width: "17em", height: "auto"}}/>
            
          </picture>
          <div class="dialog-1">
				<div class="left-point"></div>
        <p className='m-2 ms-4'>Ma priorité absolue est d'offrir des solutions innovantes pour répondre à vos besoins spécifiques.</p>
			</div>
        </main>
        <p className='services-title'>Mes Services</p>
        <main className='Services'>
            <section>
                <article>
                <picture><svg xmlns="http://www.w3.org/2000/svg" width='75' height='75' fill="#0d6efd" className="bi bi-code rounded-circle p-3 picture" viewBox="0 0 16 16">
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg></picture>
                </article>
                <article>
                <p className='h5 mt-4'>Developpement front-end</p>
                <p className='d-none'>Le développement front-end, également connu sous le nom de développement côté client, consiste à créer l'interface utilisateur d'une application ou d'un site web. Cela englobe la conception, la mise en page et la programmation des éléments visibles que les utilisateurs voient et avec lesquels ils interagissent, offrant ainsi une expérience utilisateur optimale et conviviale.</p>
              
                </article>
            </section>
            <section>
                <article>
                <picture><svg xmlns="http://www.w3.org/2000/svg" width='75' height='75' fill="#ff0000" className="bi bi-vector-pen rounded-circle p-3 picture1" viewBox="0 0 16 16">
            <path d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
            <path d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
          </svg></picture>
                </article>
                <article>
                <p className='h5 mt-4'>Logo design</p>
                <p className='d-none'>Le logo design est le processus créatif de conception et de création d'un symbole graphique unique qui représente une entreprise, une marque ou une organisation. Il vise à transmettre l'identité, les valeurs et les objectifs de l'entité, tout en étant mémorable et reconnaissable pour le public cible.</p>
              
                </article>
            </section>
            <section>
                <article>
                <picture><svg xmlns="http://www.w3.org/2000/svg" width='75' height='75' fill="#0dcaf0" className="bi bi-magic rounded-circle p-3 picture2" viewBox="0 0 16 16">
            <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
          </svg></picture>
                </article>
                <article>
                <p className='h5 mt-4'>Conception design UI/UX</p>
                <p className='d-none'>La conception UI (User Interface) se concentre sur l'apparence visuelle et l'interaction des éléments d'une interface, tandis que la conception UX (User Experience) vise à créer une expérience globale positive pour les utilisateurs en prenant en compte leur satisfaction, leur facilité d'utilisation et leur efficacité lors de l'interaction avec un produit ou une application.</p>
              
                </article>
            </section>
            <section>
                <article>
                <picture><svg xmlns="http://www.w3.org/2000/svg" width='75' height='75' fill="#ffc107" className="bi bi-phone rounded-circle p-3 picture3" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg></picture>
                </article>
                <article>
                <p className='h5 mt-4'>Responsive mobile</p>
                <p className='d-none'>Le responsive mobile est une approche de conception de sites web qui permet à une page web de s'adapter de manière fluide et optimale à différents types d'appareils mobiles, offrant ainsi une expérience utilisateur exceptionnelle sur smartphones et tablettes.</p>
              
                </article>
            </section>
        </main>
        </div>
      </div>
    )
  }
}

export default Body_Services
