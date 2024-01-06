import React from 'react'
import portfolio from '../tools/image/portfolio darkmode.png'
import password from '../tools/image/password.png'
import travel from '../tools/image/travel.png'
import { useState } from 'react';

function Body_Projets() {
    const itemsPerPage = 3; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const projects = [
        { 
            links: "tojo-rasii.github.io/rasii-online",
            imageUrl: portfolio,
            title: 'Mon portfolio',
            desc: 'Mon portfolio est une expérience interactive et réactive, offrant une conception responsive pour une navigation fluide sur tous les appareils. Arborant un élégant mode sombre, il garantit une expérience visuelle immersive. De plus, la fonction de traduction intégrée permet aux visiteurs de découvrir mes pages et articles de projet en français ou en anglais, offrant ainsi une accessibilité globale et une expérience personnalisée.',
            tags: '#Reactjs, #Bootstrap, #CSS' 
        },
        { 
            links: "password-validation-tojo.vercel.app",
            imageUrl: password,
            title: 'Password Validation',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#HTML, #CSS, #Javascript' 
        }
        
    ];

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the projects to display on the current page
    const projectsToShow = projects.slice(startIndex, endIndex);

    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div style={{ paddingTop: "5.1em" }} className='ps-2 pe-2 Projets'>
            <main>
                <div className='p-4 pe-5 ps-5 pb-4 rounded-1 d-flex flex-column align-items-center'>
                    <section>
                        <p className='text-primary fs-3 fw-bold'>Mes Projets</p>
                    </section>
                    <section className='d-flex flex-row justify-content-between gap-4'>
                        {projectsToShow.map((project, index) => (
                            <article
                                key={index}
                                className='p-1 rounded-2 shadow-sm ms-2 projetArticle'
                                style={{ border: "1px solid rgba(0, 0, 0, 0.075)" }}
                            >
                                {/* img */}
                                <picture>
                                    <p className="text-center mt-2">{project.links}</p>
                                    <img src={project.imageUrl} alt="portfolio" style={{ width: "22.3em", height: "15em", objectFit: "cover" }} />
                                </picture>
                                {/* desc */}
                                <picture>
                                    <p className='fw-bold fs-5 pt-2'>{project.title}</p>
                                    <p className='para-desc'>{project.desc}</p>
                                    <p className='fw-semibold'>{project.tags}</p>
                                </picture>
                            </article>
                        ))}
                    </section>
                    <span className='d-flex flex-row me-1 mt-2'>
                        {Array.from({ length: totalPages }, (_, i) => (

                            <i className='bi-dot fs-3'
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                            ></i>

                        ))}
                    </span>
                    {/* Pagination */}
                    <div className='pagination pb-2'>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                            <i className='bi-chevron-left'></i>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={currentPage === i + 1 ? 'active-page' : ''}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= projects.length}>
                            <i className='bi-chevron-right'></i>
                        </button>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Body_Projets