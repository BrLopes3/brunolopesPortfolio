import Image from 'next/image'
import './header.scss'

export function Header() {
    return(
        <div className='header'>
            <div>
            <h1>Bonjour/Hi, I'm Bruno Lopes 👋</h1>
            <h2>Software Developer</h2>
            </div>
            
            <Image
                src="/photoBruno3.jpeg"
                alt="BrunoPhoto"
                width={300}
                height={400}
                priority
            />
        </div>



    )

}