import React from 'react'
import Card from './Card'

const JobContainer = (props) => {
    function renderJobs(){
        return props.jobs.map(job => {
            return <Card job={job} delete={() => props.setJobs('')}/>
        })
    }

    return <section className="postedJobs">
        {renderJobs()}
    </section>

}
export default JobContainer

