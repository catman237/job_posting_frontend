import React from 'react'

const JobContainer = (props) => {
    console.log(props)
    return (
        <div className="postedJobs">
            <h1>{props.jobs.name}</h1>
        </div>
    )
}

export default JobContainer

