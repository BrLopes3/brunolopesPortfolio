import React from 'react'
import { SectionTitle } from '../sectionTitle/section-title'
import './experience.scss'
import Image from 'next/image'


export function Experience() {
    return (
        <div className="experience" id="exp">
            <SectionTitle text='Experience' />
            <p>Software Developer and Electrical Engineer with experience in electrical projects and technical documentation, with robust skill set for problem-solving and project management.</p>

            <SectionTitle text='Programming Skills' />
            <div className="experience-time">

                <div className='experience-language' data-language="C#">
                    <Image src="/c-sharpIcon.png" alt="C#" width={50} height={50} priority />
                    
                </div>
                <div className='experience-language' data-language="JavaScript">
                    <Image src="/jsIcon.png" alt="JavaScript" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="React">
                    <Image src="/reactIcon.png" alt="React" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="Php">
                    <Image src="/phpIcon.png" alt="Php" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="Python">
                    <Image src="/pythonIcon.png" alt="Python" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="Swift">
                    <Image src="/swiftIcon.png" alt="Swift" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="Android">
                    <Image src="/androidIcon.png" alt="Android" width={50} height={50} priority />
                   
                </div>
                <div className='experience-language' data-language="Java">
                    <Image src="/javaIcon.png" alt="Java" width={50} height={50} priority />

                </div>
                <div className='experience-language' data-language="Matlab">
                    <Image src="/matlabicon.png" alt="Matlab" width={50} height={50} priority />

                </div>
                
            </div>
        </div>
    )
}