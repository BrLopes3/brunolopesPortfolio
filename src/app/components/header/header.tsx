import Image from 'next/image'
import './header.scss'

export function Header() {
    return(
        <div className='header' id='presentation'>

            <div id="bruno">
                <h1>Hi, I am Bruno Lopes 👋</h1>
                <h2>Software Developer</h2>
                <a href="/BrunoResume_2024.pdf" download>Download my CV here &#x1F4C3;</a>
            </div>
            
            <Image
                src="/photoBrunoFinal.jpeg"
                alt="BrunoPhoto"
                width={300}
                height={300}
                //priority
            />

            
            <nav>
                
                <a href="#exp">Experience</a>
                <a href="#proj">Projects</a>
                <a href="#contact">Contact</a>
            
            </nav>
           
            

        </div>
    )

}