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
                    <h3>Project 1</h3>
                    <p>Project description</p>
                </div>
            </div>
        </div>
    )
}