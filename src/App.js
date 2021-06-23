import { useState, useEffect, Component } from 'react'
import './App.css';
import HeaderSection from './components/Header';
import Form from './components/Form'
import Footer from './components/Footer'
import JobContainer from './components/JobContainer'

const submitCareerForm = () => {
  console.log("submitted Career form")
}


export default class App extends Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/jobs')
      .then(resp => resp.json())
      .then(jobs => {
        this.setState({ jobs })
      })
  }


  render() {
    return (
      <div>
        <HeaderSection />
        <Form />
        <JobContainer jobs={this.state.jobs}/>
        <Footer />
      </div>
    )
  }
}
