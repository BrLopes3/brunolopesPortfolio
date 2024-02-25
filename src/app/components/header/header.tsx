import Image from 'next/image'
import './header.scss'

export function Header() {
    return(
        <div className='header'>

            <div id='presentation'>
            <h1>Hi, I am Bruno Lopes 👋</h1>
            <h2>Software Developer</h2>
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