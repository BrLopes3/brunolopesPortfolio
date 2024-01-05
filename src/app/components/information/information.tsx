import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Information() {
    return (
        <div className="infos">
        <SectionTitle text='Languages' />
        <div className="languages-info">
          <span>🇧🇷 Portuguese - Native Speaker</span>
          <span>🇨🇦 English - Fluent</span>
          <span>🇫🇷 French - Intermediate</span>
        </div>
        <SectionTitle text='Education' />
        <div className="education-info">

          <span>🎓 Computer Programming Analyst - Lasalle College, Montreal - CA</span>
          <span>🎓 Electrical Engineering - Federal University of Pernambuco, Brazil</span>

        </div>

      </div>
    )
}