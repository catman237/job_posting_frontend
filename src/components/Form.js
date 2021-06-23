import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [myForm, setForm] = useState([])

    return (
        <div className="formContainer" >

            <form className="form" action="">

                <div class="ui input" className="inputContainer">
                    <input type="text" placeholder="Your name" className="inputFeild" />
                </div>

                <div class="ui input" className="inputContainer">
                    <input type="text" placeholder="Cohort" className="inputFeild"/>
                </div>

                <div class="ui input" className="inputContainer">
                    <input type="text" placeholder="Date" className="inputFeild"/>
                </div>

                <div className="inputContainer">
                    <select className="selectButton" name="numberOfInterviews" id="numberOfInterviews">
                        <option value="0"># of application</option>
                        <option value="50,000">50,000</option>
                        <option value="60,000">60,000</option>
                        <option value="70,000">70,000</option>
                        <option value="80,000">80,000</option>
                        <option value="90,000">90,000</option>
                        <option value="100,000">100,000</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <select className="selectButton" name="numberOfApplications" id="numberOfApplications">
                        <option value="0"># of application</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>

                <div className="inputContainer">
                    <select class="ui search dropdown" className="selectButton">
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
                    <select name="salary" id="salary" className="selectButton">
                        <option value="0">Salary</option>
                        <option value="50,000">50,000</option>
                        <option value="60,000">60,000</option>
                        <option value="70,000">70,000</option>
                        <option value="80,000">80,000</option>
                        <option value="90,000">90,000</option>
                        <option value="100,000">100,000</option>
                    </select>
                </div>

                <br />

                <div className="button">
                    <button class="ui button" onClick={'#'}>Submit</button>
                </div>

            </form>

        </div>
    )
}

export default Form
