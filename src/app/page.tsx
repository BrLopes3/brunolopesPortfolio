import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { Information } from './components/information/information'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
     <Header />
     <Experience />
     <Information />

      <div className="buttons">
        <button>Resume</button>
        <button>Linkedin</button>
        <button>Github</button>
        <button className='btn-primary'>Contact me</button>

      </div>
     
    </main>
  )
}
