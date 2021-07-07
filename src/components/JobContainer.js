import React from 'react'
import Card from './Card'

const JobContainer = (props) => {
    function renderJobs() {
        return props.jobs.map(job => {
            return <Card job={job} key={job.id} removeJob={props.removeJob} />
        })
    }

    return(
   
        <div className="postedJobs">
            {renderJobs()}
        </div>
    
    )
    
 
}
export default JobContainer

