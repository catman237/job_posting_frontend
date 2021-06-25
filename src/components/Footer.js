import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { List } from "semantic-ui-react"

const Footer = () => {
    return (
        <div className="mainFooterContianer">
            <div className="footerContainer">
                <List>
                    <List.Item icon='user' content='Greg Hughes' />
                    <List.Item icon='marker' content='Golden, CO' />
                    <List.Item
                        icon='send'
                        content={<a href='mailto:GregHughes@gmail.com'>GregHughes610@gmail.com</a>}
                    />
                    <List.Item
                        icon='github'
                        content={<a href="https://github.com/catman237">Full Stack Developer</a>}
                    />
                </List>
            </div>
        </div>
    )
}

export default Footer
