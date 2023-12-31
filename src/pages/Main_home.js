import React from 'react'
import { useTranslation } from 'react-i18next';

function Main_home(){
  const { t } = useTranslation();
    return (
        <>
      <main className="Main_Accueil shadow-sm rounded-1 p-4">
        <h2>{t("offre")}</h2>
        <section className='services-sections'>
            <article className='mb-4 services-article'>
                <legend>
                <picture className='svg shadow-sm rounded-1'><svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' fill="#0d6efd" className="bi bi-code" viewBox="0 0 16 16">
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
          </svg></picture>
                </legend>
                <p className='services-para h4'>Developpement front-end</p>
                <p className=' text-gris fw-semibold mt-3'>Créer une interface utilisateur réactive est essentielle pour offrir une expérience utilisateur exceptionnelle.</p>
            </article>
            <article className='mb-4 services-article1'>
<legend>
<picture className='svg shadow-sm rounded-1'><svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' fill="#ff0000" className="bi bi-vector-pen" viewBox="0 0 16 16">
            <path d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
            <path d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
          </svg></picture>
</legend>
<p className='services-para1 h5'>Logo design</p>
<p className=' text-gris fw-semibold mt-3'>Un design captivant qui communique votre message en un seul coup d'œil.</p>
            </article>
            <article className='mb-4 services-article2'>
            <legend>
            <picture className='svg shadow-sm rounded-1'><svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' fill="#0dcaf0" className="bi bi-magic" viewBox="0 0 16 16">
            <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
          </svg></picture>
            </legend>
            <p className='services-para2 h4'>Conception design UI/UX</p>
            <p className=' text-gris fw-semibold mt-3'>Créer une expérience utilisateur exceptionnelle mettant en valeur la simplicité, la convivialité et l'esthétique.</p>
            </article>
            <article className='mb-4 services-article3'>
            <legend>
            <picture className='svg shadow-sm rounded-1'><svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' fill="#ffc107" className="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg></picture>
            </legend>
            <p className='services-para3 h4'>Responsive mobile</p>
            <p className=' text-gris fw-semibold mt-3'>Adapter les contenus et les images sur tous les appareils, du smartphone à la tablette.</p>
            </article>
        </section>
      </main>
      </>
    )
  }

export default Main_home
