import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Dropdown } from 'semantic-ui-react'


const jobsUrl = "https://www.cybercoders.com/search/?searchterms=software&searchlocation=colorado&newsearch=true&originalsearch=true&sorttype="
const resumeHelpUrl = "https://www.monster.com/career-advice/article/technology-resume-samples"
const denverDevsUrl = "https://denverdevs.org/"

const options = [
  { key: 1, text: "Jobs", value: jobsUrl, icon: "hand point right outline" },
  { key: 2, text: "Resume Help", value: resumeHelpUrl, icon: "book" },
  { key: 3, text: "Denver Devs", value: denverDevsUrl, icon: "users" }
]

const handleMenuClick = (e, option) => {
  let url = option.value
  if (url === jobsUrl || resumeHelpUrl) {
    window.open(url)
  } else {
    window.location.href = "mailto:GregHughes@gmail.com"
  }
}

const HeaderMenu = () => (
  <div className="headerMenuHolder">
<Menu className="headerMenu">
      <Dropdown
        item
        simple
        text="Menu"
        
        direction="right"
        options={options}
        onChange={handleMenuClick}
      >
      </Dropdown>
    </Menu>
    
  </div>
)

export default HeaderMenu
