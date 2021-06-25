import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const JobCard = (props) => {
    // const handleDate = (props) => {
    //     // let date = e.target.innerText
    //     // let newDate = date.split(": ")[1].split("-").reverse().join("-")
    //     // console.log(props)
    // }
    
    return (
        <div className="card">
            <Card>
                <Card.Content header={props.job.name} />
                <Card.Content description={`Applications ${props.job.number_of_applications}`} />
                <Card.Content description={`Interviews: ${props.job.number_of_interviews}`} />
                <Card.Content description={`Date: ${props.job.date}`} />
                <Card.Content description={`State: ${props.job.state}`} />
                <Card.Content description={`Salary: ${props.job.salary}`} />
                <Button color="red" onClick={() => props.removeJob(props.job)}>Delete</Button>
            </Card>
        </div>
    )
}

export default JobCard
