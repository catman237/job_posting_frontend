import { Header } from "semantic-ui-react"
import Menu from "./Menu"

const HeaderSection = () => {
    return (
        <div className="headerHolder">
            <Header className="headerText" as='h1'>Flatiron Job Tracker</Header>
            <Menu/>
        </div>
    )
}

export default HeaderSection
