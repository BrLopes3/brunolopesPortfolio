import React from 'react'
import { SectionTitle } from '../sectionTitle/section-title'
import './experience.scss'
import Image from 'next/image'


export function Experience() {
    return (
        <div className='experience'>
            <SectionTitle text='Experience' />
            <p>Software Developer and Electrical Engineer with experience in electrical projects and technical documentation, searching for a oportunity as junior software developer.</p>

            <div className="experience-time">

                <div className='experience-language'>
                    <Image src="/c-sharpIcon.png" alt="Csharp-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/jsIcon.png" alt="JS-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/reactIcon.png" alt="React-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/phpIcon.png" alt="Php-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/pythonIcon.png" alt="Python-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/swiftIcon.png" alt="Swift-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image src="/javaIcon.png" alt="Java-icon" width={50} height={50} priority />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}