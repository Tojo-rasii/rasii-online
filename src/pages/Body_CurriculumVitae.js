import React, { useState } from 'react'
import curriculum from '../tools/image/cv.png'

function Body_CurriculumVitae(){
  const [active, setActive] = useState(false);

    const download =()=>{
      const url ='cv.pdf';
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'cv.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    const togg = () => {
      setActive(!active)
    }

    return (
      <div>
        <main className='Cv'>
          <section>
            <picture>
              <img src={curriculum} alt="curriculum" id='curri-photo'/>
            </picture>
          </section>
            <section className='p-4 rounded-1 w-50 Cv-desc'>
               <article>
                <p className='fs-6 w-75 ms-5 mt-3'>Mon Curriculum Vitae est disponible en téléchargement direct pour en savoir plus sur mon parcours.</p>
                </article>
               <article>
                <button className='d-flex flex-row gap-2 rounded-5 text-white pe-3' style={{marginTop: "1em",marginLeft : "12.5em", position: "absolute"}} onClick={togg}><i className='bi-cloud-arrow-down-fill fs-3 ms-2'></i><span className='mt-2'>Telecharger</span><i className='bi-caret-down mt-2 fs-7'></i></button>
                <div className='rounded-2 mt-0 link-mobile' style={{ display: active ? "block" : "none" }}>
                <div className='d-flex flex-row gap-1' onClick={download}>
                <span>
                  <button className='bi-file-pdf-fill fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3'>.PDF</button></span>
                </div>
                <div className='d-flex flex-row gap-1'>
                <span>
                  <button className='bi-file-image text-info fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3 text-info'>.JPEG</button></span>
                </div>
                </div>
                </article>
               <picture>
               </picture>
            </section>
        </main>
        <article className='Cv-download' onClick={togg}>
                  <span className='sp-btn'><i className='bi-download'></i></span>
                  <div className='rounded-2 mt-0 link-mobile' style={{ display: active ? "block" : "none" }}>
                <div className='d-flex flex-row gap-1' onClick={download}>
                <span>
                  <button className='bi-file-pdf-fill fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3'>.PDF</button></span>
                </div>
                <div className='d-flex flex-row gap-1'>
                <span>
                  <button className='bi-file-image text-info fs-3 p-2 ms-3 d-flex flex-row gap-2 rounded-circle shadow-sm mt-2 ms-1 pt-2 pb-2 ps-2 pe-2'></button></span>
                  <span><button className='rounded-5 shadow-sm mt-3 ms-1 pt-1 pb-1 pe-3 ps-3 text-info'>.JPEG</button></span>
                </div>
                </div>
                </article>
      </div>
    )
  }


export default Body_CurriculumVitae
