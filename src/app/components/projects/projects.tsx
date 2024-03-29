import React from 'react'
import { SectionTitle } from '../sectionTitle/section-title'
import './projects.scss'
import Image from 'next/image'
import exp from 'constants'


export function Projects() {
    return (
        <div className="projects" id="proj">
            <SectionTitle text='Projects' />
            <div className="projects-container">
                <div className="projects-examples">
                    <div className="project">
                        <h3>ConjugAction</h3>
                        <a href="https://github.com/BrLopes3/SwiftProject_ConjugationApp.git"><Image src="/conjApp.png" alt="ConjugAction" width={200} height={200} priority /><figcaption>IOS application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>INT Website - Techweek</h3>
                        <a href="http://intlasalle.com/"><Image src="/INTLogo.png" alt="Intwebsite" width={200} height={200} priority /><figcaption>Nuxt application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>Windows Multiform</h3>
                        <a href="https://github.com/BrLopes3/MultiFormApplication.git"><Image src="/multiformLogo.png" alt="Multiform" width={200} height={200} priority /><figcaption>C# application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>Edit Photos</h3>
                        <a href="https://github.com/BrLopes3/EditPhotos.git"><Image src="/editPhotoLogo.png" alt="Edit_Photos" width={200} height={200} priority /><figcaption>Python application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>BMI Calculator</h3>
                        <a href="https://github.com/BrLopes3/BMICalculator.git"><Image src="/bmilogo.png" alt="BMICalculator" width={200} height={200} priority /><figcaption>IOS application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>Student Management</h3>
                        <a href="https://github.com/BrLopes3/Students_Enrollments.git"><Image src="/studentmanagement.png" alt="Student_Enrollment" width={200} height={200} priority /><figcaption>C# ASP.NET application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>PEM</h3>
                        <a href="https://github.com/BrLopes3/pem-app.git"><Image src="/pemlogo.png" alt="PEM_Website" width={200} height={200} priority /><figcaption>React application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>Fortis Bank</h3>
                        <a href="https://github.com/BrLopes3/java_bank_system.git"><Image src="/fortisbank.jpg" alt="FortisBank_app" width={200} height={200} priority /><figcaption>Java application</figcaption></a>
                    </div>
                    <div className="project">
                        <h3>Battery Model</h3>
                        <a href="https://github.com/BrLopes3/Battery_Model.git"><Image src="/baterymodel.png" alt="Battery_Model" width={200} height={200} priority /><figcaption>Matlab Simulink application</figcaption></a>
                    </div>

                </div>
            </div>
        </div>
    )
}