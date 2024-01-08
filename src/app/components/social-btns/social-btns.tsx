import { GithubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className='social'>
        <a href="https://www.linkedin.com/in/brunorfl/" target="_blank" rel="noopener noreferrer">
           <LinkedinIcon />
        </a>

        <a href="https://github.com/BrLopes3/" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>

    </div>
  )
}