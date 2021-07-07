import React from 'react'
import { useState, useEffect } from 'react'
import { Input, Select } from "semantic-ui-react"

const Form = (props) => {

    const [name, setName] = useState('')

    const [cohort, setCohort] = useState('')

    const [date, setDate] = useState('')

    const [interviews, setInterviews] = useState('')

    const [applications, setApplications] = useState('')

    const [state, setState] = useState('')

    const [salary, setSalary] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const options = {
            "method": "POST",
            "headers": {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                date: date,
                cohort: cohort,
                number_of_applications: applications,
                number_of_interviews: interviews,
                state: state,
                salary: salary
            }),
        }

        fetch('http://localhost:3000/jobs', options)
            .then(resp => resp.json())
            .then(props.onSubmit)
    }


    const salaryOptions = [
        { key: "50,000", value: "50'000", text: "50000", icon: "dollar"  },
        { key: "60,000", value: "60,000", text: "60000", icon: "dollar" },
        { key: "70,000", value: "70,000", text: "70000", icon: "dollar" },
        { key: "80,000", value: "80,000", text: "80000", icon: "dollar" },
        { key: "90,000", value: "90,000", text: "90000", icon: "dollar" },
        { key: "100,000", value: "100,000", text: "100000", icon: "dollar" },
    ]

    const stateOptions = [
        { key: "AL", value: "AL", text: "AL", icon: "map marker alternate" },
        { key: "AK", value: "AK", text: "AK", icon: "map marker alternate" },
        { key: "AZ", value: "AZ", text: "AZ", icon: "map marker alternate" },
        { key: "AR", value: "AR", text: "AR", icon: "map marker alternate" },
        { key: "CA", value: "CA", text: "CA", icon: "map marker alternate" },
        { key: "CO", value: "CO", text: "CO", icon: "map marker alternate" },
        { key: "CT", value: "CT", text: "CT", icon: "map marker alternate" },
        { key: "DE", value: "DE", text: "DE", icon: "map marker alternate" },
        { key: "DC", value: "DC", text: "DC", icon: "map marker alternate" },
        { key: "FL", value: "FL", text: "FL", icon: "map marker alternate"},
        { key: "GA", value: "GA", text: "GA", icon: "map marker alternate" },
        { key: "HI", value: "HI", text: "HI", icon: "map marker alternate" },
        { key: "ID", value: "ID", text: "ID", icon: "map marker alternate" },
        { key: "IL", value: "IL", text: "IL", icon: "map marker alternate" },
        { key: "IN", value: "IN", text: "IN", icon: "map marker alternate" },
        { key: "IA", value: "IA", text: "IA", icon: "map marker alternate" },
        { key: "KS", value: "KS", text: "KS", icon: "map marker alternate" },
        { key: "KY", value: "KY", text: "KY", icon: "map marker alternate" },
        { key: "LA", value: "LA", text: "LA", icon: "map marker alternate" },
        { key: "ME", value: "ME", text: "ME", icon: "map marker alternate" },
        { key: "MD", value: "MD", text: "MD", icon: "map marker alternate" },
        { key: "MA", value: "MA", text: "MA", icon: "map marker alternate" },
        { key: "MI", value: "MI", text: "MI", icon: "map marker alternate" },
        { key: "MN", value: "MN", text: "MN", icon: "map marker alternate" },
        { key: "MS", value: "MS", text: "MS", icon: "map marker alternate" },
        { key: "MO", value: "MO", text: "MO", icon: "map marker alternate" },
        { key: "MT", value: "MT", text: "MT", icon: "map marker alternate" },
        { key: "NE", value: "NE", text: "NE", icon: "map marker alternate" },
        { key: "NV", value: "NV", text: "NV", icon: "map marker alternate" },
        { key: "NH", value: "NH", text: "NH", icon: "map marker alternate" },
        { key: "NJ", value: "NJ", text: "NJ", icon: "map marker alternate" },
        { key: "NM", value: "NM", text: "NM", icon: "map marker alternate" },
        { key: "NY", value: "NY", text: "NY", icon: "map marker alternate" },
        { key: "NC", value: "NC", text: "NC", icon: "map marker alternate" },
        { key: "ND", value: "ND", text: "ND", icon: "map marker alternate" },
        { key: "OH", value: "OH", text: "OH", icon: "map marker alternate" },
        { key: "OK", value: "OK", text: "OK", icon: "map marker alternate" },
        { key: "OR", value: "OR", text: "OR", icon: "map marker alternate" },
        { key: "PA", value: "PA", text: "PA", icon: "map marker alternate" },
        { key: "RI", value: "RI", text: "RI", icon: "map marker alternate" },
        { key: "SC", value: "SC", text: "SC", icon: "map marker alternate" },
        { key: "TN", value: "TN", text: "TN", icon: "map marker alternate" },
        { key: "TX", value: "TX", text: "TX", icon: "map marker alternate" },
        { key: "UT", value: "UT", text: "UT", icon: "map marker alternate" },
        { key: "VT", value: "VT", text: "VT", icon: "map marker alternate" },
        { key: "VA", value: "VA", text: "VA", icon: "map marker alternate"},
        { key: "WA", value: "WA", text: "WA", icon: "map marker alternate" },
        { key: "WV", value: "WV", text: "WV" , icon: "map marker alternate"},
        { key: "WI", value: "WI", text: "WI", icon: "map marker alternate" },
        { key: "WY", value: "WY", text: "WY", icon: "map marker alternate" }
    ]

    const cohortOptions = [
        {key: "404", value: "404", text: "404", icon: "group"}
    ]

    return (
        <div className="formContainer" >

            <form className="form" onSubmit={handleSubmit}>

                <div class="ui input"
                    className="inputContainer">
                    <Input type="text"
                        placeholder="Your name"
                        className="selectButton"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="ui input" className="inputContainer">
                  <Select 
                  options={cohortOptions} 
                  placeholder="Cohort"
                  onChange={(e) => setCohort(e.target.outerText)} />
                </div>

                <div class="ui input" className="inputContainer">
                    <Input
                        type="date"
                        placeholder="Date"
                        className="selectButton"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="inputContainer">
                    <Input
                        type="number"
                        className="selectButton"
                        placeholder="# of applications"
                        value={applications}
                        onChange={(e) => setApplications(e.target.value)}
                    />
                </div>

                <div className="inputContainer">
                    <Input
                        type="number"
                        className="selectButton"
                        placeholder="# of interviews"
                        value={interviews}
                        onChange={(e) => setInterviews(e.target.value)}
                    />
                </div>

                <div className="inputContainer">
                    <Select 
                    placeholder={"State"} 
                    options={stateOptions} 
                    className="selectButton"
                    onChange={(e) => setState(e.target.outerText)}/>
                </div>

                <div className="inputContainer">
                    <Select 
                    placeholder="Salary" 
                    options={salaryOptions} 
                    onChange={(e) => setSalary(parseInt(e.target.outerText))}/>
                </div>

                <div className="selectButton">
                    <button
                        class="ui button"
                        type="submit"
                    >Submit</button>

                </div>
            </form>

        </div >
    )
}

export default Form
