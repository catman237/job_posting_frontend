import React from 'react'
import { Card, Button} from 'semantic-ui-react'

const JobCard = (props) => {
    return (
        <div className="card">
            <Card>
                <Card.Content header={props.job.name}/>
                <Card.Content description={`Interviews: ${props.job.number_of_applications}`} />
                <Card.Content description={`Applications: ${props.job.number_of_interviews}`} />
                <Card.Content description={`State: ${props.job.state}`} />
                <Card.Content description={`Salary: ${props.job.salary}`} />
                {/* <Button color="red" delete={() => props.delete()}>Delete</Button> */}
            </Card>
        </div>
    )
}

export default JobCard
