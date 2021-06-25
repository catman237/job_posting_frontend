import { useState, useEffect } from 'react'
import './App.css';
import HeaderSection from './components/Header';
import Form from './components/jobForm'
import Footer from './components/Footer'
import JobContainer from './components/JobContainer'
import FormTitle from './components/FormTitle';
import 'semantic-ui-css/semantic.min.css'

const App = () => {

  const jobsUrl = 'http://localhost:3000/jobs/'

  const [jobs, setJobs] = useState([])
  const [stale, setStale] = useState(true)

  const formattedDate = (date) => date.split("-").reverse().join("-")


  useEffect(() => {
    fetch(jobsUrl)
      .then(resp => resp.json())
      .then(data => {
        const formattedDateJobs = data.map(job => {
          return {
            ...job,
            date: formattedDate(job.date)
          }
        })
        setJobs(formattedDateJobs)
        setStale(false)
      })
  }, [stale])


  const removeJob = (currentJob) => {
    const updatedJob = jobs.filter(job => job.id !== currentJob.id)
    setJobs(updatedJob)

    const options = {
      "method": "DELETE",
      "headers": {
        "accept": "application/json",
        "content-type": "application/json"
      }
    }

    const deletedJob = jobsUrl + currentJob.id

    fetch(deletedJob, options)
  }



  return (
    <div className="mainDiv">
      <HeaderSection />
      <FormTitle />
      <Form onSubmit={() => setStale(true)} />
      <JobContainer jobs={jobs} removeJob={removeJob} />
      <Footer />
    </div>
  )

}
export default App