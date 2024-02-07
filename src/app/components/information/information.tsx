import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Information() {
    return (
        <div className="infos">
        <SectionTitle text='Languages' />
        <div className="languages-info">
          <p>🇧🇷 Portuguese - Native </p>
          <p>🇨🇦 English - Fluent </p>
          <p>🇫🇷 French - Intermediate </p>
        </div>
        <SectionTitle text='Education' />
        <div className="education-info">
          <div>
            <h3>Computer Programming Analyst</h3>
            <p>🎓 Lasalle College, Montreal - CA</p>
          </div>
          <div>
            <h3>Electrical Engineering</h3>
            <p>🎓 Univ. Federal de Pernambuco, Pernambuco - BR</p> 
          </div>
          <div>
            <h3> Google Data Analytics</h3>
            <p>🎓 Coursera, Google Certification</p>
          </div>
        </div>

      </div>
    )
}