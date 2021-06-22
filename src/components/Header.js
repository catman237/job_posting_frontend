import { Header } from "semantic-ui-react"

const HeaderSection = () => {
    return (
        <div className="headerHolder">
            <Header className="headerText" as='h2'>Flatiron Job Tracker</Header>
            <Header className="menu" as="h4">menu</Header>
        </div>
    )
}

export default HeaderSection
