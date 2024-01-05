import { Header } from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
     <Header />
      <div className='experience'>
        <h3>Experience</h3>
        <p>Software Developer and Electrical Engineer with experience in electrical projects and technical documentation, searching for a oportunity as junior software developer.</p>

        <div className="experience-time">

        </div>

      </div>

      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇧🇷 Portuguese - Native Speaker</span>
          <span>🇨🇦 English - Fluent</span>
          <span>🇫🇷 French - Intermediate</span>
        </div>
        <h3>Education</h3>
        <div className="education-info">

          <span>🎓</span>
          <span>Computer Programming Analyst - Lasalle College, Montreal - CA</span>
          <span>Electrical Engineering - Federal University of Pernambuco, Brazil</span>

        </div>

      </div>

      <div className="buttons">
        <button>Resume</button>
        <button>Linkedin</button>
        <button>Github</button>
        <button>Contact me</button>

      </div>
     
    </main>
  )
}
