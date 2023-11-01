import React, { Component } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

function Skills(){
  const { t } = useTranslation();
    return (
      <div className='skills'>
        <main className='skills-main' id="skills-main">
            <section className='skills-section' id='skills-section1'>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                    <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart orange">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="70, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">70%</text>
                      </svg>
                    </div>
                    <p className='fw-semibold text-center fs-5'>ReactJS</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart red">
                        <path class="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                          stroke-dasharray="88, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">88%</text>
                      </svg>
                    </div>
                    <p className='fw-semibold text-center fs-5'>HTML</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart blue">
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
                        <text x="18" y="20.35" class="percentage">90%</text>
                      </svg>
                    </div>
                    <p className='fw-semibold text-center fs-5'>CSS</p>
                </artice>
                <artice className="p-lg-4 shadow-lg rounded-4 skills-skills">
                <div class="single-chart">
                      <svg viewBox="0 0 36 36" class="circular-chart warning">
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
                        <text x="18" y="20.35" class="percentage">80%</text>
                      </svg>
                    </div>
                    <p className='fw-semibold text-center fs-5'>Javascript</p>
                </artice>
            </section>
            <section className='skills-section m-lg-5'  id='skills-section1'>
                 <article className='skills-article'>
                    <p className='mt-5'>{t("skills")}</p>
                    <hr className='w-25' />
                    <p className='h3 fw-bold'>La beauté du langage <br /><span className='h1 fw-bold mt-1'>L'élégance du design</span></p>
                    <p className='text-gris fw-semibold mt-4 '>Fort de mes compétences et de mon expertise, je suis en mesure de résoudre des défis complexes et de fournir des solutions innovantes pour répondre aux besoins de mes clients</p>
                    <NavLink to="/cv"><button className='btn btn-danger p-lg-2 rounded-1 shadow-sm mt-4'>{t("dashboard")}</button></NavLink>
                 </article>
            </section>
        </main>
      </div>
    )
  }

export default Skills
