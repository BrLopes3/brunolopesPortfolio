import React from 'react'
import { CSharpIcon } from '../icons/cSharp-icon'
import { JavaScriptIcon } from '../icons/javaScript-icon'
import { SectionTitle } from '../sectionTitle/section-title'
import './experience.scss'
import { ReactIcon } from '../icons/react-icon'
import { PhpIcon } from '../icons/php-icon'
import { PythonIcon } from '../icons/python-icon'
import { SwiftIcon } from '../icons/swift-icon'
import { JavaIcon } from '../icons/java-icon'

export function Experience() {
    return (
        <div className='experience'>
            <SectionTitle text='Experience' />
            <p>Software Developer and Electrical Engineer with experience in electrical projects and technical documentation, searching for a oportunity as junior software developer.</p>

            <div className="experience-time">
                <div>
                    <CSharpIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <JavaScriptIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <ReactIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <PhpIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <PythonIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <SwiftIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                <div>
                    <JavaIcon />
                    <div className="experience-unit">
                        <div className="experience-measure"></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}