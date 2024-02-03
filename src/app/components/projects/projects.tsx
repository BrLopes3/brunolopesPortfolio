import React from 'react'
import { SectionTitle } from '../sectionTitle/section-title'
import './projects.scss'
import Image from 'next/image'
import exp from 'constants'


export function Projects() {
    return (
        <div className="projects">
            <SectionTitle text='Projects' />
            <div className="projects-container">
                <div className="project">
                    <h3>ConjugAction</h3>
                    <p>IOS application is designed to assist users in conjugating French verbs effortlessly</p>
                    <a href="https://github.com/BrLopes3/SwiftProject_ConjugationApp.git"><Image src="/conjApp.png" alt="ConjugAction" width={200} height={200} priority /></a>
                </div>
            </div>
        </div>
    )
}