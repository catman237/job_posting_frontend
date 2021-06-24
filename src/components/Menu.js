import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Dropdown } from 'semantic-ui-react'


const options = [
  { key: 1, text: "Jobs", value: "https://www.cybercoders.com/search/?searchterms=software&searchlocation=colorado&newsearch=true&originalsearch=true&sorttype=" },
  { key: 2, text: "Resume Help", value: "https://www.monster.com/career-advice/article/technology-resume-samples" },
  { key: 3, text: "Contact Me", value: "https://www.google.com/"}
]

const handleMenuClick = (e, option) => {
  let url = option.value
  window.open(url)
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
