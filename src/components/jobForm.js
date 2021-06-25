import React from 'react'
import { useState, useEffect } from 'react'

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

    return (
        <div className="formContainer" >

            <form className="form" onSubmit={handleSubmit}>

                <div class="ui input"
                    className="inputContainer">
                    <input type="text"
                        placeholder="Your name"
                        className="selectButton"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div class="ui input" className="inputContainer">
                    <select 
                    value={cohort} 
                    className="selectButton" 
                    onChange={(e) => setCohort(e.target.value)}>
                        <option value="Cohort">Cohort</option>
                        <option value="404">404</option>
                        <option value="Hack Street">Hack Street</option>
                    </select>
                </div>

                <div class="ui input" className="inputContainer">
                        <input
                            type="date"
                            placeholder="Date"
                            className="selectButton"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="inputContainer">
               <input
                type="number"
                className="selectButton"
                placeholder="# of applications"
                value={applications}
                onChange={(e) => setApplications(e.target.value)}
                />
                </div>

                <div className="inputContainer">
                    <input 
                    type="number" 
                    className="selectButton" 
                    placeholder="# of interviews" 
                    value={interviews}
                    onChange={(e) => setInterviews(e.target.value)}
                    />
                </div>

                <div className="inputContainer">
                    <select
                        class="ui search dropdown"
                        className="selectButton"
                        value={state}
                        onChange={(e) => setState(e.target.value)}>

                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>

                <div className="inputContainer">
                    <select
                        name="salary"
                        id="salary"
                        className="selectButton"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}>

                        <option value="0">Salary</option>
                        <option value="50000">50,000</option>
                        <option value="60000">60,000</option>
                        <option value="70000">70,000</option>
                        <option value="80000">80,000</option>
                        <option value="90000">90,000</option>
                        <option value="100000">100,000</option>
                    </select>
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
