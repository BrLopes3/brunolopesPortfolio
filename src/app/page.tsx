import { Experience } from './components/experience/experience'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { EmailIcon } from './components/icons/email-icon'
import { Information } from './components/information/information'
import { Projects } from './components/projects/projects'
import { SocialBtns } from './components/social-btns/social-btns'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
     <Header />
     <div className="buttons" id="contact">
        <SocialBtns />
        <a className='btn-primary' href='mailto:br.lopes22@gmail.com'>
          Contact me
          <EmailIcon />
        </a>
      </div>

     <Experience />
     <Projects />
     <Information />
     <Footer />
    </main>
  )
}
