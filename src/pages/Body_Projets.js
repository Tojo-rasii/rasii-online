import React from 'react'
import portfolio from '../tools/image/portfolio darkmode.png'
import password from '../tools/image/password.png'
import travel from '../tools/image/travels.png'
import muscu from '../tools/image/muscle.png'
import muscuApp from '../tools/image/musle.png'
import darkCalculatrice from '../tools/image/dark.png'
import snake from '../tools/image/game snake.png'
import cosef from '../tools/image/csf.png'
import calculatrice from '../tools/image/calculatrice.png'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
            links: "https://github.com/Tojo-rasii/cosef-press.git",
            imageUrl: cosef,
            title: 'Cosef Info',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#ReactJS, #Firebase, #Css, #Bootstrap'
        },
        {
            links: "password-validation-tojo.vercel.app",
            imageUrl: muscu,
            title: 'Muscle App',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#NextJs, #Css'
        },
        {
            links: "https://www.figma.com/file/1nijIMZGaP5CvSIPbg4eNF/Muscle-App-Login?type=design&t=dbDy44vdr5nV8DFM-6",
            imageUrl: muscuApp,
            title: 'Muscle App Mobile login UI/UX',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#Figma'
        },
        {
            links: "https://www.figma.com/file/jc6LTDypdRTAeI9yPQfa3V/Calculatrice?type=design&t=dbDy44vdr5nV8DFM-6",
            imageUrl: darkCalculatrice,
            title: 'Calculatrice dark mode UI/UX',
            desc: 'Mon portfolio est une expérience interactive et réactive, offrant une conception responsive pour une navigation fluide sur tous les appareils. Arborant un élégant mode sombre, il garantit une expérience visuelle immersive. De plus, la fonction de traduction intégrée permet aux visiteurs de découvrir mes pages et articles de projet en français ou en anglais, offrant ainsi une accessibilité globale et une expérience personnalisée.',
            tags: '#Figma'
        },
        {
            links: "snake-game",
            imageUrl: snake,
            title: 'Snake game',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#HTML, #CSS, #Javascript'
        },
        {
            links: "https://travelcalculator.vercel.app/",
            imageUrl: travel,
            title: 'Travel Calculator',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#HTML, #CSS, #Javascript'
        },
        {
            links: "https://password-validation-tojo.vercel.app/",
            imageUrl: password,
            title: 'Password Validation',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores reiciendis facilis ea omnis, aspernatur iure laboriosam porro esse veniam!',
            tags: '#HTML, #CSS, #Javascript'
        },
        {
            links: "https://github.com/Tojo-rasii/calculatrice",
            imageUrl: calculatrice,
            title: 'Calculatrice',
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

    const { t } = useTranslation();

    return (
        <div className='Projets'>
            <main>
                <div className='p-4 pe-5 ps-5 rounded-1 d-flex flex-column gap-1'>
                    <section className="d-flex flex-row justify-content-between align-items-center ps-3 pe-3 mt-2">
                        <div id='text-project'>
                            <p className='text-primary fs-3 fw-bold ms-5' >{t("Project-title")}</p>
                        </div>
                        {/* Pagination */}
                        <div className='pagination pb-2 me-5'>
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
                    </section>
                    <section className='projetSection' style={{ marginTop: "-0.7em" }}>
                        {projectsToShow.map((project, index) => (
                            <a href={project.links} target="_blank" rel="noopener noreferrer" id='a_Project'><article
                                key={index}
                                className='p-1 rounded-2 shadow-sm ms-2 projetArticle'
                                style={{ border: "1px solid rgba(0, 0, 0, 0.075)" }}
                            >
                                {/* img */}
                                <picture>
                                    <p className="text-center mt-2" id="links">{project.links}</p>
                                    <img src={project.imageUrl} alt="portfolio" style={{ width: "22.3em", height: "15em", objectFit: "cover" }} />
                                </picture>
                                {/* desc */}
                                <picture>
                                    <p className='fw-bold fs-5 pt-2'>{project.title}</p>
                                    <p className='para-desc'>{project.desc}</p>
                                    <p className='fw-semibold'>{project.tags}</p>
                                </picture>
                            </article></a>
                        ))}
                    </section>
                    <span className='d-flex flex-row justify-content-center me-1' style={{ marginTop: "-0.8em" }}>
                        {Array.from({ length: totalPages }, (_, i) => (

                            <i className='bi-dot fs-2'
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                            ></i>

                        ))}
                    </span>

                </div>
            </main >
        </div >
    )
}

export default Body_Projets